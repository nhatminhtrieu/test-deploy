import React from "react";
import "./ParkingTip.scss";
import { Row, Col } from "antd";

interface IParkingTip {}

const ParkingTip: React.FC<IParkingTip> = () => {
  const handleAddressClick = (place: string) => {
    switch (place) {
      case "NZ":
        window.open("https://maps.app.goo.gl/XyBPaQg6uaKSp5x1A", "_blank");
        break;
      case "LHP":
        window.open("https://maps.app.goo.gl/evHXnWSNaE6Hk2Gs5", "_blank");
        break;
      case "HCMUE":
        window.open("https://maps.app.goo.gl/8ghQmg2cyui9VJ146", "_blank");
        break;
      default:
        break;
    }
  };
  return (
    <div className="ParkingTip">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="info-box title font-secondary">Parking Tip</div>
        </Col>
        <Col span={12}>
          <div className="info-box">
            <div className="parking-info">
              <div className="place-name">📍 NOWZONE Fashion Mall</div>
              <div
                className="address-line"
                onClick={() => handleAddressClick("NZ")}
              >
                235 Nguyen Van Cu Street, Cau Ong Lanh Ward, HCMC
              </div>
              <br />
            </div>
            <div className="parking-info">
              <div className="place-name">
                📍 Le Hong Phong High School for The Gifted
              </div>
              <div
                className="address-line"
                onClick={() => handleAddressClick("LHP")}
              >
                235 Nguyen Van Cu Street, Cho Quan Ward, HCMC
              </div>
              <br />
            </div>
            <div className="parking-info">
              <div className="place-name">
                📍 Ho Chi Minh City University of Education
              </div>
              <div
                className="address-line"
                onClick={() => handleAddressClick("HCMUE")}
              >
                280 An Duong Vuong Street, Cho Quan Ward, HCMC
              </div>
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ParkingTip;
