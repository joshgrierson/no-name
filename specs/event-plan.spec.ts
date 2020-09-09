import eventPlan from "../src/event-plan";

describe("Event Plan", () => {
    it("should call default function", () => {
        eventPlan(console.log);
    });
});
