import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";

export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;

  return (
    <div style={{ direction: "rtl", minHeight: "11vh" }}>
      <br-x />
      <Window
        title={"قیمت لحظه ای تتر (دلار)"}
        style={{
          minHeight: 200,
          margin: 10,
          width: "calc(100% - 20px)",
          background: "rgb(0,0,0)",
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(5,81,101,1) 100%)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            padding: "1rem",
            display: "flex",
            color: "white",
          }}
        >
          <br-x />
          <br-xx />
          <img
            style={{ width: "1.5rem", marginRight: "23rem" }}
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
            alt="tetherlogo"
          />
          <p style={{ paddingRight: "0.5rem", fontWeight: "bold" }}>
            قیمت لحظه ای:
            <span
              style={{
                color: "#FFFF00",
                paddingRight: "0.30rem",
                fontWeight: "bold",
              }}
            >
              {parseFloat(props.p.price as number).toLocaleString("fa-IR")}
            </span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "right",
              padding: "1rem",
              display: "flex",
              color: "white",
            }}
          >
            <br-x />
            <br-xx />
            <img
              style={{ width: "1.5rem" }}
              src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
              alt="tetherlogo"
            />
            <p style={{ paddingRight: "0.5rem", fontWeight: "bold" }}>
              تغییرات روز گذشته:
              <span
                style={{
                  color: "#40C4FF",
                  paddingRight: "0.30rem",
                  fontWeight: "bold",
                }}
              >
                ٪{" "}
                {parseFloat(props.p.diff24d as number).toLocaleString("fa-IR")}
              </span>
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "right",
              padding: "1rem",
              display: "flex",
              color: "white",
            }}
          >
            <br-x />
            <br-xx />
            <img
              style={{ width: "1.5rem" }}
              src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
              alt="tetherlogo"
            />
            <p
              style={{
                paddingRight: "0.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              تغییرات هفته گذشته:
              <span
                style={{
                  color: "#40C4FF",
                  paddingRight: "0.30rem",
                  fontWeight: "bold",
                }}
              >
                ٪ {parseFloat(props.p.diff7d as number).toLocaleString("fa-IR")}
              </span>
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "right",
              padding: "1rem",
              display: "flex",
              color: "white",
            }}
          >
            <br-x />
            <br-xx />
            <img
              style={{ width: "1.5rem" }}
              src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
              alt="tetherlogo"
            />
            <p style={{ paddingRight: "0.5rem", fontWeight: "bold" }}>
              تغییرات ماه گذشته:
              <span
                style={{
                  color: "#40C4FF",
                  paddingRight: "0.30rem",
                  fontWeight: "bold",
                }}
              >
                ٪{" "}
                {parseFloat(props.p.diff30d as number).toLocaleString("fa-IR")}
              </span>
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "right",
              padding: "1rem",
              display: "flex",
              color: "white",
            }}
          >
            <br-x />
            <br-xx />
            <img
              style={{ width: "1.5rem" }}
              src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
              alt="tetherlogo"
            />
            <p style={{ paddingRight: "0.5rem", fontWeight: "bold" }}>
              نوسانات در ۷ روز گذشته:
              <span
                style={{
                  color: "#40C4FF",
                  paddingRight: "0.30rem",
                  fontWeight: "bold",
                }}
              >
                ٪{" "}
                {parseFloat(props.p.diff30d as number).toLocaleString("fa-IR")}
              </span>
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://iili.io/daBmKmJ.png"
            alt="bugology"
            style={{
              width: "10rem",
              padding: "1rem",
            }}
          />
        </div>
      </Window>
    </div>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://api.tetherland.com/currencies");
  let data = await res.json();
  let p = data.data.currencies.USDT;

  console.log("PRICEEEEEEEEEEEEEEE:", p);

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      }),
    },
  };
}
