import React, { useState } from "react";
import { NavButtons } from "./NavButtons";

export function Header() {
  return (
    <section className="container">
      <div className="header">
        <div className="logo">
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/bW4b3Xs/Untitled-1.png"
              alt="Untitled-1"
              className="agency-logo"
            />
          </a>
        </div>

        <article>
          <NavButtons />
        </article>
      </div>
    </section>
  );
}
