//import React from 'react'
import Cards from '../cards'
import MovieNavBar from './MovieNavBar'

export default function () {
  return (
  <>
<div style={{background:"linear-gradient(45deg,blue,indigo,black)"}}>
  <MovieNavBar/>
            <div className="container" >
                <div className="row">

                    {/* Google Red with White Text */}
                    <div style={{ width: '200px', backgroundColor: '#D14836', border: '1px solid #999', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="/table" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Telugu Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Gmail Gray with Black Text */}
                    <div style={{ width: '200px', backgroundColor: '#f1f1f1', border: '1px solid #999', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#444', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Devotional Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Google Chrome Blue Button */}
                    <div style={{ width: '200px', backgroundColor: '#0370EA', border: '1px solid #076BD2', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Tollywood Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Google Blue Button */}
                    <div style={{ width: '200px', backgroundColor: '#4D90FE', border: '1px solid #3079ED', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Bollywood Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Google Nexus Green Button */}
                    <div style={{ width: '200px', backgroundColor: '#4CADCB', border: '1px solid #02A9D6', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                   Hollywood movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/*   Tamil Movies */}
                    <div style={{ width: '200px', backgroundColor: '#5B74A8', border: '1px solid #29447E', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                   Tamil Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Hindi Movies*/}
                    <div style={{ width: '200px', backgroundColor: '#ECEEF5', border: '1px solid #CAD4E7', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#3B5998', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Hindi Movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/*  Cannada movies */}
                    <div style={{ width: '200px', backgroundColor: '#E4F3FF', border: '1px solid #79BCEA', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#1E75BD', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Cannada movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Malayalam movies*/}
                    <div style={{ width: '200px', backgroundColor: '#E51400', border: '1px solid #E51400', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                    Malayalam movies
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Korean Movies */}
                    <div style={{ width: '200px', backgroundColor: '#FECD57', border: '1px solid #FBC43C', borderRadius: '4px', padding: '10px', margin: '10px 5px' }}>
                        <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            <a href="#" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <span style={{ fontSize: '12px', fontFamily: 'Arial', fontWeight: 'bold', color: '#333333', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                                Korean Movies
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   <Cards/>
</>
  
  
  )
}
