import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"
import { Trans } from "gatsby-plugin-react-i18next"

const WhyChooseUs = () => {
  return (
    <>
      <div className="what-we-do-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-do-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span className="sub-title"><Trans>WhyChooseUs CTA</Trans></span>
                <h2><Trans>WhyChooseUs CTA Long</Trans></h2>
                <p><Trans>About Desc</Trans></p>
                <p><Trans>About Desc 2</Trans></p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-do-content-accordion"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span><Trans>WhyChooseUs Advantages1</Trans></span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p><Trans>WhyChooseUs Advantages1 Desc</Trans></p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span><Trans>WhyChooseUs Advantages2</Trans></span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p><Trans>WhyChooseUs Advantages2 Desc</Trans></p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span><Trans>WhyChooseUs Advantages3</Trans></span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p><Trans>WhyChooseUs Advantages3 Desc</Trans></p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span><Trans>WhyChooseUs Advantages4</Trans></span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p><Trans>WhyChooseUs Advantages4 Desc</Trans></p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span><Trans>WhyChooseUs Advantages5</Trans></span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p><Trans>WhyChooseUs Advantages5 Desc</Trans></p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
