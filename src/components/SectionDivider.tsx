const SectionDivider = () => {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
