type FadeInProps = {
  children: React.ReactNode;
  className?: string;
};

const FadeIn = ({ children, className = "" }: FadeInProps) => (
  <div className={`smooth-transition animate-fade-in ${className}`}>
    {children}
  </div>
);

export default FadeIn;
