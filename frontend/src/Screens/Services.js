import React from "react";
import "../assets/css/main.css";
import img1 from "../images/image3.jpeg";
import img2 from "../images/image2.jpeg";
import Navbar from "../common/Navbar";

export default function Services() {
  return (
    <>
      <div id="wrapper" className="divided">
        <Navbar />

        <section className="wrapper style1 align-center">
          <div className="inner">
            <h2>Our services</h2>
            <span className="image fit">
              <img src={img2} alt="" />
            </span>
            <p>
              Black Friday Clothing Deals 2022: What Apparel Offers Can You
              Expect?
            </p>
            <div className="items style1 medium onscroll-fade-in">
              <section>
                <span className="icon style2 major fa-gem"></span>
                <h3>Free Delivery With Total 50$</h3>
                <p>
                  A good suit is a staple for many adult wardrobes, whether you
                  need one for attending weddings or wear suits on a regular
                  basis to the office. And Black Friday tends to be one of the
                  best times to shop for suits, especially if you're looking for
                  affordable options. Last year, we saw Men's Wearhouse drop
                  starting prices to $119 for select suits; the retailer also
                  offered Joseph Abboud casual coats for as little as $50
                </p>
              </section>
              <section>
                <span className="icon solid style2 major fa-save"></span>
                <h3>Best seller all over the Campus</h3>
                <p>
                  Ordinarily, the best time to shop for seasonal clothing items
                  is when the season is winding down, or even after it's over.
                  For instance, if you need warm-weather apparel, your best bet
                  for finding excellent savings is to shop during Labor Day
                  sales in September. Looking for winter clothing? You guessed
                  it — February or March generally have the best deals.
                </p>
              </section>
              <section>
                <span className="icon solid style2 major fa-chart-bar"></span>
                <h3>24 /7 Customer Service</h3>
                <p>
                  DealNews may be compensated by companies mentioned in this
                  article. Please note that, although prices sometimes fluctuate
                  or expire unexpectedly, all products and deals mentioned in
                  this feature were available at the lowest total price we could
                  find at the time of publication (unless otherwise specified)
                </p>
              </section>
            </div>
            <div className="content">
              <p>
                <span className="image left">
                  <img src={img1} alt="" />
                </span>
                Our service is free to users because vendors pay us when they
                receive web traffic. We list all vendors - not just those that
                pay us - in our comprehensive directory so that you can compare,
                sort and filter your results to make the most informed decision
                possible.
              </p>
            </div>
          </div>
        </section>

        <footer className="wrapper style1 align-center">
          <div className="inner">
            <p>&copy; Student market place, Inc.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
