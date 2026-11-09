var config = {
    // style: 'mapbox://styles/mapbox/standard',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWxsbXlibHZja2JlYWNoZXMiLCJhIjoiY212dTRtNWg5MDRqYzJ4cjVlaWI5Nml2ayJ9.wFBlSX71n9Hi52hBe977sA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'over-the-atlantic',
            alignment: 'full',
            hidden: false,
            title: '21:46',
            description: `He’s my hero, my cult leader. He’s a man with only a profile. He never looks into my eyes, but just stares into the distance. It was too late when I realized a nail was driven into my skull, and I didn’t bother to remove it. Rather, I enjoy it. What else can I do? 
`,
            boxStyle: 'position: relative; top: 40vh; width: 45vw; margin-left: 55vw; box-sizing: border-box; padding: 36px 44px; min-height: 36vh; background-color: rgba(0,0,0,0.55); font-size: 20px; line-height: 34px;',
            location: {
                center: [-73.8, 40.4],
                zoom: 10,
                pitch: 80,
                bearing: 30
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: 'setNight3D',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'closer-to-new-york',
            alignment: 'full',
            hidden: false,
            description: ``,           
            boxStyle: 'position: relative; top: 40vh; width: 45vw; margin-left: 55vw; box-sizing: border-box; padding: 36px 44px; min-height: 36vh; background-color: rgba(0,0,0,0.55); font-size: 20px; line-height: 34px;',
            location: {
                center: [-73.79, 40.55],
                zoom: 12.5,
                pitch: 80,
                bearing: 30,
                duration: 12000
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'setNight3D',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'black',
            alignment: 'full',
            hidden: false,
            description: `Ah, my demon.`,
            boxStyle: 'background-color: rgba(0, 0, 0, 0.72); width: 100vw; min-height: 100vh; padding: 10vh; text-align: left; color: #9a0e0e; font-size: 8vw; line-height: 1.3;',
            location: {
                center: [-73.79, 40.55],
                zoom: 12.52,
                pitch: 80,
                bearing: 30
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'onto-new-york',
            alignment: 'full',
            hidden: false,
            title: '21:46',
            description: `I take a look at the navigation screen. Past the Atlantic onto the land. I chose New York because I think this is where everything started.<br><br>Don’t know if it’s the turbulence but a faint dizziness takes over me.`,
            boxStyle: 'background-color: rgba(0,0,0,0.55)',
            location: {
                center: [-73.8, 40.63],
                zoom: 20,
                pitch: 80,
                bearing: 350,
                duration: 5000,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: 'flyIntoNewYork',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'into-manhattan',
            alignment: 'full',
            hidden: false,
            title: '21:49',
            description: `The skyline of Manhattan vaguely presents itself in the dark, remote, swaying, like candles in the wind.<br><br>Am I really away?`,
            boxStyle: 'background-color: rgba(0,0,0,0.55)',
            location: {
                // Must match where the previous chapter ENDS (its endView,
                // with bearing = its rotateTo), so nothing jumps on entry.
                center: [-73.99, 40.72],
                zoom: 14,
                pitch: 72,
                bearing: 300
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: 'flyIntoManhattan',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'photo-1',
            alignment: 'full',
            hidden: false,
            image: 'photo-1.jpg',
            description: '',
            location: {
               center: [-73.97, 40.745],
            zoom: 14,
            pitch: 80,
            bearing: 290
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       { 
             id: 'onto-manhattan',
             alignment: 'full',
             hidden: false,
             title: '',
             description: `It wasn’t until I came off Williamsburg Bridge that I got a physical sense of being in New York.`,
             boxStyle: 'background-color: rgba(0,0,0,0.55)',
             location: {
                center: [-73.99009, 40.73334],
                zoom: 19,
                pitch: 70,
                bearing: 295
            },

            cameraPath: {
                duration: 20000,
                zoom: 18.5,
                pitch: 70,
                bearing: 90,

                points: [
                    // Williamsburg Bridge 
                    [-73.9695, 40.7118],
                    [-73.9733, 40.7134],
                    [-73.9800, 40.7160],

                    //Entering Manhattan
                    [-73.9820, 40.7180],
                    [-73.9840, 40.7210],
                    [-73.9860, 40.7250],
                    [-73.9880, 40.7290],

                    // Approaching Fourth Avenue
                    [-73.9910, 40.7310],
                    // Moving north along Fourth Avenue
                    [-73.9910, 40.7320],
                    [-73.9908, 40.7327],

                    // Final approach to the hotel entrance
                    [-73.99009, 40.73334]
                ]
                
            },
                        mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: 'followCameraPath',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
// Reusable first-person flight: the camera glides in a straight line from
// where it is now to endView, instead of just changing zoom.
function flyCamera(chapterId, endView, flightMs, holdMs, afterHold) {
    function isActive() {
        var el = document.getElementById(chapterId);
        return !!(el && el.classList.contains('active'));
    }

    // Where the camera is now
    var startView = {
        center: map.getCenter(),
        zoom: map.getZoom(),
        pitch: map.getPitch(),
        bearing: map.getBearing()
    };
    var s = map.getFreeCameraOptions().position;
    var sp = { x: s.x, y: s.y, z: s.z };

    // Where it must end up: jump there, read it, jump back
    map.jumpTo(endView);
    var e = map.getFreeCameraOptions().position;
    var ep = { x: e.x, y: e.y, z: e.z };
    map.jumpTo(startView);

    var dBearing = ((endView.bearing - startView.bearing + 540) % 360) - 180;
    var t0 = performance.now();

    // Slow start, faster middle, soft landing
    function ease(t) { return t * t * (3 - 2 * t); }

    function frame(now) {
        if (!isActive()) { return; }   // reader scrolled away: stop
        var t = Math.min((now - t0) / flightMs, 1);
        var k = ease(t);

        var cam = map.getFreeCameraOptions();
        cam.position = new mapboxgl.MercatorCoordinate(
            sp.x + (ep.x - sp.x) * k,
            sp.y + (ep.y - sp.y) * k,
            sp.z + (ep.z - sp.z) * k
        );
        cam.setPitchBearing(
            startView.pitch + (endView.pitch - startView.pitch) * k,
            startView.bearing + dBearing * k
        );
        map.setFreeCameraOptions(cam);

        if (t < 1) {
            requestAnimationFrame(frame);
        } else if (afterHold) {
            setTimeout(function () { if (isActive()) { afterHold(); } }, holdMs);
        }
    }
    requestAnimationFrame(frame);
}

// Chapter 'into-manhattan': fly closer, toward the Manhattan skyline
function flyIntoManhattan() {
    setNight3D();   // night lights + 3D buildings

    var endView = {
        center: [-73.97, 40.745],   
        zoom: 14.5,                  
        pitch: 80,
        bearing: 300              
    };
    flyCamera('into-manhattan', endView, 7000, 0, null);
}
function setNight3D() {
    var apply = function () {
    // Night lighting
    map.setConfigProperty('basemap', 'lightPreset', 'night');
    map.setFog({
    color: '#071321',
    'high-color': '#020817',
    'horizon-blend': 0.02,
    'space-color': '#020611',
    'star-intensity': 0.5
});

    // Dark blue color palette
    map.setConfigProperty('basemap', 'colorLand', '#071321');
    map.setConfigProperty('basemap', 'colorWater', '#020B19');
    map.setConfigProperty('basemap', 'colorRoads', '#26394B');
    map.setConfigProperty('basemap', 'colorGreenspace', '#10251F');
    map.setConfigProperty('basemap', 'colorBuildings', '#142337');

    // Keep 3D objects
    map.setConfigProperty('basemap', 'show3dObjects', true);
};
    if (map.isStyleLoaded()) { apply(); } else { map.once('style.load', apply); }
}

function setDay() {
    var apply = function () {
        map.setConfigProperty('basemap', 'lightPreset', 'day');
        map.setConfigProperty('basemap', 'show3dObjects', true);
    };
    if (map.isStyleLoaded()) { apply(); } else { map.once('style.load', apply); }
}
// First-person approach: the camera glides forward in a straight line while
// descending, then holds, then slowly turns toward Manhattan's west shore.
function flyIntoNewYork() {
    var chapterId = 'onto-new-york';

    // ---- Edit these to tune the flight ----
    var endView = {
        center: [-73.8, 40.63],
        zoom: 17,          // 17 = low airplane view; 20 = a few dozen meters above ground
        pitch: 80,
        bearing: 350
    };
    var flightMs = 5000;  // approach duration (ms)
    var holdMs = 0;     // pause after arriving (ms)
    var rotateTo = 305;    // final heading, toward Manhattan's west shore
    var rotateMs = 3000;  // rotation duration (ms)
    // ---------------------------------------

    console.log('flyIntoNewYork started');

    function isActive() {
        var el = document.getElementById(chapterId);
        return !!(el && el.classList.contains('active'));
    }

    // 1. Where the camera is now (flight start)
    var startView = {
        center: map.getCenter(),
        zoom: map.getZoom(),
        pitch: map.getPitch(),
        bearing: map.getBearing()
    };
    var s = map.getFreeCameraOptions().position;
    var sp = { x: s.x, y: s.y, z: s.z };

    // 2. Where the camera must end up: jump there, read it, jump back
    map.jumpTo(endView);
    var e = map.getFreeCameraOptions().position;
    var ep = { x: e.x, y: e.y, z: e.z };
    map.jumpTo(startView);

    // Turn the short way round
    var dBearing = ((endView.bearing - startView.bearing + 540) % 360) - 180;
    var t0 = performance.now();

    // Slow start, faster middle, soft landing
    function ease(t) { return t * t * (3 - 2 * t); }

    function frame(now) {
        if (!isActive()) { return; }   // reader scrolled away: stop
        var t = Math.min((now - t0) / flightMs, 1);
        var k = ease(t);

        var cam = map.getFreeCameraOptions();
        cam.position = new mapboxgl.MercatorCoordinate(
            sp.x + (ep.x - sp.x) * k,
            sp.y + (ep.y - sp.y) * k,
            sp.z + (ep.z - sp.z) * k
        );
        cam.setPitchBearing(
            startView.pitch + (endView.pitch - startView.pitch) * k,
            startView.bearing + dBearing * k
        );
        map.setFreeCameraOptions(cam);

        if (t < 1) {
            requestAnimationFrame(frame);
        } else {
            setTimeout(rotate, holdMs);
        }
    }

    function rotate() {
        if (!isActive()) { return; }
        map.easeTo({
            bearing: rotateTo,
            duration: rotateMs,
            essential: true,
            easing: function (t) { return t; }   // constant speed
        });
    }

    requestAnimationFrame(frame);
}