import React from 'react';
import contentImage from '../assets/images/Variations.png';
import { Datepicker } from 'flowbite-react';

const Decision = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center py-4 px-20 gap-4">
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <h1 className="font-Avenir text-3xl font-extrabold text-[#000000]">
          Make data driven decisions
        </h1>
        <h2 className="font-Avenir font-normal text-base text-[#303236]">
          Pick a location and see possible routes that’s safe to make shipments.
        </h2>

        <div className="rounded-xl border border-[#C1C7D0] py-2 px-4 flex items-start justify-start md:items-center md:justify-between w-full flex-col md:flex-row">
          <div className="flex flex-col gap-2 items-start justify-start ">
            <select className="select w-full max-w-xs text-xl font-Avenir font-black outline-none focus:border-none focus:outline-none ">
              <option disabled selected>
                Select Start Location
              </option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>Cross River</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>FCT (Abuja)</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Katsina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nasarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>Rivers</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </select>
            <p className="text-[#8993A4] font-Avenir font-normal text-base px-4 pb-4">
              Where are you shipping from?
            </p>
          </div>

          <div className="w-[1px] h-20 bg-[#C1C7D0] hidden md:block" />

          <div className="flex flex-col gap-2 items-start justify-start ">
            <select className="select w-full max-w-xs text-xl font-Avenir font-black outline-none focus:border-none focus:outline-none ">
              <option disabled selected>
                Select Destination Location
              </option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>Cross River</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>FCT (Abuja)</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Katsina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nasarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>Rivers</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </select>
            <p className="text-[#8993A4] font-Avenir font-normal text-base px-4 pb-4">
              Where are you shipping to?
            </p>
          </div>

          <div className="w-[1px] h-20 bg-[#C1C7D0] hidden md:block" />

          <div className="flex flex-col gap-2 items-start justify-start ">
            <select className="select w-full max-w-xs text-xl font-Avenir font-black outline-none focus:border-none focus:outline-none ">
              <option disabled selected>
                What are you shipping?
              </option>
              <option>Petroleum Products</option>
              <option>Raw Crude Oil</option>
              <option>Natural Gas</option>
              <option>Cement</option>
              <option>Rice</option>
              <option>Wheat</option>
              <option>Maize</option>
              <option>Sorghum</option>
              <option>Fertilizers</option>
              <option>Automobiles</option>
              <option>Motorcycle Spare Parts</option>
              <option>Electronics</option>
              <option>Phones</option>
              <option>Building Materials</option>
              <option>Steel</option>
              <option>Iron Rods</option>
              <option>Processed Food Products</option>
              <option>Frozen Fish</option>
              <option>Poultry Products</option>
              <option>Livestock</option>
              <option>Palm Oil</option>
              <option>Vegetable Oil</option>
              <option>Beans</option>
              <option>Yam</option>
              <option>Cassava</option>
              <option>Garri</option>
              <option>Sugar</option>
              <option>Flour</option>
              <option>Clothing and Textiles</option>
              <option>Cocoa</option>
              <option>Rubber</option>
              <option>Timber</option>
              <option>Charcoal</option>
              <option>Furniture</option>
              <option>Pharmaceuticals</option>
              <option>Chemicals</option>
              <option>Paints</option>
              <option>Beverages</option>
              <option>Soft Drinks</option>
              <option>Bottled Water</option>
              <option>Beer</option>
              <option>Plastic Products</option>
              <option>Paper Products</option>
              <option>Books</option>
              <option>Tobacco</option>
              <option>Gold</option>
              <option>Coal</option>
              <option>Bitumen</option>
              <option>Salt</option>
              <option>Poultry Feed</option>
            </select>
            <p className="text-[#8993A4] font-Avenir font-normal text-base px-4 pb-4">
              Select what this shipment is.
            </p>
          </div>

          <div className="w-[1px] h-20 bg-[#C1C7D0] hidden md:block" />

          <div className="flex flex-col gap-2 items-start justify-start ">
            <Datepicker />
            <p className="text-[#8993A4] font-Avenir font-normal text-base px-4 pb-4">
              Tell us when this will happen
            </p>
          </div>

          <button className="bg-[#0747A6] py-4 px-6 text-[#ffffff] text-xl font-Avenir rounded-xl">
            Search Route
          </button>
        </div>

        <div className="flex w-full items-center justify-center">
          <img src={contentImage} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Decision;
