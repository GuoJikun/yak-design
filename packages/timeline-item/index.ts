import TimelineItem from "./src/index.vue";

TimelineItem.install = (app: any) => {
    app.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
