function WidgetContentSlot({ where, children, ...others }) {
  let defaultClassName = 'widget-content-' + where;
  const {className, ...leftOthers} = others;
  if (className) {
    defaultClassName = defaultClassName + ' ' + className;
  }
  return (
    <div className={defaultClassName} {...leftOthers}>
      {children}
    </div>
  );
}

export default WidgetContentSlot;
