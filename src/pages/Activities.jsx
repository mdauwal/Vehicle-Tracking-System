import React, { useEffect, useState } from 'react';
//import Taiwan from '@svg-maps/taiwan';
import Nigeria from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import RiskRating from '../components/activities/RiskRating';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const riskMgtItems = [
  {
    primaryText: 'A. High Incidence Risk Level',
    secondaryText:
      'Prone to security risks like; Kidnapping, Arm robbery, Riots, heavy traffic, and road disturbance',
    color: '#FF0000',
  },
  {
    primaryText: 'B. Medium Incidence Risk Level',
    secondaryText:
      'States and areas with this color coverage have security rish but with low or avarage impact.',
    color: '#FFC400',
  },
  {
    primaryText: 'C. Low/No Incidence Risk Level',
    secondaryText: 'These states and region have no security risk at all.',
    color: '#36B37E',
  },
];

function getReactFiberProps(target) {
  for (let key in target) {
    if (key.startsWith('__reactFiber')) {
      return target[key].memoizedProps;
    }
  }
  return null;
}

const Activities = () => {
  const [currentState, setCurrentState] = useState();

  useEffect(() => {
    console.log('currentState', currentState);
  }, [currentState]);
  return (
    <div className="flex items-start justify-center py-4 px-40 gap-4">
      <div className="flex flex-col items-start justify-start w-3/5">
        <h1 className="font-Avenir text-3xl font-extrabold text-[#000000]">
          Track Activities
        </h1>
        <h2 className="font-Dmsans font-normal text-xl text-[#303236]">
          Make informed decisions, stay ahead of security risks.
        </h2>

        <div className="p-4 w-full">
          <SVGMap
            map={Nigeria}
            onLocationClick={(e) => {
              const item = getReactFiberProps(e?.target);
              if (item)
                console.log({
                  state: item?.name,
                  svg: item?.d,
                  test: 'hello',
                });

              setCurrentState({
                state: item?.name,
                svg: item?.d,
                test: 'hello',
              });
              document.getElementById('my_modal_4').showModal();
              console.log('teeeeee', e);
              console.log('currentState-----', currentState);
            }}
          />
        </div>
      </div>
      <div className="w-2/5 flex items-center mt-40 justify-center bg-[#FFFFFF]">
        <div className="w-full">
          <div className="flex flex-col border border-[#DEEBFF] rounded-sm p-10 w-full">
            <h1 className="font-Avenir font-extrabold text-4xl text-[#11263C] pb-4">
              Risk Rating
            </h1>
            <div className="">
              {riskMgtItems.map((item) => (
                <RiskRating
                  primaryText={item.primaryText}
                  secondaryText={item.secondaryText}
                  color={item.color}
                />
              ))}
            </div>
            <div>
              <>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex items-start justtify-between">
                      <div className="w-1/2 flex flex-col items-start justify-start">
                        <div className="w-full flex">
                          <svg xmlns="http://www.w3.org/2000/svg">
                            <path
                              d={currentState?.svg}
                              fill="none"
                              stroke="black"
                            />{' '}
                          </svg>
                        </div>

                        <div className="flex flex-col items-start justify-start bg-[#f9f9f9] gap-4 p-4">
                          <h1 className="font-Avenir text-base font-extrabold">
                            Total Reported Cases
                          </h1>

                          <div className="flex items-center justify-center gap-10 w-full">
                            <div className="w-1/3">
                              <CircularProgressbar
                                value={0.66}
                                maxValue={1}
                                text={80021}
                                styles={buildStyles({
                                  pathColor: '#f00',
                                  trailColor: '#eee',
                                  strokeLinecap: 'butt',
                                })}
                              />
                            </div>

                            <div className="flex items-start justify-start flex-col">
                              {[
                                {
                                  name: 'Rubber',
                                  count: '4,102',
                                  color: '#781901',
                                },
                                {
                                  name: 'Road Disturbance',
                                  count: '1,102',
                                  color: '#781901',
                                },
                                {
                                  name: 'Car Jacking',
                                  count: '2,102',
                                  color: '#DE350B',
                                },
                                {
                                  name: 'Customs',
                                  count: '102',
                                  color: '#FF8F73',
                                },
                              ].map((item) => {
                                return (
                                  <div className="flex items-start justify-start gap-4">
                                    <div
                                      className="w-6 h-1 mt-3 "
                                      style={{ backgroundColor: item.color }}
                                    />
                                    <div className="flex flex-col items-start justify-start">
                                      <span className="text-nowrap font-Avenir font-normal text-[#5E6C84] text-sm">
                                        {item.name}
                                      </span>
                                      <span className="text-nowrap font-Avenir font-extrabold text-[#11263C] text-xs">
                                        {item.count}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 bg-[#FFFFFF] border border-[#C1C7D0] p-4 flex flex-col items-start justify-start gap-2">
                        {/* currentState?.state || '' */}
                        <h1 className="text-[#0747A6]font-Avenir font-extrabold text-xl">
                          {currentState?.state}'s Stats
                        </h1>
                        <p className="text-[#0747A6] text-base font-Avenir font-extrabold">
                          Very HighRisk Level
                        </p>
                        <div className="flex flex-col items-start justify-start gap-4 w-full">
                          {/*   <svg
                            width="400"
                            height="6"
                            viewBox="0 0 457 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="457"
                              height="6"
                              rx="3"
                              fill="#FFBDAD"
                            />
                            <rect
                              width="361.683"
                              height="6"
                              rx="3"
                              fill="#BF2600"
                            />
                          </svg>

                          <svg
                            width="457"
                            height="6"
                            viewBox="0 0 457 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="457"
                              height="6"
                              rx="3"
                              fill="#FFEBE6"
                            />
                            <path
                              d="M360.985 0.137937C361.012 0.0556651 361.088 0 361.175 0H364.018C364.154 0 364.251 0.132788 364.209 0.262063L362.381 5.86206C362.354 5.94433 362.277 6 362.19 6H359.347C359.211 6 359.115 5.86721 359.157 5.73794L360.985 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M371.431 0.137937C371.457 0.0556651 371.534 0 371.621 0H374.464C374.6 0 374.697 0.132788 374.654 0.262063L372.826 5.86206C372.8 5.94433 372.723 6 372.636 6H369.793C369.657 6 369.56 5.86721 369.603 5.73794L371.431 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M381.876 0.137937C381.903 0.0556651 381.98 0 382.067 0H384.91C385.046 0 385.142 0.132788 385.1 0.262063L383.272 5.86206C383.245 5.94433 383.169 6 383.082 6H380.239C380.103 6 380.006 5.86721 380.048 5.73794L381.876 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M392.322 0.137937C392.349 0.0556651 392.426 0 392.512 0H395.356C395.492 0 395.588 0.132788 395.546 0.262063L393.718 5.86206C393.691 5.94433 393.614 6 393.528 6H390.684C390.548 6 390.452 5.86721 390.494 5.73794L392.322 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M402.767 0.137937C402.794 0.0556651 402.871 0 402.957 0H405.801C405.937 0 406.033 0.132788 405.991 0.262063L404.163 5.86206C404.136 5.94433 404.059 6 403.973 6H401.129C400.993 6 400.897 5.86721 400.939 5.73794L402.767 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M413.214 0.137937C413.241 0.0556651 413.317 0 413.404 0H416.247C416.383 0 416.48 0.132788 416.438 0.262063L414.61 5.86206C414.583 5.94433 414.506 6 414.419 6H411.576C411.44 6 411.344 5.86721 411.386 5.73794L413.214 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M423.659 0.137937C423.686 0.0556651 423.763 0 423.849 0H426.693C426.829 0 426.925 0.132788 426.883 0.262063L425.055 5.86206C425.028 5.94433 424.951 6 424.865 6H422.021C421.885 6 421.789 5.86721 421.831 5.73794L423.659 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M434.105 0.137937C434.132 0.0556651 434.209 0 434.295 0H437.139C437.275 0 437.371 0.132788 437.329 0.262063L435.501 5.86206C435.474 5.94433 435.397 6 435.311 6H432.467C432.331 6 432.235 5.86721 432.277 5.73794L434.105 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M444.551 0.137937C444.578 0.0556651 444.655 0 444.741 0H447.585C447.721 0 447.817 0.132788 447.775 0.262063L445.947 5.86206C445.92 5.94433 445.843 6 445.757 6H442.913C442.777 6 442.681 5.86721 442.723 5.73794L444.551 0.137937Z"
                              fill="#FFBDAD"
                            />
                            <path
                              d="M9.91309 0H348.946L346.233 6H9.91309V0Z"
                              fill="#F8E828"
                            />
                            <rect
                              width="272.894"
                              height="6"
                              rx="3"
                              fill="#D8C612"
                            />
                            <rect
                              width="157.991"
                              height="6"
                              rx="3"
                              fill="#781901"
                            />
                          </svg> */}
                          <div className="w-full h-1 bg-red-600 "></div>
                          <div className="w-full h-1 bg-[#781901]"></div>
                        </div>
                        <div className="flex gap-4 items-center justify-between w-full border-b border-b-[#DEEBFF]">
                          <p className="font-Avenir font-extrabold text-base text-[#253858] ">
                            History of Sharia
                          </p>
                          <p className="font-Avenir font-black text-xl text-[#253858] text-nowrap">
                            YES
                          </p>
                        </div>

                        <div className="flex gap-4 items-center justify-between w-full border-b border-b-[#DEEBFF]">
                          <p className="font-Avenir font-extrabold text-base text-[#253858] ">
                            Shari’a Implementation Status
                          </p>
                          <p className="font-Avenir font-black text-xl text-[#253858] text-nowrap">
                            State Wide
                          </p>
                        </div>

                        <div className="flex gap-4 items-center justify-between w-full border-b border-b-[#DEEBFF]">
                          <p className="font-Avenir font-extrabold text-base text-[#253858] ">
                            Alcohol Ban Within State
                          </p>
                          <p className="font-Avenir font-black text-xl text-[#253858] text-nowrap">
                            12 LGA
                          </p>
                        </div>

                        <button className="border-none bg-transparent text-[#0747A6] text-base font-Avenir font-extrabold">
                          More Insights
                        </button>

                        <div className="flex items-center justify-between bg-[#FAFBFC] border border-[#C1C7D0] p-2 gap-8 rounded-md w-full">
                          <div className="rounded-full p-2 bg-[#DEEBFF]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_4198_10660)">
                                <path
                                  d="M17 8H20L23 12.056V18H20.965C20.8461 18.8343 20.4302 19.5977 19.7937 20.1499C19.1571 20.7022 18.3427 21.0063 17.5 21.0063C16.6573 21.0063 15.8429 20.7022 15.2063 20.1499C14.5698 19.5977 14.1539 18.8343 14.035 18H8.965C8.84612 18.8343 8.43021 19.5977 7.79368 20.1499C7.15714 20.7022 6.34272 21.0063 5.5 21.0063C4.65728 21.0063 3.84286 20.7022 3.20632 20.1499C2.56979 19.5977 2.15388 18.8343 2.035 18H1V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8ZM17 10V13H21V12.715L18.992 10H17Z"
                                  fill="#0747A6"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4198_10660">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-start gap-1">
                              <p className="font-Avenir font-medium text-base text-[#464646]">
                                <span className="font-extrabold">12</span>{' '}
                                Trucks on routes to Sokoto
                              </p>
                              <p className="font-Avenir font-normal text-sm text-[#464646]">
                                Click card for more details
                              </p>
                            </div>

                            <div>
                              <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.17217 6.99999L0.222168 2.04999L1.63617 0.635986L8.00017 6.99999L1.63617 13.364L0.222168 11.95L5.17217 6.99999Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between w-full gap-2">
                          <div className="flex items-center justify-between bg-[#FAFBFC] border border-[#C1C7D0] p-2 gap-8 rounded-md w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex flex-col items-start justify-start gap-1">
                                <p className="font-Avenir font-medium text-base text-[#464646]">
                                  <span className="font-extrabold">12</span>{' '}
                                  Federal Highways
                                </p>
                                <p className="font-Avenir font-normal text-sm text-[#464646]">
                                  Click to view route
                                </p>
                              </div>

                              <div>
                                <svg
                                  width="8"
                                  height="14"
                                  viewBox="0 0 8 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.17217 6.99999L0.222168 2.04999L1.63617 0.635986L8.00017 6.99999L1.63617 13.364L0.222168 11.95L5.17217 6.99999Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between bg-[#FAFBFC] border border-[#C1C7D0] p-2 gap-8 rounded-md w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex flex-col items-start justify-start gap-1">
                                <p className="font-Avenir font-medium text-base text-[#464646]">
                                  <span className="font-extrabold">12</span>{' '}
                                  State Highways
                                </p>
                                <p className="font-Avenir font-normal text-sm text-[#464646]">
                                  Click to view route
                                </p>
                              </div>

                              <div>
                                <svg
                                  width="8"
                                  height="14"
                                  viewBox="0 0 8 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.17217 6.99999L0.222168 2.04999L1.63617 0.635986L8.00017 6.99999L1.63617 13.364L0.222168 11.95L5.17217 6.99999Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex justify-end items-center">
                          {' '}
                          <button className="border-none bg-transparent underline text-[#0747A6] text-base font-Avenir font-extrabold">
                            More Insights
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </>
              {/*  <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m 178.43165,0.2287449 12.88,5.68 20.53,7.2500001 4,2.35 4.64,-1.49 3.65,-0.02 8.54,4.12 15.88,15.56 5.98,10.42 0,0 -3.03,2.6 -7.1,4 -9.51,-1.28 -1.9,-0.66 -1.7,-2.05 -2.27,-0.68 -4.97,-0.19 -0.59,5.48 -0.73,1.89 -0.5,0.22 -2.7,-1.44 -2.79,0 -4.85,1.56 -2.11,1.82 -0.11,0.7 0.78,5.14 0.07,8.44 -1.35,1 -4.04,1.64 -10.02,0.79 -6.09,0.95 -5.83,8.58 -1.88,1.87 -3.07,1.91 0.06,2.88 1.43,4.64 0.65,4.25 -0.74,3.029995 -2.46,1.7 -6.11,0.53 -1.28,-0.29 -4.8,0.64 -2.64,-0.31 -4.47,0.33 -9.33,-1.67 -0.92,0.6 -0.93,4.51 0.1,18.21 -0.66,13.78 0,0 -1.62,0.97 -0.94,-0.07 -0.77,-1.75 -2.04,0.72 -1.89,-0.86 -1.69,0.12 -12,5.45 -2.4,3 -1.71,1.35 -2.78,-0.29 -0.76,-0.51 -2.55,-3.65 1.16,-4.77 2.61,-5.63 2.12,-9.79 -0.79,-13.05 0.14,-9.94 1.01,-3.779995 1.28,-1.48 3.95,-1.18 2.68,-0.02 3.17,2.04 1.02,-0.04 0.64,-1.56 0.24,-8.02 -1.68,-5.52 -0.04,-2.04 1.3,-6.06 0.18,-3.32 -1.8,-4.28 -1.86,-2.15 0.42,-3.7 1.42,-2.98 -0.09,-2.4 1.62,-3.93 -0.4,-1.25 -1.08,-0.88 -1.16,0.31 -2.49,3.69 -0.63,0.56 -1.82,0.43 -3.06,-0.68 -2.95,-2.07 -9.56,-3.12 -1.06,-1.1 -3.19,-1.82 -1.65,-2.12 -0.76,-0.31 -4.629999,1.58 -1.86,-0.74 -6.62,0.14 0,0 0.09,-16.44 4.14,-0.02 16.559999,-14.58 25.12,-5.0100001 2.41,2.14 5.71,0.48 6.45,-0.72 4.85,0.56 5.33,-0.16 5.25,-6.26"
                  fill="none"
                  stroke="black"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
