arr = [
    {
        head: "Problem Statement: 1",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
    {
        head: "Problem Statement: 2",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
    {
        head: "Problem Statement: 3",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
    {
        head: "Problem Statement: 4",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
    {
        head: "Problem Statement: 5",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
    {
        head: "Problem Statement: 6",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, laudantium inventore quo harum possimus voluptatibus dicta ea nulla optio minima itaque asperiores ut unde ad cum exercitationem aliquam enim sed placeat nobis qui quod earum, illo explicabo? Ducimus, illum. Repellendus repudiandae, assumenda perferendis vero sed totam quod consequatur adipisci vel.",
    },
];

var el = document.querySelector("#backdropDivId");
if (el) {
    el.addEventListener("click", function (params) {
        document.querySelector("#backdropDivId").style.display = "none";
    });
} else {
    console.log("asd");
}

// var e2 = document.querySelector("#exploreButton");
// if (e2) {
//     e2.addEventListener("on", function () {
//         console.log("asd");
//         document.querySelector("#backdropDivId").style.display = "block";
//     });
// } else {
//     console.log("asd");
// }

function func(x) {
    console.log(x);
    document.querySelector("#backdropDivId").style.display = "flex";
    document.getElementById("problemStatementPopUpDivH1").innerHTML = arr[x-1].head;
    document.getElementById("problemStatementPopUpDivP").innerHTML = arr[x-1].body;
}
