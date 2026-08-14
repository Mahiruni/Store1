import type { Product } from "./types";
import { KINROW_ASSETS } from "./assets";

const demo = (
  handle: string,
  title: string,
  description: string,
  price: string,
  image: string,
  altText: string,
  tags: string[],
): Product => ({
  id: `preview:${handle}`,
  handle,
  title,
  description,
  availableForSale: false,
  tags,
  featuredImage: { url: image, altText },
  price: { amount: price, currencyCode: "USD" },
  variants: [
    {
      id: null,
      title: "Default Title",
      availableForSale: false,
      price: { amount: price, currencyCode: "USD" },
      selectedOptions: [],
    },
  ],
  isDemo: true,
});

export const demoProducts: Product[] = [
  demo(
    "axis-resistance-kit",
    "Axis Resistance Kit",
    "A compact resistance system for presses, rows, hinges, squats, and controlled mobility work—without dedicating a room to equipment.",
    "129.00",
    KINROW_ASSETS.axisKit,
    "Axis resistance kit components arranged on a warm ivory background",
    ["Strength", "Compact", "Best seller"],
  ),
  demo(
    "form-fabric-loops",
    "Form Fabric Loops",
    "Three woven loops designed for lower-body activation, controlled strength, and mobility work without the sharp feel of thin bands.",
    "39.00",
    KINROW_ASSETS.loopSet,
    "Three neutral fabric resistance loops with a cork mobility ball",
    ["Mobility", "Fabric", "Compact"],
  ),
  demo(
    "anchor-ankle-weights",
    "Anchor Ankle Weights",
    "Soft-profile ankle weights for adding measured resistance to mat work and intentional walking sessions.",
    "59.00",
    KINROW_ASSETS.hero,
    "Charcoal ankle weights beside compact home movement equipment",
    ["Strength", "Walking", "Wearable"],
  ),
  demo(
    "release-mobility-set",
    "Release Mobility Set",
    "A simple pairing for targeted pressure and post-session mobility, sized to travel and store easily.",
    "34.00",
    KINROW_ASSETS.loopSet,
    "Natural cork mobility ball beside neutral resistance loops",
    ["Recovery", "Cork", "Travel ready"],
  ),
  demo(
    "arc-stretch-strap",
    "Arc Stretch Strap",
    "A numbered-loop stretch strap that makes reach and progression easier to repeat during warm-ups and cooldowns.",
    "29.00",
    KINROW_ASSETS.lifestyle,
    "Controlled movement session in a calm, bright apartment",
    ["Mobility", "Beginner", "Compact"],
  ),
  demo(
    "ground-foldable-mat",
    "Ground Foldable Mat",
    "A supportive folding surface for strength, mobility, and recovery work in rooms that need to change function quickly.",
    "89.00",
    KINROW_ASSETS.hero,
    "Folded oat exercise mat with compact home movement tools",
    ["Strength", "Mobility", "Foldable"],
  ),
];
