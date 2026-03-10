const fs = require('fs');

const content = `
import { Book, Epoch, LoreItem, Character, Download } from './types';

// --- CHAPTER CONTENT DEFINITIONS ---

const BOOK_1_CHAPTERS = [
  {
    id: "b1-prologue",
    title: "PROLOGUE — The World Before the Rewrite",
    content: \`"Every world ends twice — first in memory, then in belief."

Before the silence took root.
Before the Voice began curating truth.
Before the Council traded fear for obedience… there was a boy with eyes that saw too far, and a girl who remembered what no one dared to.

Back then, the world was chaotic. Flawed. Brutal. But it was real.

Aiden Valcrest wasn't born a savior. He was born a quiet, grieving student, soldering circuit boards and avoiding eye contact. Until her death cracked open something ancient inside him — and the Dreadful Eye awoke.

He didn't become a god. He became a mirror.

And what the world saw in him terrified everyone. They tried to seal it. Name it. Control it. But truth can't be polished. It can only be remembered — or rewritten.

That's where she came in. Chloe Valcrest. His last anchor to a world slipping away. She wasn't the strongest. Not the fastest. Not the chosen one. But she believed. In him. In memory. In the fragile thing called truth.

Together with seven Hidden Blades who never bowed, they challenged an empire of silence. Not for conquest. Not for revenge. But for the right to say: "This happened."

Because in a world that erases pain, only those who remember it can still feel what matters.

This story is not a prophecy. It's a rescue.

If you're reading it, maybe… just maybe… the rewrite didn't win.\`
  },
  {
    id: "b1-ch1",
    title: "CHAPTER 1 — Veiled Awakening",
    content: \`PART 1: WAKE-UP PROTOCOL FAILURE

The shrill, synthetic chirp of his smart ceiling pierced the early silence.

"Aiden, it's 8:30 AM. Your lab starts in 30 minutes. Current temperature: 65°F. Air quality is optimal. You are late."

Aiden Cross groaned, kicking off a tangled blanket of hoodie, cables, and solder-burned jeans. His room looked like a battlefield between a RadioShack and a startup accelerator — dismantled drones, three energy drink cans stacked like a totem, a half-sketched circuit diagram on a cracked tablet.

His smartwatch vibrated violently on the side table.

[Jordan]: "Bro. Get. UP. We're in the middle of the demo pitch. I'm stalling with terrible jokes."
[Chloe]:  "Tell him to teleport. Or fake a coma. Either would help."
[Eli]:    "Lab doors lock at 9.03. You have 27 minutes."

Aiden yawned, brushing his hair back. The face in the mirror — green-eyed, tired but focused — looked older than twenty. Under his shirt, he noticed again that faint, ever-present warmth behind his left eye socket. A pulse that didn't feel... natural.

But he shrugged it off. There were more urgent things. Like making sure his smart-shoes didn't electrocute him again.

────────────────────────────────

PART 2: CLASS CHAOS & BROKEN BOTS

Redridge's East Tech Complex loomed like a fortress of glass and metal. Inside, lab EC-2 buzzed with caffeinated students assembling final-year prototypes for RedridgeX, the biggest intercollegiate tech fest on the West Coast.

Jordan Miles spotted him first.

"Dead man walking!" he yelled, pushing a soldering iron into Aiden's hand. "You're late. You're fixing the bot's right leg. It keeps trying to walk sideways into walls. Like you after Red Bull."

Chloe Ramirez rolled her eyes from behind a display monitor. "Nice of you to grace us with your presence. Did the AI in your pillow fail?"

Aiden smirked, dropping his backpack. "I overslept. Time is a construct. The bot will walk."

Eli Park didn't look up. He was in the zone, coding furiously while sipping bubble tea through a straw that blinked data updates.

Aiden leaned over their latest prototype — a quadruped rescue bot that used facial recognition, AI pathfinding, and carbon-fiber joints.

"Power flow is good... but servo 4 is lagging," he muttered. His hands moved on muscle memory. Wires clicked into place. Jordan passed the flux.

Chloe asked, "You okay though? You look pale."

Aiden hesitated. "Yeah. Just... weird dreams lately."

He didn't tell them about the pulsing behind his eye. The sound he sometimes heard in his head — like static from another reality. That would sound crazy. Wouldn't it?

────────────────────────────────

PART 3: REDRIDGEX — STORM BEFORE THE SPOTLIGHT

That afternoon, the RedridgeX pre-launch briefing was hosted in the central dome — a breathtaking rotunda of LED screens, hologram beams, and augmented-reality light tunnels.

Hundreds of student teams sat as drones flew above, capturing reels for the university's social media. Aiden's team, "Project Syntheon", was ranked in the top 10.

Dean Carter stood on stage, booming voice amplified.

"Tomorrow begins the 25th RedridgeX. Let your innovations speak. May the boldest minds win."

The crowd roared. But Aiden barely heard it. A sharp vibration flashed behind his eye again. He blinked.

For a second — just a fraction — the entire dome glitched. The lights bent. The floor twisted like a sheet of code unraveling. No one else reacted.

Then everything returned to normal.

Did I just… imagine that?\`
  },
  {
    id: "b1-ch2",
    title: "CHAPTER 2 — Council in Twilight",
    content: \`PART 1: THE DOME OF MIRRORS

Beneath a mountain, hidden behind holographic disguises and cloaked by thirteen layers of illusion, the Council of the White Accord assembled in a vaulted crystal dome.

The floor was a massive ring of rune-etched stone. In its center, a sigil pulsed: a silver circle flanked by twin swords — the seal of the Accord.

Seven circular thrones surrounded the floor, each with a flame-lit pedestal behind them, symbolizing their domain.

Selene Ward, Head of Strategy and Security, stood in the center. Her long white coat shimmered faintly with embedded runes, her expression unreadable.

"It blinked," she said, voice calm but taut. "The Dreadful Eye. Last night, Redridge Sector."

Murmurs flared across the room. Councilor Aren Vael, representing the High House of Hollenforth, frowned deeply.

"He wasn't supposed to awaken for years. The seal—"

"Holds," interrupted Raventhorn, stepping from behind the mirror pedestal. "But he is not a prisoner. He is a carrier. A living gate. And pain… opens gates."

Selene nodded. "He triggered a partial defense reflex. Enough to vaporize a Darkshade-class specter. No casualties. But the telemetry was seen by more than us."

Another councilor, Tyrien Ashell, leaned forward. "The Covenant?"

Selene grimaced. "Possibly. And if they confirm his location, we risk reigniting the pact war."

"So what do we do?" Tyrien asked. "Contain him?"

"We watch him," Selene replied. "But we don't interfere unless the Eye fully opens. Unless," she added, eyes narrowing, "the Covenant moves first."

────────────────────────────────

PART 2: SHADOWS THAT STIR

Miles away — deep within a realm invisible to satellites, beneath a forest no map acknowledged — House Nightmire's Sanctum stood like a scar in reality.

The air here was thick with ancient power. The trees whispered screams.

Sylara Nightmire, Second-born of the 8th Emperor, stood atop a jagged obsidian outcropping, staring into a basin filled with memories.

The water boiled black.

"He blinked," she whispered, a twisted smile forming. "So the blood remembers."

Behind her, Varox emerged from the void — a being made of silhouettes and clawed absence.

"Do we hunt him now?"

"No," she said, eyes flickering violet. "We let the world greet him first. Let him remember why he forgot."

A slow ripple passed through the trees. Elsewhere in the darkness, other emperors stirred. Watching. Waiting.\`
  },
  {
    id: "b1-ch3",
    title: "CHAPTER 3 — Ghosts of Redridge",
    content: \`PART 1: THE MESSAGE THAT SHOULDN'T EXIST

It was 2:17 AM when Aiden's phone buzzed.

He had just shut down his laptop after hours of debugging the bot's AI feedback loops, trying to focus on something — anything — normal. But the pulse behind his eye had returned, stronger. Like a storm brewing in his skull.

He reached for the phone on his desk.

Unknown Number

"Do you still remember me, Aiden? – R."

His blood ran cold.

He read the message again. Once. Twice. A third time.

R…?

There was only one person who ever signed off with just "R." But she was gone. Dead. Buried beneath a quiet headstone in Portland, far from this life, far from everything he had become.

His fingers trembled. He responded: "Who is this?"

No reply.

Instead, the phone vibrated violently. Not once — repeatedly. Aiden stared as messages flooded in, one by one.

"You promised you'd never let go."
"Why didn't you save me?"
"It's waking, Aiden."
"The Door opens from inside."
"They're coming."

And then, finally:

"Use Form 2. You'll need it tonight."

The screen cracked spontaneously in his hand. Aiden's reflection blinked back at him in the shattered glass — but for a split moment, his left eye was no longer human.\`
  },
  {
    id: "b1-ch4",
    title: "CHAPTER 4 — Echoes of the Past",
    content: \`PART 1: SHADOWS IN THE FRAME

Aiden sat in darkness, the light from his shattered phone flickering across the room like a dying signal.

The video was still playing on loop — grainy, half-corrupted — but the final frame burned into his vision: Rena. That gentle smile. The pendant — hers. The way her hair fell to the side. The way she tilted her head like she used to.

But she was gone. Had been gone. He had watched her go. So how the hell…?

"I'm still here, Aiden. Find me."

He ran the video through three decryption tools. Nothing. The metadata was scrubbed. The timestamp? Blank. No originating IP. No sender number traceable.

Except… at frame 492, hidden in the corrupted data, he found a sliver of light. A ghosted geotag.

"Theta Node – Archive Red 74"

He blinked. Theta Nodes weren't on the city grid. They were fragments of the Accord's old surveillance network, long believed to be dismantled after the U.S. Familia War 18 years ago. Hidden data caches. Forbidden territory.

If something — or someone — had used Theta Archive Red 74 to send a message, it meant one thing: The Accord knew. And they'd let it happen.

────────────────────────────────

PART 2: UNDERNEATH IT ALL

Aiden skipped classes the next day. By 4:00 PM, he was five miles off campus, in the industrial sprawl past the bio-lab research arcologies. The address pinged as a decommissioned hydroelectric control station.

Abandoned. Or so the public records said. But beneath it… power flowed. His Familia pulsed as he neared the building.

Inside, dust swirled — but there were no rats. No decay. Just silence. Maintained silence.

He passed down a metal stairwell into the dark. Doors opened before he touched them. And in the core of the station, he found it:

ARCHIVE NODE: THETA – RED 74
Access Level: Imperialx – Authorized

His heart pounded. The system scanned him automatically — a cold light dancing across his retina. A glyph circle spiraled in the air.

"Hello, Aiden Cross," a voice said. "It's been a long time."\`
  },
  {
    id: "b1-ch5",
    title: "CHAPTER 5 — The Fractured Code",
    content: \`PART 1: SIGNALS IN THE STATIC

Aiden Cross wasn't sleeping anymore. Every time he closed his eyes, he saw her — not just as a memory, but as something active, present, like a beacon lost in a storm.

He hadn't told Chloe or Jordan about the pendant. Or the Accord. Or Null. Not even about the Covenant's attack. He convinced himself it was safer for them that way.

But secrets come with weight. And cracks.
And by Friday, the cracks were starting to show.

────────────────────────────────

PART 2: NOTICING THE GLITCH

"Dude," Jordan said, handing Aiden a Red Bull. "You've been writing the same line of code for ten minutes."

Aiden blinked at the screen. Sure enough:
if (signal !== NULL) { if (signal !== NULL) { if (signal !== NULL) {

He looked down at his keyboard. The key was jammed. No — his fingers were stuck.

"Sorry. Just tired," he muttered.

Chloe crossed her arms. "You sure that's it?"

Aiden nodded. But Chloe didn't believe him. And she was right not to. Because just beneath the surface of Redridge's clean concrete walls, something was humming. A quiet, almost imperceptible thrum in the frequencies — inaudible to most, but visible to someone with the Eye.

────────────────────────────────

PART 3: THE FIRST CODE BLEED

Later that night, as Aiden reviewed their bot's logic tree, his laptop screen flickered. Then shifted. The screen split open — not physically, but visually. Like a mirrored crack, revealing something beneath the OS. Something not coded by human hands.

A line of text appeared in glowing red:

YOU SEE THE THREADS. DO YOU REMEMBER HOW TO FOLLOW THEM?

Aiden gasped. The laptop sparked — and went black.\`
  }
];

const BOOK_2_CHAPTERS = [
  {
    id: "b2-prologue",
    title: "PROLOGUE — The Memory That Never Was",
    content: \`Cycle Year 312 After The Rewrite | Thread Integrity Index: 82%

The world had forgotten how to dream.

Every night the Halo Witness shone above the clouds like a silver pupil — silent, perfect, unblinking. Its orbit cut a thin line across the dusk, a scar of light reminding humankind that belief was safer than truth.

Inside Vault 07, Elias Kaer watched memories being harvested.

Rows of sleepers floated in translucent capsules; faint auroras of thought curled from their temples into the Harmony Engine's glass spine. Each dream distilled into data, catalogued, softened, and filed beneath a single axiom:

PAIN IS NO LONGER REQUIRED FOR GROWTH.

He had copied the phrase a thousand times without thinking. Tonight, the words bled.

A single entry blinked red among the blue archives:
"Valcrest, Aiden — Prohibited Classification: EYE."

He hesitated. His training told him to flag it, delete it, forget it. Instead he opened it.

The vault lights dimmed. A sound — half heartbeat, half static — filled the room. Then a whisper, ancient and too human:

"If you are reading this, the world still believes the lie."

The capsule nearest him shattered. Dream fluid hissed across the floor, carrying the smell of ozone and rain that had not fallen in centuries.

The Harmony Engine's console flashed a warning he had never seen:

THREAD RECURSION DETECTED — SOURCE: CHLOE VALCREST // ECLIPSED OATH.

And far above the vault, the perfect orbit of the Halo Witness flickered — once — like a closing eye.\`
  },
  {
    id: "b2-ch1",
    title: "CHAPTER 1 — The Archivist of Dreams",
    content: \`PART 1: GLASS AND SILENCE

Morning in Verdant was a hymn sung by machines.

Choral drones drifted between spires, broadcasting affirmations through mist that smelled faintly of citrus and copper. Citizens moved in graceful rhythm, each step guided by wrist-band pulses syncing to the Belief Codex.

Elias Kaer walked against the rhythm.

He carried a slate of forgotten protocols and a bruise on his palm from last night's forbidden file. The mark glowed faintly beneath his glove, a fractal pattern spiralling outward — like an eye learning to breathe.

At the café balcony overlooking Sector IV, holographic koi swam through the air between tables. Elias sat alone, watching them glitch for a heartbeat every time the Halo Witness passed overhead.

"Bad signal?" the vendor asked.

"Dream lag," Elias murmured.

He lied easily; everyone did. Verdant required serenity, not honesty.

But the bruise under his skin pulsed again — three beats, pause, three beats. Morse, ancient and obsolete. He translated out of instinct.

REMEMBER ME.

────────────────────────────────

PART 2: THE GIRL IN THE REFLECTION

That evening, the Registry's mirror servers recalibrated. Elias monitored their light tunnels when a face appeared inside the glass — not his, not any citizen file.

A girl — pale, hair-streaked silver, eyes violet-red.

"Do you dream, Archivist?" she asked from inside the reflection.

He froze. The system logged no anomaly. Cameras saw nothing.

"Who are you?"

"The daughter of a promise," she said softly. "And the world's next mistake."

Static rippled through the glass; her image fractured into seven shards, each showing a different skyline — ancient Redridge, the burning Accord, the dark spiral of the old Echo Tree.

Before vanishing, she whispered a name he shouldn't know. "Chloe."

Every mirror in the Registry blacked out.\`
  },
  {
    id: "b2-ch2",
    title: "CHAPTER 2 — The Girl Who Remembers Tomorrow",
    content: \`PART 1: THE GIRL AND THE CLOCK

The lower city dreamed in rust instead of gold.

Steam hissed from the prayer vents, mixing incense with machine oil. Among the narrow alleys a girl crouched beside a cracked vending drone, prying open its panel with a spoon.

Her name was Reya.

Inside the drone she found a music chip — ancient, half-melted — and slipped it into the pocket sewn behind her ribs. She'd grown up scavenging fragments of the world that came before belief, and she was the only one in her block who still asked questions out loud.

Above her, the Halo Witness traced its arc again.

For an instant it halted — stuttered — as if buffering reality.

Reya looked up and smiled. "It blinked," she whispered. "He's coming back."

The street preacher nearby froze. "No one comes back," he said, eyes wide. "That's heresy."

But Reya just walked away, the faint hum of a forbidden lullaby following her into the fog.

────────────────────────────────

PART 2: THE DREAM INTERCEPT

At midnight, in the Dream Registry's overflow grid, Elias was still replaying the mirror incident. Each frame he slowed revealed the same distortion: a child's silhouette overlapping the girl's face — one heartbeat out of sync.

He ran a deep-trace scan. The coordinates pointed downward, beneath Verdant's belief network, where human dreams weren't supposed to form. An address flickered:

GRID 9 / Orphan Code R-74

He shouldn't go. The Accord remnants patrolled the under-districts. But the pattern on his palm pulsed again — three beats, pause, three beats.

Remember me.\`
  },
  {
    id: "b2-ch3",
    title: "CHAPTER 3 — The City That Prays to Machines",
    content: \`PART 1: SERMON OF LIGHT

Morning returned too bright, too calm. Every street screen showed the same face: Arch-Curator Voss, high priest of the Belief Codex. Her smile was perfect. Her tone, surgical.

"Harmony is grace. Doubt is corrosion. Today, the Halo Witness re-aligns to bless Verdant with another year of certainty."

Crowds applauded.

Elias stood among them, Reya hidden beneath a borrowed cloak. She watched the screens like a cornered animal.

"They pray to code," she whispered.

He nodded. "And it answers."

Above them, the Halo Witness pulsed once for every heartbeat in the city — syncing minds, calibrating emotions. People sighed in unison. Only Elias and the girl were out of rhythm.

────────────────────────────────

PART 2: THE BROKEN PRAYER

Deep inside the Spire, the Belief Codex broadcast chamber resembled a cathedral made of circuits. Elias hacked an access terminal, his fingers trembling.

"Show me the core feed."

Lines of devotion scrolled faster than sight — billions of affirmations from citizens. Each belief line ended with an encryption key shaped like an eye.

He froze when one message repeated endlessly through the stream:

"Forgive the Threadwalker."

He traced its source — an unregistered node buried in the same vault he'd seen in his dream. The node ID glowed faintly: R-74. Reya's orphan code.

The Halo Witness dimmed, as if it, too, were listening.\`
  },
  {
    id: "b2-ch4",
    title: "CHAPTER 4 — The Cracked Halo",
    content: \`PART 1: WHEN HEAVEN STUTTERS

The Halo Witness blinked again.

Not the gentle pulse Verdant saw each night, but a violent flicker that carved thunder across the sky. For the first time since the Accord's fall, people looked up in fear rather than devotion.

On every broadcast, Curator Voss's voice trembled as she recited protocol. "Remain calm. The light is recalibrating."

But even she could feel it — the beat was wrong. Out of rhythm. Out of control.

Inside the chamber, Elias stood at the base of the belief engines. Holographic prayers streamed past him like waterfalls of light. The chamber smelled of burnt ozone and sanctified oil.

The central mirror cracked. Just a hairline fracture, but the sound went through him like a scream.

Through the fracture he saw something that wasn't reflection: a city burning in reverse, a woman of light standing before an inverted sun.

And behind her, faint and furious, a child's voice whispered through static:

"The Halo was never the Eye. It's the shell it left behind."\`
  },
  {
    id: "b2-ch5",
    title: "CHAPTER 5 — The Return of the Blades",
    content: \`PART 1: THE FALLEN COALESCENCE

The plaza had always been a place of memory made benign. Tonight, it was a battlefield.

Shards of the Halo Witness rained between monoliths, each fragment humming with stolen light. Where a shard landed, the air changed: glass flowed like water, statues wept code, and the surface of the fountain answered in voices not sung in a century.

Elias and Reya emerged into that storm like two people who had been forgetful for too long.

They were not alone.

Movement at the plaza's far rim resolved into silhouettes — vertical, precise, impossible. The enforcers that had cornered them earlier lay inert, their helmets cracked open as if something had exhaled right through their armor and left nothing but empty ritual behind.

From between two carved stone saints stepped figures that looked older than Verdant itself: cloaks torn in the shapes of moons, armor etched with runes that refused to be catalogued.

Blades.

Not the theatrical blades of city myth — those lacquered relics kept behind plexiglass and lit like altars — but living shapes that carried the smell of iron and rain and war. They moved like memories remembering how to hurt.

The first of them stopped mid-stride, cocking her head at Elias like a hearing animal. Her hair was cropped to a hard line; a silver scar ran from brow to cheek. The metal at her wrist folded back to reveal a blade-carving that glowed the same fractal as Elias's palm.

"Elias Kaer," she said; her voice was grain and glass. "Archivist. You have an unlicensed resonance."\`
  }
];

const BOOK_3_CHAPTERS = [
  {
    id: "b3-ch1",
    title: "CHAPTER 1 — The Fracture Beneath Heaven",
    content: \`I. THE SHATTERING SKY

The sky broke before Kael heard it scream.

It began with a tremor — subtle as breath, yet unmistakable, as though the heavens exhaled a memory it no longer wished to carry.

The twin moons hovered unnaturally still, their edges touching in a kiss of pale fire. Light bled between them, a cold, silver hemorrhage that rippled through the clouds until the firmament itself cracked like old glass.

Then the world convulsed.

Aetherion's horizon twisted in silence. Mountains sagged as if their bones had forgotten how to hold shape. Rivers boiled into vapor, lifting in strands that spiraled upward like souls seeking escape. The wind carried whispers now — thousands of overlapping voices, each speaking a name Kael couldn't quite hear.

He staggered through the obsidian dust, cloak shredded, boots cracked, throat dry with the taste of burnt stone.

He did not remember when he last slept. He did not remember if he had eaten. He did not remember whether the blood dried on his gauntlet was his own.

But he remembered this: The Veil had fallen.

He dragged Veydran along the fractured plain. The blade hissed where it touched the ground — its runes scorching the dust with a soft, eerie glow. It was less a weapon now and more an accusation, humming with a hunger that wasn't entirely its own.

The land around him pulsed. Not with life. With memory.

He stopped atop a shattered ridge. Below lay Vaelcorne — once the holy citadel of dawnfire, a place where children learned their first oaths and old priests whispered the last rites. Now, it was a grave of glass.

────────────────────────────────

II. THE RIFTBORN

A crack groaned open in the valley floor below. Dust billowed upward in spirals, coiling like serpents. The ground shuddered. Something rose — slowly, shakily — from the depths of the fracture.

At first it resembled a person. Then it moved, and the illusion shattered. The creature's limbs bent at angles the body should not allow. Its skin rippled in mirror-sheen waves, reflecting the world as tight, trembling fragments.

A Riftborn. A thing not born from flesh. Born from what the world forgot.

Kael steadied his breath. His heartbeat slowed. His vision tightened into a predator's focus.\`
  },
  {
    id: "b3-ch2",
    title: "CHAPTER 2 — Ember and Echo",
    content: \`I. THE CANYONS OF SHATTERED MEMORY

The storm had retreated, but the world still hissed where the molten rain had kissed the stone.

Glass puddles cooled into black mirrors. Every rock face glistened with the residue of the sky's wrath.

Kael and Miraen moved through a narrow canyon that wound like a scar through the bones of Aetherion. It was a place carved not by water or wind, but by something more violent — an ancient spell, a forgotten war, or perhaps the slow grinding of timelines against each other.

Kael's boot crunched over a sheet of crystal. His reflection stared up at him — eyes too pale, face too tired. He stepped away before the reflection could speak. Here, even the ground had a voice.

Miraen walked ahead, his obsidian staff gently tapping the canyon floor. With each tap, a circle of runes spread from the point of contact in faint crimson spirals. They glowed, pulsed, then faded.

Kael watched one of the patterns dissipate. "What are you checking for?"

Miraen's expression didn't change. "The stability of the world."

Kael snorted. "And?"

Miraen stopped walking. The runes beneath his staff flared, twisted — then snapped shut like a jaw. "It's arguing with itself," he said softly.

────────────────────────────────

II. THE SILENT AMBUSH

The air thickened. Heat shimmered, rippling across the canyon like invisible serpents. Kael's hand drifted to the hilt of Veydran even before instinct kicked in.

The first arrow came without sound. Just the faint displacement of air — like a gasp. Kael reacted before thought could catch up. Veydran flashed free of its scabbard. The arrow hit the blade's flat surface and exploded into obsidian dust that rained harmlessly to the ground.

A second arrow struck the air beside Miraen, splitting into smoke. Miraen didn't flinch. He lifted his hand. The runes along his staff flared — and a sphere of shimmering crimson enveloped both of them like a breathing barrier.

More arrows slammed into it. Each dissolved into sparks.\`
  },
  {
    id: "b3-ch3",
    title: "CHAPTER 3 — The Ashen Citadel",
    content: \`I. THE ROAD THROUGH RUIN

Dawn rose without color.

The horizon glowed faintly — but not with sunlight. The pale ring of the moon-eclipse cast a gray radiance over the land, enough to distinguish shape from shadow but too weak to warm anything living.

Kael, Lyra, and Miraen walked across a plain that crunched underfoot like broken bone. What had once been soil was now fine ash, compacted by storms into a surface that reflected light with dull sorrow.

Lyra drifted slightly ahead, the edges of her form shimmering as if she were stitched out of moonlight. Sometimes she left no footprints. Sometimes she left too many, as though fragments of past versions of her walked beside the real one.

Kael tried not to stare. But he couldn't help it.

"Don't," Lyra murmured without turning around.

Kael swallowed. "Don't what?"

"Don't look at me like I'm disappearing."

"You are disappearing."

She smiled — soft and brief, the sort of smile people make when it hurts to speak the truth. "I'm holding on."

Miraen, walking behind them, muttered, "Barely."

Ahead, the ash plain sloped upward into a ridge of jagged blackstone. And perched atop that ridge, looming like a fossilized storm — stood Velmirath. The Ashen Citadel.\`
  },
  {
    id: "b3-ch4",
    title: "CHAPTER 4 — Whispers of Sanctuary",
    content: \`I. BENEATH THE BREATHING HALLS

The corridors beneath Velmirath were not built — they were grown.

Here, the architecture pulsed. Veins of molten crystal ran like arteries along the walls. The floor's tiles rose and fell in gentle throbs, as if inhaling. Every few steps, the air thickened with the metallic scent of memory trying to take form.

Lyra's footsteps left faint glimmers in the dust — afterimages delayed by a heartbeat, each imprint lagging behind her like a ghost trying to keep pace.

Miraen moved with unusual wariness, palm tracing sigils into the air, letting runes orbit around his wrist like crimson planets.

"Keep your mind still," he muttered. "The Citadel listens. And it answers thoughts it finds interesting."

Kael glanced sideways. "Define 'interesting.'"

Miraen shrugged. "Fears. Hopes. Secrets. Anything that hurts."

────────────────────────────────

II. THE HIDDEN WING

The corridor narrowed into a sharp bend, then opened suddenly into a cathedral-like hall. Columns of fused bone and obsidian spiraled upward. Suspended lanterns floated in slow circles, shedding dull silver light that seemed tired of its own glow.

At the far end, a massive door lay half-open, revealing little but swirling dust and a faint hum.

Miraen stopped. "This… shouldn't be open."\`
  },
  {
    id: "b3-ch5",
    title: "CHAPTER 5 — The Waking Storm",
    content: \`I. THE CITADEL BREATHES UNEASE

Velmirath did not sleep.

Even after the Archive slammed shut behind them and the echo-guards' shrieks faded into muffled silence, Kael felt the Citadel's presence pressing against his skin like a second heartbeat.

The corridors dimmed and brightened in intervals that did not match any known rhythm. Runic veins along the walls pulsed faster each minute. The floor occasionally vibrated with a tremor not caused by movement, but by memory trying to manifest.

Lyra's steps were uneven. Shards of light fell from her fingertips each time she brushed a wall.

Kael kept close beside her. Miraen led them down a narrow passageway carved from twisted obsidian, his staff emitting a faint crimson glow — weaker than before, as if drained by the Archive.

He whispered, "The Citadel is becoming aware."

Kael frowned. "Aware of what?"

"Of us," Miraen murmured, not slowing. "Of her. Of the Shard. Of the Oath's awakening."

A low groan echoed through the corridor — a deep, resonant sound that made the stones tremble.

Lyra winced. "It hurts."

Kael turned sharply. "What hurts?"

"The walls." She pressed a hand to her temple. "They're… speaking."

"What are they saying?"

She blinked, tears shimmering briefly.
"My name. Over and over. But not like a greeting.
More like a… warning."\`
  }
];

const BOOK_CA_CHAPTERS = [
  {
    id: "ca-ch1",
    title: "CHAPTER 1 — The Architecture of Ending",
    content: \`The proposal arrived on a Tuesday. Viktor read it in four minutes and approved it in the fifth.

He had learned early that the time between reading and deciding was the most dangerous interval in governance. It was where sentiment gathered. Where advisors found purchase. Where the wrong question — not "is this correct?" but "is this survivable?" — had a chance to take hold.

Viktor did not ask survivable questions. He asked structural ones.

The proposal was for the GRPI's fourth-cycle extension — a routine renewal of the parameters governing the Coherence Index across the northern administrations. The mathematics were sound. The political implications were, if anything, conservative. It should have been signed and filed within the hour.

Instead, it sat on his desk for six days while his cabinet argued.

They were arguing, Viktor understood, about the wrong thing. They were arguing about the optics of extension — what it would signal to the western councils, whether the timing showed weakness, whether the numbers could be softened before public release. These were questions for communications officers and political analysts. They were not questions for architects.

"The structure is correct," Viktor said, on the sixth day, when they had exhausted themselves.

The room went quiet.

"The optics are a second-order problem. When a building's load-bearing calculations are sound, we don't redesign the facade because it makes neighbours uncomfortable."

Lena, who had been his deputy for eleven years and who understood him better than anyone except possibly himself, said:
"Viktor. The neighbours are the ones who decide whether the building stands."

"No," Viktor said. "That's what people believe. What's true is that the physics decide whether the building stands. The neighbours decide whether they like it. Those are not the same problem."

The proposal was signed that afternoon.

That was six years ago. Viktor had been thinking about it ever since — not because he regretted it, but because the distinction it illustrated had begun to feel insufficient. The physics were necessary. But the neighbours, as Lena had tried to tell him, were also real. And reality had a way of asserting structural claims of its own.\`
  },
  {
    id: "ca-ch2",
    title: "CHAPTER 2 — The Coherence Index",
    content: \`The GRPI had not been Viktor's invention.

The framework — Governance Redundancy and Permanence Index — predated him by two administrations. It had been designed, in its original form, as an early warning system: a set of metrics that would signal when a governing structure was beginning to calcify, to mistake its own continuation for its purpose.

What Viktor had done was add the Expiration Protocol.

This was what his critics called the "suicide clause." What he called — when pressed, which he preferred not to be — the only honest thing the framework had ever contained.

The Protocol was simple in principle and extraordinarily complex in execution. It established that any administration operating under the GRPI for more than fourteen years would undergo a mandatory Coherence Audit. If the audit revealed a Coherence Index below the threshold Viktor had calculated himself, the administration would enter Managed Dissolution — a structured transfer of authority that left the governing functions intact while replacing every person who performed them.

The Paralysis Index, which measured the degree to which an administration had become incapable of meaningful self-reform, provided the trigger.

He had set the Paralysis threshold at sixty-three. Not sixty. Not sixty-five. Sixty-three, because that was the number that the historical data — four hundred years of governance records from eleven different administrative traditions — identified as the point at which the probability of voluntary reform dropped below twelve percent.

Below twelve percent, he had decided, voluntary reform was not a realistic mechanism. The structure had to change the occupants, because the occupants could no longer change the structure.

His cabinet had objected to sixty-three for three weeks. They wanted sixty-eight. He understood why: sixty-eight was further away. It offered more time. More time felt like more safety, to people who thought safety was a property of duration.

Viktor thought safety was a property of design.
And sixty-three was where the design required the threshold to be.\`
  },
  {
    id: "ca-ch3",
    title: "CHAPTER 3 — The Sorokin Question",
    content: \`Sorokin had been watching Viktor for eleven years before he asked the question directly.

They were in the eastern reading room — the one Viktor used for conversations he didn't want logged — two glasses of something Sorokin had brought from the south, the kind of silence between them that had stopped being uncomfortable some years ago.

"Do you actually believe it will work?" Sorokin asked.

Viktor looked at him. "Define 'it.'"

"The Protocol. The whole structure. The idea that you can design a system that dismantles itself correctly, on time, without the people inside it finding a way to preserve themselves."

"People always find a way to preserve themselves," Viktor said. "That's not a flaw in the model. It's a load-bearing assumption."

Sorokin set his glass down. "Then what stops them from dismantling the Protocol first?"

"The fact that dismantling the Protocol is itself a Paralysis event." Viktor said it as if it were obvious. "I cross-indexed it. Any move to alter the expiration threshold or delay a Coherence Audit triggers an automatic escalation to the External Review Board. The board has no Accord members on it. They can't be removed by Accord process. It's structurally outside the system it's designed to protect."

Sorokin was quiet for a moment.

"You've thought about all of them," he said finally. "Every way it could be broken."

"I've thought about most of them," Viktor said. "There are always failure modes I haven't imagined. That's why the threshold is sixty-three and not zero. The system doesn't need to be perfect. It needs to fail less catastrophically than the alternative."

Sorokin nodded slowly. Then: "And when it's your administration that hits the threshold?"

Viktor picked up his glass.

"That," he said, "is the test."\`
  }
];

const BOOK_LW_CHAPTERS = [
  {
    id: "lw-preface",
    title: "PREFACE — Before We Begin",
    content: \`This book does not promise peace.

That distinction matters. Most writing about inner peace is constructed around a promise — that if you follow the steps, complete the exercises, adopt the framework, the war inside you will cease. The noise will stop. The conflict will resolve.

This is not that book.

What this book is, is an honest examination of why the war exists — not as a malfunction, not as a character flaw, not as something that can be optimised away — but as a structural feature of how human beings are built to think about themselves and the distance between where they are and where they believe they should be.

The gap does not close by working harder.

It closes by understanding what the gap is actually made of.

I started writing this because I could not find the book that said what I needed to hear: that the difficulty is real, that it is not a sign of failure, and that the path through it is not around it but directly into it. Most of what I found was either clinically detached or artificially hopeful. Both of those positions are, in their own ways, a form of dishonesty.

I prefer honesty, even when it is uncomfortable. Especially then.

This book is twenty-three chapters long. There is a workbook companion at the back. The workbook is not optional. The concepts in these chapters are easy to understand and genuinely difficult to apply, and the only way to close that gap is to work with them — not just read about them.

One more thing: this book does not assume you are broken. It assumes you are at war, which is different. Broken things need to be repaired. People at war need to understand why the war started — and whether it was ever necessary.

Most of the time, it was not.

That is where we begin.\`
  },
  {
    id: "lw-ch1",
    title: "CHAPTER 1 — The Premise",
    content: \`The war began before you knew it was a war.

It began with the first moment you understood that there was a version of yourself that other people approved of — and a version that they did not. It began with the first time you modified your behaviour not because you wanted to but because you wanted the approval more than you wanted to be honest. It began, in other words, with a reasonable choice that had unreasonable consequences.

Every inner war has a moment of origin. Most of them are mundane. A child discovers that smiling gets a different response than crying. A teenager learns that a particular version of their personality is more socially viable than the actual one. A professional understands that certain thoughts, if expressed, will close doors. These are not tragedies. They are adaptations.

The problem is not the adaptation. The problem is the infrastructure that grows around it.

Because once you have established that there is an acceptable version of yourself and a version that is not, you have created the conditions for a permanent internal audit. At any given moment, the question is no longer simply "what do I want?" — it is "what do I want, filtered through the assessment of whether this want is acceptable, productive, consistent with my stated values, likely to result in positive external response, and indicative of the kind of person I am trying to be?"

That is not thinking. That is tribunal.

And tribunals are exhausting.

The first step to living without inner war is not the elimination of self-assessment. It is the recognition that the tribunal has been running continuously, often without your awareness, and that its verdicts have been shaping your behaviour in ways you have not consciously authorised.

You did not choose to go to war with yourself. But you have been fighting. And it is time to understand what you have been fighting over.\`
  },
  {
    id: "lw-ch2",
    title: "CHAPTER 2 — What the War Actually Is",
    content: \`The inner war is not a fight between your good self and your bad self.

This framing — which appears in almost every popular account of self-improvement, in religious traditions across cultures, in therapeutic language, in the kind of motivational content that circulates on social media — is seductive because it is simple. It divides the problem into two sides. It implies a winner and a loser. It suggests that the goal is victory.

It is also, in almost every practical sense, wrong.

The inner war is not between a higher self and a lower self. It is between the self that is and the self that you have decided you should already be.

That distinction is not semantic. It changes everything about how the conflict is structured, and therefore everything about what it would take to end it.

A fight between two selves can be resolved by one of them winning. A fight between what is and what should already be can never be resolved by winning — because the target moves. Every time you close the gap between where you are and where you think you should be, the expectation adjusts. The "should" recalibrates to account for the progress. The war continues at the new elevation.

This is why self-improvement, pursued without understanding this mechanism, often makes the war worse rather than better. You become more capable, more accomplished, more aligned with your stated values — and the internal critic becomes more sophisticated in proportion. The standard rises. The tribunal becomes more exacting. You are better in every measurable way and feel, somehow, further from enough.

The war is not about your failures. It is about your relationship to the concept of enough.

And until that relationship changes, the war does not end. It relocates.\`
  },
  {
    id: "lw-ch5",
    title: "CHAPTER 5 — The Responsibility Distinction",
    content: \`There is a difference between taking responsibility for your life and taking responsibility for every feeling in it.

This sounds obvious. Most people, if asked directly, would agree with it. And yet the way most people actually live suggests they have not made this distinction operational — they have accepted it as a sentence in a book and continued to hold themselves accountable for the full emotional weather of their existence as though feelings were failures rather than information.

Responsibility for your life means: the decisions you make, the actions you take, the patterns you repeat, the responses you choose when circumstances you did not choose arrive. These are within your domain. They are, in the meaningful sense, yours.

Responsibility for every feeling means: taking the arrival of anxiety as a sign that you are doing something wrong. Taking sadness as evidence of deficiency. Taking the presence of anger as a failure of self-mastery. This is not responsibility. This is punishment. And the thing it punishes you for — feeling — is not an error. It is simply what minds do.

The practical consequence of this distinction is significant. When you take responsibility only for what is actually yours — your responses, your choices, your patterns — the inner tribunal has a defined jurisdiction.

What it cannot do, once you have made this distinction clearly, is hold court over the weather.

Feelings are not verdicts. They are information.

The question is not: why am I feeling this?
The question is: what is this feeling telling me, and what, if anything, do I want to do about it?

All feelings are permissible.
The responses to them are where responsibility lives.\`
  }
];

const BOOK_LL_CHAPTERS = [
  {
    id: "ll-opening",
    title: "OPENING — Before You Call It Fine",
    content: \`There is a specific kind of exhaustion that comes not from doing too much, but from maintaining the performance of being okay when you are not.

It is different from physical tiredness. It is different from the honest fatigue that follows difficult work. It is the tiredness of holding a shape that doesn't fit — of existing slightly to the left of where you actually are, so that the gap between the official version and the real one doesn't become visible to anyone, including yourself.

Most of us are doing this more than we admit.

The performance has a name in different contexts: professionalism, maturity, resilience, keeping it together. All of these are real and sometimes necessary things. The problem is not the performance itself. The problem is when the performance becomes the only available mode — when you have forgotten how to step out of it even when you are alone, even when there is no audience, even when the only person who would benefit from your honesty is you.

This book is for the low-light version of things.

Not the cleaned-up version. Not the version you would describe to someone who was asking because they wanted reassurance rather than truth. The version that is there at 2 AM when you are not performing anything for anyone, and you can feel the actual shape of things — the actual contours of what is working and what is not, what you actually want and what you have been telling yourself you want because it seemed more reasonable.

Low light does not distort. It reveals.

What you see in low light is what you actually have. Not what you wish you had. Not what the optimistic morning version of you is going to have once you execute the plan. What you have now, in the actual present, with the actual resources available.

Looking at that clearly — without flinching, without immediately converting it into a to-do list, without the reflex of optimism that keeps the performance running — is harder than it sounds.

It is also, in my experience, the only way through.\`
  },
  {
    id: "ll-ch3",
    title: "CHAPTER 3 — The Honest Inventory",
    content: \`At some point, the question changes.

For a long time, the question is: how do I get from here to there? How do I close the gap between where I am and where I want to be? This is a reasonable question. It is the animating question behind most self-improvement thinking, most goal-setting practice, most therapeutic frameworks.

The question that eventually replaces it — if you are paying attention — is: is the "there" I am trying to reach actually mine?

Not in the sense of whether you deserve it. Not in the sense of whether it is achievable. In the more fundamental sense of: did you choose it? Or did you inherit it — from other people's expectations, from the ambient cultural assumptions about what a good life looks like, from the version of yourself you constructed in your twenties and have been executing against ever since?

An honest inventory is not a gratitude list. It is not a recounting of your blessings. It is a genuinely uncomfortable examination of what you are actually after — the real motivations, not the stated ones — and whether those motivations are coherent, sustainable, and yours in any meaningful sense.

Most people do not take this inventory because they are afraid of what it would reveal.

They are right to be afraid. It will reveal things.

The inventory usually shows at least some portion of your life being directed toward goals that were installed in you by others and that you have never seriously questioned — toward a self-concept that was formed in conditions that no longer apply, toward a version of success that you don't actually want but that you have become attached to as proof of something.

This is not a failure. This is almost universal.

The inventory is not an accusation. It is honest accounting. And honest accounting, even when it reveals losses you didn't know you had, is always better than the alternative.

The alternative is spending another decade in the wrong direction and calling it progress.\`
  },
  {
    id: "ll-closing",
    title: "CLOSING — What Stays",
    content: \`The things that stay in low light are the things that were real.

Not the things you performed. Not the things you constructed to manage other people's perceptions or your own. The things that persist when the performance drops — those are the load-bearing elements of your life. Everything else is facade.

This is useful to know. Not because the facade is worthless — presentation matters, context matters, the way you show up in the world matters — but because when you are trying to understand what is wrong, or what you actually want, or why you feel the way you feel, you have to start with what is structural.

You cannot fix the foundation by repainting the walls.

What this book has tried to offer is not a system for fixing things. It is a practice of honest looking. Of staying in the low-light version of your life long enough to see what is actually there, without the defensive reflex of immediately converting what you see into a plan.

Plans are useful. But plans built on an honest picture of where you are are entirely different from plans built on where you wish you were.

The first kind might work.
The second kind is just another performance.

See clearly. Start there.
That is, in the end, the whole of it.\`
  }
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Veiled Realm — Book I",
    description: "Aiden Valcrest was born with the Dreadful Eye — a genetic anomaly that lets him see what the Accord has erased. He can name the Forgotten. He can read what was unmade. In a near-future world governed by silence, he holds the document that built the entire system of control.",
    coverUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop", 
    excerpt: "Every world ends twice — first in memory, then in belief.",
    buyUrl: "https://example.com/book1",
    chapters: BOOK_1_CHAPTERS
  },
  {
    id: 2,
    title: "Echoes of the Shattered Dawn",
    subtitle: "Veiled Realm — Book II",
    description: "Cycle Year 312 After The Rewrite. The world has forgotten how to dream. Inside Vault 07, Elias Kaer watches memories being harvested — until a single red entry blinks among the blue archives. The Halo Witness flickers for the first time in three centuries.",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop",
    excerpt: "If you are reading this, the world still believes the lie.",
    buyUrl: "https://example.com/book2",
    chapters: BOOK_2_CHAPTERS
  },
  {
    id: 3,
    title: "The Eclipsed Oath",
    subtitle: "Veiled Realm — Book III",
    description: "The sky broke before Kael heard it scream. The Veil has fallen. The twin moons touch in pale fire. Across a world convulsing into memory, one man carries a name that can end everything — or begin it.",
    coverUrl: "https://images.unsplash.com/photo-1614728263952-84ea206f25ab?q=80&w=1974&auto=format&fit=crop",
    excerpt: "The sky broke before Kael heard it scream.",
    buyUrl: "https://example.com/book3",
    chapters: BOOK_3_CHAPTERS
  },
  {
    id: 4,
    title: "The Crimson Architect",
    subtitle: "Standalone Novel",
    description: "Viktor built the most sophisticated system of governance his world had ever seen. He also built its expiration date. In a state defined by the GRPI — a framework designed to terminate its own authority — Viktor is the coldest man in the room. And the most dangerous.",
    coverUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Authority must expire. Responsibility must not.",
    buyUrl: "https://example.com/book4",
    chapters: BOOK_CA_CHAPTERS
  },
  {
    id: 5,
    title: "Living Without Inner War",
    subtitle: "Philosophy / Self-Help",
    description: "The inner war is not between your good self and your bad self. It is between the self that is and the self you have decided you should already be. 23 chapters. No noise. No false promises.",
    coverUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop",
    excerpt: "The war is not about your failures. It is about your relationship to the concept of enough.",
    buyUrl: "https://example.com/book5",
    chapters: BOOK_LW_CHAPTERS
  },
  {
    id: 6,
    title: "Low Light, Clear Eyes",
    subtitle: "Essay / Manifesto",
    description: "Not a manual. Not a roadmap. A collection of honest observations for anyone who has grown tired of pretending the hard parts are not hard — and is ready to look at them directly.",
    coverUrl: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Low light does not distort. It reveals.",
    buyUrl: "https://example.com/book6",
    chapters: BOOK_LL_CHAPTERS
  }
];

export const STARTER_PACK: Book = {
  id: 99,
  title: "IMPERIALX: The Starter Pack",
  subtitle: "The Complete Collection Preview",
  description: "Experience the beginning of the end. Contains the Prologues and first chapters of all works.",
  coverUrl: "https://images.unsplash.com/photo-1532012197367-bb83d53ba547?q=80&w=1000&auto=format&fit=crop",
  excerpt: "Six books. Three genres. One vision.",
  buyUrl: "https://imperialx.com/bundle",
  chapters: [
    { id: "sep-b1", title: "VEILED REALM I", content: "", isSeparator: true },
    ...BOOK_1_CHAPTERS,
    { id: "sep-b2", title: "VEILED REALM II", content: "", isSeparator: true },
    ...BOOK_2_CHAPTERS,
    { id: "sep-b3", title: "VEILED REALM III", content: "", isSeparator: true },
    ...BOOK_3_CHAPTERS,
    { id: "sep-ca", title: "THE CRIMSON ARCHITECT", content: "", isSeparator: true },
    ...BOOK_CA_CHAPTERS,
    { id: "sep-lw", title: "LIVING WITHOUT INNER WAR", content: "", isSeparator: true },
    ...BOOK_LW_CHAPTERS,
    { id: "sep-ll", title: "LOW LIGHT, CLEAR EYES", content: "", isSeparator: true },
    ...BOOK_LL_CHAPTERS
  ]
};

export const TIMELINE_EPOCHS: Epoch[] = [
  { id: 1, title: "The Accord Is Founded", year: "Age I", description: "The Halo Witness opens its eye for the first time over a unified realm. The Belief Codex is signed. Memory becomes a governed resource. Citizens are not told that the previous world existed — they are simply given a better one, with no record of the transition. The man who designed the system — the First — erases himself as the final act of the oath. No one who was present survives to contradict the official record. The age of forgetting begins not with violence but with paperwork." },
  { id: 2, title: "The Memory Economy", year: "Age II", description: "Over three centuries, the Accord refines memory harvesting from crude political tool into full economic system. The Familiar system is introduced as a gift to all citizens above a certain social tier. The wealthy begin purchasing other people's experiences — their grief, their joy, their transcendence — as commodities. The Forgotten become a permanent underclass: people whose official existence has been deleted, who continue to live in the margins of the city, visible to no one, recorded by nothing, surviving on the economy of the already-erased." },
  { id: 3, title: "The Hidden Blades Emerge", year: "Age III", description: "A network of archivists, former Accord officials, memory-carriers, and people who have seen their own names erased begins operating in the margins. They call themselves the Hidden Blades — not because they fight, but because the most dangerous things are the ones you cannot see coming. Their archives are not digital. They exist in physical media, in dead drops, in the encoded tattoos of their members, in the memory fragments of people who have agreed to become living records. The Accord knows they exist. It cannot find them. Not yet." },
  { id: 4, title: "Kael's First Cycle Begins", year: "Age IV", description: "A boy with the Dreadful Eye is born in a city that will be erased before he turns twelve. The Accord flags the anomaly immediately. The Halo Witness begins watching specifically. Three timelines converge on a single question: what do you do with a truth that cannot be killed? The Accord's answer is the Third Erasure — a mass deletion event larger than anything it has attempted before. It does not work. This is where the trilogy begins." },
  { id: 5, title: "The Truth Surfaces", year: "Current Era", description: "The events of the trilogy. The Belief Codex's original draft is recovered by the Hidden Blades. The Halo Witness fractures. The Accord burns — not from external attack but from the structural failure of its own information architecture, under the weight of seven centuries of contradiction it could no longer process. Seven hundred years of memory the Accord tried to destroy returns — all at once — to everyone who was supposed to have forgotten it. The Eclipsed Oath awakens. The Mirrorseed blooms. What comes after is not written." }
];

export const LORE_ITEMS: LoreItem[] = [
  { id: 'l1', term: 'The Halo Witness', definition: 'A god that watches everything and forgets nothing — except what it is told to. It is an infrastructure system — a surveillance mechanism so sophisticated that it became, over three centuries, functionally indistinguishable from a deity. It orbits the realm continuously. It observes. It catalogues.' },
  { id: 'l2', term: 'The Belief Codex', definition: 'The founding document of the Accord. And the most dangerous piece of legal fiction ever committed to paper. It is taught in every school and cited in every legal proceeding. It is the nominal reason the Halo Witness was commissioned.' },
  { id: 'l3', term: 'The Hidden Blades', definition: 'Not soldiers. The most dangerous kind of resistance: people who write things down. A network of archivists, former Accord officials, and memory-carriers. Their weapon is the act of record-keeping in a world that makes record-keeping illegal.' },
  { id: 'l4', term: 'The Dreadful Eye', definition: 'A genetic anomaly that lets its bearer see what the Accord has erased. It allows its bearer to perceive the negative space in the Accord\\'s information architecture — the gaps where memories used to be before the Halo Witness removed them.' },
  { id: 'l5', term: 'The Veil', definition: 'A membrane between truth and memory. Once stable. Now fractured. It is a condition — a state of equilibrium between the actual history of the Veiled Realm and the curated version the Accord distributes through the Belief Codex and the Halo Witness.' },
  { id: 'l6', term: 'The Accord', definition: 'The governing body of the Veiled Realm. Operates through seven functional positions. Maintains power through forgetting, not force. Citizens of the Accord are not oppressed — they are comfortable, safe, and genuinely unaware that anything is missing.' },
  { id: 'l7', term: 'Memory as Currency', definition: 'In the Veiled Realm, memory is not metaphorically valuable. It is literally tradeable. The Harmony Engine refines raw memories into transferable experience packets. The wealthy purchase other people\\'s lives.' },
  { id: 'l8', term: 'The Familiar System', definition: 'Bonded companions presented as protectors. Loyal to two masters simultaneously. They genuinely protect their charges. They also report everything to the Accord\\'s monitoring architecture.' },
  { id: 'l9', term: 'The Riftborn', definition: 'Creatures born from forgotten truths. Half thought, half reflection. They show you what you have tried to forget. They emerge at the points where the Veil is thinnest.' },
  { id: 'l10', term: 'The Mirrorseed', definition: 'Not born of Earth. A witness left behind. When too many lies accumulate, it blooms — and what blooms cannot be un-seen. It is a failsafe: when the ratio of constructed narrative to actual history reaches a certain threshold, the Mirrorseed blooms.' }
];

export const CHARACTERS: Character[] = [
  { id: 'ch1', name: 'Kael Vevryn', role: 'The Marked', quote: "Once erased. Now the last thing the Accord can afford to remember.", books: "Veiled Realm Trilogy (All Three)", shortQuote: "Once erased from existence. Now marked by the Oath. Wields Veydran — a blade that hisses where it touches the ground. He has lived this cycle before. He does not remember how it ended. Holds memories the universe tried to forget, and will not put them down." },
  { id: 'ch2', name: 'Lyra / Lyris', role: 'The Witness', quote: "Don't look at me like I'm disappearing.", books: "Veiled Realm Trilogy (All Three)", shortQuote: "The First Witness reborn. Host of the Shard of Eidryn. She sometimes leaves no footprints. Sometimes she leaves too many — as though fragments of past versions of her walk beside the real one. Split between who she was and who the Oath needs her to become. Holding on. Barely." },
  { id: 'ch3', name: 'Nyra', role: 'The Shadow', quote: "She is what Kael refused to become. She is what he almost was.", books: "Veiled Realm Trilogy (Books II and III)", shortQuote: "Kael's shadow and his unchosen consequence. A fragment of the Veil given hunger and thought. She did not choose to exist. She did not choose to be what she is. She chose only one thing — and the trilogy turns on what that choice was." },
  { id: 'ch4', name: 'Eryndor', role: 'The Architect', quote: "He knows the ending. He keeps it to himself. Every time.", books: "Veiled Realm Trilogy (All Three)", shortQuote: "Kael's former mentor — half flesh, half shadow. Bound to the Oath's awakening. Forgot three times. Returned every time. The only person in the trilogy who fully understands what the Eclipsed Oath is — and who has chosen, on each of his three returns, not to say." },
  { id: 'ch5', name: 'Chloe Valcrest', role: 'The Anchor', quote: "She wasn't chosen. She chose.", books: "Veiled Realm — Book I", shortQuote: "Not the strongest. Not the fastest. Not the chosen one. But she believed — in him, in memory, in the fragile thing called truth. His last anchor to a world slipping away. She is the reason he became a mirror instead of a weapon. Whether that was the right outcome is a question the trilogy does not answer cleanly." },
  { id: 'ch6', name: 'Elias Kaer', role: 'The Archivist', quote: "He worked for the system that erased people. Then he opened a file.", books: "Veiled Realm — Book II", shortQuote: "He worked for the system that erased people. He catalogued their memories. He filed their dreams. He made the forgetting efficient. Then one night, a file blinked red, and he opened it. That choice — ten seconds of curiosity against eleven years of complicity — is the axis on which Book II turns." },
];

export const DOWNLOADS: Download[] = [
  { id: 'd1', title: 'Low Light, Clear Eyes (Manifesto)', type: 'PDF', size: '2.4 MB' },
  { id: 'd2', title: 'Wallpaper Pack (Mobile)', type: 'HD Image', size: '12 MB' },
  { id: 'd3', title: 'Wallpaper Pack (Desktop)', type: '4K Image', size: '28 MB' },
];

export const BIO_TEXT = "Imperial X is the pen name of author Likhith CK, whose debut catalog spans dark fantasy, speculative political fiction, and raw self-help — linked by a single preoccupation: the relationship between power and the people it erases. The Veiled Realm trilogy began with a question that could not be answered any other way: what happens when the record of your existence is deleted? Not your body. Not your presence. The record. The names people call you. The memories they carry of you. The paper trail that proves you were real. The answer became three books and a world. The Crimson Architect came from a different question: can a system of governance be designed so that it is structurally incapable of forgetting its own purpose? Viktor's answer is the GRPI. The novel is a study of what happens when someone builds power with a conscience — and whether the people inside the system can tolerate it. Living Without Inner War and Low Light, Clear Eyes are personal. They were written during the same period as the trilogy, and they are honest in a way that fiction allows you not to be. They do not promise resolution. They are honest about the difficulty. Off the page: myth structures, dream logic, governance theory, the history of information control. The preoccupation is always the same. Memory. Power. What survives when both fail.";
export const BIO_QUOTE = "I don't write about heroes. I write about people who survive when the world forgets them.";
`;

fs.writeFileSync('./constants.ts', content);
console.log('constants.ts generated successfully.');
