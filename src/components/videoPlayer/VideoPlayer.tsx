"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
    src?: string;
    poster?: string;
    className?: string;
    previewImage?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster,
    className,
    previewImage: externalPreviewImage
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);


    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [hasStartedOnce, setHasStartedOnce] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [buffered, setBuffered] = useState(0);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [showPreview, setShowPreview] = useState(true);

    const parseTimeInput = (timeStr: string): number => {
        const parts = timeStr.split(':');
        if (parts.length === 2) {
            const minutes = parseInt(parts[0]) || 0;
            const seconds = parseInt(parts[1]) || 0;
            return minutes * 60 + seconds;
        } else if (parts.length === 1) {
            return parseInt(parts[0]) || 0;
        }
        return 0;
    };



    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                if (!hasStartedOnce) {
                    videoRef.current.currentTime = 0;
                    setShowPreview(false);
                    setHasStartedOnce(true);
                }
                videoRef.current.play();
                videoRef.current.style.opacity = '1';
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying, hasStartedOnce]);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    }, []);

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }, [isMuted]);

    const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (progressRef.current && videoRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const newTime = (clickX / width) * duration;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, [duration]);

    const handleVolumeClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (volumeRef.current) {
            const rect = volumeRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const newVolume = Math.max(0, Math.min(1, clickX / width));
            setVolume(newVolume);
            if (videoRef.current) {
                videoRef.current.volume = newVolume;
            }
            if (newVolume === 0) {
                setIsMuted(true);
            } else {
                setIsMuted(false);
            }
        }
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            videoRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    if (videoRef.current) {
                        videoRef.current.currentTime = Math.max(0, currentTime - 10);
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (videoRef.current) {
                        videoRef.current.currentTime = Math.min(duration, currentTime + 10);
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const newVolumeUp = Math.min(1, volume + 0.1);
                    setVolume(newVolumeUp);
                    if (videoRef.current) {
                        videoRef.current.volume = newVolumeUp;
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    const newVolumeDown = Math.max(0, volume - 0.1);
                    setVolume(newVolumeDown);
                    if (videoRef.current) {
                        videoRef.current.volume = newVolumeDown;
                    }
                    break;
                case 'm':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'f':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [togglePlay, currentTime, duration, volume, toggleMute, toggleFullscreen]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };
        const handleProgress = () => {
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                setBuffered(bufferedEnd);
            }
        };
        const handleEnded = () => {
            setIsPlaying(false);
            setShowPreview(true);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('progress', handleProgress);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('progress', handleProgress);
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    useEffect(() => {
        if (externalPreviewImage) {
            setPreviewImage(externalPreviewImage);
        }
    }, [externalPreviewImage]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isPlaying && showControls) {
            timeout = setTimeout(() => setShowControls(false), 3000);
        }
        return () => clearTimeout(timeout);
    }, [isPlaying, showControls]);

    return (
        <div className={styles.videoPlayerContainer}>
            <div
                className={`${styles.videoPlayer} ${className || ''}`}
                onMouseMove={() => setShowControls(true)}
                onMouseLeave={() => isPlaying && setShowControls(false)}
            >
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    className={styles.video}
                    onClick={togglePlay}
                    style={{ opacity: isPlaying ? 1 : 0.8 }}
                />
                {showPreview && previewImage && (
                    <div className={styles.previewOverlay}>
                        <img
                            src={previewImage}
                            alt="Превью"
                            className={styles.previewImage}
                        />
                        <div className={styles.playOverlay} onClick={togglePlay}>
                            <div className={styles.playButton}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                <span>Play video</span>
                            </div>
                        </div>
                    </div>
                )}
                {hasStartedOnce && isPlaying && (
                    <div className={`${styles.controls} ${showControls ? styles.show : ''}`}>
                        <div className={styles.progressContainer}>
                            <div
                                ref={progressRef}
                                className={styles.progressBar}
                                onClick={handleProgressClick}
                            >
                                <div
                                    className={styles.progressFilled}
                                    style={{ width: `${(currentTime / duration) * 100}%` }}
                                />
                                <div
                                    className={styles.buffered}
                                    style={{ width: `${(buffered / duration) * 100}%` }}
                                />
                                <div
                                    className={styles.progressThumb}
                                    style={{ left: `${(currentTime / duration) * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className={styles.controlButtons}>
                            <div className={styles.leftControls}>
                                <button
                                    className={styles.controlButton}
                                    onClick={togglePlay}
                                    aria-label={isPlaying ? 'Pause' : 'Play'}
                                >
                                    {isPlaying ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    )}
                                </button>

                                <div className={styles.timeDisplay}>
                                    <span>{formatTime(currentTime)}</span>
                                    <span>/</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>
                            <div className={styles.rightControls}>
                                <div className={styles.volumeControl}>
                                    <button
                                        className={styles.controlButton}
                                        onClick={toggleMute}
                                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                                    >
                                        {isMuted || volume === 0 ? (
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                            </svg>
                                        ) : volume < 0.5 ? (
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                            </svg>
                                        )}
                                    </button>

                                </div>
                                <button
                                    className={styles.controlButton}
                                    onClick={toggleFullscreen}
                                    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                                >
                                    {isFullscreen ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {!isPlaying && !showPreview && (
                    <div className={styles.playOverlay} onClick={togglePlay}>
                        <div className={styles.playButton}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>Play video</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
