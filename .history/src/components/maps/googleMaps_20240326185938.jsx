import React from "react";


const GoogleMaps = () => {

    return (
        <section className="googleMaps-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45367.46550884047!2d-63.74241534754258!3d44.71008804415194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b598a2454bedb3d%3A0xc3be43c42883144a!2sParks%20of%20West%20Bedford!5e0!3m2!1sen!2sca!4v1711490234699!5m2!1sen!2sca"
             width="600"
              height="450"
               style={{
                border:0
               }}
                allowfullscreen=""
                 loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">

                  </iframe>
        </section>
    )
}