const Container = ({ children }: ContainerProps) => {
    return (
        <div className="my-8 md:my-12 mx-auto min-h-[calc(100vh-13.25rem)] md:min-h-[calc(100vh-14.5rem)] grid grid-rows-2 justify-items-center gap-y-4 md:gap-y-6">
            {children}
        </div>
    );
};

export default Container;
