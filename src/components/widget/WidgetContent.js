import WidgetContentSlot from "./WidgetContentSlot";

function WidgetContent({ name, heading }) {
  return (
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">
        <WidgetContentSlot where="left" className="ml-2 mr-4">
          {heading ? (
            <div className="dropdown">
              <a
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-info-circle"></i>
              </a>

              <div className="dropdown-menu" aria-labelledby="info">
                <div className="dropdown-item">Click để thông báo chuyển thêm tiền</div>
              </div>
            </div>
          ) : (
            <div>
              <i className="fa fa-bell"></i>&nbsp;
            </div>
          )}
        </WidgetContentSlot>
        <WidgetContentSlot where="left">
          <div className="widget-heading">{name}</div>
        </WidgetContentSlot>
        <WidgetContentSlot where="left" className="ml-4 ">
          <div className="widget-heading">'ád</div>
        </WidgetContentSlot>
        <WidgetContentSlot where="right">
          <button className="border-0 btn-transition btn btn-outline-success">
            <i className="fa fa-check"></i>
          </button>
        </WidgetContentSlot>
      </div>
    </div>
  );
}

export default WidgetContent;
