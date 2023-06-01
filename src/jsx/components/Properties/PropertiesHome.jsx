import React,{useContext, useEffect, useState} from 'react';
import AnalyticsDonut from '../Griya/Analytics/AnalyticsDonut';
import WorldMap from '../PluginsMenu/JqvMap/WorldMap';
import PageHead from '../Griya/PageHead';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import OrderPage from '../Griya/Orderlist/OrderPage';

export default function PropertiesHome() {
  const [data, setData] = useState("Newest");
  return (
    <>
      <div>Hello world Tutti gli immobili</div>

      <PageHead activePage="Immobili"  pageName="Immobili" />
      <div className="row">
        <div className="col-xl-3 col-sm-3">
          <div className="card">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div className="card-data">
                <h5>Immobili in vendita</h5>
                <h2 className="fs-40 font-w600">684</h2>
              </div>
              <div className="d-inline-block position-relative donut-chart-sale">
                {/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(240, 240, 240)"],   "innerRadius": 35, "radius":10}'>5/8</span> */}
                <AnalyticsDonut value="62" backgroundColor="rgb(33,111,237)"
                  backgroundColor2="rgba(240, 240, 240)"
                />
                <small><i className="far fa-building"></i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3">
          <div className="card">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div className="card-data">
                <h5>Immobili in affitto</h5>
                <h2 className="fs-40 font-w600">546</h2>
              </div>
              <div className="d-inline-block position-relative donut-chart-sale">
                {/* <span className="donut1" data-peity='{ "fill": ["rgb(56, 226, 93,1)", "rgba(240, 240, 240)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
                <AnalyticsDonut value="62" backgroundColor="rgb(56, 226, 93)"
                  backgroundColor2="rgba(240, 240, 240)"
                />
                <small><i className="far fa-building text-success"></i></small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-xl-12">
					<div className="d-flex flex-wrap">
						<Link to={"#"} className="btn btn-primary me-3 mb-3">+New Tranasactions</Link>
						<div className="table-search mb-3 pe-3">	
							<div className="input-group search-area">
								<input type="text" className="form-control" placeholder="Search customer name here" />
								<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
							</div>
						</div>	
						<div className="newest mb-3 me-3">
							{/* <select className="form-control default-select ms-0 border">
								<option>Newest</option>
								<option>Oldest</option>
								<option>Newest</option>
							</select> */}
							<Dropdown className="default-select-btn">
								<Dropdown.Toggle as="div" className="form-control btn i-false">
									{data} <i className="fas fa-angle-down scale4 text-primary ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={()=>setData("Newest")}>Newest</Dropdown.Item>
									<Dropdown.Item onClick={()=>setData("Oldest")}>Oldest</Dropdown.Item>
									<Dropdown.Item onClick={()=>setData("Newest")}>Newest</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>	
						<Link to={"#"} className="btn btn-primary me-3 mb-3"><i className="fas fa-calendar me-3"></i>Filter</Link>
						<Link to={"#"} className="btn btn-warning mb-3"><i className="fas fa-redo-alt"></i></Link>
					</div>
				</div>
        <div className="col-xl-12">
					<OrderPage />
				</div>
      </div>
    </>
  )
}
