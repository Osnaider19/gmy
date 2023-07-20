import React from "react";
import {
  SiFacebook,
  SiTiktok,
  SiWhatsapp,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";
import IconRedes from "./IconRedes";
import "./Redes.css";
function Redes() {
  return (
    <div>
      <h4 className="text-2xl font-semibold uppercase text-center pb-3 ">Siguenos</h4>
      <div className="flex gap-2">
        <IconRedes link={`#`} icon={<SiFacebook />} />
        <IconRedes link={`#`} icon={<SiTiktok/>} />
        <IconRedes link={`#`} icon={<SiWhatsapp/>} />
        <IconRedes link={`#`} icon={<SiInstagram/>} />
        <IconRedes link={`#`} icon={<SiTwitter/>} />
      </div>
    </div>
  );
}

export default Redes;
