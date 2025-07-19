function Overlay({ onClose, children = null }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-90 bg-slate-200/10 backdrop-blur-xs"
    >
      {children}
    </div>
  );
}

export default Overlay;
