import { Residence } from "./Residence";
import { ResidenceHeader } from "./ResidenceHeader";

const addressBook = [
  { streetAddress: "10821 Willow Reed Cir. W", city: "Parker", state:"CO" ,zipCode: "80134" },
  { streetAddress: "41 Sunridge Ln", city: "Durango", state:"CO", zipCode: "81301" },
  { streetAddress: "340 1/2 W. 3rd Ave", city: "Durango", state:"CO", zipCode: "81301" },
  { streetAddress: "2137 Superior St.", city: "Bellginham", state:"WA", zipCode: "98229" },
];

export function ResidenceList(props) {
  return (
    <div class="h-full w-full bg-white shadow-md">
      <ResidenceHeader user={props.user} setResidences={props.setResidences}/>
      <div class="h-full w-full flex flex-wrap gap-3 p-3 overflow-y-scroll">
        <For each={addressBook}>
          {(place) => {
            return (
              <Residence place={place} />
            );
          }}
        </For>
      </div>

    </div>
  );
}