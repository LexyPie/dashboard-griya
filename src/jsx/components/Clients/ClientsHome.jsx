import React,{useContext, useEffect, useState} from 'react';
import { ThemeContext } from "../../../context/ThemeContext";

import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

//Import Page
import PageHead from '../Griya/PageHead';
import CustomersList from '../Griya/CustomersList/CustomersList';
import DonutChart from '../Griya/Home/DonutChart';


export default function ClientsHome() {
  const [data, setData] = useState("Più recenti");
  return (
    <>
        <div>Hello world Clients, da riempire con dati generici clienti</div>
        <PageHead activePage="Clienti"  pageName="Clienti" />
        <div id="ChartRow" className="row">
				<div className="col-xl-3 col-md-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div className="order-user">
									<i className="fas fa-user text-white bg-primary"></i>
								</div>
								<div className="ms-4 customer">
									<h2 className="mb-0  font-w600">245</h2>
									<p className="mb-0 font-w500">Total Customers</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Clienti acquirenti</h5>
								<h2 className="fs-40 font-w600">546</h2>
							</div>
							<DonutChart value="25" backgroundColor="rgb(56, 226, 93)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Clienti venditori</h5>
								<h2 className="fs-40 font-w600">3,672</h2>
							</div>
							<DonutChart value="63" backgroundColor="rgb(255, 135, 35)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>???</h5>
								<h2 className="fs-40 font-w600">75</h2>
							</div>
							<DonutChart value="40" backgroundColor="rgb(51, 62, 75,1)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
			</div>	

			<div className="row contacts-list-area">
				<div className="col-xl-12">
					<div className="d-flex flex-wrap">
						<Link to={"#"} className="btn btn-primary me-3 mb-3">+New Tranasactions</Link>
						<div className="table-search mb-3 pe-3">	
							<div className="input-group search-area">
								<input type="text" className="form-control" placeholder="Search customer name here" />
								<span className="input-group-text">
									<Link to={"#"}><i className="flaticon-381-search-2"></i></Link>
								</span>
							</div>
						</div>	
						<div className="newest mb-3 me-3">
							<Dropdown className="default-select-btn">
								<Dropdown.Toggle as="div" className="form-control btn i-false">
									{data} <i className="fas fa-angle-down scale4 text-primary ms-1 pt-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={()=>setData("Più recenti")}>Più recenti</Dropdown.Item>
									<Dropdown.Item onClick={()=>setData("Meno recenti")}>Meno recenti</Dropdown.Item>
									<Dropdown.Item onClick={()=>setData("Altro")}>Altro</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>	
						<Link to={"#"} className="btn btn-primary me-3 mb-3"><i className="fas fa-calendar me-3"></i>Filter</Link>
						<Link to={"#"} className="btn btn-warning mb-3"><i className="fas fa-redo-alt"></i></Link>
					</div>
				</div>
				<CustomersList />
			</div>	
			<div className="d-flex align-items-center justify-content-between  flex-wrap">
				<h5>Showing 5 from 160 data</h5>
				<ul className="pagination align-items-center">
					<li className="page-item page-indicator">
						<Link to={"#"} className="btn btn-primary btn-sm me-2">Indietro</Link>
					</li>
					<li className="page-item active"><Link to={"#"} className="page-link">1</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">4</Link></li>
					<li className="page-item page-indicator">
						<Link to={"#"} className="btn btn-primary btn-sm me-2">Avanti</Link>
					</li>
				</ul>
			</div>
    </>
  )
}
