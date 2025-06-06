import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Forms/FormStyles.css';
import { FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';

export default function Serv_form() {
  const [openSection, setOpenSection] = useState('form'); // Initially open form section
  const [formData, setFormData] = useState({}); // Add state for form data
  
  const toggleSection = (section: string) => {
    // Only allow toggling if not trying to open contact directly
    if (section !== 'contact' || openSection === 'contact') {
      setOpenSection(openSection === section ? '' : section);
    }
  };

  // Function to handle proceed button click
  const handleProceed = () => {
    setOpenSection('contact');
  };

  // Function to handle clear button click
  const handleClear = () => {
    // Reset the form - you may need to adjust this based on your form implementation
    const formElement = document.querySelector('form') as HTMLFormElement;
    if (formElement) formElement.reset();
    
    // You could also reset your form state if you're using controlled components
    setFormData({});
  };

  return (
    <div className="form-container">
      <div className="back-button-container">
        <Link to="/forms" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
      </div>
      <h2>New Service Form</h2>
      
      {/* Form Section Accordion */}
      <div className="accordion-item">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('form')}
        >
          <h3>Service Details</h3>
          {openSection === 'form' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
        {openSection === 'form' && (
          <div className="accordion-content">
            <form>
              <div className="form-section-header">Elevator/Escalator Details</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="manufacturer">Manufacturer</label>
                  <input type="text" id="manufacturer" />
                </div>
                <div className="form-group">
                  <label htmlFor="unitType">Type of Unit</label>
                  <input type="text" id="unitType" />
                </div>
                <div className="form-group">
                  <label htmlFor="landingDoors">No. of Landing Doors</label>
                  <input type="number" id="landingDoors" />
                </div>
                <div className="form-group">
                  <label htmlFor="cabinDoors">No. of Cabin Doors</label>
                  <input type="number" id="cabinDoors" />
                </div>
                <div className="form-group">
                  <label htmlFor="servicePeriods">Service Periods</label>
                  <input type="text" id="servicePeriods" />
                </div>
                <div className="form-group">
                  <label htmlFor="contractType">Type of Contract</label>
                  <input type="text" id="contractType" />
                </div>
                <div className="form-group">
                  <label htmlFor="numFloors">No. of Floors</label>
                  <input type="number" id="numFloors" />
                </div>
              </div>

              <div className="form-section-header">Documentation</div>
              <div className="form-group">
                <label htmlFor="drawingsGad">Drawings/GAD's</label>
                <input type="file" id="drawingsGad" />
              </div>

              <div className="form-section-header">Dimensions</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="widthCabin">Width Cabin</label>
                  <input type="text" id="widthCabin" />
                </div>
                <div className="form-group">
                  <label htmlFor="heightCabin">Height Cabin</label>
                  <input type="text" id="heightCabin" />
                </div>
                <div className="form-group">
                  <label htmlFor="depthCabin">Depth Cabin</label>
                  <input type="text" id="depthCabin" />
                </div>
                <div className="form-group">
                  <label htmlFor="widthShaft">Width Shaft</label>
                  <input type="text" id="widthShaft" />
                </div>
                <div className="form-group">
                  <label htmlFor="heightShaft">Height Shaft</label>
                  <input type="text" id="heightShaft" />
                </div>
                <div className="form-group">
                  <label htmlFor="depthShaft">Depth Shaft</label>
                  <input type="text" id="depthShaft" />
                </div>
                <div className="form-group">
                  <label htmlFor="pit">Pit</label>
                  <input type="text" id="pit" />
                </div>
              </div>    

              <div className="form-section-header">Location Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="addressInstall">Address of Install</label>
                  <textarea id="addressInstall"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input type="text" id="zipCode" />
                </div>      
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" />
                </div>       
                <div className="form-group">
                  <label htmlFor="area">Area</label>
                  <input type="text" id="area" />
                </div>
              </div>
              
              {/* Proceed and Clear buttons at the end of the first accordion */}
              <div className="form-actions">
                <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
                <button type="button" className="form-button primary" onClick={handleProceed}>Proceed</button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Contact Section Accordion */}
      <div className="accordion-item">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('contact')}
        >
          <h3>Contact Information</h3>
          {openSection === 'contact' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
        {openSection === 'contact' && (
          <div className="accordion-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="contactName">Contact Name</label>
                <input type="text" id="contactName" />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email</label>
                <input type="email" id="contactEmail" />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" id="contactNumber" />
              </div>
              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Mode of Contact</label>
                <select id="preferredContact">
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Additional Information</label>
                <textarea id="contactMessage" rows={4}></textarea>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="button-container">
        <button type="submit" className="form-button">Create Service Contractor</button>
      </div>
    </div>
  );
}