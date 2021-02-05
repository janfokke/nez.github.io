(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{139:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/console-41bd586bdb0b546124073bb25341e38a.png"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a(3),o=(a(0),a(96));const i={id:"core",title:"Nez Core"},s={unversionedId:"features/core",id:"features/core",isDocsHomePage:!1,title:"Nez Core",description:"The root class in the Nez world is the Core class which is a subclass of the Game class. Your Game class should subclass Core. Core provides access to all the important subsystems via static fields and methods for easy access.",source:"@site/docs\\features\\core.md",slug:"/features/core",permalink:"/nez.github.io/docs/features/core",editUrl:"https://github.com/janfokke/nez.github.io/edit/main/docs/features/core.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/nez.github.io/docs/getting-started/installation"}},r=[{value:"Graphics",id:"graphics",children:[]},{value:"Scene",id:"scene",children:[]},{value:"Sprites",id:"sprites",children:[]},{value:"Sprite Atlases",id:"sprite-atlases",children:[]},{value:"Physics",id:"physics",children:[]},{value:"TimerManager",id:"timermanager",children:[]},{value:"CoroutineManager",id:"coroutinemanager",children:[]},{value:"<code>Emitter&lt;CoreEvents&gt;</code>",id:"emittercoreevents",children:[]},{value:"Debug Console",id:"debug-console",children:[]},{value:"Global Managers",id:"global-managers",children:[]},{value:"Time",id:"time",children:[]},{value:"Input",id:"input",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Flags",id:"flags",children:[]}],l={toc:r};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The root class in the Nez world is the Core class which is a subclass of the Game class. Your Game class should subclass Core. Core provides access to all the important subsystems via static fields and methods for easy access."),Object(o.b)("h2",{id:"graphics"},"Graphics"),Object(o.b)("p",null,"Nez will create an instance of the Graphics class (available via ",Object(o.b)("inlineCode",{parentName:"p"},"Graphics.Instance"),") for you at startup. It includes a default BitmapFont so you can be up and running right away with good looking text (MonoGames SpriteFont has some terrible compression going on) and should cover most of your rendering needs. Graphics provides direct access to a SpriteBatch and there is a SpriteBatch extension class with a bunch of helpers for drawing rectangles, circles, lines, etc."),Object(o.b)("h2",{id:"scene"},"Scene"),Object(o.b)("p",null,"When you set Core.scene to a new Scene, Nez will finish rendering the current Scene, fire off the ",Object(o.b)("inlineCode",{parentName:"p"},"CoreEvents.SceneChanged")," event and then start rendering the new Scene. For more information on Scenes see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prime31/Nez/blob/master/FAQs/Scene-Entity-Component.md"},"Scene-Entity-Component")," FAQ."),Object(o.b)("h2",{id:"sprites"},"Sprites"),Object(o.b)("p",null,"You can't make a 2D game without sprites. Nez provides a variety of ways to render sprites from basic single texture rendering to sprite atlas support to nine patch sprites. Some of the common sprite Components to get to know are ",Object(o.b)("inlineCode",{parentName:"p"},"SpriteRenderer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SpriteAnimator"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SpriteTrail"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TiledSprite"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollingSprite")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PrototypeSprite"),". The two most common things in a 2D game are static sprites and animated sprites. Examples are below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'// load a single image texture into a static SpriteRenderer\nvar texture = Content.Load<Texture2D>("SomeTex");\n\nvar entity = CreateEntity("SpriteExample");\nentity.AddComponent(new SpriteRenderer(texture));\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'// load up a texture that is an atlas of 16x16 animation frames\nvar texture = Content.Load<Texture2D>("SomeCharacterTex");\nvar sprites = Sprite.SpritesFromAtlas(texture, 16, 16);\n            \nvar entity = CreateEntity("SpriteExample");\n\n// add a SpriteAnimator, which renders the current frame of the currently playing animation\nvar animator = entity.AddComponent<SpriteAnimator>();\n\n// add some animations\nanimator.AddAnimation("Run", sprites[0], sprites[1], sprites[2]);\nanimator.AddAnimation("Idle", sprites[3], sprites[4]);\n\n// some time later, play an animation\nanimator.Play("Run");\n')),Object(o.b)("h2",{id:"sprite-atlases"},"Sprite Atlases"),Object(o.b)("p",null,"Far and away, the most common way to optimize a 2D game is to use sprite atlases. Nez comes with a sprite atlas packer tool and a runtime atlas loader. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prime31/Nez/blob/master/Nez.SpriteAtlasPacker/README.md"},"this README")," for more details. Here is a quick usage example. We will be using the folder hierarchy below for the example. Textures can be present in any of the folder. Those in ",Object(o.b)("inlineCode",{parentName:"p"},"root-dir")," will not be part of a sprite animation. Any sprites in subfolders will be part of sprite animations with the animation name being the folder name (",Object(o.b)("inlineCode",{parentName:"p"},"player"),", ",Object(o.b)("inlineCode",{parentName:"p"},"enemy1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"enemy2")," would all be valid animations)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"root-dir",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"player"),Object(o.b)("li",{parentName:"ul"},"enemy1"),Object(o.b)("li",{parentName:"ul"},"enemy2")))),Object(o.b)("p",null,"To generate the sprite atlas and data file Nez needs to load the atlas use the following command:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mono SpriteAtlasPacker.exe -image:roots.png -map:roots.atlas path/to/root-dir")),Object(o.b)("p",null,"Copy the generated ",Object(o.b)("inlineCode",{parentName:"p"},"roots.png")," and ",Object(o.b)("inlineCode",{parentName:"p"},"roots.atlas")," files into your project's Content folder. Note that the .png and .atlas files must have the same name. Now we can load and use the atlas using the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'var atlas = Content.LoadSpriteAtlas("Content/roots.atlas");\n\n// get a sprite from the atlas\nvar sprite = atlas.GetSprite("sprite-name.png");\n\n// get a sprite animation\nvar animation = atlas.GetAnimation("enemy1");\n\n// atlases can also easily be used by the SpriteAnimator via a convenience method\n// animator is assumed to be loaded elsewhere\nanimator.AddAnimationsFromAtlas(atlas);\nanimator.Play("enemy2");\n')),Object(o.b)("h2",{id:"physics"},"Physics"),Object(o.b)("p",null,"Be careful not to confuse the Nez Physics system with realistic physics simulations (such as Box2D, Farseer, Chipmunk, etc)! That is not at all its purpose. The Physics system is here only to provide spatial and collision information. It does not attempt to handle a full, real-world physics simulation. At the core of the Physics system is a SpatialHash that gets populated and updated automatically as you add/remove/move Colliders. You can access the various Physics-related methods via the ",Object(o.b)("strong",{parentName:"p"},"Physics")," class which provides methods (boxcast, raycast, etc) to handle broadphase collision detection in a performant way. Internally, Nez uses the Physics systems for collision detection with various shapes such as rectangles, circles and polygons. The Entity class provides move methods that handle all this for you or you could opt to just query the Physics system and handle the narrow phase collision detection yourself."),Object(o.b)("h2",{id:"timermanager"},"TimerManager"),Object(o.b)("p",null,"The TimerManager is a simple helper that lets you pass in an Action that can be called once or repeately with or without a delay. The ",Object(o.b)("strong",{parentName:"p"},"Core.Schedule")," method provides easy access to the TimerManager. When you call ",Object(o.b)("strong",{parentName:"p"},"Schedule")," you get back an ITimer object that has a ",Object(o.b)("strong",{parentName:"p"},"Stop")," method that can be used to stop the timer from firing again."),Object(o.b)("h2",{id:"coroutinemanager"},"CoroutineManager"),Object(o.b)("p",null,"The CoroutineManager lets you pass in an IEnumerator which is then ticked each frame allowing you to break long running tasks up into smaller bits. The entry point for starting a coroutine is ",Object(o.b)("strong",{parentName:"p"},"Core.StartCoroutine")," which returns an ICoroutine object with a single method: ",Object(o.b)("strong",{parentName:"p"},"Stop"),". The execution of a coroutine can be paused at any point using the yield statement. You can yield a call to ",Object(o.b)("inlineCode",{parentName:"p"},"Coroutine.WaitForSeconds")," which will delay execution for N seconds or you can yield a call to ",Object(o.b)("strong",{parentName:"p"},"StartCoroutine")," to pause until another coroutine completes."),Object(o.b)("h2",{id:"emittercoreevents"},Object(o.b)("inlineCode",{parentName:"h2"},"Emitter<CoreEvents>")),Object(o.b)("p",null,"Core provides an emitter that fires events at some key times. Access is via ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Core.Emitter.AddObserver"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Core.Emitter.RemoveObserver")),". The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"CoreEvents"))," enum defines all the events available."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Emitter<T>"))," class is available for use in your own classes as well. You can key events by int, enum or any struct. It was really built with int or enum in mind but there is no way to use generics to constrain to just those types. Note that as a performance enhancement if you are using Enums as the event type it is recommended to pass in a custom ",Object(o.b)("inlineCode",{parentName:"p"},"IEqualityComparer<T>")," to the Emitter constructor to avoid boxing. See the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"CoreEventsComparer"))," for a simple template to copy for your own custom ",Object(o.b)("inlineCode",{parentName:"p"},"IEqualityComparer<T>"),"."),Object(o.b)("h2",{id:"debug-console"},"Debug Console"),Object(o.b)("p",null,"If you are buliding with the DEBUG compilation symbol, Nez includes a simple console that provides some useful information. Press the tilde (~) key to show/hide the console. Once it is open you can type 'help' to view all the available commands which include helper to log all loaded assets, total entity count, physics colliders managed by the SpatialHash, etc. Type 'help COMMAND' to get help information for a specific command."),Object(o.b)("p",null,Object(o.b)("img",{alt:"in-game debug console",src:a(139).default})),Object(o.b)("p",null,"You can also easily add your own command to the debug console. Just add the ",Object(o.b)("strong",{parentName:"p"},"CommandAttribute")," to any static method and specify the command name and help string. Commands can have a single parameter. Here is an example of one of the built-in commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'[Command( "assets", "Logs all loaded assets. Pass \'s\' for scene assets or \'g\' for global assets" )]\nstatic void LogLoadedAssets( string whichAssets = "s" )\n')),Object(o.b)("h2",{id:"global-managers"},"Global Managers"),Object(o.b)("p",null,"Nez lets you add a global manager object that will have an update method called every frame before Scene.update occurs. Any of your systems that should persist Scene changes can be put here. Nez has several of it's own systems setup as global managers as well including: scheduler, coroutine manager and tween manager. You can register/unregister your global managers via ",Object(o.b)("inlineCode",{parentName:"p"},"Core.RegisterGlobalManager")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Core.UnregisterGlobalManager"),"."),Object(o.b)("h1",{id:"other-important-static-classes"},"Other Important Static Classes"),Object(o.b)("h2",{id:"time"},"Time"),Object(o.b)("p",null,"Time provides easy, static access to deltaTime, unscaledDeltaTime, timeScale and some other useful properties. For ease of use it also provides an altDeltaTime/altTimeScale so that you can have multiple different timelines going on without having to manage them yourself."),Object(o.b)("h2",{id:"input"},"Input"),Object(o.b)("p",null,"As you can probably guess, Input gets you access to all input (mouse, keyboard, gamepad). All the usual stuff is in there with button terminology defined in the following way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Down"),": true the entire time the button/key is down"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Pressed"),": true only the frame that a button/key is pressed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Released"),": true only the frame that a button/key is released")),Object(o.b)("p",null,"Several virtual input classes are also provided which let you combine multiple input types into a single class that you can query. For example, you can setup a VirtualButton that can map to a variety of different input types that should result in some object moving to the right. You can create the VirtualButton with the D key, right arrow key, Dpad-right and left GamePad stick and just query it to know if any of those were pressed. The same applies to other common scenarios as well. Virtual input is available for button emulation (",Object(o.b)("inlineCode",{parentName:"p"},"VirtualButton"),"), analog joystick emulation (",Object(o.b)("inlineCode",{parentName:"p"},"VirtualJoystick"),") and digital (on/off) joystick emulation (",Object(o.b)("inlineCode",{parentName:"p"},"VirtualIntegerAxis"),"). Below is an example of mapping multiple inputs to a single action:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"    void SetupVirtualInput()\n    {\n        // setup input for shooting a fireball. we will allow z on the keyboard or a on the gamepad\n        _fireInput = new VirtualButton();\n        _fireInput.AddKeyboardKey( Keys.X )\n                  .AddGamePadButton( 0, Buttons.A );\n\n        // horizontal input from dpad, left stick or keyboard left/right\n        _xAxisInput = new VirtualIntegerAxis();\n        _xAxisInput.AddGamePadDPadLeftRight()\n                   .AddGamePadLeftStickX()\n                   .AddKeyboardKeys( VirtualInput.OverlapBehavior.TakeNewer, Keys.Left, Keys.Right );\n\n        // vertical input from dpad, left stick or keyboard up/down\n        _yAxisInput = new VirtualIntegerAxis();\n        _yAxisInput.AddGamePadDpadUpDown()\n                   .AddGamePadLeftStickY()\n                   .AddKeyboardKeys( VirtualInput.OverlapBehavior.TakeNewer, Keys.Up, Keys.Down );\n    }\n        \n            \n    void IUpdatable.Update()\n    {\n        // gather input from the Virtual Inputs we setup above\n        var moveDir = new Vector2( _xAxisInput.Value, _yAxisInput.Value );\n        var isShooting = _fireInput.IsPressed;\n    }\n")),Object(o.b)("h2",{id:"debug"},"Debug"),Object(o.b)("p",null,"The Debug class provides logging and a few drawing methods. The ",Object(o.b)("inlineCode",{parentName:"p"},"Insist")," class provides an assortment of assert conditions. These classes are only compiled into DEBUG builds so you can use them freely throughout your code and when you do a non-DEBUG build none of them will be compiled into your game."),Object(o.b)("h2",{id:"flags"},"Flags"),Object(o.b)("p",null,"Do you love the ability to pack lots of data into a single int but hate the syntax of dealing with it? The Flags class is there to help. It includes helper methods for dealing with ints to check if bits are set and to set/unset them. Very handy for dealing with Collider.physicsLayer."))}c.isMDXComponent=!0}}]);