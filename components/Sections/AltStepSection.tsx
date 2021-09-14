import React from "react";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
resetIdCounter();

interface PanelItem {
    text1 : string
    text2 : string
}
interface Panel {
  text1: string;
  text2: string;
  children: PanelItem[];
  cover: any;
}
interface Tab {
  icon: string;
  text: string;
}
interface IStepSection {
  text1: string;
  text2: string;
  tabs: Tab[];
  panel: Panel[];
}
const DigitalExperience = (props: { data: IStepSection }) => {
  return (
    <div className="digital-experience-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <div className="bar"></div>
        </div>

        <div className="tab digital-experience-tab">
          <Tabs>
            <TabList>
              {props?.data?.tabs?.map((v) => (
                <Tab>
                  <span>
                    <i className={v?.icon || ""}></i>
                    {v?.text}
                  </span>
                </Tab>
              ))}
            </TabList>

            {props?.data?.panel?.map((v) => (
              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="digital-experience-content">
                      <h3>{v?.text1}</h3>
                      <p>{v?.text2}</p>

                      {v?.children?.map((v) => (
                        <div className="experience-inner-content">
                          <div className="icon">
                            <i className="fas fa-check"></i>
                          </div>
                          <h3>{v?.text1}</h3>
                          <p>
                            {v?.text2}
                          </p>
                        </div>
                      ))}

                      
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="digital-experience-image">
                      <img src={v?.cover?.url} alt="image" />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DigitalExperience;
