import React from "react";
import "./Information.scss";
import { Col, Row } from "antd";

interface IInformation {}

const Information: React.FC<IInformation> = () => {
  return (
    <div className="Information">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="info-box">
            <div className="location-info">
              <div className="place-name font-secondary">
                University of Science - VNUHCM
              </div>
              <br />
              <div className="address-line ">
                227 Nguyen Van Cu Street, Cho Quan Ward, HCMC
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="info-box">
            <div className="datetime-info font-secondary">
              <div className="date">Saturday, December 20, 2025</div>
              <div className="time">10:30 AM - 12:00 PM</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
