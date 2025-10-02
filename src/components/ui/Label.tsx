

interface LabelProps {
    children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => (
    <span>
        <p className="bg-linear-to-r from-[#def1e4c9] to-50% rounded-2xl lg:rounded-4xl pl-2 py-1 text-[12px] inline-block">
            <span>•</span>
            <span className="text-sm font-bold"> {children}</span>
        </p>
    </span>

);