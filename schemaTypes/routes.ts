import { defineType } from "sanity";

export default defineType({
  name: "routes",
  title: "Routes",
  type: "document",
  fields: [
    {
      name: "origin",
      title: "Origin Airport",
      type: "reference",
      to: [{ type: "airports" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "destination",
      title: "Destination Airport",
      type: "reference",
      to: [{ type: "airports" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "departureTime",
      title: "Departure Time",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      name: "arrivalTime",
      title: "Arrival Time",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().positive(),
    },
  ],
  preview: {
    select: {
      origin: "origin.title.en",
      destination: "destination.title.en",
      departure: "departureTime",
      arrival: "arrivalTime",
    },
    prepare(selection) {
      const { origin, destination, departure, arrival } = selection;
      return {
        title: `${origin || "?"} → ${destination || "?"}`,
        subtitle: departure ? `Departs: ${new Date(departure).toLocaleString()} Arrives: ${new Date(arrival).toLocaleString()}` : "No departure time",
      };
    },
  },
});
