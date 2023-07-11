import React from "react";

function Home() {
  return (
    <div>
      <h1 className="m-5 text-muted">
        Full Stack Application (ReactJS + NodeJs)
      </h1>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
        <div className="border mt-5 " style={{ width: "95%", padding: "7rem" }}>
          <h3 className="text-danger">
            A successful website does three things: It attracts the right kinds
            of visitors. Guides them to the main services or products you offer.
            Collect Contact details for future ongoing relation.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
