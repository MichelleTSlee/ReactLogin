import React from 'react';

const year = new Date().getFullYear();

function Footer() {
  return ( <div class = "footer">
    <p>&#169; { year } </p>
    </div>
  )
};

export default Footer;
