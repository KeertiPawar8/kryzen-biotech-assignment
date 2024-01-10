import React from "react";

import { useLocation } from "react-router-dom";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

function Preview() {
  const location = useLocation();
  let { name, age, address, photo } = location.state;
  async function handleClick() {
    const fileExtension = photo.split(".").pop().toLowerCase();

    let ImageBytes = await fetch(photo).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman); //1st step

    let Image;
    if (fileExtension === "png") {
      Image = await pdfDoc.embedPng(ImageBytes);
    } else if (fileExtension === "jpg" || fileExtension === "jpeg") {
      Image = await pdfDoc.embedJpg(ImageBytes);
    }

    const Dims = Image.scale(0.4);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 25;

    page.drawText(`Name : ${name}`, {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(`Age : ${age}`, {
      x: 50,
      y: height - 5 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(`Address : ${address}`, {
      x: 50,
      y: height - 6 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawImage(Image, {
      x: page.getWidth() / 2.5 - Dims.width / 2.5,
      y: page.getHeight() / 1.5 - Dims.height / 1.5,
      width: Dims.width,
      height: Dims.height,
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "User_Details.pdf");
  }

  return (
    <div>
      <h3>Name : {name} </h3>
      <h3> Age : {age}</h3>
      <h3> Address : {address} </h3>
      <img src={photo} style={{ width: "20%" }} alt="" />
      <button
        style={{
          marginLeft: "650px",
          display: "block",
          backgroundColor: "skyBlue",
          padding: "14px",
          textAlign: "center",
        }}
        onClick={handleClick}
      >
        Download PDF
      </button>
    </div>
  );
}
export default Preview;
