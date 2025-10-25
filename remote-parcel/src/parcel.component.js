export default function ParcelComponent(props){
    return(
        <section>
            Hi from Parcel content
            <div style={{color:'red'}}>{props.customProp1}</div>
        </section>
    )
}