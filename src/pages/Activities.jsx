import React, { useEffect, useState } from 'react';
//import Taiwan from '@svg-maps/taiwan';
import Nigeria from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import RiskRating from '../components/activities/RiskRating';
import { CircularProgressbar } from 'react-circular-progressbar';
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
              document.getElementById('my_modal_2').showModal();
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
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
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

                        <div className="flex flex-col items-start justify-start">
                          <h1>Total Reported Cases</h1>

                          <div className="flex items-start justify-between gap-4">
                            <CircularProgressbar
                              value={0.66}
                              maxValue={1}
                              text={80021}
                              background="red"
                            />

                            <div className="flex items-start justify-start flex-col">
                              {[
                                { name: 'Rubber', count: '4,102' },
                                { name: 'Road Disturbance', count: '1,102' },
                                { name: 'Car Jacking', count: '2,102' },
                                { name: 'Customs', count: '102' },
                              ].map((item) => {
                                return (
                                  <div className="flex items-start justify-start">
                                    <div className="w-5 h-1 bg-red-500" />
                                    <div className="flex flex-col items-start justify-start">
                                      <span>{item.name}</span>
                                      <span>{item.count}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 bg-red-500">
                        {/* currentState?.state || '' */}
                        <svg
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10,10 L90,10 L90,90 L10,90 Z"
                            fill="#008751"
                          />
                          <text
                            x="50"
                            y="55"
                            font-size="10"
                            text-anchor="middle"
                            fill="white"
                          >
                            Kaduna
                          </text>
                        </svg>
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
