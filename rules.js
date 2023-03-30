const timelineItem = Array.from(document.querySelectorAll('.recruitment-timeline__item'));


const deactivateTimelineItem = () => {
    timelineItem.forEach(element => {
        element.classList.remove('recruitment-timeline__item__active');
    })
}

timelineItem.forEach(element => {
    element.addEventListener('click', (e) => {
        deactivateTimelineItem();
        e.currentTarget.classList.add('recruitment-timeline__item__active');
    })
});