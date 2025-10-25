// import { ParcelConfigObject } from "single-spa";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      Parcel will be below
      <Parcel
        config={() => import("@poc-org/proj-parcel").then(m => m.parcelconfig)}
        // config=[()=>
        // config=(() => import("@poc-org/proj-parcel").then(m => m.parcelconfig) as Promise<ParcelConfigobject> )
        // System.import("@poc-or g/proj-parce1") as Promise<ParcelConfigobject>)
        customProp1="Parent prop1"
        wrapWith="h1"
        wrapStyle={{ color: "blue" }}
        handleError={(err) => console.log(err)}
        parcelDidMount={() => console.log("React parcel mounted")}
      />
    </section>
  );
}