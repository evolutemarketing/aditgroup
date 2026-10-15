/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '180';

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsMouse}
 * @constant
 */
const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };

/**
 * Represents touch interaction types in context of controls.
 *
 * @type {ConstantsTouch}
 * @constant
 */
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };

/**
 * Disables face culling.
 *
 * @type {number}
 * @constant
 */
const CullFaceNone = 0;

/**
 * Culls back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceBack = 1;

/**
 * Culls front faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFront = 2;

/**
 * Culls both front and back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFrontBack = 3;

/**
 * Gives unfiltered shadow maps - fastest, but lowest quality.
 *
 * @type {number}
 * @constant
 */
const BasicShadowMap = 0;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm.
 *
 * @type {number}
 * @constant
 */
const PCFShadowMap = 1;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm with
 * better soft shadows especially when using low-resolution shadow maps.
 *
 * @type {number}
 * @constant
 */
const PCFSoftShadowMap = 2;

/**
 * Filters shadow maps using the Variance Shadow Map (VSM) algorithm.
 * When using VSMShadowMap all shadow receivers will also cast shadows.
 *
 * @type {number}
 * @constant
 */
const VSMShadowMap = 3;

/**
 * Only front faces are rendered.
 *
 * @type {number}
 * @constant
 */
const FrontSide = 0;

/**
 * Only back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const BackSide = 1;

/**
 * Both front and back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const DoubleSide = 2;

/**
 * No blending is performed which effectively disables
 * alpha transparency.
 *
 * @type {number}
 * @constant
 */
const NoBlending = 0;

/**
 * The default blending.
 *
 * @type {number}
 * @constant
 */
const NormalBlending = 1;

/**
 * Represents additive blending.
 *
 * @type {number}
 * @constant
 */
const AdditiveBlending = 2;

/**
 * Represents subtractive blending.
 *
 * @type {number}
 * @constant
 */
const SubtractiveBlending = 3;

/**
 * Represents multiply blending.
 *
 * @type {number}
 * @constant
 */
const MultiplyBlending = 4;

/**
 * Represents custom blending.
 *
 * @type {number}
 * @constant
 */
const CustomBlending = 5;

/**
 * A `source + destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const AddEquation = 100;

/**
 * A `source - destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const SubtractEquation = 101;

/**
 * A `destination - source` blending equation.
 *
 * @type {number}
 * @constant
 */
const ReverseSubtractEquation = 102;

/**
 * A blend equation that uses the minimum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MinEquation = 103;

/**
 * A blend equation that uses the maximum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MaxEquation = 104;

/**
 * Multiplies all colors by `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroFactor = 200;

/**
 * Multiplies all colors by `1`.
 *
 * @type {number}
 * @constant
 */
const OneFactor = 201;

/**
 * Multiplies all colors by the source colors.
 *
 * @type {number}
 * @constant
 */
const SrcColorFactor = 202;

/**
 * Multiplies all colors by `1` minus each source color.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcColorFactor = 203;

/**
 * Multiplies all colors by the source alpha value.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaFactor = 204;

/**
 * Multiplies all colors by 1 minus the source alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcAlphaFactor = 205;

/**
 * Multiplies all colors by the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const DstAlphaFactor = 206;

/**
 * Multiplies all colors by `1` minus the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstAlphaFactor = 207;

/**
 * Multiplies all colors by the destination color.
 *
 * @type {number}
 * @constant
 */
const DstColorFactor = 208;

/**
 * Multiplies all colors by `1` minus each destination color.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstColorFactor = 209;

/**
 * Multiplies the RGB colors by the smaller of either the source alpha
 * value or the value of `1` minus the destination alpha value. The alpha
 * value is multiplied by `1`.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaSaturateFactor = 210;

/**
 * Multiplies all colors by a constant color.
 *
 * @type {number}
 * @constant
 */
const ConstantColorFactor = 211;

/**
 * Multiplies all colors by `1` minus a constant color.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantColorFactor = 212;

/**
 * Multiplies all colors by a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const ConstantAlphaFactor = 213;

/**
 * Multiplies all colors by 1 minus a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantAlphaFactor = 214;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverDepth = 0;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysDepth = 1;

/**
 * Pass if the incoming value is less than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessDepth = 2;

/**
 * Pass if the incoming value is less than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessEqualDepth = 3;

/**
 * Pass if the incoming value equals the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const EqualDepth = 4;

/**
 * Pass if the incoming value is greater than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualDepth = 5;

/**
 * Pass if the incoming value is greater than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterDepth = 6;

/**
 * Pass if the incoming value is not equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const NotEqualDepth = 7;

/**
 * Multiplies the environment map color with the surface color.
 *
 * @type {number}
 * @constant
 */
const MultiplyOperation = 0;

/**
 * Uses reflectivity to blend between the two colors.
 *
 * @type {number}
 * @constant
 */
const MixOperation = 1;

/**
 * Adds the two colors.
 *
 * @type {number}
 * @constant
 */
const AddOperation = 2;

/**
 * No tone mapping is applied.
 *
 * @type {number}
 * @constant
 */
const NoToneMapping = 0;

/**
 * Linear tone mapping.
 *
 * @type {number}
 * @constant
 */
const LinearToneMapping = 1;

/**
 * Reinhard tone mapping.
 *
 * @type {number}
 * @constant
 */
const ReinhardToneMapping = 2;

/**
 * Cineon tone mapping.
 *
 * @type {number}
 * @constant
 */
const CineonToneMapping = 3;

/**
 * ACES Filmic tone mapping.
 *
 * @type {number}
 * @constant
 */
const ACESFilmicToneMapping = 4;

/**
 * Custom tone mapping.
 *
 * Expects a custom implementation by modifying shader code of the material's fragment shader.
 *
 * @type {number}
 * @constant
 */
const CustomToneMapping = 5;

/**
 * AgX tone mapping.
 *
 * @type {number}
 * @constant
 */
const AgXToneMapping = 6;

/**
 * Neutral tone mapping.
 *
 * Implementation based on the Khronos 3D Commerce Group standard tone mapping.
 *
 * @type {number}
 * @constant
 */
const NeutralToneMapping = 7;

/**
 * The skinned mesh shares the same world space as the skeleton.
 *
 * @type {string}
 * @constant
 */
const AttachedBindMode = 'attached';

/**
 * The skinned mesh does not share the same world space as the skeleton.
 * This is useful when a skeleton is shared across multiple skinned meshes.
 *
 * @type {string}
 * @constant
 */
const DetachedBindMode = 'detached';

/**
 * Maps textures using the geometry's UV coordinates.
 *
 * @type {number}
 * @constant
 */
const UVMapping = 300;

/**
 * Reflection mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeReflectionMapping = 301;

/**
 * Refraction mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeRefractionMapping = 302;

/**
 * Reflection mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularReflectionMapping = 303;

/**
 * Refraction mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularRefractionMapping = 304;

/**
 * Reflection mapping for PMREM textures.
 *
 * @type {number}
 * @constant
 */
const CubeUVReflectionMapping = 306;

/**
 * The texture will simply repeat to infinity.
 *
 * @type {number}
 * @constant
 */
const RepeatWrapping = 1000;

/**
 * The last pixel of the texture stretches to the edge of the mesh.
 *
 * @type {number}
 * @constant
 */
const ClampToEdgeWrapping = 1001;

/**
 * The texture will repeats to infinity, mirroring on each repeat.
 *
 * @type {number}
 * @constant
 */
const MirroredRepeatWrapping = 1002;

/**
 * Returns the value of the texture element that is nearest (in Manhattan distance)
 * to the specified texture coordinates.
 *
 * @type {number}
 * @constant
 */
const NearestFilter = 1003;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the `NearestFilter` criterion (the texel nearest to the center of the pixel)
 * to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the `NearestFilter` criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005; // legacy

/**
 * Returns the weighted average of the four texture elements that are closest to the specified
 * texture coordinates, and can include items wrapped or repeated from other parts of a texture,
 * depending on the values of `wrapS` and `wrapT`, and on the exact mapping.
 *
 * @type {number}
 * @constant
 */
const LinearFilter = 1006;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured and uses
 * the `LinearFilter` criterion (a weighted average of the four texels that are closest to the
 * center of the pixel) to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and uses
 * the `LinearFilter` criterion to produce a texture value from each mipmap. The final texture value
 * is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008; // legacy

/**
 * An unsigned byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedByteType = 1009;

/**
 * A byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const ByteType = 1010;

/**
 * A short data type for textures.
 *
 * @type {number}
 * @constant
 */
const ShortType = 1011;

/**
 * An unsigned short data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShortType = 1012;

/**
 * An int data type for textures.
 *
 * @type {number}
 * @constant
 */
const IntType = 1013;

/**
 * An unsigned int data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedIntType = 1014;

/**
 * A float data type for textures.
 *
 * @type {number}
 * @constant
 */
const FloatType = 1015;

/**
 * A half float data type for textures.
 *
 * @type {number}
 * @constant
 */
const HalfFloatType = 1016;

/**
 * An unsigned short 4_4_4_4 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort4444Type = 1017;

/**
 * An unsigned short 5_5_5_1 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort5551Type = 1018;

/**
 * An unsigned int 24_8 data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt248Type = 1020;

/**
 * An unsigned int 5_9_9_9 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt5999Type = 35902;

/**
 * An unsigned int 10_11_11 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt101111Type = 35899;

/**
 * Discards the red, green and blue components and reads just the alpha component.
 *
 * @type {number}
 * @constant
 */
const AlphaFormat = 1021;

/**
 * Discards the alpha component and reads the red, green and blue component.
 *
 * @type {number}
 * @constant
 */
const RGBFormat = 1022;

/**
 * Reads the red, green, blue and alpha components.
 *
 * @type {number}
 * @constant
 */
const RGBAFormat = 1023;

/**
 * Reads each element as a single depth value, converts it to floating point, and clamps to the range `[0,1]`.
 *
 * @type {number}
 * @constant
 */
const DepthFormat = 1026;

/**
 * Reads each element is a pair of depth and stencil values. The depth component of the pair is interpreted as
 * in `DepthFormat`. The stencil component is interpreted based on the depth + stencil internal format.
 *
 * @type {number}
 * @constant
 */
const DepthStencilFormat = 1027;

/**
 * Discards the green, blue and alpha components and reads just the red component.
 *
 * @type {number}
 * @constant
 */
const RedFormat = 1028;

/**
 * Discards the green, blue and alpha components and reads just the red component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RedIntegerFormat = 1029;

/**
 * Discards the alpha, and blue components and reads the red, and green components.
 *
 * @type {number}
 * @constant
 */
const RGFormat = 1030;

/**
 * Discards the alpha, and blue components and reads the red, and green components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGIntegerFormat = 1031;

/**
 * Discards the alpha component and reads the red, green and blue component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBIntegerFormat = 1032;

/**
 * Reads the red, green, blue and alpha components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBAIntegerFormat = 1033;

/**
 * A DXT1-compressed image in an RGB image format.
 *
 * @type {number}
 * @constant
 */
const RGB_S3TC_DXT1_Format = 33776;

/**
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT1_Format = 33777;

/**
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT3_Format = 33778;

/**
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3
 * compression in how the alpha compression is done.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT5_Format = 33779;

/**
 * PVRTC RGB compression in 4-bit mode. One block for each 4Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_4BPPV1_Format = 35840;

/**
 * PVRTC RGB compression in 2-bit mode. One block for each 8Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_2BPPV1_Format = 35841;

/**
 * PVRTC RGBA compression in 4-bit mode. One block for each 4Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_4BPPV1_Format = 35842;

/**
 * PVRTC RGBA compression in 2-bit mode. One block for each 8Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_2BPPV1_Format = 35843;

/**
 * ETC1 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC1_Format = 36196;

/**
 * ETC2 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC2_Format = 37492;

/**
 * ETC2 RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ETC2_EAC_Format = 37496;

/**
 * ASTC RGBA 4x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_4x4_Format = 37808;

/**
 * ASTC RGBA 5x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x4_Format = 37809;

/**
 * ASTC RGBA 5x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x5_Format = 37810;

/**
 * ASTC RGBA 6x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x5_Format = 37811;

/**
 * ASTC RGBA 6x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x6_Format = 37812;

/**
 * ASTC RGBA 8x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x5_Format = 37813;

/**
 * ASTC RGBA 8x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x6_Format = 37814;

/**
 * ASTC RGBA 8x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x8_Format = 37815;

/**
 * ASTC RGBA 10x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x5_Format = 37816;

/**
 * ASTC RGBA 10x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x6_Format = 37817;

/**
 * ASTC RGBA 10x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x8_Format = 37818;

/**
 * ASTC RGBA 10x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x10_Format = 37819;

/**
 * ASTC RGBA 12x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x10_Format = 37820;

/**
 * ASTC RGBA 12x12 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x12_Format = 37821;

/**
 * BPTC RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_BPTC_Format = 36492;

/**
 * BPTC Signed RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_SIGNED_Format = 36494;

/**
 * BPTC Unsigned RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_UNSIGNED_Format = 36495;

/**
 * RGTC1 Red format.
 *
 * @type {number}
 * @constant
 */
const RED_RGTC1_Format = 36283;

/**
 * RGTC1 Signed Red format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_RGTC1_Format = 36284;

/**
 * RGTC2 Red Green format.
 *
 * @type {number}
 * @constant
 */
const RED_GREEN_RGTC2_Format = 36285;

/**
 * RGTC2 Signed Red Green format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_GREEN_RGTC2_Format = 36286;

/**
 * Animations are played once.
 *
 * @type {number}
 * @constant
 */
const LoopOnce = 2200;

/**
 * Animations are played with a chosen number of repetitions, each time jumping from
 * the end of the clip directly to its beginning.
 *
 * @type {number}
 * @constant
 */
const LoopRepeat = 2201;

/**
 * Animations are played with a chosen number of repetitions, alternately playing forward
 * and backward.
 *
 * @type {number}
 * @constant
 */
const LoopPingPong = 2202;

/**
 * Discrete interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateDiscrete = 2300;

/**
 * Linear interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateLinear = 2301;

/**
 * Smooth interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateSmooth = 2302;

/**
 * Zero curvature ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroCurvatureEnding = 2400;

/**
 * Zero slope ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroSlopeEnding = 2401;

/**
 * Wrap around ending for animations.
 *
 * @type {number}
 * @constant
 */
const WrapAroundEnding = 2402;

/**
 * Default animation blend mode.
 *
 * @type {number}
 * @constant
 */
const NormalAnimationBlendMode = 2500;

/**
 * Additive animation blend mode. Can be used to layer motions on top of
 * each other to build complex performances from smaller re-usable assets.
 *
 * @type {number}
 * @constant
 */
const AdditiveAnimationBlendMode = 2501;

/**
 * For every three vertices draw a single triangle.
 *
 * @type {number}
 * @constant
 */
const TrianglesDrawMode = 0;

/**
 * For each vertex draw a triangle from the last three vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleStripDrawMode = 1;

/**
 * For each vertex draw a triangle from the first vertex and the last two vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleFanDrawMode = 2;

/**
 * Basic depth packing.
 *
 * @type {number}
 * @constant
 */
const BasicDepthPacking = 3200;

/**
 * A depth value is packed into 32 bit RGBA.
 *
 * @type {number}
 * @constant
 */
const RGBADepthPacking = 3201;

/**
 * A depth value is packed into 24 bit RGB.
 *
 * @type {number}
 * @constant
 */
const RGBDepthPacking = 3202;

/**
 * A depth value is packed into 16 bit RG.
 *
 * @type {number}
 * @constant
 */
const RGDepthPacking = 3203;

/**
 * Normal information is relative to the underlying surface.
 *
 * @type {number}
 * @constant
 */
const TangentSpaceNormalMap = 0;

/**
 * Normal information is relative to the object orientation.
 *
 * @type {number}
 * @constant
 */
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.

/**
 * No color space.
 *
 * @type {string}
 * @constant
 */
const NoColorSpace = '';

/**
 * sRGB color space.
 *
 * @type {string}
 * @constant
 */
const SRGBColorSpace = 'srgb';

/**
 * sRGB-linear color space.
 *
 * @type {string}
 * @constant
 */
const LinearSRGBColorSpace = 'srgb-linear';

/**
 * Linear transfer function.
 *
 * @type {string}
 * @constant
 */
const LinearTransfer = 'linear';

/**
 * sRGB transfer function.
 *
 * @type {string}
 * @constant
 */
const SRGBTransfer = 'srgb';

/**
 * Sets the stencil buffer value to `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroStencilOp = 0;

/**
 * Keeps the current value.
 *
 * @type {number}
 * @constant
 */
const KeepStencilOp = 7680;

/**
 * Sets the stencil buffer value to the specified reference value.
 *
 * @type {number}
 * @constant
 */
const ReplaceStencilOp = 7681;

/**
 * Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementStencilOp = 7682;

/**
 * Decrements the current stencil buffer value. Clamps to `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementStencilOp = 7683;

/**
 * Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing
 * the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementWrapStencilOp = 34055;

/**
 * Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable
 * unsigned value when decrementing a stencil buffer value of `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementWrapStencilOp = 34056;

/**
 * Inverts the current stencil buffer value bitwise.
 *
 * @type {number}
 * @constant
 */
const InvertStencilOp = 5386;

/**
 * Will never return true.
 *
 * @type {number}
 * @constant
 */
const NeverStencilFunc = 512;

/**
 * Will return true if the stencil reference value is less than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessStencilFunc = 513;

/**
 * Will return true if the stencil reference value is equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const EqualStencilFunc = 514;

/**
 * Will return true if the stencil reference value is less than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessEqualStencilFunc = 515;

/**
 * Will return true if the stencil reference value is greater than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterStencilFunc = 516;

/**
 * Will return true if the stencil reference value is not equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const NotEqualStencilFunc = 517;

/**
 * Will return true if the stencil reference value is greater than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualStencilFunc = 518;

/**
 * Will always return true.
 *
 * @type {number}
 * @constant
 */
const AlwaysStencilFunc = 519;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverCompare = 512;

/**
 * Pass if the incoming value is less than the texture value.
 *
 * @type {number}
 * @constant
 */
const LessCompare = 513;

/**
 * Pass if the incoming value equals the texture value.
 *
 * @type {number}
 * @constant
 */
const EqualCompare = 514;

/**
 * Pass if the incoming value is less than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const LessEqualCompare = 515;

/**
 * Pass if the incoming value is greater than the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterCompare = 516;

/**
 * Pass if the incoming value is not equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const NotEqualCompare = 517;

/**
 * Pass if the incoming value is greater than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualCompare = 518;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysCompare = 519;

/**
 * The contents are intended to be specified once by the application, and used many
 * times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticDrawUsage = 35044;

/**
 * The contents are intended to be respecified repeatedly by the application, and
 * used many times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicDrawUsage = 35048;

/**
 * The contents are intended to be specified once by the application, and used at most
 * a few times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamDrawUsage = 35040;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const StaticReadUsage = 35045;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const DynamicReadUsage = 35049;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried at most
 * a few times by the application
 *
 * @type {number}
 * @constant
 */
const StreamReadUsage = 35041;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used many times as
 * the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticCopyUsage = 35046;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and used many times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicCopyUsage = 35050;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used at most a few times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamCopyUsage = 35042;

/**
 * GLSL 1 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL1 = '100';

/**
 * GLSL 3 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL3 = '300 es';

/**
 * WebGL coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGLCoordinateSystem = 2000;

/**
 * WebGPU coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGPUCoordinateSystem = 2001;

/**
 * Represents the different timestamp query types.
 *
 * @type {ConstantsTimestampQuery}
 * @constant
 */
const TimestampQuery = {
	COMPUTE: 'compute',
	RENDER: 'render'
};

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsInterpolationSamplingType}
 * @constant
 */
const InterpolationSamplingType = {
	PERSPECTIVE: 'perspective',
	LINEAR: 'linear',
	FLAT: 'flat'
};

/**
 * Represents the different interpolation sampling modes.
 *
 * @type {ConstantsInterpolationSamplingMode}
 * @constant
 */
const InterpolationSamplingMode = {
	NORMAL: 'normal',
	CENTROID: 'centroid',
	SAMPLE: 'sample',
	FIRST: 'first',
	EITHER: 'either'
};

/**
 * This type represents mouse buttons and interaction types in context of controls.
 *
 * @typedef {Object} ConstantsMouse
 * @property {number} MIDDLE - The left mouse button.
 * @property {number} LEFT - The middle mouse button.
 * @property {number} RIGHT - The right mouse button.
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} DOLLY - A dolly interaction.
 * @property {number} PAN - A pan interaction.
 **/

/**
 * This type represents touch interaction types in context of controls.
 *
 * @typedef {Object} ConstantsTouch
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} PAN - A pan interaction.
 * @property {number} DOLLY_PAN - The dolly-pan interaction.
 * @property {number} DOLLY_ROTATE - A dolly-rotate interaction.
 **/

/**
 * This type represents the different timestamp query types.
 *
 * @typedef {Object} ConstantsTimestampQuery
 * @property {string} COMPUTE - A `compute` timestamp query.
 * @property {string} RENDER - A `render` timestamp query.
 **/

/**
 * Represents the different interpolation sampling types.
 *
 * @typedef {Object} ConstantsInterpolationSamplingType
 * @property {string} PERSPECTIVE - Perspective-correct interpolation.
 * @property {string} LINEAR - Linear interpolation.
 * @property {string} FLAT - Flat interpolation.
 */

/**
 * Represents the different interpolation sampling modes.
 *
 * @typedef {Object} ConstantsInterpolationSamplingMode
 * @property {string} NORMAL - Normal sampling mode.
 * @property {string} CENTROID - Centroid sampling mode.
 * @property {string} SAMPLE - Sample-specific sampling mode.
 * @property {string} FIRST - Flat interpolation using the first vertex.
 * @property {string} EITHER - Flat interpolation using either vertex.
 */

/**
 * This modules allows to dispatch event objects on custom JavaScript objects.
 *
 * Main repository: [eventdispatcher.js]{@link https://github.com/mrdoob/eventdispatcher.js/}
 *
 * Code Example:
 * ```js
 * class Car extends EventDispatcher {
 * 	start() {
 *		this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
 *	}
 *};
 *
 * // Using events with the custom object
 * const car = new Car();
 * car.addEventListener( 'start', function ( event ) {
 * 	alert( event.message );
 * } );
 *
 * car.start();
 * ```
 */
class EventDispatcher {

	/**
	 * Adds the given event listener to the given event type.
	 *
	 * @param {string} type - The type of event to listen to.
	 * @param {Function} listener - The function that gets called when the event is fired.
	 */
	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === -1 ) {

			listeners[ type ].push( listener );

		}

	}

	/**
	 * Returns `true` if the given event listener has been added to the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to check.
	 * @return {boolean} Whether the given event listener has been added to the given event type.
	 */
	hasEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return false;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== -1;

	}

	/**
	 * Removes the given event listener from the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to remove.
	 */
	removeEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== -1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	/**
	 * Dispatches an event object.
	 *
	 * @param {Object} event - The event that gets fired.
	 */
	dispatchEvent( event ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

/**
 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
 * (universally unique identifier).
 *
 * @return {string} The UUID.
 */
function generateUUID() {

	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

/**
 * Clamps the given value between min and max.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The min value.
 * @param {number} max - The max value.
 * @return {number} The clamped value.
 */
function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

/**
 * Computes the Euclidean modulo of the given parameters that
 * is `( ( n % m ) + m ) % m`.
 *
 * @param {number} n - The first parameter.
 * @param {number} m - The second parameter.
 * @return {number} The Euclidean modulo.
 */
function euclideanModulo( n, m ) {

	// https://en.wikipedia.org/wiki/Modulo_operation

	return ( ( n % m ) + m ) % m;

}

/**
 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
 * for the given value.
 *
 * @param {number} x - The value to be mapped.
 * @param {number} a1 - Minimum value for range A.
 * @param {number} a2 - Maximum value for range A.
 * @param {number} b1 - Minimum value for range B.
 * @param {number} b2 - Maximum value for range B.
 * @return {number} The mapped value.
 */
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

/**
 * Returns the percentage in the closed interval `[0, 1]` of the given value
 * between the start and end point.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} value - A value between start and end.
 * @return {number} The interpolation factor.
 */
function inverseLerp( x, y, value ) {

	// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

/**
 * Returns a value linearly interpolated from two known points based on the given interval -
 * `t = 0` will return `x` and `t = 1` will return `y`.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
 * @return {number} The interpolated value.
 */
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

/**
 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
 * time to maintain frame rate independent movement. For details, see
 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
 *
 * @param {number} x - The current point.
 * @param {number} y - The target point.
 * @param {number} lambda - A higher lambda value will make the movement more sudden,
 * and a lower value will make the movement more gradual.
 * @param {number} dt - Delta time in seconds.
 * @return {number} The interpolated value.
 */
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

/**
 * Returns a value that alternates between `0` and the given `length` parameter.
 *
 * @param {number} x - The value to pingpong.
 * @param {number} [length=1] - The positive value the function will pingpong to.
 * @return {number} The alternated value.
 */
function pingpong( x, length = 1 ) {

	// https://www.desmos.com/calculator/vcsjnyz7x4

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

/**
 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
 * the `min` and `max`.
 *
 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

/**
 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

/**
 * Returns a random integer from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random integer.
 */
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

/**
 * Returns a random float from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random float.
 */
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

/**
 * Returns a random integer from `<-range/2, range/2>` interval.
 *
 * @param {number} range - Defines the value range.
 * @return {number} A random float.
 */
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

/**
 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
 *
 * @param {number} [s] - The integer seed.
 * @return {number} A random float.
 */
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

/**
 * Converts degrees to radians.
 *
 * @param {number} degrees - A value in degrees.
 * @return {number} The converted value in radians.
 */
function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

/**
 * Converts radians to degrees.
 *
 * @param {number} radians - A value in radians.
 * @return {number} The converted value in degrees.
 */
function radToDeg( radians ) {

	return radians * RAD2DEG;

}

/**
 * Returns `true` if the given number is a power of two.
 *
 * @param {number} value - The value to check.
 * @return {boolean} Whether the given number is a power of two or not.
 */
function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

/**
 * Returns the smallest power of two that is greater than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The smallest power of two that is greater than or equal to the given number.
 */
function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

/**
 * Returns the largest power of two that is less than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The largest power of two that is less than or equal to the given number.
 */
function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

/**
 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
 * defined by the given angles and order.
 *
 * Rotations are applied to the axes in the order specified by order:
 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
 *
 * @param {Quaternion} q - The quaternion to set.
 * @param {number} a - The rotation applied to the first axis, in radians.
 * @param {number} b - The rotation applied to the second axis, in radians.
 * @param {number} c - The rotation applied to the third axis, in radians.
 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
 */
function setQuaternionFromProperEuler( q, a, b, c, order ) {

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

/**
 * Denormalizes the given value according to the given typed array.
 *
 * @param {number} value - The value to denormalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The denormalize (float) value in the range `[0,1]`.
 */
function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, -1 );

		case Int16Array:

			return Math.max( value / 32767.0, -1 );

		case Int8Array:

			return Math.max( value / 127.0, -1 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * Normalizes the given value according to the given typed array.
 *
 * @param {number} value - The float value in the range `[0,1]` to normalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The normalize value.
 */
function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * @class
 * @classdesc A collection of math utility functions.
 * @hideconstructor
 */
const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	/**
	 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
	 * (universally unique identifier).
	 *
	 * @static
	 * @method
	 * @return {string} The UUID.
	 */
	generateUUID: generateUUID,
	/**
	 * Clamps the given value between min and max.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to clamp.
	 * @param {number} min - The min value.
	 * @param {number} max - The max value.
	 * @return {number} The clamped value.
	 */
	clamp: clamp,
	/**
	 * Computes the Euclidean modulo of the given parameters that
	 * is `( ( n % m ) + m ) % m`.
	 *
	 * @static
	 * @method
	 * @param {number} n - The first parameter.
	 * @param {number} m - The second parameter.
	 * @return {number} The Euclidean modulo.
	 */
	euclideanModulo: euclideanModulo,
	/**
	 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
	 * for the given value.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to be mapped.
	 * @param {number} a1 - Minimum value for range A.
	 * @param {number} a2 - Maximum value for range A.
	 * @param {number} b1 - Minimum value for range B.
	 * @param {number} b2 - Maximum value for range B.
	 * @return {number} The mapped value.
	 */
	mapLinear: mapLinear,
	/**
	 * Returns the percentage in the closed interval `[0, 1]` of the given value
	 * between the start and end point.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} value - A value between start and end.
	 * @return {number} The interpolation factor.
	 */
	inverseLerp: inverseLerp,
	/**
	 * Returns a value linearly interpolated from two known points based on the given interval -
	 * `t = 0` will return `x` and `t = 1` will return `y`.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {number} The interpolated value.
	 */
	lerp: lerp,
	/**
	 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
	 * time to maintain frame rate independent movement. For details, see
	 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
	 *
	 * @static
	 * @method
	 * @param {number} x - The current point.
	 * @param {number} y - The target point.
	 * @param {number} lambda - A higher lambda value will make the movement more sudden,
	 * and a lower value will make the movement more gradual.
	 * @param {number} dt - Delta time in seconds.
	 * @return {number} The interpolated value.
	 */
	damp: damp,
	/**
	 * Returns a value that alternates between `0` and the given `length` parameter.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to pingpong.
	 * @param {number} [length=1] - The positive value the function will pingpong to.
	 * @return {number} The alternated value.
	 */
	pingpong: pingpong,
	/**
	 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
	 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
	 * the `min` and `max`.
	 *
	 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smoothstep: smoothstep,
	/**
	 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
	 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smootherstep: smootherstep,
	/**
	 * Returns a random integer from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random integer.
	 */
	randInt: randInt,
	/**
	 * Returns a random float from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random float.
	 */
	randFloat: randFloat,
	/**
	 * Returns a random integer from `<-range/2, range/2>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} range - Defines the value range.
	 * @return {number} A random float.
	 */
	randFloatSpread: randFloatSpread,
	/**
	 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
	 *
	 * @static
	 * @method
	 * @param {number} [s] - The integer seed.
	 * @return {number} A random float.
	 */
	seededRandom: seededRandom,
	/**
	 * Converts degrees to radians.
	 *
	 * @static
	 * @method
	 * @param {number} degrees - A value in degrees.
	 * @return {number} The converted value in radians.
	 */
	degToRad: degToRad,
	/**
	 * Converts radians to degrees.
	 *
	 * @static
	 * @method
	 * @param {number} radians - A value in radians.
	 * @return {number} The converted value in degrees.
	 */
	radToDeg: radToDeg,
	/**
	 * Returns `true` if the given number is a power of two.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to check.
	 * @return {boolean} Whether the given number is a power of two or not.
	 */
	isPowerOfTwo: isPowerOfTwo,
	/**
	 * Returns the smallest power of two that is greater than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The smallest power of two that is greater than or equal to the given number.
	 */
	ceilPowerOfTwo: ceilPowerOfTwo,
	/**
	 * Returns the largest power of two that is less than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The largest power of two that is less than or equal to the given number.
	 */
	floorPowerOfTwo: floorPowerOfTwo,
	/**
	 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
	 * defined by the given angles and order.
	 *
	 * Rotations are applied to the axes in the order specified by order:
	 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
	 *
	 * @static
	 * @method
	 * @param {Quaternion} q - The quaternion to set.
	 * @param {number} a - The rotation applied to the first axis, in radians.
	 * @param {number} b - The rotation applied to the second axis, in radians.
	 * @param {number} c - The rotation applied to the third axis, in radians.
	 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
	 */
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	/**
	 * Normalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The float value in the range `[0,1]` to normalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The normalize value.
	 */
	normalize: normalize,
	/**
	 * Denormalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to denormalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The denormalize (float) value in the range `[0,1]`.
	 */
	denormalize: denormalize
};

/**
 * Class representing a 2D vector. A 2D vector is an ordered pair of numbers
 * (labeled x and y), which can be used to represent a number of things, such as:
 *
 * - A point in 2D space (i.e. a position on a plane).
 * - A direction and length across a plane. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0)` to `(x, y)`
 * and the direction is also measured from `(0, 0)` towards `(x, y)`.
 * - Any arbitrary ordered pair of numbers.
 *
 * There are other things a 2D vector can be used to represent, such as
 * momentum vectors, complex numbers and so on, however these are the most
 * common uses in three.js.
 *
 * Iterating through a vector instance will yield its components `(x, y)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector2( 0, 1 );
 *
 * //no arguments; will be initialised to (0, 0)
 * const b = new THREE.Vector2( );
 *
 * const d = a.distanceTo( b );
 * ```
 */
class Vector2 {

	/**
	 * Constructs a new 2D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 */
	constructor( x = 0, y = 0 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector2.prototype.isVector2 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

	}

	/**
	 * Alias for {@link Vector2#x}.
	 *
	 * @type {number}
	 */
	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	/**
	 * Alias for {@link Vector2#y}.
	 *
	 * @type {number}
	 */
	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @return {Vector2} A reference to this vector.
	 */
	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector2} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @param {number} value - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector2} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to copy.
	 * @return {Vector2} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to add.
	 * @return {Vector2} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector2} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector2} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector2} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector2} v - The vector to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector2} v - The vector to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * Multiplies this vector (with an implicit 1 as the 3rd component) by
	 * the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to apply.
	 * @return {Vector2} A reference to this vector.
	 */
	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the given vector's x or y
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is less than the given vector's x or y
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the max vector's x or y
	 * value, it is replaced by the corresponding value.
	 * If this vector's x or y value is less than the min vector's x or y value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector2} min - The minimum x and y values.
	 * @param {Vector2} max - The maximum x and y values in the desired range.
	 * @return {Vector2} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );

		return this;

	}

	/**
	 * If this vector's x or y values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x or y values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x and y = -y.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	/**
	 * Calculates the cross product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the cross product with.
	 * @return {number} The result of the cross product.
	 */
	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Computes the angle in radians of this vector with respect to the positive x-axis.
	 *
	 * @return {number} The angle in radians.
	 */
	angle() {

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	/**
	 * Returns the angle between the given vector and this instance in radians.
	 *
	 * @param {Vector2} v - The vector to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	/**
	 * Computes the distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	/**
	 * Computes the squared distance from the given vector to this instance.
	 * If you are just comparing the distance with another distance, you should compare
	 * the distance squared instead as it is slightly more efficient to calculate.
	 *
	 * @param {Vector2} v - The vector to compute the squared distance to.
	 * @return {number} The squared distance.
	 */
	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	/**
	 * Computes the Manhattan distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the Manhattan distance to.
	 * @return {number} The Manhattan distance.
	 */
	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector2} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector2} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector2} v1 - The first vector.
	 * @param {Vector2} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector2} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]` and y
	 * value to be `array[ offset + 1 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector2} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector2} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	/**
	 * Rotates this vector around the given center by the given angle.
	 *
	 * @param {Vector2} center - The point around which to rotate.
	 * @param {number} angle - The angle to rotate, in radians.
	 * @return {Vector2} A reference to this vector.
	 */
	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

/**
 * Class for representing a Quaternion. Quaternions are used in three.js to represent rotations.
 *
 * Iterating through a vector instance will yield its components `(x, y, z, w)` in
 * the corresponding order.
 *
 * Note that three.js expects Quaternions to be normalized.
 * ```js
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 *
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 * ```
 */
class Quaternion {

	/**
	 * Constructs a new quaternion.
	 *
	 * @param {number} [x=0] - The x value of this quaternion.
	 * @param {number} [y=0] - The y value of this quaternion.
	 * @param {number} [z=0] - The z value of this quaternion.
	 * @param {number} [w=1] - The w value of this quaternion.
	 */
	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	/**
	 * Interpolates between two quaternions via SLERP. This implementation assumes the
	 * quaternion data are managed  in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @param {number} t - The interpolation factor in the range `[0,1]`.
	 * @see {@link Quaternion#slerp}
	 */
	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : -1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	/**
	 * Multiplies two quaternions. This implementation assumes the quaternion data are managed
	 * in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @return {Array<number>} The destination array.
	 * @see {@link Quaternion#multiplyQuaternions}.
	 */
	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	/**
	 * The x value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	/**
	 * The y value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	/**
	 * The z value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	/**
	 * The w value of this quaternion.
	 *
	 * @type {number}
	 * @default 1
	 */
	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	/**
	 * Sets the quaternion components.
	 *
	 * @param {number} x - The x value of this quaternion.
	 * @param {number} y - The y value of this quaternion.
	 * @param {number} z - The z value of this quaternion.
	 * @param {number} w - The w value of this quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Returns a new quaternion with copied values from this instance.
	 *
	 * @return {Quaternion} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	/**
	 * Copies the values of the given quaternion to this instance.
	 *
	 * @param {Quaternion} quaternion - The quaternion to copy.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the rotation specified by the given
	 * Euler angles.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the given axis and angle.
	 *
	 * @param {Vector3} axis - The normalized axis.
	 * @param {number} angle - The angle in radians.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the given rotation matrix.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion to the rotation required to rotate the direction vector
	 * `vFrom` to the direction vector `vTo`.
	 *
	 * @param {Vector3} vFrom - The first (normalized) direction vector.
	 * @param {Vector3} vTo - The second (normalized) direction vector.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < 1e-8 ) { // the epsilon value has been discussed in #31286

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	/**
	 * Returns the angle between this quaternion and the given one in radians.
	 *
	 * @param {Quaternion} q - The quaternion to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), -1, 1 ) ) );

	}

	/**
	 * Rotates this quaternion by a given angular step to the given quaternion.
	 * The method ensures that the final quaternion will not overshoot `q`.
	 *
	 * @param {Quaternion} q - The target quaternion.
	 * @param {number} step - The angular step in radians.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	/**
	 * Sets this quaternion to the identity quaternion; that is, to the
	 * quaternion that represents "no rotation".
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	/**
	 * Inverts this quaternion via {@link Quaternion#conjugate}. The
	 * quaternion is assumed to have unit length.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	invert() {

		return this.conjugate();

	}

	/**
	 * Returns the rotational conjugate of this quaternion. The conjugate of a
	 * quaternion represents the same rotation in the opposite direction about
	 * the rotational axis.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	conjugate() {

		this._x *= -1;
		this._y *= -1;
		this._z *= -1;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Calculates the dot product of this quaternion and the given one.
	 *
	 * @param {Quaternion} v - The quaternion to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	/**
	 * Computes the squared Euclidean length (straight-line length) of this quaternion,
	 * considered as a 4 dimensional vector. This can be useful if you are comparing the
	 * lengths of two quaternions, as this is a slightly more efficient calculation than
	 * {@link Quaternion#length}.
	 *
	 * @return {number} The squared Euclidean length.
	 */
	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	/**
	 * Computes the Euclidean length (straight-line length) of this quaternion,
	 * considered as a 4 dimensional vector.
	 *
	 * @return {number} The Euclidean length.
	 */
	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	/**
	 * Normalizes this quaternion - that is, calculated the quaternion that performs
	 * the same rotation as this one, but has a length equal to `1`.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	/**
	 * Multiplies this quaternion by the given one.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	/**
	 * Pre-multiplies this quaternion by the given one.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	/**
	 * Multiplies the given quaternions and stores the result in this instance.
	 *
	 * @param {Quaternion} a - The first quaternion.
	 * @param {Quaternion} b - The second quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Performs a spherical linear interpolation between quaternions.
	 *
	 * @param {Quaternion} qb - The target quaternion.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	/**
	 * Performs a spherical linear interpolation between the given quaternions
	 * and stores the result in this quaternion.
	 *
	 * @param {Quaternion} qa - The source quaternion.
	 * @param {Quaternion} qb - The target quaternion.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	/**
	 * Sets this quaternion to a uniformly random, normalized quaternion.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	random() {

		// Ken Shoemake
		// Uniform random rotations
		// D. Kirk, editor, Graphics Gems III, pages 124-132. Academic Press, New York, 1992.

		const theta1 = 2 * Math.PI * Math.random();
		const theta2 = 2 * Math.PI * Math.random();

		const x0 = Math.random();
		const r1 = Math.sqrt( 1 - x0 );
		const r2 = Math.sqrt( x0 );

		return this.set(
			r1 * Math.sin( theta1 ),
			r1 * Math.cos( theta1 ),
			r2 * Math.sin( theta2 ),
			r2 * Math.cos( theta2 ),
		);

	}

	/**
	 * Returns `true` if this quaternion is equal with the given one.
	 *
	 * @param {Quaternion} quaternion - The quaternion to test for equality.
	 * @return {boolean} Whether this quaternion is equal with the given one.
	 */
	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	/**
	 * Sets this quaternion's components from the given array.
	 *
	 * @param {Array<number>} array - An array holding the quaternion component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	/**
	 * Writes the components of this quaternion to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The quaternion components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	/**
	 * Sets the components of this quaternion from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
	 * @param {number} index - The index into the attribute.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	/**
	 * This methods defines the serialization result of this class. Returns the
	 * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
	 *
	 * @return {Array<number>} The serialized quaternion.
	 */
	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

/**
 * Class representing a 3D vector. A 3D vector is an ordered triplet of numbers
 * (labeled x, y and z), which can be used to represent a number of things, such as:
 *
 * - A point in 3D space.
 * - A direction and length in 3D space. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0, 0)` to `(x, y, z)`
 * and the direction is also measured from `(0, 0, 0)` towards `(x, y, z)`.
 * - Any arbitrary ordered triplet of numbers.
 *
 * There are other things a 3D vector can be used to represent, such as
 * momentum vectors and so on, however these are the most
 * common uses in three.js.
 *
 * Iterating through a vector instance will yield its components `(x, y, z)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector3( 0, 1, 0 );
 *
 * //no arguments; will be initialised to (0, 0, 0)
 * const b = new THREE.Vector3( );
 *
 * const d = a.distanceTo( b );
 * ```
 */
class Vector3 {

	/**
	 * Constructs a new 3D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 * @param {number} [z=0] - The z value of this vector.
	 */
	constructor( x = 0, y = 0, z = 0 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector3.prototype.isVector3 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

		/**
		 * The z value of this vector.
		 *
		 * @type {number}
		 */
		this.z = z;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @param {number} z - The value of the z component.
	 * @return {Vector3} A reference to this vector.
	 */
	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector3} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Sets the vector's z component to the given value
	 *
	 * @param {number} z - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setZ( z ) {

		this.z = z;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
	 * @param {number} value - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector3} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to copy.
	 * @return {Vector3} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to add.
	 * @return {Vector3} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector3} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector3|Vector4} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector3} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector3} v - The vector to subtract.
	 * @return {Vector3} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector3} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to multiply.
	 * @return {Vector3} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector3} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	/**
	 * Multiplies the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	/**
	 * Applies the given Euler rotation to this vector.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @return {Vector3} A reference to this vector.
	 */
	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	/**
	 * Applies a rotation specified by an axis and an angle to this vector.
	 *
	 * @param {Vector3} axis - A normalized vector representing the rotation axis.
	 * @param {number} angle - The angle in radians.
	 * @return {Vector3} A reference to this vector.
	 */
	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	/**
	 * Multiplies this vector with the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	/**
	 * Multiplies this vector by the given normal matrix and normalizes
	 * the result.
	 *
	 * @param {Matrix3} m - The normal matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	/**
	 * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
	 * divides by perspective.
	 *
	 * @param {Matrix4} m - The matrix to apply.
	 * @return {Vector3} A reference to this vector.
	 */
	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	/**
	 * Applies the given Quaternion to this vector.
	 *
	 * @param {Quaternion} q - The Quaternion.
	 * @return {Vector3} A reference to this vector.
	 */
	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	/**
	 * Projects this vector from world space into the camera's normalized
	 * device coordinate (NDC) space.
	 *
	 * @param {Camera} camera - The camera.
	 * @return {Vector3} A reference to this vector.
	 */
	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	/**
	 * Unprojects this vector from the camera's normalized device coordinate (NDC)
	 * space into world space.
	 *
	 * @param {Camera} camera - The camera.
	 * @return {Vector3} A reference to this vector.
	 */
	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	/**
	 * Transforms the direction of this vector by a matrix (the upper left 3 x 3
	 * subset of the given 4x4 matrix and then normalizes the result.
	 *
	 * @param {Matrix4} m - The matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector3} v - The vector to divide.
	 * @return {Vector3} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector3} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * If this vector's x, y or z value is greater than the given vector's x, y or z
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector3} v - The vector.
	 * @return {Vector3} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	/**
	 * If this vector's x, y or z value is less than the given vector's x, y or z
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector3} v - The vector.
	 * @return {Vector3} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	/**
	 * If this vector's x, y or z value is greater than the max vector's x, y or z
	 * value, it is replaced by the corresponding value.
	 * If this vector's x, y or z value is less than the min vector's x, y or z value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector3} min - The minimum x, y and z values.
	 * @param {Vector3} max - The maximum x, y and z values in the desired range.
	 * @return {Vector3} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );
		this.z = clamp( this.z, min.z, max.z );

		return this;

	}

	/**
	 * If this vector's x, y or z values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x, y or z values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector3} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );
		this.z = clamp( this.z, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector3} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector3} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector3} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector3} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector3} v1 - The first vector.
	 * @param {Vector3} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector3} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	/**
	 * Calculates the cross product of the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to compute the cross product with.
	 * @return {Vector3} The result of the cross product.
	 */
	cross( v ) {

		return this.crossVectors( this, v );

	}

	/**
	 * Calculates the cross product of the given vectors and stores the result
	 * in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	/**
	 * Projects this vector onto the given one.
	 *
	 * @param {Vector3} v - The vector to project to.
	 * @return {Vector3} A reference to this vector.
	 */
	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	/**
	 * Projects this vector onto a plane by subtracting this
	 * vector projected onto the plane's normal from this vector.
	 *
	 * @param {Vector3} planeNormal - The plane normal.
	 * @return {Vector3} A reference to this vector.
	 */
	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	/**
	 * Reflects this vector off a plane orthogonal to the given normal vector.
	 *
	 * @param {Vector3} normal - The (normalized) normal vector.
	 * @return {Vector3} A reference to this vector.
	 */
	reflect( normal ) {

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}
	/**
	 * Returns the angle between the given vector and this instance in radians.
	 *
	 * @param {Vector3} v - The vector to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	/**
	 * Computes the distance from the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	/**
	 * Computes the squared distance from the given vector to this instance.
	 * If you are just comparing the distance with another distance, you should compare
	 * the distance squared instead as it is slightly more efficient to calculate.
	 *
	 * @param {Vector3} v - The vector to compute the squared distance to.
	 * @return {number} The squared distance.
	 */
	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	/**
	 * Computes the Manhattan distance from the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to compute the Manhattan distance to.
	 * @return {number} The Manhattan distance.
	 */
	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	/**
	 * Sets the vector components from the given spherical coordinates.
	 *
	 * @param {Spherical} s - The spherical coordinates.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	/**
	 * Sets the vector components from the given spherical coordinates.
	 *
	 * @param {number} radius - The radius.
	 * @param {number} phi - The phi angle in radians.
	 * @param {number} theta - The theta angle in radians.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	/**
	 * Sets the vector components from the given cylindrical coordinates.
	 *
	 * @param {Cylindrical} c - The cylindrical coordinates.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	/**
	 * Sets the vector components from the given cylindrical coordinates.
	 *
	 * @param {number} radius - The radius.
	 * @param {number} theta - The theta angle in radians.
	 * @param {number} y - The y value.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	/**
	 * Sets the vector components to the position elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	/**
	 * Sets the vector components to the scale elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	/**
	 * Sets the vector components from the specified matrix column.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @param {number} index - The column index.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	/**
	 * Sets the vector components from the specified matrix column.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @param {number} index - The column index.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	/**
	 * Sets the vector components from the given Euler angles.
	 *
	 * @param {Euler} e - The Euler angles to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	/**
	 * Sets the vector components from the RGB components of the
	 * given color.
	 *
	 * @param {Color} c - The color to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector3} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
	 * and z value to be `array[ offset + 2 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector3} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector3} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	/**
	 * Sets this vector to a uniformly random point on a unit sphere.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	randomDirection() {

		// https://mathworld.wolfram.com/SpherePointPicking.html

		const theta = Math.random() * Math.PI * 2;
		const u = Math.random() * 2 - 1;
		const c = Math.sqrt( 1 - u * u );

		this.x = c * Math.cos( theta );
		this.y = u;
		this.z = c * Math.sin( theta );

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

/**
 * Represents a 3x3 matrix.
 *
 * A Note on Row-Major and Column-Major Ordering:
 *
 * The constructor and {@link Matrix3#set} method take arguments in
 * [row-major]{@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order}
 * order, while internally they are stored in the {@link Matrix3#elements} array in column-major order.
 * This means that calling:
 * ```js
 * const m = new THREE.Matrix();
 * m.set( 11, 12, 13,
 *        21, 22, 23,
 *        31, 32, 33 );
 * ```
 * will result in the elements array containing:
 * ```js
 * m.elements = [ 11, 21, 31,
 *                12, 22, 32,
 *                13, 23, 33 ];
 * ```
 * and internally all calculations are performed using column-major ordering.
 * However, as the actual ordering makes no difference mathematically and
 * most people are used to thinking about matrices in row-major order, the
 * three.js documentation shows matrices in row-major order. Just bear in
 * mind that if you are reading the source code, you'll have to take the
 * transpose of any matrices outlined here to make sense of the calculations.
 */
class Matrix3 {

	/**
	 * Constructs a new 3x3 matrix. The arguments are supposed to be
	 * in row-major order. If no arguments are provided, the constructor
	 * initializes the matrix as an identity matrix.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 */
	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Matrix3.prototype.isMatrix3 = true;

		/**
		 * A column-major list of matrix values.
		 *
		 * @type {Array<number>}
		 */
		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	/**
	 * Sets the elements of the matrix.The arguments are supposed to be
	 * in row-major order.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @return {Matrix3} A reference to this matrix.
	 */
	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	/**
	 * Sets this matrix to the 3x3 identity matrix.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Copies the values of the given matrix to this instance.
	 *
	 * @param {Matrix3} m - The matrix to copy.
	 * @return {Matrix3} A reference to this matrix.
	 */
	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	/**
	 * Extracts the basis of this matrix into the three axis vectors provided.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	/**
	 * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	/**
	 * Post-multiplies this matrix by the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to multiply with.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	/**
	 * Pre-multiplies this matrix by the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to multiply with.
	 * @return {Matrix3} A reference to this matrix.
	 */
	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	/**
	 * Multiples the given 3x3 matrices and stores the result
	 * in this matrix.
	 *
	 * @param {Matrix3} a - The first matrix.
	 * @param {Matrix3} b - The second matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	/**
	 * Multiplies every component of the matrix by the given scalar.
	 *
	 * @param {number} s - The scalar.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	/**
	 * Computes and returns the determinant of this matrix.
	 *
	 * @return {number} The determinant.
	 */
	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	/**
	 * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
	 * You can not invert with a determinant of zero. If you attempt this, the method produces
	 * a zero matrix instead.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	/**
	 * Transposes this matrix in place.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	/**
	 * Computes the normal matrix which is the inverse transpose of the upper
	 * left 3x3 portion of the given 4x4 matrix.
	 *
	 * @param {Matrix4} matrix4 - The 4x4 matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	/**
	 * Transposes this matrix into the supplied array, and returns itself unchanged.
	 *
	 * @param {Array<number>} r - An array to store the transposed matrix elements.
	 * @return {Matrix3} A reference to this matrix.
	 */
	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	/**
	 * Sets the UV transform matrix from offset, repeat, rotation, and center.
	 *
	 * @param {number} tx - Offset x.
	 * @param {number} ty - Offset y.
	 * @param {number} sx - Repeat x.
	 * @param {number} sy - Repeat y.
	 * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
	 * @param {number} cx - Center x of rotation.
	 * @param {number} cy - Center y of rotation
	 * @return {Matrix3} A reference to this matrix.
	 */
	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	/**
	 * Scales this matrix with the given scalar values.
	 *
	 * @param {number} sx - The amount to scale in the X axis.
	 * @param {number} sy - The amount to scale in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	/**
	 * Rotates this matrix by the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix3} A reference to this matrix.
	 */
	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	/**
	 * Translates this matrix by the given scalar values.
	 *
	 * @param {number} tx - The amount to translate in the X axis.
	 * @param {number} ty - The amount to translate in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	/**
	 * Sets this matrix as a 2D translation transform.
	 *
	 * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
	 * @param {number} y - The amount to translate in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	/**
	 * Sets this matrix as a 2D rotational transformation.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a 2D scale transform.
	 *
	 * @param {number} x - The amount to scale in the X axis.
	 * @param {number} y - The amount to scale in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Returns `true` if this matrix is equal with the given one.
	 *
	 * @param {Matrix3} matrix - The matrix to test for equality.
	 * @return {boolean} Whether this matrix is equal with the given one.
	 */
	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	/**
	 * Sets the elements of the matrix from the given array.
	 *
	 * @param {Array<number>} array - The matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Matrix3} A reference to this matrix.
	 */
	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	/**
	 * Writes the elements of this matrix to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The matrix elements in column-major order.
	 */
	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	/**
	 * Returns a matrix with copied values from this instance.
	 *
	 * @return {Matrix3} A clone of this instance.
	 */
	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

const TYPED_ARRAYS = {
	Int8Array: Int8Array,
	Uint8Array: Uint8Array,
	Uint8ClampedArray: Uint8ClampedArray,
	Int16Array: Int16Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Uint32Array: Uint32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array
};

function getTypedArray( type, buffer ) {

	return new TYPED_ARRAYS[ type ]( buffer );

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

function createCanvasElement() {

	const canvas = createElementNS( 'canvas' );
	canvas.style.display = 'block';
	return canvas;

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

function probeAsync( gl, sync, interval ) {

	return new Promise( function ( resolve, reject ) {

		function probe() {

			switch ( gl.clientWaitSync( sync, gl.SYNC_FLUSH_COMMANDS_BIT, 0 ) ) {

				case gl.WAIT_FAILED:
					reject();
					break;

				case gl.TIMEOUT_EXPIRED:
					setTimeout( probe, interval );
					break;

				default:
					resolve();

			}

		}

		setTimeout( probe, interval );

	} );

}

const LINEAR_REC709_TO_XYZ = /*@__PURE__*/ new Matrix3().set(
	0.4123908, 0.3575843, 0.1804808,
	0.2126390, 0.7151687, 0.0721923,
	0.0193308, 0.1191948, 0.9505322
);

const XYZ_TO_LINEAR_REC709 = /*@__PURE__*/ new Matrix3().set(
	3.2409699, -1.5373832, -0.4986108,
	-0.9692436, 1.8759675, 0.0415551,
	0.0556301, -0.203977, 1.0569715
);

function createColorManagement() {

	const ColorManagement = {

		enabled: true,

		workingColorSpace: LinearSRGBColorSpace,

		/**
		 * Implementations of supported color spaces.
		 *
		 * Required:
		 *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
		 *	- whitePoint: reference white [ x y ]
		 *	- transfer: transfer function (pre-defined)
		 *	- toXYZ: Matrix3 RGB to XYZ transform
		 *	- fromXYZ: Matrix3 XYZ to RGB transform
		 *	- luminanceCoefficients: RGB luminance coefficients
		 *
		 * Optional:
		 *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
		 *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
		 *
		 * Reference:
		 * - https://www.russellcottrell.com/photo/matrixCalculator.htm
		 */
		spaces: {},

		convert: function ( color, sourceColorSpace, targetColorSpace ) {

			if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

				return color;

			}

			if ( this.spaces[ sourceColorSpace ].transfer === SRGBTransfer ) {

				color.r = SRGBToLinear( color.r );
				color.g = SRGBToLinear( color.g );
				color.b = SRGBToLinear( color.b );

			}

			if ( this.spaces[ sourceColorSpace ].primaries !== this.spaces[ targetColorSpace ].primaries ) {

				color.applyMatrix3( this.spaces[ sourceColorSpace ].toXYZ );
				color.applyMatrix3( this.spaces[ targetColorSpace ].fromXYZ );

			}

			if ( this.spaces[ targetColorSpace ].transfer === SRGBTransfer ) {

				color.r = LinearToSRGB( color.r );
				color.g = LinearToSRGB( color.g );
				color.b = LinearToSRGB( color.b );

			}

			return color;

		},

		workingToColorSpace: function ( color, targetColorSpace ) {

			return this.convert( color, this.workingColorSpace, targetColorSpace );

		},

		colorSpaceToWorking: function ( color, sourceColorSpace ) {

			return this.convert( color, sourceColorSpace, this.workingColorSpace );

		},

		getPrimaries: function ( colorSpace ) {

			return this.spaces[ colorSpace ].primaries;

		},

		getTransfer: function ( colorSpace ) {

			if ( colorSpace === NoColorSpace ) return LinearTransfer;

			return this.spaces[ colorSpace ].transfer;

		},

		getToneMappingMode: function ( colorSpace ) {

			return this.spaces[ colorSpace ].outputColorSpaceConfig.toneMappingMode || 'standard';

		},

		getLuminanceCoefficients: function ( target, colorSpace = this.workingColorSpace ) {

			return target.fromArray( this.spaces[ colorSpace ].luminanceCoefficients );

		},

		define: function ( colorSpaces ) {

			Object.assign( this.spaces, colorSpaces );

		},

		// Internal APIs

		_getMatrix: function ( targetMatrix, sourceColorSpace, targetColorSpace ) {

			return targetMatrix
				.copy( this.spaces[ sourceColorSpace ].toXYZ )
				.multiply( this.spaces[ targetColorSpace ].fromXYZ );

		},

		_getDrawingBufferColorSpace: function ( colorSpace ) {

			return this.spaces[ colorSpace ].outputColorSpaceConfig.drawingBufferColorSpace;

		},

		_getUnpackColorSpace: function ( colorSpace = this.workingColorSpace ) {

			return this.spaces[ colorSpace ].workingColorSpaceConfig.unpackColorSpace;

		},

		// Deprecated

		fromWorkingColorSpace: function ( color, targetColorSpace ) {

			warnOnce( 'THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().' ); // @deprecated, r177

			return ColorManagement.workingToColorSpace( color, targetColorSpace );

		},

		toWorkingColorSpace: function ( color, sourceColorSpace ) {

			warnOnce( 'THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().' ); // @deprecated, r177

			return ColorManagement.colorSpaceToWorking( color, sourceColorSpace );

		},

	};

	/******************************************************************************
	 * sRGB definitions
	 */

	const REC709_PRIMARIES = [ 0.640, 0.330, 0.300, 0.600, 0.150, 0.060 ];
	const REC709_LUMINANCE_COEFFICIENTS = [ 0.2126, 0.7152, 0.0722 ];
	const D65 = [ 0.3127, 0.3290 ];

	ColorManagement.define( {

		[ LinearSRGBColorSpace ]: {
			primaries: REC709_PRIMARIES,
			whitePoint: D65,
			transfer: LinearTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
			workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		},

		[ SRGBColorSpace ]: {
			primaries: REC709_PRIMARIES,
			whitePoint: D65,
			transfer: SRGBTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		},

	} );

	return ColorManagement;

}

const ColorManagement = /*@__PURE__*/ createColorManagement();

function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

function LinearToSRGB( c ) {

	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

}

let _canvas;

/**
 * A class containing utility functions for images.
 *
 * @hideconstructor
 */
class ImageUtils {

	/**
	 * Returns a data URI containing a representation of the given image.
	 *
	 * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
	 * @param {string} [type='image/png'] - Indicates the image format.
	 * @return {string} The data URI.
	 */
	static getDataURL( image, type = 'image/png' ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		return canvas.toDataURL( type );

	}

	/**
	 * Converts the given sRGB image data to linear color space.
	 *
	 * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
	 * @return {HTMLCanvasElement|Object} The converted image.
	 */
	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

/**
 * Represents the data source of a texture.
 *
 * The main purpose of this class is to decouple the data definition from the texture
 * definition so the same data can be used with multiple texture instances.
 */
class Source {

	/**
	 * Constructs a new video texture.
	 *
	 * @param {any} [data=null] - The data definition of a texture.
	 */
	constructor( data = null ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isSource = true;

		/**
		 * The ID of the source.
		 *
		 * @name Source#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		/**
		 * The UUID of the source.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The data definition of a texture.
		 *
		 * @type {any}
		 */
		this.data = data;

		/**
		 * This property is only relevant when {@link Source#needsUpdate} is set to `true` and
		 * provides more control on how texture data should be processed. When `dataReady` is set
		 * to `false`, the engine performs the memory allocation (if necessary) but does not transfer
		 * the data into the GPU memory.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.dataReady = true;

		/**
		 * This starts at `0` and counts how many times {@link Source#needsUpdate} is set to `true`.
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.version = 0;

	}

	/**
	 * Returns the dimensions of the source into the given target vector.
	 *
	 * @param {(Vector2|Vector3)} target - The target object the result is written into.
	 * @return {(Vector2|Vector3)} The dimensions of the source.
	 */
	getSize( target ) {

		const data = this.data;

		if ( ( typeof HTMLVideoElement !== 'undefined' ) && ( data instanceof HTMLVideoElement ) ) {

			target.set( data.videoWidth, data.videoHeight, 0 );

		} else if ( data instanceof VideoFrame ) {

			target.set( data.displayHeight, data.displayWidth, 0 );

		} else if ( data !== null ) {

			target.set( data.width, data.height, data.depth || 0 );

		} else {

			target.set( 0, 0, 0 );

		}

		return target;

	}

	/**
	 * When the property is set to `true`, the engine allocates the memory
	 * for the texture (if necessary) and triggers the actual texture upload
	 * to the GPU next time the source is used.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	/**
	 * Serializes the source into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized source.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

const _tempVec3 = /*@__PURE__*/ new Vector3();

/**
 * Base class for all textures.
 *
 * Note: After the initial use of a texture, its dimensions, format, and type
 * cannot be changed. Instead, call {@link Texture#dispose} on the texture and instantiate a new one.
 *
 * @augments EventDispatcher
 */
class Texture extends EventDispatcher {

	/**
	 * Constructs a new texture.
	 *
	 * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
	 * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
	 * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
	 * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
	 * @param {number} [magFilter=LinearFilter] - The mag filter value.
	 * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
	 * @param {number} [format=RGBAFormat] - The texture format.
	 * @param {number} [type=UnsignedByteType] - The texture type.
	 * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
	 * @param {string} [colorSpace=NoColorSpace] - The color space.
	 */
	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isTexture = true;

		/**
		 * The ID of the texture.
		 *
		 * @name Texture#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		/**
		 * The UUID of the material.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the material.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The data definition of a texture. A reference to the data source can be
		 * shared across textures. This is often useful in context of spritesheets
		 * where multiple textures render the same data but with different texture
		 * transformations.
		 *
		 * @type {Source}
		 */
		this.source = new Source( image );

		/**
		 * An array holding user-defined mipmaps.
		 *
		 * @type {Array<Object>}
		 */
		this.mipmaps = [];

		/**
		 * How the texture is applied to the object. The value `UVMapping`
		 * is the default, where texture or uv coordinates are used to apply the map.
		 *
		 * @type {(UVMapping|CubeReflectionMapping|CubeRefractionMapping|EquirectangularReflectionMapping|EquirectangularRefractionMapping|CubeUVReflectionMapping)}
		 * @default UVMapping
		*/
		this.mapping = mapping;

		/**
		 * Lets you select the uv attribute to map the texture to. `0` for `uv`,
		 * `1` for `uv1`, `2` for `uv2` and `3` for `uv3`.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.channel = 0;

		/**
		 * This defines how the texture is wrapped horizontally and corresponds to
		 * *U* in UV mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapS = wrapS;

		/**
		 * This defines how the texture is wrapped horizontally and corresponds to
		 * *V* in UV mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapT = wrapT;

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default LinearFilter
		 */
		this.magFilter = magFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default LinearMipmapLinearFilter
		 */
		this.minFilter = minFilter;

		/**
		 * The number of samples taken along the axis through the pixel that has the
		 * highest density of texels. By default, this value is `1`. A higher value
		 * gives a less blurry result than a basic mipmap, at the cost of more
		 * texture samples being used.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.anisotropy = anisotropy;

		/**
		 * The format of the texture.
		 *
		 * @type {number}
		 * @default RGBAFormat
		 */
		this.format = format;

		/**
		 * The default internal format is derived from {@link Texture#format} and {@link Texture#type} and
		 * defines how the texture data is going to be stored on the GPU.
		 *
		 * This property allows to overwrite the default format.
		 *
		 * @type {?string}
		 * @default null
		 */
		this.internalFormat = null;

		/**
		 * The data type of the texture.
		 *
		 * @type {number}
		 * @default UnsignedByteType
		 */
		this.type = type;

		/**
		 * How much a single repetition of the texture is offset from the beginning,
		 * in each direction U and V. Typical range is `0.0` to `1.0`.
		 *
		 * @type {Vector2}
		 * @default (0,0)
		 */
		this.offset = new Vector2( 0, 0 );

		/**
		 * How many times the texture is repeated across the surface, in each
		 * direction U and V. If repeat is set greater than `1` in either direction,
		 * the corresponding wrap parameter should also be set to `RepeatWrapping`
		 * or `MirroredRepeatWrapping` to achieve the desired tiling effect.
		 *
		 * @type {Vector2}
		 * @default (1,1)
		 */
		this.repeat = new Vector2( 1, 1 );

		/**
		 * The point around which rotation occurs. A value of `(0.5, 0.5)` corresponds
		 * to the center of the texture. Default is `(0, 0)`, the lower left.
		 *
		 * @type {Vector2}
		 * @default (0,0)
		 */
		this.center = new Vector2( 0, 0 );

		/**
		 * How much the texture is rotated around the center point, in radians.
		 * Positive values are counter-clockwise.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.rotation = 0;

		/**
		 * Whether to update the texture's uv-transformation {@link Texture#matrix}
		 * from the properties {@link Texture#offset}, {@link Texture#repeat},
		 * {@link Texture#rotation}, and {@link Texture#center}.
		 *
		 * Set this to `false` if you are specifying the uv-transform matrix directly.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixAutoUpdate = true;

		/**
		 * The uv-transformation matrix of the texture.
		 *
		 * @type {Matrix3}
		 */
		this.matrix = new Matrix3();

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Set this to `false` if you are creating mipmaps manually.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.generateMipmaps = true;

		/**
		 * If set to `true`, the alpha channel, if present, is multiplied into the
		 * color channels when the texture is uploaded to the GPU.
		 *
		 * Note that this property has no effect when using `ImageBitmap`. You need to
		 * configure premultiply alpha on bitmap creation instead.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.premultiplyAlpha = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Note that this property has no effect when using `ImageBitmap`. You need to
		 * configure the flip on bitmap creation instead.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.flipY = true;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 * The allowable values are `1` (byte-alignment), `2` (rows aligned to even-numbered bytes),
		 * `4` (word-alignment), and `8` (rows start on double-word boundaries).
		 *
		 * @type {number}
		 * @default 4
		 */
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		/**
		 * Textures containing color data should be annotated with `SRGBColorSpace` or `LinearSRGBColorSpace`.
		 *
		 * @type {string}
		 * @default NoColorSpace
		 */
		this.colorSpace = colorSpace;

		/**
		 * An object that can be used to store custom data about the texture. It
		 * should not hold references to functions as these will not be cloned.
		 *
		 * @type {Object}
		 */
		this.userData = {};

		/**
		 * This can be used to only update a subregion or specific rows of the texture (for example, just the
		 * first 3 rows). Use the `addUpdateRange()` function to add ranges to this array.
		 *
		 * @type {Array<Object>}
		 */
		this.updateRanges = [];

		/**
		 * This starts at `0` and counts how many times {@link Texture#needsUpdate} is set to `true`.
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.version = 0;

		/**
		 * A callback function, called when the texture is updated (e.g., when
		 * {@link Texture#needsUpdate} has been set to true and then the texture is used).
		 *
		 * @type {?Function}
		 * @default null
		 */
		this.onUpdate = null;

		/**
		 * An optional back reference to the textures render target.
		 *
		 * @type {?(RenderTarget|WebGLRenderTarget)}
		 * @default null
		 */
		this.renderTarget = null;

		/**
		 * Indicates whether a texture belongs to a render target or not.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default false
		 */
		this.isRenderTargetTexture = false;

		/**
		 * Indicates if a texture should be handled like a texture array.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default false
		 */
		this.isArrayTexture = image && image.depth && image.depth > 1 ? true : false;

		/**
		 * Indicates whether this texture should be processed by `PMREMGenerator` or not
		 * (only relevant for render target textures).
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.pmremVersion = 0;

	}

	/**
	 * The width of the texture in pixels.
	 */
	get width() {

		return this.source.getSize( _tempVec3 ).x;

	}

	/**
	 * The height of the texture in pixels.
	 */
	get height() {

		return this.source.getSize( _tempVec3 ).y;

	}

	/**
	 * The depth of the texture in pixels.
	 */
	get depth() {

		return this.source.getSize( _tempVec3 ).z;

	}

	/**
	 * The image object holding the texture data.
	 *
	 * @type {?Object}
	 */
	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	/**
	 * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
	 * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
	 */
	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	/**
	 * Adds a range of data in the data texture to be updated on the GPU.
	 *
	 * @param {number} start - Position at which to start update.
	 * @param {number} count - The number of components to update.
	 */
	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	/**
	 * Clears the update ranges.
	 */
	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	/**
	 * Returns a new texture with copied values from this instance.
	 *
	 * @return {Texture} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given texture to this instance.
	 *
	 * @param {Texture} source - The texture to copy.
	 * @return {Texture} A reference to this instance.
	 */
	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.renderTarget = source.renderTarget;
		this.isRenderTargetTexture = source.isRenderTargetTexture;
		this.isArrayTexture = source.isArrayTexture;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	/**
	 * Sets this texture's properties based on `values`.
	 * @param {Object} values - A container with texture parameters.
	 */
	setValues( values ) {

		for ( const key in values ) {

			const newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( `THREE.Texture.setValues(): parameter '${ key }' has value of undefined.` );
				continue;

			}

			const currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( `THREE.Texture.setValues(): property '${ key }' does not exist.` );
				continue;

			}

			if ( ( currentValue && newValue ) && ( currentValue.isVector2 && newValue.isVector2 ) ) {

				currentValue.copy( newValue );

			} else if ( ( currentValue && newValue ) && ( currentValue.isVector3 && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else if ( ( currentValue && newValue ) && ( currentValue.isMatrix3 && newValue.isMatrix3 ) ) {

				currentValue.copy( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	}

	/**
	 * Serializes the texture into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized texture.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.7,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 *
	 * @fires Texture#dispose
	 */
	dispose() {

		/**
		 * Fires when the texture has been disposed of.
		 *
		 * @event Texture#dispose
		 * @type {Object}
		 */
		this.dispatchEvent( { type: 'dispose' } );

	}

	/**
	 * Transforms the given uv vector with the textures uv transformation matrix.
	 *
	 * @param {Vector2} uv - The uv vector.
	 * @return {Vector2} The transformed uv vector.
	 */
	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	/**
	 * Setting this property to `true` indicates the engine the texture
	 * must be updated in the next render. This triggers a texture upload
	 * to the GPU and ensures correct texture parameter configuration.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	/**
	 * Setting this property to `true` indicates the engine the PMREM
	 * must be regenerated.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsPMREMUpdate( value ) {

		if ( value === true ) {

			this.pmremVersion ++;

		}

	}

}

/**
 * The default image for all textures.
 *
 * @static
 * @type {?Image}
 * @default null
 */
Texture.DEFAULT_IMAGE = null;

/**
 * The default mapping for all textures.
 *
 * @static
 * @type {number}
 * @default UVMapping
 */
Texture.DEFAULT_MAPPING = UVMapping;

/**
 * The default anisotropy value for all textures.
 *
 * @static
 * @type {number}
 * @default 1
 */
Texture.DEFAULT_ANISOTROPY = 1;

/**
 * Class representing a 4D vector. A 4D vector is an ordered quadruplet of numbers
 * (labeled x, y, z and w), which can be used to represent a number of things, such as:
 *
 * - A point in 4D space.
 * - A direction and length in 4D space. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0, 0, 0)` to `(x, y, z, w)`
 * and the direction is also measured from `(0, 0, 0, 0)` towards `(x, y, z, w)`.
 * - Any arbitrary ordered quadruplet of numbers.
 *
 * There are other things a 4D vector can be used to represent, however these
 * are the most common uses in *three.js*.
 *
 * Iterating through a vector instance will yield its components `(x, y, z, w)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector4( 0, 1, 0, 0 );
 *
 * //no arguments; will be initialised to (0, 0, 0, 1)
 * const b = new THREE.Vector4( );
 *
 * const d = a.dot( b );
 * ```
 */
class Vector4 {

	/**
	 * Constructs a new 4D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 * @param {number} [z=0] - The z value of this vector.
	 * @param {number} [w=1] - The w value of this vector.
	 */
	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector4.prototype.isVector4 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

		/**
		 * The z value of this vector.
		 *
		 * @type {number}
		 */
		this.z = z;

		/**
		 * The w value of this vector.
		 *
		 * @type {number}
		 */
		this.w = w;

	}

	/**
	 * Alias for {@link Vector4#z}.
	 *
	 * @type {number}
	 */
	get width() {

		return this.z;

	}

	set width( value ) {

		this.z = value;

	}

	/**
	 * Alias for {@link Vector4#w}.
	 *
	 * @type {number}
	 */
	get height() {

		return this.w;

	}

	set height( value ) {

		this.w = value;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @param {number} z - The value of the z component.
	 * @param {number} w - The value of the w component.
	 * @return {Vector4} A reference to this vector.
	 */
	set( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector4} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Sets the vector's z component to the given value
	 *
	 * @param {number} z - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setZ( z ) {

		this.z = z;

		return this;

	}

	/**
	 * Sets the vector's w component to the given value
	 *
	 * @param {number} w - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setW( w ) {

		this.w = w;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y,
	 * `2` equals to z, `3` equals to w.
	 * @param {number} value - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y,
	 * `2` equals to z, `3` equals to w.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector4} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector3|Vector4} v - The vector to copy.
	 * @return {Vector4} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector4} v - The vector to add.
	 * @return {Vector4} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector4} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector4} a - The first vector.
	 * @param {Vector4} b - The second vector.
	 * @return {Vector4} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector4} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector4} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector4} v - The vector to subtract.
	 * @return {Vector4} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector4} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector4} a - The first vector.
	 * @param {Vector4} b - The second vector.
	 * @return {Vector4} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector4} v - The vector to multiply.
	 * @return {Vector4} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector4} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	}

	/**
	 * Multiplies this vector with the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector4} v - The vector to divide.
	 * @return {Vector4} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		this.w /= v.w;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector4} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * Sets the x, y and z components of this
	 * vector to the quaternion's axis and w to the angle.
	 *
	 * @param {Quaternion} q - The Quaternion to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setAxisAngleFromQuaternion( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		const s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			this.x = 1;
			this.y = 0;
			this.z = 0;

		} else {

			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;

		}

		return this;

	}

	/**
	 * Sets the x, y and z components of this
	 * vector to the axis of rotation and w to the angle.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	setAxisAngleFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		let angle, x, y, z; // variables for result
		const epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			const xx = ( m11 + 1 ) / 2;
			const yy = ( m22 + 1 ) / 2;
			const zz = ( m33 + 1 ) / 2;
			const xy = ( m12 + m21 ) / 4;
			const xz = ( m13 + m31 ) / 4;
			const yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		let s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
			( m13 - m31 ) * ( m13 - m31 ) +
			( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	}

	/**
	 * Sets the vector components to the position elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];
		this.w = e[ 15 ];

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector4} v - The vector.
	 * @return {Vector4} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector4} v - The vector.
	 * @return {Vector4} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
	 * value, it is replaced by the corresponding value.
	 * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector4} min - The minimum x, y and z values.
	 * @param {Vector4} max - The maximum x, y and z values in the desired range.
	 * @return {Vector4} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );
		this.z = clamp( this.z, min.z, max.z );
		this.w = clamp( this.w, min.w, max.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x, y, z or w values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector4} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );
		this.z = clamp( this.z, minVal, maxVal );
		this.w = clamp( this.w, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector4} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );
		this.w = Math.trunc( this.w );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector4} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	}

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector4} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector4} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector4} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector4} v1 - The first vector.
	 * @param {Vector4} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector4} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;
		this.w = v1.w + ( v2.w - v1.w ) * alpha;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector4} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
	 * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector4} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector4} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;

	}

}

/**
 * A render target is a buffer where the video card draws pixels for a scene
 * that is being rendered in the background. It is used in different effects,
 * such as applying postprocessing to a rendered image before displaying it
 * on the screen.
 *
 * @augments EventDispatcher
 */
class RenderTarget extends EventDispatcher {

	/**
	 * Render target options.
	 *
	 * @typedef {Object} RenderTarget~Options
	 * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
	 * @property {number} [magFilter=LinearFilter] - The mag filter.
	 * @property {number} [minFilter=LinearFilter] - The min filter.
	 * @property {number} [format=RGBAFormat] - The texture format.
	 * @property {number} [type=UnsignedByteType] - The texture type.
	 * @property {?string} [internalFormat=null] - The texture's internal format.
	 * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
	 * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
	 * @property {number} [anisotropy=1] - The texture's anisotropy value.
	 * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
	 * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
	 * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
	 * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
	 * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
	 * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
	 * @property {number} [samples=0] - The MSAA samples count.
	 * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
	 * @property {number} [depth=1] - The texture depth.
	 * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
	 */

	/**
	 * Constructs a new render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, options = {} ) {

		super();

		options = Object.assign( {
			generateMipmaps: false,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: true,
			stencilBuffer: false,
			resolveDepthBuffer: true,
			resolveStencilBuffer: true,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: false
		}, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isRenderTarget = true;

		/**
		 * The width of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.width = width;

		/**
		 * The height of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.height = height;

		/**
		 * The depth of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.depth = options.depth;

		/**
		 * A rectangular area inside the render target's viewport. Fragments that are
		 * outside the area will be discarded.
		 *
		 * @type {Vector4}
		 * @default (0,0,width,height)
		 */
		this.scissor = new Vector4( 0, 0, width, height );

		/**
		 * Indicates whether the scissor test should be enabled when rendering into
		 * this render target or not.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.scissorTest = false;

		/**
		 * A rectangular area representing the render target's viewport.
		 *
		 * @type {Vector4}
		 * @default (0,0,width,height)
		 */
		this.viewport = new Vector4( 0, 0, width, height );

		const image = { width: width, height: height, depth: options.depth };

		const texture = new Texture( image );

		/**
		 * An array of textures. Each color attachment is represented as a separate texture.
		 * Has at least a single entry for the default color attachment.
		 *
		 * @type {Array<Texture>}
		 */
		this.textures = [];

		const count = options.count;
		for ( let i = 0; i < count; i ++ ) {

			this.textures[ i ] = texture.clone();
			this.textures[ i ].isRenderTargetTexture = true;
			this.textures[ i ].renderTarget = this;

		}

		this._setTextureOptions( options );

		/**
		 * Whether to allocate a depth buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthBuffer = options.depthBuffer;

		/**
		 * Whether to allocate a stencil buffer or not.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.stencilBuffer = options.stencilBuffer;

		/**
		 * Whether to resolve the depth buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.resolveDepthBuffer = options.resolveDepthBuffer;

		/**
		 * Whether to resolve the stencil buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.resolveStencilBuffer = options.resolveStencilBuffer;

		this._depthTexture = null;
		this.depthTexture = options.depthTexture;

		/**
		 * The number of MSAA samples.
		 *
		 * A value of `0` disables MSAA.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.samples = options.samples;

		/**
		 * Whether to this target is used in multiview rendering.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.multiview = options.multiview;

	}

	_setTextureOptions( options = {} ) {

		const values = {
			minFilter: LinearFilter,
			generateMipmaps: false,
			flipY: false,
			internalFormat: null
		};

		if ( options.mapping !== undefined ) values.mapping = options.mapping;
		if ( options.wrapS !== undefined ) values.wrapS = options.wrapS;
		if ( options.wrapT !== undefined ) values.wrapT = options.wrapT;
		if ( options.wrapR !== undefined ) values.wrapR = options.wrapR;
		if ( options.magFilter !== undefined ) values.magFilter = options.magFilter;
		if ( options.minFilter !== undefined ) values.minFilter = options.minFilter;
		if ( options.format !== undefined ) values.format = options.format;
		if ( options.type !== undefined ) values.type = options.type;
		if ( options.anisotropy !== undefined ) values.anisotropy = options.anisotropy;
		if ( options.colorSpace !== undefined ) values.colorSpace = options.colorSpace;
		if ( options.flipY !== undefined ) values.flipY = options.flipY;
		if ( options.generateMipmaps !== undefined ) values.generateMipmaps = options.generateMipmaps;
		if ( options.internalFormat !== undefined ) values.internalFormat = options.internalFormat;

		for ( let i = 0; i < this.textures.length; i ++ ) {

			const texture = this.textures[ i ];
			texture.setValues( values );

		}

	}

	/**
	 * The texture representing the default color attachment.
	 *
	 * @type {Texture}
	 */
	get texture() {

		return this.textures[ 0 ];

	}

	set texture( value ) {

		this.textures[ 0 ] = value;

	}

	set depthTexture( current ) {

		if ( this._depthTexture !== null ) this._depthTexture.renderTarget = null;
		if ( current !== null ) current.renderTarget = this;

		this._depthTexture = current;

	}

	/**
	 * Instead of saving the depth in a renderbuffer, a texture
	 * can be used instead which is useful for further processing
	 * e.g. in context of post-processing.
	 *
	 * @type {?DepthTexture}
	 * @default null
	 */
	get depthTexture() {

		return this._depthTexture;

	}

	/**
	 * Sets the size of this render target.
	 *
	 * @param {number} width - The width.
	 * @param {number} height - The height.
	 * @param {number} [depth=1] - The depth.
	 */
	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( let i = 0, il = this.textures.length; i < il; i ++ ) {

				this.textures[ i ].image.width = width;
				this.textures[ i ].image.height = height;
				this.textures[ i ].image.depth = depth;
				this.textures[ i ].isArrayTexture = this.textures[ i ].image.depth > 1;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	/**
	 * Returns a new render target with copied values from this instance.
	 *
	 * @return {RenderTarget} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the settings of the given render target. This is a structural copy so
	 * no resources are shared between render targets after the copy. That includes
	 * all MRT textures and the depth texture.
	 *
	 * @param {RenderTarget} source - The render target to copy.
	 * @return {RenderTarget} A reference to this instance.
	 */
	copy( source ) {

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.textures.length = 0;

		for ( let i = 0, il = source.textures.length; i < il; i ++ ) {

			this.textures[ i ] = source.textures[ i ].clone();
			this.textures[ i ].isRenderTargetTexture = true;
			this.textures[ i ].renderTarget = this;

			// ensure image object is not shared, see #20328

			const image = Object.assign( {}, source.textures[ i ].image );
			this.textures[ i ].source = new Source( image );

		}

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		this.resolveDepthBuffer = source.resolveDepthBuffer;
		this.resolveStencilBuffer = source.resolveStencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.samples = source.samples;

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 *
	 * @fires RenderTarget#dispose
	 */
	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

/**
 * A render target used in context of {@link WebGLRenderer}.
 *
 * @augments RenderTarget
 */
class WebGLRenderTarget extends RenderTarget {

	/**
	 * Constructs a new 3D render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGLRenderTarget = true;

	}

}

/**
 * Creates an array of textures directly from raw buffer data.
 *
 * @augments Texture
 */
class DataArrayTexture extends Texture {

	/**
	 * Constructs a new data array texture.
	 *
	 * @param {?TypedArray} [data=null] - The buffer data.
	 * @param {number} [width=1] - The width of the texture.
	 * @param {number} [height=1] - The height of the texture.
	 * @param {number} [depth=1] - The depth of the texture.
	 */
	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		super( null );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isDataArrayTexture = true;

		/**
		 * The image definition of a data texture.
		 *
		 * @type {{data:TypedArray,width:number,height:number,depth:number}}
		 */
		this.image = { data, width, height, depth };

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.magFilter = NearestFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.minFilter = NearestFilter;

		/**
		 * This defines how the texture is wrapped in the depth and corresponds to
		 * *W* in UVW mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapR = ClampToEdgeWrapping;

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.generateMipmaps = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.flipY = false;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 *
		 * Overwritten and set to `1` by default.
		 *
		 * @type {boolean}
		 * @default 1
		 */
		this.unpackAlignment = 1;

		/**
		 * A set of all layers which need to be updated in the texture.
		 *
		 * @type {Set<number>}
		 */
		this.layerUpdates = new Set();

	}

	/**
	 * Describes that a specific layer of the texture needs to be updated.
	 * Normally when {@link Texture#needsUpdate} is set to `true`, the
	 * entire data texture array is sent to the GPU. Marking specific
	 * layers will only transmit subsets of all mipmaps associated with a
	 * specific depth in the array which is often much more performant.
	 *
	 * @param {number} layerIndex - The layer index that should be updated.
	 */
	addLayerUpdate( layerIndex ) {

		this.layerUpdates.add( layerIndex );

	}

	/**
	 * Resets the layer updates registry.
	 */
	clearLayerUpdates() {

		this.layerUpdates.clear();

	}

}

/**
 * An array render target used in context of {@link WebGLRenderer}.
 *
 * @augments WebGLRenderTarget
 */
class WebGLArrayRenderTarget extends WebGLRenderTarget {

	/**
	 * Constructs a new array render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {number} [depth=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGLArrayRenderTarget = true;

		this.depth = depth;

		/**
		 * Overwritten with a different texture type.
		 *
		 * @type {DataArrayTexture}
		 */
		this.texture = new DataArrayTexture( null, width, height, depth );
		this._setTextureOptions( options );

		this.texture.isRenderTargetTexture = true;

	}

}

/**
 * Creates a three-dimensional texture from raw data, with parameters to
 * divide it into width, height, and depth.
 *
 * @augments Texture
 */
class Data3DTexture extends Texture {

	/**
	 * Constructs a new data array texture.
	 *
	 * @param {?TypedArray} [data=null] - The buffer data.
	 * @param {number} [width=1] - The width of the texture.
	 * @param {number} [height=1] - The height of the texture.
	 * @param {number} [depth=1] - The depth of the texture.
	 */
	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in Data3DTexture directly.
		//
		//	const texture = new THREE.Data3DTexture( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isData3DTexture = true;

		/**
		 * The image definition of a data texture.
		 *
		 * @type {{data:TypedArray,width:number,height:number,depth:number}}
		 */
		this.image = { data, width, height, depth };

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.magFilter = NearestFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.minFilter = NearestFilter;

		/**
		 * This defines how the texture is wrapped in the depth and corresponds to
		 * *W* in UVW mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapR = ClampToEdgeWrapping;

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.generateMipmaps = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.flipY = false;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 *
		 * Overwritten and set to `1` by default.
		 *
		 * @type {boolean}
		 * @default 1
		 */
		this.unpackAlignment = 1;

	}

}

/**
 * A 3D render target used in context of {@link WebGLRenderer}.
 *
 * @augments WebGLRenderTarget
 */
class WebGL3DRenderTarget extends WebGLRenderTarget {

	/**
	 * Constructs a new 3D render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {number} [depth=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGL3DRenderTarget = true;

		this.depth = depth;

		/**
		 * Overwritten with a different texture type.
		 *
		 * @type {Data3DTexture}
		 */
		this.texture = new Data3DTexture( null, width, height, depth );
		this._setTextureOptions( options );

		this.texture.isRenderTargetTexture = true;

	}

}

/**
 * Represents an axis-aligned bounding box (AABB) in 3D space.
 */
class Box3 {

	/**
	 * Constructs a new bounding box.
	 *
	 * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
	 * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
	 */
	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isBox3 = true;

		/**
		 * The lower boundary of the box.
		 *
		 * @type {Vector3}
		 */
		this.min = min;

		/**
		 * The upper boundary of the box.
		 *
		 * @type {Vector3}
		 */
		this.max = max;

	}

	/**
	 * Sets the lower and upper boundaries of this box.
	 * Please note that this method only copies the values from the given objects.
	 *
	 * @param {Vector3} min - The lower boundary of the box.
	 * @param {Vector3} max - The upper boundary of the box.
	 * @return {Box3} A reference to this bounding box.
	 */
	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given array.
	 *
	 * @param {Array<number>} array - An array holding 3D position data.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given array.
	 *
	 * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	/**
	 * Centers this box on the given center vector and sets this box's width, height and
	 * depth to the given size values.
	 *
	 * @param {Vector3} center - The center of the box.
	 * @param {Vector3} size - The x, y and z dimensions of the box.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	/**
	 * Computes the world-axis-aligned bounding box for the given 3D object
	 * (including its children), accounting for the object's, and children's,
	 * world transforms. The function may result in a larger box than strictly necessary.
	 *
	 * @param {Object3D} object - The 3D object to compute the bounding box for.
	 * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
	 * world-axis-aligned bounding box at the expense of more computation.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	/**
	 * Returns a new box with copied values from this instance.
	 *
	 * @return {Box3} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given box to this instance.
	 *
	 * @param {Box3} box - The box to copy.
	 * @return {Box3} A reference to this bounding box.
	 */
	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	/**
	 * Makes this box empty which means in encloses a zero space in 3D.
	 *
	 * @return {Box3} A reference to this bounding box.
	 */
	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	/**
	 * Returns true if this box includes zero points within its bounds.
	 * Note that a box with equal lower and upper bounds still includes one
	 * point, the one both bounds share.
	 *
	 * @return {boolean} Whether this box is empty or not.
	 */
	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	/**
	 * Returns the center point of this box.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The center point.
	 */
	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	/**
	 * Returns the dimensions of this box.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The size.
	 */
	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	/**
	 * Expands the boundaries of this box to include the given point.
	 *
	 * @param {Vector3} point - The point that should be included by the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	/**
	 * Expands this box equilaterally by the given vector. The width of this
	 * box will be expanded by the x component of the vector in both
	 * directions. The height of this box will be expanded by the y component of
	 * the vector in both directions. The depth of this box will be
	 * expanded by the z component of the vector in both directions.
	 *
	 * @param {Vector3} vector - The vector that should expand the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	/**
	 * Expands each dimension of the box by the given scalar. If negative, the
	 * dimensions of the box will be contracted.
	 *
	 * @param {number} scalar - The scalar value that should expand the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	/**
	 * Expands the boundaries of this box to include the given 3D object and
	 * its children, accounting for the object's, and children's, world
	 * transforms. The function may result in a larger box than strictly
	 * necessary (unless the precise parameter is set to true).
	 *
	 * @param {Object3D} object - The 3D object that should expand the bounding box.
	 * @param {boolean} precise - If set to `true`, the method expands the bounding box
	 * as little as necessary at the expense of more computation.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	/**
	 * Returns `true` if the given point lies within or on the boundaries of this box.
	 *
	 * @param {Vector3} point - The point to test.
	 * @return {boolean} Whether the bounding box contains the given point or not.
	 */
	containsPoint( point ) {

		return point.x >= this.min.x && point.x <= this.max.x &&
			point.y >= this.min.y && point.y <= this.max.y &&
			point.z >= this.min.z && point.z <= this.max.z;

	}

	/**
	 * Returns `true` if this bounding box includes the entirety of the given bounding box.
	 * If this box and the given one are identical, this function also returns `true`.
	 *
	 * @param {Box3} box - The bounding box to test.
	 * @return {boolean} Whether the bounding box contains the given bounding box or not.
	 */
	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	/**
	 * Returns a point as a proportion of this box's width, height and depth.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} A point as a proportion of this box's width, height and depth.
	 */
	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	/**
	 * Returns `true` if the given bounding box intersects with this bounding box.
	 *
	 * @param {Box3} box - The bounding box to test.
	 * @return {boolean} Whether the given bounding box intersects with this bounding box.
	 */
	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x >= this.min.x && box.min.x <= this.max.x &&
			box.max.y >= this.min.y && box.min.y <= this.max.y &&
			box.max.z >= this.min.z && box.min.z <= this.max.z;

	}

	/**
	 * Returns `true` if the given bounding sphere intersects with this bounding box.
	 *
	 * @param {Sphere} sphere - The bounding sphere to test.
	 * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
	 */
	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	/**
	 * Returns `true` if the given plane intersects with this bounding box.
	 *
	 * @param {Plane} plane - The plane to test.
	 * @return {boolean} Whether the given plane intersects with this bounding box.
	 */
	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	/**
	 * Returns `true` if the given triangle intersects with this bounding box.
	 *
	 * @param {Triangle} triangle - The triangle to test.
	 * @return {boolean} Whether the given triangle intersects with this bounding box.
	 */
	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	/**
	 * Clamps the given point within the bounds of this box.
	 *
	 * @param {Vector3} point - The point to clamp.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The clamped point.
	 */
	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	/**
	 * Returns the euclidean distance from any edge of this box to the specified point. If
	 * the given point lies inside of this box, the distance will be `0`.
	 *
	 * @param {Vector3} point - The point to compute the distance to.
	 * @return {number} The euclidean distance.
	 */
	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	/**
	 * Returns a bounding sphere that encloses this bounding box.
	 *
	 * @param {Sphere} target - The target sphere that is used to store the method's result.
	 * @return {Sphere} The bounding sphere that encloses this bounding box.
	 */
	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	/**
	 * Computes the intersection of this bounding box and the given one, setting the upper
	 * bound of this box to the lesser of the two boxes' upper bounds and the
	 * lower bound of this box to the greater of the two boxes' lower bounds. If
	 * there's no overlap, makes this box empty.
	 *
	 * @param {Box3} box - The bounding box to intersect with.
	 * @return {Box3} A reference to this bounding box.
	 */
	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	/**
	 * Computes the union of this box and another and the given one, setting the upper
	 * bound of this box to the greater of the two boxes' upper bounds and the
	 * lower bound of this box to the lesser of the two boxes' lower bounds.
	 *
	 * @param {Box3} box - The bounding box that will be unioned with this instance.
	 * @return {Box3} A reference to this bounding box.
	 */
	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	/**
	 * Transforms this bounding box by the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 * @return {Box3} A reference to this bounding box.
	 */
	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	/**
	 * Adds the given offset to both the upper and lower bounds of this bounding box,
	 * effectively moving it in 3D space.
	 *
	 * @param {Vector3} offset - The offset that should be used to translate the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	/**
	 * Returns `true` if this bounding box is equal with the given one.
	 *
	 * @param {Box3} box - The box to test for equality.
	 * @return {boolean} Whether this bounding box is equal with the given one.
	 */
	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

	/**
	 * Returns a serialized structure of the bounding box.
	 *
	 * @return {Object} Serialized structure with fields representing the object state.
	 */
	toJSON() {

		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};

	}

	/**
	 * Returns a serialized structure of the bounding box.
	 *
	 * @param {Object} json - The serialized json to set the box from.
	 * @return {Box3} A reference to this bounding box.
	 */
	fromJSON( json ) {

		this.min.fromArray( json.min );
		this.max.fromArray( json.max );
		return this;

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

/**
 * An analytical 3D sphere defined by a center and radius. This class is mainly
 * used as a Bounding Sphere for 3D objects.
 */
class Sphere {

	/**
	 * Constructs a new sphere.
	 *
	 * @param {Vector3} [center=(0,0,0)] - The center of the sphere
	 * @param {number} [radius=-1] - The radius of the sphere.
	 */
	constructor( center = new Vector3(), radius = -1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isSphere = true;

		/**
		 * The center of the sphere
		 *
		 * @type {Vector3}
		 */
		this.center = center;

		/**
		 * The radius of the sphere.
		 *
		 * @type {number}
		 */
		this.radius = radius;

	}

	/**
	 * Sets the sphere's components by copying the given values.
	 *
	 * @param {Vector3} center - The center.
	 * @param {number} radius - The radius.
	 * @return {Sphere} A reference to this sphere.
	 */
	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	/**
	 * Computes the minimum bounding sphere for list of points.
	 * If the optional center point is given, it is used as the sphere's
	 * center. Otherwise, the center of the axis-aligned bounding box
	 * encompassing the points is calculated.
	 *
	 * @param {Array<Vector3>} points - A list of points in 3D space.
	 * @param {Vector3} [optionalCenter] - The center of the sphere.
	 * @return {Sphere} A reference to this sphere.
	 */
	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	/**
	 * Copies the values of the given sphere to this instance.
	 *
	 * @param {Sphere} sphere - The sphere to copy.
	 * @return {Sphere} A reference to this sphere.
	 */
	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	/**
	 * Returns `true` if the sphere is empty (the radius set to a negative number).
	 *
	 * Spheres with a radius of `0` contain only their center point and are not
	 * considered to be empty.
	 *
	 * @return {boolean} Whether this sphere is empty or not.
	 */
	isEmpty() {

		return ( this.radius < 0 );

	}

	/**
	 * Makes this sphere empty which means in encloses a zero space in 3D.
	 *
	 * @return {Sphere} A reference to this sphere.
	 */
	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = -1;

		return this;

	}

	/**
	 * Returns `true` if this sphere contains the given point inclusive of
	 * the surface of the sphere.
	 *
	 * @param {Vector3} point - The point to check.
	 * @return {boolean} Whether this sphere contains the given point or not.
	 */
	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	/**
	 * Returns the closest distance from the boundary of the sphere to the
	 * given point. If the sphere contains the point, the distance will
	 * be negative.
	 *
	 * @param {Vector3} point - The point to compute the distance to.
	 * @return {number} The distance to the point.
	 */
	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	/**
	 * Returns `true` if this sphere intersects with the given one.
	 *
	 * @param {Sphere} sphere - The sphere to test.
	 * @return {boolean} Whether this sphere intersects with the given one or not.
	 */
	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	/**
	 * Returns `true` if this sphere intersects with the given box.
	 *
	 * @param {Box3} box - The box to test.
	 * @return {boolean} Whether this sphere intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	/**
	 * Returns `true` if this sphere intersects with the given plane.
	 *
	 * @param {Plane} plane - The plane to test.
	 * @return {boolean} Whether this sphere intersects with the given plane or not.
	 */
	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	/**
	 * Clamps a point within the sphere. If the point is outside the sphere, it
	 * will clamp it to the closest point on the edge of the sphere. Points
	 * already inside the sphere will not be affected.
	 *
	 * @param {Vector3} point - The plane to clamp.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The clamped point.
	 */
	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	/**
	 * Returns a bounding box that encloses this sphere.
	 *
	 * @param {Box3} target - The target box that is used to store the method's result.
	 * @return {Box3} The bounding box that encloses this sphere.
	 */
	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	/**
	 * Transforms this sphere with the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 * @return {Sphere} A reference to this sphere.
	 */
	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	/**
	 * Translates the sphere's center by the given offset.
	 *
	 * @param {Vector3} offset - The offset.
	 * @return {Sphere} A reference to this sphere.
	 */
	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	/**
	 * Expands the boundaries of this sphere to include the given point.
	 *
	 * @param {Vector3} point - The point to include.
	 * @return {Sphere} A reference to this sphere.
	 */
	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	/**
	 * Expands this sphere to enclose both the original sphere and the given sphere.
	 *
	 * @param {Sphere} sphere - The sphere to include.
	 * @return {Sphere} A reference to this sphere.
	 */
	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	/**
	 * Returns `true` if this sphere is equal with the given one.
	 *
	 * @param {Sphere} sphere - The sphere to test for equality.
	 * @return {boolean} Whether this bounding sphere is equal with the given one.
	 */
	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	/**
	 * Returns a new sphere with copied values from this instance.
	 *
	 * @return {Sphere} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Returns a serialized structure of the bounding sphere.
	 *
	 * @return {Object} Serialized structure with fields representing the object state.
	 */
	toJSON() {

		return {
			radius: this.radius,
			center: this.center.toArray()
		};

	}

	/**
	 * Returns a serialized structure of the bounding sphere.
	 *
	 * @param {Object} json - The serialized json to set the sphere from.
	 * @return {Box3} A reference to this bounding sphere.
	 */
	fromJSON( json ) {

		this.radius = json.radius;
		this.center.fromArray( json.center );
		return this;

	}

}

const _vector$a = /*@__PURE__*/ new Vector3();
const _segCenter = /*@__PURE__*/ new Vector3();
const _segDir = /*@__PURE__*/ new Vector3();
const _diff = /*@__PURE__*/ new Vector3();

const _edge1 = /*@__PURE__*/ new Vector3();
const _edge2 = /*@__PURE__*/ new Vector3();
const _normal$1 = /*@__PURE__*/ new Vector3();

/**
 * A ray that emits from an origin in a certain direction. The class is used by
 * {@link Raycaster} to assist with raycasting. Raycasting is used for
 * mouse picking (working out what objects in the 3D space the mouse is over)
 * amongst other things.
 */
class Ray {

	/**
	 * Constructs a new ray.
	 *
	 * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
	 * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
	 */
	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, -1 ) ) {

		/**
		 * The origin of the ray.
		 *
		 * @type {Vector3}
		 */
		this.origin = origin;

		/**
		 * The (normalized) direction of the ray.
		 *
		 * @type {Vector3}
		 */
		this.direction = direction;

	}

	/**
	 * Sets the ray's components by copying the given values.
	 *
	 * @param {Vector3} origin - The origin.
	 * @param {Vector3} direction - The direction.
	 * @return {Ray} A reference to this ray.
	 */
	set( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	}

	/**
	 * Copies the values of the given ray to this instance.
	 *
	 * @param {Ray} ray - The ray to copy.
	 * @return {Ray} A reference to this ray.
	 */
	copy( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	}

	/**
	 * Returns a vector that is located at a given distance along this ray.
	 *
	 * @param {number} t - The distance along the ray to retrieve a position for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} A position on the ray.
	 */
	at( t, target ) {

		return target.copy( this.origin ).addScaledVector( this.direction, t );

	}

	/**
	 * Adjusts the direction of the ray to point at the given vector in world space.
	 *
	 * @param {Vector3} v - The target position.
	 * @return {Ray} A reference to this ray.
	 */
	lookAt( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	}

	/**
	 * Shift the origin of this ray along its direction by the given distance.
	 *
	 * @param {number} t - The distance along the ray to interpolate.
	 * @return {Ray} A reference to this ray.
	 */
	recast( t ) {

		this.origin.copy( this.at( t, _vector$a ) );

		return this;

	}

	/**
	 * Returns the point along this ray that is closest to the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The closest point on this ray.
	 */
	closestPointToPoint( point, target ) {

		target.subVectors( point, this.origin );

		const directionDistance = target.dot( this.direction );

		if ( directionDistance < 0 ) {

			return target.copy( this.origin );

		}

		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

	}

	/**
	 * Returns the distance of the closest approach between this ray and the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceToPoint( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	}

	/**
	 * Returns the squared distance of the closest approach between this ray and the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to compute the distance to.
	 * @return {number} The squared distance.
	 */
	distanceSqToPoint( point ) {

		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

		// point behind the ray

		if ( directionDistance < 0 ) {

			return this.origin.distanceToSquared( point );

		}

		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		return _vector$a.distanceToSquared( point );

	}

	/**
	 * Returns the squared distance between this ray and the given line segment.
	 *
	 * @param {Vector3} v0 - The start point of the line segment.
	 * @param {Vector3} v1 - The end point of the line segment.
	 * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
	 * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
	 * @return {number} The squared distance.
	 */
	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment

		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
		_segDir.copy( v1 ).sub( v0 ).normalize();
		_diff.copy( this.origin ).sub( _segCenter );

		const segExtent = v0.distanceTo( v1 ) * 0.5;
		const a01 = - this.direction.dot( _segDir );
		const b0 = _diff.dot( this.direction );
		const b1 = - _diff.dot( _segDir );
		const c = _diff.lengthSq();
		const det = Math.abs( 1 - a01 * a01 );
		let s0, s1, sqrDist, extDet;

		if ( det > 0 ) {

			// The ray and segment are not parallel.

			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if ( s0 >= 0 ) {

				if ( s1 >= - extDet ) {

					if ( s1 <= extDet ) {

						// region 0
						// Minimum at interior points of ray and segment.

						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

					} else {

						// region 1

						s1 = segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					// region 5

					s1 = - segExtent;
					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			} else {

				if ( s1 <= - extDet ) {

					// region 4

					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				} else if ( s1 <= extDet ) {

					// region 3

					s0 = 0;
					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

				} else {

					// region 2

					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			}

		} else {

			// Ray and segment are parallel.

			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

		}

		if ( optionalPointOnRay ) {

			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

		}

		if ( optionalPointOnSegment ) {

			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

		}

		return sqrDist;

	}

	/**
	 * Intersects this ray with the given sphere, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Sphere} sphere - The sphere to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectSphere( sphere, target ) {

		_vector$a.subVectors( sphere.center, this.origin );
		const tca = _vector$a.dot( this.direction );
		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;

		if ( d2 > radius2 ) return null;

		const thc = Math.sqrt( radius2 - d2 );

		// t0 = first intersect point - entrance on front of sphere
		const t0 = tca - thc;

		// t1 = second intersect point - exit point on back of sphere
		const t1 = tca + thc;

		// test to see if t1 is behind the ray - if so, return null
		if ( t1 < 0 ) return null;

		// test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.
		if ( t0 < 0 ) return this.at( t1, target );

		// else t0 is in front of the ray, so return the first collision point scaled by t0
		return this.at( t0, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given sphere.
	 *
	 * @param {Sphere} sphere - The sphere to intersect.
	 * @return {boolean} Whether this ray intersects with the given sphere or not.
	 */
	intersectsSphere( sphere ) {

		if ( sphere.radius < 0 ) return false; // handle empty spheres, see #31187

		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	/**
	 * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
	 * does not intersect with the plane.
	 *
	 * @param {Plane} plane - The plane to compute the distance to.
	 * @return {?number} Whether this ray intersects with the given sphere or not.
	 */
	distanceToPlane( plane ) {

		const denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t : null;

	}

	/**
	 * Intersects this ray with the given plane, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Plane} plane - The plane to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectPlane( plane, target ) {

		const t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given plane.
	 *
	 * @param {Plane} plane - The plane to intersect.
	 * @return {boolean} Whether this ray intersects with the given plane or not.
	 */
	intersectsPlane( plane ) {

		// check if the ray lies on the plane first

		const distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		const denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	}

	/**
	 * Intersects this ray with the given bounding box, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectBox( box, target ) {

		let tmin, tmax, tymin, tymax, tzmin, tzmax;

		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		const origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given box.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @return {boolean} Whether this ray intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return this.intersectBox( box, _vector$a ) !== null;

	}

	/**
	 * Intersects this ray with the given triangle, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Vector3} a - The first vertex of the triangle.
	 * @param {Vector3} b - The second vertex of the triangle.
	 * @param {Vector3} c - The third vertex of the triangle.
	 * @param {boolean} backfaceCulling - Whether to use backface culling or not.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectTriangle( a, b, c, backfaceCulling, target ) {

		// Compute the offset origin, edges, and normal.

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

		_edge1.subVectors( b, a );
		_edge2.subVectors( c, a );
		_normal$1.crossVectors( _edge1, _edge2 );

		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
		let DdN = this.direction.dot( _normal$1 );
		let sign;

		if ( DdN > 0 ) {

			if ( backfaceCulling ) return null;
			sign = 1;

		} else if ( DdN < 0 ) {

			sign = -1;
			DdN = - DdN;

		} else {

			return null;

		}

		_diff.subVectors( this.origin, a );
		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

		// b1 < 0, no intersection
		if ( DdQxE2 < 0 ) {

			return null;

		}

		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

		// b2 < 0, no intersection
		if ( DdE1xQ < 0 ) {

			return null;

		}

		// b1+b2 > 1, no intersection
		if ( DdQxE2 + DdE1xQ > DdN ) {

			return null;

		}

		// Line intersects triangle, check if ray does.
		const QdN = - sign * _diff.dot( _normal$1 );

		// t < 0, no intersection
		if ( QdN < 0 ) {

			return null;

		}

		// Ray intersects triangle.
		return this.at( QdN / DdN, target );

	}

	/**
	 * Transforms this ray with the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix4 - The transformation matrix.
	 * @return {Ray} A reference to this ray.
	 */
	applyMatrix4( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	}

	/**
	 * Returns `true` if this ray is equal with the given one.
	 *
	 * @param {Ray} ray - The ray to test for equality.
	 * @return {boolean} Whether this ray is equal with the given one.
	 */
	equals( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

	/**
	 * Returns a new ray with copied values from this instance.
	 *
	 * @return {Ray} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

}

/**
 * Represents a 4x4 matrix.
 *
 * The most common use of a 4x4 matrix in 3D computer graphics is as a transformation matrix.
 * For an introduction to transformation matrices as used in WebGL, check out [this tutorial]{@link https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices}
 *
 * This allows a 3D vector representing a point in 3D space to undergo
 * transformations such as translation, rotation, shear, scale, reflection,
 * orthogonal or perspective projection and so on, by being multiplied by the
 * matrix. This is known as `applying` the matrix to the vector.
 *
 * A Note on Row-Major and Column-Major Ordering:
 *
 * The constructor and {@link Matrix3#set} method take arguments in
 * [row-major]{@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order}
 * order, while internally they are stored in the {@link Matrix3#elements} array in column-major order.
 * This means that calling:
 * ```js
 * const m = new THREE.Matrix4();
 * m.set( 11, 12, 13, 14,
 *        21, 22, 23, 24,
 *        31, 32, 33, 34,
 *        41, 42, 43, 44 );
 * ```
 * will result in the elements array containing:
 * ```js
 * m.elements = [ 11, 21, 31, 41,
 *                12, 22, 32, 42,
 *                13, 23, 33, 43,
 *                14, 24, 34, 44 ];
 * ```
 * and internally all calculations are performed using column-major ordering.
 * However, as the actual ordering makes no difference mathematically and
 * most people are used to thinking about matrices in row-major order, the
 * three.js documentation shows matrices in row-major order. Just bear in
 * mind that if you are reading the source code, you'll have to take the
 * transpose of any matrices outlined here to make sense of the calculations.
 */
class Matrix4 {

	/**
	 * Constructs a new 4x4 matrix. The arguments are supposed to be
	 * in row-major order. If no arguments are provided, the constructor
	 * initializes the matrix as an identity matrix.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n14] - 1-4 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n24] - 2-4 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @param {number} [n34] - 3-4 matrix element.
	 * @param {number} [n41] - 4-1 matrix element.
	 * @param {number} [n42] - 4-2 matrix element.
	 * @param {number} [n43] - 4-3 matrix element.
	 * @param {number} [n44] - 4-4 matrix element.
	 */
	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Matrix4.prototype.isMatrix4 = true;

		/**
		 * A column-major list of matrix values.
		 *
		 * @type {Array<number>}
		 */
		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	/**
	 * Sets the elements of the matrix.The arguments are supposed to be
	 * in row-major order.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n14] - 1-4 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n24] - 2-4 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @param {number} [n34] - 3-4 matrix element.
	 * @param {number} [n41] - 4-1 matrix element.
	 * @param {number} [n42] - 4-2 matrix element.
	 * @param {number} [n43] - 4-3 matrix element.
	 * @param {number} [n44] - 4-4 matrix element.
	 * @return {Matrix4} A reference to this matrix.
	 */
	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	/**
	 * Sets this matrix to the 4x4 identity matrix.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Returns a matrix with copied values from this instance.
	 *
	 * @return {Matrix4} A clone of this instance.
	 */
	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	/**
	 * Copies the values of the given matrix to this instance.
	 *
	 * @param {Matrix4} m - The matrix to copy.
	 * @return {Matrix4} A reference to this matrix.
	 */
	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	/**
	 * Copies the translation component of the given matrix
	 * into this matrix's translation component.
	 *
	 * @param {Matrix4} m - The matrix to copy the translation component.
	 * @return {Matrix4} A reference to this matrix.
	 */
	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	/**
	 * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Extracts the basis of this matrix into the three axis vectors provided.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	/**
	 * Sets the given basis vectors to this matrix.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	/**
	 * Extracts the rotation component of the given matrix
	 * into this matrix's rotation component.
	 *
	 * Note: This method does not support reflection matrices.
	 *
	 * @param {Matrix4} m - The matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	extractRotation( m ) {

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
	 * the rotation specified by the given Euler angles. The rest of
	 * the matrix is set to the identity. Depending on the {@link Euler#order},
	 * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
	 * for a complete list.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Sets the rotation component of this matrix to the rotation specified by
	 * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
	 * The rest of the matrix is set to the identity.
	 *
	 * @param {Quaternion} q - The Quaternion.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	/**
	 * Sets the rotation component of the transformation matrix, looking from `eye` towards
	 * `target`, and oriented by the up-direction.
	 *
	 * @param {Vector3} eye - The eye vector.
	 * @param {Vector3} target - The target vector.
	 * @param {Vector3} up - The up vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	/**
	 * Post-multiplies this matrix by the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The matrix to multiply with.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	/**
	 * Pre-multiplies this matrix by the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The matrix to multiply with.
	 * @return {Matrix4} A reference to this matrix.
	 */
	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	/**
	 * Multiples the given 4x4 matrices and stores the result
	 * in this matrix.
	 *
	 * @param {Matrix4} a - The first matrix.
	 * @param {Matrix4} b - The second matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	/**
	 * Multiplies every component of the matrix by the given scalar.
	 *
	 * @param {number} s - The scalar.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	/**
	 * Computes and returns the determinant of this matrix.
	 *
	 * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
	 *
	 * @return {number} The determinant.
	 */
	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	/**
	 * Transposes this matrix in place.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	/**
	 * Sets the position component for this matrix from the given vector,
	 * without affecting the rest of the matrix.
	 *
	 * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
	 * @param {number} y - The y component of the vector.
	 * @param {number} z - The z component of the vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	/**
	 * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
	 * You can not invert with a determinant of zero. If you attempt this, the method produces
	 * a zero matrix instead.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	/**
	 * Multiplies the columns of this matrix by the given vector.
	 *
	 * @param {Vector3} v - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	/**
	 * Gets the maximum scale value of the three axes.
	 *
	 * @return {number} The maximum scale.
	 */
	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	/**
	 * Sets this matrix as a translation transform from the given vector.
	 *
	 * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
	 * @param {number} y - The amount to translate in the Y axis.
	 * @param {number} z - The amount to translate in the z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the X axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the Y axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the Z axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the given axis by
	 * the given angle.
	 *
	 * This is a somewhat controversial but mathematically sound alternative to
	 * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
	 *
	 * @param {Vector3} axis - The normalized rotation axis.
	 * @param {number} angle - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a scale transformation.
	 *
	 * @param {number} x - The amount to scale in the X axis.
	 * @param {number} y - The amount to scale in the Y axis.
	 * @param {number} z - The amount to scale in the Z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a shear transformation.
	 *
	 * @param {number} xy - The amount to shear X by Y.
	 * @param {number} xz - The amount to shear X by Z.
	 * @param {number} yx - The amount to shear Y by X.
	 * @param {number} yz - The amount to shear Y by Z.
	 * @param {number} zx - The amount to shear Z by X.
	 * @param {number} zy - The amount to shear Z by Y.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix to the transformation composed of the given position,
	 * rotation (Quaternion) and scale.
	 *
	 * @param {Vector3} position - The position vector.
	 * @param {Quaternion} quaternion - The rotation as a Quaternion.
	 * @param {Vector3} scale - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Decomposes this matrix into its position, rotation and scale components
	 * and provides the result in the given objects.
	 *
	 * Note: Not all matrices are decomposable in this way. For example, if an
	 * object has a non-uniformly scaled parent, then the object's world matrix
	 * may not be decomposable, and this method may not be appropriate.
	 *
	 * @param {Vector3} position - The position vector.
	 * @param {Quaternion} quaternion - The rotation as a Quaternion.
	 * @param {Vector3} scale - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$2.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$2.elements[ 0 ] *= invSX;
		_m1$2.elements[ 1 ] *= invSX;
		_m1$2.elements[ 2 ] *= invSX;

		_m1$2.elements[ 4 ] *= invSY;
		_m1$2.elements[ 5 ] *= invSY;
		_m1$2.elements[ 6 ] *= invSY;

		_m1$2.elements[ 8 ] *= invSZ;
		_m1$2.elements[ 9 ] *= invSZ;
		_m1$2.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$2 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	/**
	 * Creates a perspective projection matrix. This is used internally by
	 * {@link PerspectiveCamera#updateProjectionMatrix}.

	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
	 * @param {number} near - The distance from the camera to the near plane.
	 * @param {number} far - The distance from the camera to the far plane.
	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false ) {

		const te = this.elements;

		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( reversedDepth ) {

			c = near / ( far - near );
			d = ( far * near ) / ( far - near );

		} else {

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				c = - ( far + near ) / ( far - near );
				d = ( -2 * far * near ) / ( far - near );

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				c = - far / ( far - near );
				d = ( - far * near ) / ( far - near );

			} else {

				throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

			}

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = -1;	te[ 15 ] = 0;

		return this;

	}

	/**
	 * Creates a orthographic projection matrix. This is used internally by
	 * {@link OrthographicCamera#updateProjectionMatrix}.

	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
	 * @param {number} near - The distance from the camera to the near plane.
	 * @param {number} far - The distance from the camera to the far plane.
	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false ) {

		const te = this.elements;

		const x = 2 / ( right - left );
		const y = 2 / ( top - bottom );

		const a = - ( right + left ) / ( right - left );
		const b = - ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( reversedDepth ) {

			c = 1 / ( far - near );
			d = far / ( far - near );

		} else {

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				c = -2 / ( far - near );
				d = - ( far + near ) / ( far - near );

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				c = -1 / ( far - near );
				d = - near / ( far - near );

			} else {

				throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

			}

		}

		te[ 0 ] = x;		te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = a;
		te[ 1 ] = 0; 		te[ 5 ] = y;		te[ 9 ] = 0; 		te[ 13 ] = b;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = c;		te[ 14 ] = d;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Returns `true` if this matrix is equal with the given one.
	 *
	 * @param {Matrix4} matrix - The matrix to test for equality.
	 * @return {boolean} Whether this matrix is equal with the given one.
	 */
	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	/**
	 * Sets the elements of the matrix from the given array.
	 *
	 * @param {Array<number>} array - The matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Matrix4} A reference to this matrix.
	 */
	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	/**
	 * Writes the elements of this matrix to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The matrix elements in column-major order.
	 */
	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$2 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$2 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

/**
 * A class representing Euler angles.
 *
 * Euler angles describe a rotational transformation by rotating an object on
 * its various axes in specified amounts per axis, and a specified axis
 * order.
 *
 * Iterating through an instance will yield its components (x, y, z,
 * order) in the corresponding order.
 *
 * ```js
 * const a = new THREE.Euler( 0, 1, 1.57, 'XYZ' );
 * const b = new THREE.Vector3( 1, 0, 1 );
 * b.applyEuler(a);
 * ```
 */
class Euler {

	/**
	 * Constructs a new euler instance.
	 *
	 * @param {number} [x=0] - The angle of the x axis in radians.
	 * @param {number} [y=0] - The angle of the y axis in radians.
	 * @param {number} [z=0] - The angle of the z axis in radians.
	 * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
	 */
	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	/**
	 * The angle of the x axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	/**
	 * The angle of the y axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	/**
	 * The angle of the z axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	/**
	 * A string representing the order that the rotations are applied.
	 *
	 * @type {string}
	 * @default 'XYZ'
	 */
	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	/**
	 * Sets the Euler components.
	 *
	 * @param {number} x - The angle of the x axis in radians.
	 * @param {number} y - The angle of the y axis in radians.
	 * @param {number} z - The angle of the z axis in radians.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Returns a new Euler instance with copied values from this instance.
	 *
	 * @return {Euler} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	/**
	 * Copies the values of the given Euler instance to this instance.
	 *
	 * @param {Euler} euler - The Euler instance to copy.
	 * @return {Euler} A reference to this Euler instance.
	 */
	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets the angles of this Euler instance from a pure rotation matrix.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromRotationMatrix( m, order = this._order, update = true ) {

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, -1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, -1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, -1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, -1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, -1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, -1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	/**
	 * Sets the angles of this Euler instance from a normalized quaternion.
	 *
	 * @param {Quaternion} q - A normalized Quaternion.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromQuaternion( q, order, update ) {

		_matrix$2.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$2, order, update );

	}

	/**
	 * Sets the angles of this Euler instance from the given vector.
	 *
	 * @param {Vector3} v - The vector.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	/**
	 * Resets the euler angle with a new order by creating a quaternion from this
	 * euler angle and then setting this euler angle with the quaternion and the
	 * new order.
	 *
	 * Warning: This discards revolution information.
	 *
	 * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	reorder( newOrder ) {

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	/**
	 * Returns `true` if this Euler instance is equal with the given one.
	 *
	 * @param {Euler} euler - The Euler instance to test for equality.
	 * @return {boolean} Whether this Euler instance is equal with the given one.
	 */
	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	/**
	 * Sets this Euler instance's components to values from the given array. The first three
	 * entries of the array are assign to the x,y and z components. An optional fourth entry
	 * defines the Euler order.
	 *
	 * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
	 * @return {Euler} A reference to this Euler instance.
	 */
	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	/**
	 * Writes the components of this Euler instance to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number,number,number,string>} The Euler components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

/**
 * The default Euler angle order.
 *
 * @static
 * @type {string}
 * @default 'XYZ'
 */
Euler.DEFAULT_ORDER = 'XYZ';

/**
 * A layers object assigns an 3D object to 1 or more of 32
 * layers numbered `0` to `31` - internally the layers are stored as a
 * bit mask], and by default all 3D objects are a member of layer `0`.
 *
 * This can be used to control visibility - an object must share a layer with
 * a camera to be visible when that camera's view is
 * rendered.
 *
 * All classes that inherit from {@link Object3D} have an `layers` property which
 * is an instance of this class.
 */
class Layers {

	/**
	 * Constructs a new layers instance, with membership
	 * initially set to layer `0`.
	 */
	constructor() {

		/**
		 * A bit mask storing which of the 32 layers this layers object is currently
		 * a member of.
		 *
		 * @type {number}
		 */
		this.mask = 1 | 0;

	}

	/**
	 * Sets membership to the given layer, and remove membership all other layers.
	 *
	 * @param {number} layer - The layer to set.
	 */
	set( layer ) {

		this.mask = ( 1 << layer | 0 ) >>> 0;

	}

	/**
	 * Adds membership of the given layer.
	 *
	 * @param {number} layer - The layer to enable.
	 */
	enable( layer ) {

		this.mask |= 1 << layer | 0;

	}

	/**
	 * Adds membership to all layers.
	 */
	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	/**
	 * Toggles the membership of the given layer.
	 *
	 * @param {number} layer - The layer to toggle.
	 */
	toggle( layer ) {

		this.mask ^= 1 << layer | 0;

	}

	/**
	 * Removes membership of the given layer.
	 *
	 * @param {number} layer - The layer to enable.
	 */
	disable( layer ) {

		this.mask &= ~ ( 1 << layer | 0 );

	}

	/**
	 * Removes the membership from all layers.
	 */
	disableAll() {

		this.mask = 0;

	}

	/**
	 * Returns `true` if this and the given layers object have at least one
	 * layer in common.
	 *
	 * @param {Layers} layers - The layers to test.
	 * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
	 */
	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	/**
	 * Returns `true` if the given layer is enabled.
	 *
	 * @param {number} layer - The layer to test.
	 * @return {boolean } Whether the given layer is enabled or not.
	 */
	isEnabled( layer ) {

		return ( this.mask & ( 1 << layer | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$1 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

/**
 * Fires when the object has been added to its parent object.
 *
 * @event Object3D#added
 * @type {Object}
 */
const _addedEvent = { type: 'added' };

/**
 * Fires when the object has been removed from its parent object.
 *
 * @event Object3D#removed
 * @type {Object}
 */
const _removedEvent = { type: 'removed' };

/**
 * Fires when a new child object has been added.
 *
 * @event Object3D#childadded
 * @type {Object}
 */
const _childaddedEvent = { type: 'childadded', child: null };

/**
 * Fires when a child object has been removed.
 *
 * @event Object3D#childremoved
 * @type {Object}
 */
const _childremovedEvent = { type: 'childremoved', child: null };

/**
 * This is the base class for most objects in three.js and provides a set of
 * properties and methods for manipulating objects in 3D space.
 *
 * @augments EventDispatcher
 */
class Object3D extends EventDispatcher {

	/**
	 * Constructs a new 3D object.
	 */
	constructor() {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isObject3D = true;

		/**
		 * The ID of the 3D object.
		 *
		 * @name Object3D#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		/**
		 * The UUID of the 3D object.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the 3D object.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The type property is used for detecting the object type
		 * in context of serialization/deserialization.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.type = 'Object3D';

		/**
		 * A reference to the parent object.
		 *
		 * @type {?Object3D}
		 * @default null
		 */
		this.parent = null;

		/**
		 * An array holding the child 3D objects of this instance.
		 *
		 * @type {Array<Object3D>}
		 */
		this.children = [];

		/**
		 * Defines the `up` direction of the 3D object which influences
		 * the orientation via methods like {@link Object3D#lookAt}.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.
		 *
		 * @type {Vector3}
		 */
		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			/**
			 * Represents the object's local position.
			 *
			 * @name Object3D#position
			 * @type {Vector3}
			 * @default (0,0,0)
			 */
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			/**
			 * Represents the object's local rotation as Euler angles, in radians.
			 *
			 * @name Object3D#rotation
			 * @type {Euler}
			 * @default (0,0,0)
			 */
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			/**
			 * Represents the object's local rotation as Quaternions.
			 *
			 * @name Object3D#quaternion
			 * @type {Quaternion}
			 */
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			/**
			 * Represents the object's local scale.
			 *
			 * @name Object3D#scale
			 * @type {Vector3}
			 * @default (1,1,1)
			 */
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			/**
			 * Represents the object's model-view matrix.
			 *
			 * @name Object3D#modelViewMatrix
			 * @type {Matrix4}
			 */
			modelViewMatrix: {
				value: new Matrix4()
			},
			/**
			 * Represents the object's normal matrix.
			 *
			 * @name Object3D#normalMatrix
			 * @type {Matrix3}
			 */
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		/**
		 * Represents the object's transformation matrix in local space.
		 *
		 * @type {Matrix4}
		 */
		this.matrix = new Matrix4();

		/**
		 * Represents the object's transformation matrix in world space.
		 * If the 3D object has no parent, then it's identical to the local transformation matrix
		 *
		 * @type {Matrix4}
		 */
		this.matrixWorld = new Matrix4();

		/**
		 * When set to `true`, the engine automatically computes the local matrix from position,
		 * rotation and scale every frame.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_AUTO_UPDATE`.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		/**
		 * When set to `true`, the engine automatically computes the world matrix from the current local
		 * matrix and the object's transformation hierarchy.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer

		/**
		 * When set to `true`, it calculates the world matrix in that frame and resets this property
		 * to `false`.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.matrixWorldNeedsUpdate = false;

		/**
		 * The layer membership of the 3D object. The 3D object is only visible if it has
		 * at least one layer in common with the camera in use. This property can also be
		 * used to filter out unwanted objects in ray-intersection tests when using {@link Raycaster}.
		 *
		 * @type {Layers}
		 */
		this.layers = new Layers();

		/**
		 * When set to `true`, the 3D object gets rendered.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.visible = true;

		/**
		 * When set to `true`, the 3D object gets rendered into shadow maps.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.castShadow = false;

		/**
		 * When set to `true`, the 3D object is affected by shadows in the scene.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.receiveShadow = false;

		/**
		 * When set to `true`, the 3D object is honored by view frustum culling.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.frustumCulled = true;

		/**
		 * This value allows the default rendering order of scene graph objects to be
		 * overridden although opaque and transparent objects remain sorted independently.
		 * When this property is set for an instance of {@link Group},all descendants
		 * objects will be sorted and rendered together. Sorting is from lowest to highest
		 * render order.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.renderOrder = 0;

		/**
		 * An array holding the animation clips of the 3D object.
		 *
		 * @type {Array<AnimationClip>}
		 */
		this.animations = [];

		/**
		 * Custom depth material to be used when rendering to the depth map. Can only be used
		 * in context of meshes. When shadow-casting with a {@link DirectionalLight} or {@link SpotLight},
		 * if you are modifying vertex positions in the vertex shader you must specify a custom depth
		 * material for proper shadows.
		 *
		 * Only relevant in context of {@link WebGLRenderer}.
		 *
		 * @type {(Material|undefined)}
		 * @default undefined
		 */
		this.customDepthMaterial = undefined;

		/**
		 * Same as {@link Object3D#customDepthMaterial}, but used with {@link PointLight}.
		 *
		 * Only relevant in context of {@link WebGLRenderer}.
		 *
		 * @type {(Material|undefined)}
		 * @default undefined
		 */
		this.customDistanceMaterial = undefined;

		/**
		 * An object that can be used to store custom data about the 3D object. It
		 * should not hold references to functions as these will not be cloned.
		 *
		 * @type {Object}
		 */
		this.userData = {};

	}

	/**
	 * A callback that is executed immediately before a 3D object is rendered to a shadow map.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {Camera} shadowCamera - The shadow camera.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} depthMaterial - The depth material.
	 * @param {Object} group - The geometry group data.
	 */
	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	/**
	 * A callback that is executed immediately after a 3D object is rendered to a shadow map.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {Camera} shadowCamera - The shadow camera.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} depthMaterial - The depth material.
	 * @param {Object} group - The geometry group data.
	 */
	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	/**
	 * A callback that is executed immediately before a 3D object is rendered.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} material - The 3D object's material.
	 * @param {Object} group - The geometry group data.
	 */
	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	/**
	 * A callback that is executed immediately after a 3D object is rendered.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} material - The 3D object's material.
	 * @param {Object} group - The geometry group data.
	 */
	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	/**
	 * Applies the given transformation matrix to the object and updates the object's position,
	 * rotation and scale.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 */
	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	/**
	 * Applies a rotation represented by given the quaternion to the 3D object.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Object3D} A reference to this instance.
	 */
	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	/**
	 * Sets the given rotation represented as an axis/angle couple to the 3D object.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 */
	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	/**
	 * Sets the given rotation represented as Euler angles to the 3D object.
	 *
	 * @param {Euler} euler - The Euler angles.
	 */
	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	/**
	 * Sets the given rotation represented as rotation matrix to the 3D object.
	 *
	 * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
	 * a pure rotation matrix (i.e, unscaled).
	 */
	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	/**
	 * Sets the given rotation represented as a Quaternion to the 3D object.
	 *
	 * @param {Quaternion} q - The Quaternion
	 */
	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	/**
	 * Rotates the 3D object along an axis in local space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	/**
	 * Rotates the 3D object along an axis in world space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	/**
	 * Rotates the 3D object around its X axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	/**
	 * Rotates the 3D object around its Y axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	/**
	 * Rotates the 3D object around its Z axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	/**
	 * Translate the 3D object by a distance along the given axis in local space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	/**
	 * Translate the 3D object by a distance along its X-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	/**
	 * Translate the 3D object by a distance along its Y-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	/**
	 * Translate the 3D object by a distance along its Z-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	/**
	 * Converts the given vector from this 3D object's local space to world space.
	 *
	 * @param {Vector3} vector - The vector to convert.
	 * @return {Vector3} The converted vector.
	 */
	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	/**
	 * Converts the given vector from this 3D object's word space to local space.
	 *
	 * @param {Vector3} vector - The vector to convert.
	 * @return {Vector3} The converted vector.
	 */
	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

	}

	/**
	 * Rotates the object to face a point in world space.
	 *
	 * This method does not support objects having non-uniformly-scaled parent(s).
	 *
	 * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
	 * @param {number} [y] - The y coordinate in world space.
	 * @param {number} [z] - The z coordinate in world space.
	 */
	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$1.lookAt( _position$3, _target, this.up );

		} else {

			_m1$1.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$1 );

		if ( parent ) {

			_m1$1.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$1 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	/**
	 * Adds the given 3D object as a child to this 3D object. An arbitrary number of
	 * objects may be added. Any current parent on an object passed in here will be
	 * removed, since an object can have at most one parent.
	 *
	 * @fires Object3D#added
	 * @fires Object3D#childadded
	 * @param {Object3D} object - The 3D object to add.
	 * @return {Object3D} A reference to this instance.
	 */
	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			object.removeFromParent();
			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

			_childaddedEvent.child = object;
			this.dispatchEvent( _childaddedEvent );
			_childaddedEvent.child = null;

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	/**
	 * Removes the given 3D object as child from this 3D object.
	 * An arbitrary number of objects may be removed.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @param {Object3D} object - The 3D object to remove.
	 * @return {Object3D} A reference to this instance.
	 */
	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== -1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

			_childremovedEvent.child = object;
			this.dispatchEvent( _childremovedEvent );
			_childremovedEvent.child = null;

		}

		return this;

	}

	/**
	 * Removes this 3D object from its current parent.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @return {Object3D} A reference to this instance.
	 */
	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	/**
	 * Removes all child objects.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @return {Object3D} A reference to this instance.
	 */
	clear() {

		return this.remove( ... this.children );

	}

	/**
	 * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
	 * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
	 *
	 * @fires Object3D#added
	 * @fires Object3D#childadded
	 * @param {Object3D} object - The 3D object to attach.
	 * @return {Object3D} A reference to this instance.
	 */
	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$1.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$1.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$1 );

		object.removeFromParent();
		object.parent = this;
		this.children.push( object );

		object.updateWorldMatrix( false, true );

		object.dispatchEvent( _addedEvent );

		_childaddedEvent.child = object;
		this.dispatchEvent( _childaddedEvent );
		_childaddedEvent.child = null;

		return this;

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching ID.
	 *
	 * @param {number} id - The id.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching name.
	 *
	 * @param {string} name - The name.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching property value.
	 *
	 * @param {string} name - The name of the property.
	 * @param {any} value - The value.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns all 3D objects with a matching property value.
	 *
	 * @param {string} name - The name of the property.
	 * @param {any} value - The value.
	 * @param {Array<Object3D>} result - The method stores the result in this array.
	 * @return {Array<Object3D>} The found 3D objects.
	 */
	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	/**
	 * Returns a vector representing the position of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's position in world space.
	 */
	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	/**
	 * Returns a Quaternion representing the position of the 3D object in world space.
	 *
	 * @param {Quaternion} target - The target Quaternion the result is stored to.
	 * @return {Quaternion} The 3D object's rotation in world space.
	 */
	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	/**
	 * Returns a vector representing the scale of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's scale in world space.
	 */
	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	/**
	 * Returns a vector representing the ("look") direction of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's direction in world space.
	 */
	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	/**
	 * Abstract method to get intersections between a casted ray and this
	 * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
	 * implement this method in order to use raycasting.
	 *
	 * @abstract
	 * @param {Raycaster} raycaster - The raycaster.
	 * @param {Array<Object>} intersects - An array holding the result of the method.
	 */
	raycast( /* raycaster, intersects */ ) {}

	/**
	 * Executes the callback on this 3D object and all descendants.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	/**
	 * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
	 * Descendants of invisible 3D objects are not traversed.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	/**
	 * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	/**
	 * Updates the transformation matrix in local space by computing it from the current
	 * position, rotation and scale values.
	 */
	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	/**
	 * Updates the transformation matrix in world space of this 3D objects and its descendants.
	 *
	 * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
	 * local space. The computation of the local and world matrix can be controlled with the
	 * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
	 * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
	 *
	 * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
	 * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
	 */
	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.matrixWorldAutoUpdate === true ) {

				if ( this.parent === null ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// make sure descendants are updated if required

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			child.updateMatrixWorld( force );

		}

	}

	/**
	 * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
	 * update of ancestor and descendant nodes.
	 *
	 * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
	 * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
	 */
	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldAutoUpdate === true ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

		}

		// make sure descendants are updated

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				child.updateWorldMatrix( false, true );

			}

		}

	}

	/**
	 * Serializes the 3D object into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized 3D object.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.7,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.geometryInfo = this._geometryInfo.map( info => ( {
				...info,
				boundingBox: info.boundingBox ? info.boundingBox.toJSON() : undefined,
				boundingSphere: info.boundingSphere ? info.boundingSphere.toJSON() : undefined
			} ) );
			object.instanceInfo = this._instanceInfo.map( info => ( { ...info } ) );

			object.availableInstanceIds = this._availableInstanceIds.slice();
			object.availableGeometryIds = this._availableGeometryIds.slice();

			object.nextIndexStart = this._nextIndexStart;
			object.nextVertexStart = this._nextVertexStart;
			object.geometryCount = this._geometryCount;

			object.maxInstanceCount = this._maxInstanceCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			object.indirectTexture = this._indirectTexture.toJSON( meta );

			if ( this._colorsTexture !== null ) {

				object.colorsTexture = this._colorsTexture.toJSON( meta );

			}

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = this.boundingSphere.toJSON();

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = this.boundingBox.toJSON();

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	/**
	 * Returns a new 3D object with copied values from this instance.
	 *
	 * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
	 * @return {Object3D} A clone of this instance.
	 */
	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	/**
	 * Copies the values of the given 3D object to this instance.
	 *
	 * @param {Object3D} source - The 3D object to copy.
	 * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
	 * @return {Object3D} A reference to this instance.
	 */
	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

/**
 * The default up direction for objects, also used as the default
 * position for {@link DirectionalLight} and {@link HemisphereLight}.
 *
 * @static
 * @type {Vector3}
 * @default (0,1,0)
 */
Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );

/**
 * The default setting for {@link Object3D#matrixAutoUpdate} for
 * newly created 3D objects.
 *
 * @static
 * @type {boolean}
 * @default true
 */
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;

/**
 * The default setting for {@link Object3D#matrixWorldAutoUpdate} for
 * newly created 3D objects.
 *
 * @static
 * @type {boolean}
 * @default true
 */
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _v0$1 = /*@__PURE__*/ new Vector3();
const _v1$3 = /*@__PURE__*/ new Vector3();
const _v2$2 = /*@__PURE__*/ new Vector3();
const _v3$2 = /*@__PURE__*/ new Vector3();

const _vab = /*@__PURE__*/ new Vector3();
const _vac = /*@__PURE__*/ new Vector3();
const _vbc = /*@__PURE__*/ new Vector3();
const _vap = /*@__PURE__*/ new Vector3();
const _vbp = /*@__PURE__*/ new Vector3();
const _vcp = /*@__PURE__*/ new Vector3();

const _v40 = /*@__PURE__*/ new Vector4();
const _v41 = /*@__PURE__*/ new Vector4();
const _v42 = /*@__PURE__*/ new Vector4();

/**
 * A geometric triangle as defined by three vectors representing its three corners.
 */
class Triangle {

	/**
	 * Constructs a new triangle.
	 *
	 * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
	 * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
	 * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
	 */
	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

		/**
		 * The first corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.a = a;

		/**
		 * The second corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.b = b;

		/**
		 * The third corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.c = c;

	}

	/**
	 * Computes the normal vector of a triangle.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's normal.
	 */
	static getNormal( a, b, c, target ) {

		target.subVectors( c, b );
		_v0$1.subVectors( a, b );
		target.cross( _v0$1 );

		const targetLengthSq = target.lengthSq();
		if ( targetLengthSq > 0 ) {

			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

		}

		return target.set( 0, 0, 0 );

	}

	/**
	 * Computes a barycentric coordinates from the given vector.
	 * Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The barycentric coordinates for the given point
	 */
	static getBarycoord( point, a, b, c, target ) {

		// based on: http://www.blackpawn.com/texts/pointinpoly/default.html

		_v0$1.subVectors( c, a );
		_v1$3.subVectors( b, a );
		_v2$2.subVectors( point, a );

		const dot00 = _v0$1.dot( _v0$1 );
		const dot01 = _v0$1.dot( _v1$3 );
		const dot02 = _v0$1.dot( _v2$2 );
		const dot11 = _v1$3.dot( _v1$3 );
		const dot12 = _v1$3.dot( _v2$2 );

		const denom = ( dot00 * dot11 - dot01 * dot01 );

		// collinear or singular triangle
		if ( denom === 0 ) {

			target.set( 0, 0, 0 );
			return null;

		}

		const invDenom = 1 / denom;
		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

		// barycentric coordinates must always sum to 1
		return target.set( 1 - u - v, v, u );

	}

	/**
	 * Returns `true` if the given point, when projected onto the plane of the
	 * triangle, lies within the triangle.
	 *
	 * @param {Vector3} point - The point in 3D space to test.
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @return {boolean} Whether the given point, when projected onto the plane of the
	 * triangle, lies within the triangle or not.
	 */
	static containsPoint( point, a, b, c ) {

		// if the triangle is degenerate then we can't contain a point
		if ( this.getBarycoord( point, a, b, c, _v3$2 ) === null ) {

			return false;

		}

		return ( _v3$2.x >= 0 ) && ( _v3$2.y >= 0 ) && ( ( _v3$2.x + _v3$2.y ) <= 1 );

	}

	/**
	 * Computes the value barycentrically interpolated for the given point on the
	 * triangle. Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - Position of interpolated point.
	 * @param {Vector3} p1 - The first corner of the triangle.
	 * @param {Vector3} p2 - The second corner of the triangle.
	 * @param {Vector3} p3 - The third corner of the triangle.
	 * @param {Vector3} v1 - Value to interpolate of first vertex.
	 * @param {Vector3} v2 - Value to interpolate of second vertex.
	 * @param {Vector3} v3 - Value to interpolate of third vertex.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The interpolated value.
	 */
	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

		if ( this.getBarycoord( point, p1, p2, p3, _v3$2 ) === null ) {

			target.x = 0;
			target.y = 0;
			if ( 'z' in target ) target.z = 0;
			if ( 'w' in target ) target.w = 0;
			return null;

		}

		target.setScalar( 0 );
		target.addScaledVector( v1, _v3$2.x );
		target.addScaledVector( v2, _v3$2.y );
		target.addScaledVector( v3, _v3$2.z );

		return target;

	}

	/**
	 * Computes the value barycentrically interpolated for the given attribute and indices.
	 *
	 * @param {BufferAttribute} attr - The attribute to interpolate.
	 * @param {number} i1 - Index of first vertex.
	 * @param {number} i2 - Index of second vertex.
	 * @param {number} i3 - Index of third vertex.
	 * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The interpolated attribute value.
	 */
	static getInterpolatedAttribute( attr, i1, i2, i3, barycoord, target ) {

		_v40.setScalar( 0 );
		_v41.setScalar( 0 );
		_v42.setScalar( 0 );

		_v40.fromBufferAttribute( attr, i1 );
		_v41.fromBufferAttribute( attr, i2 );
		_v42.fromBufferAttribute( attr, i3 );

		target.setScalar( 0 );
		target.addScaledVector( _v40, barycoord.x );
		target.addScaledVector( _v41, barycoord.y );
		target.addScaledVector( _v42, barycoord.z );

		return target;

	}

	/**
	 * Returns `true` if the triangle is oriented towards the given direction.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} direction - The (normalized) direction vector.
	 * @return {boolean} Whether the triangle is oriented towards the given direction or not.
	 */
	static isFrontFacing( a, b, c, direction ) {

		_v0$1.subVectors( c, b );
		_v1$3.subVectors( a, b );

		// strictly front facing
		return ( _v0$1.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

	}

	/**
	 * Sets the triangle's vertices by copying the given values.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	set( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	}

	/**
	 * Sets the triangle's vertices by copying the given array values.
	 *
	 * @param {Array<Vector3>} points - An array with 3D points.
	 * @param {number} i0 - The array index representing the first corner of the triangle.
	 * @param {number} i1 - The array index representing the second corner of the triangle.
	 * @param {number} i2 - The array index representing the third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	setFromPointsAndIndices( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	}

	/**
	 * Sets the triangle's vertices by copying the given attribute values.
	 *
	 * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
	 * @param {number} i0 - The attribute index representing the first corner of the triangle.
	 * @param {number} i1 - The attribute index representing the second corner of the triangle.
	 * @param {number} i2 - The attribute index representing the third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

		this.a.fromBufferAttribute( attribute, i0 );
		this.b.fromBufferAttribute( attribute, i1 );
		this.c.fromBufferAttribute( attribute, i2 );

		return this;

	}

	/**
	 * Returns a new triangle with copied values from this instance.
	 *
	 * @return {Triangle} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given triangle to this instance.
	 *
	 * @param {Triangle} triangle - The triangle to copy.
	 * @return {Triangle} A reference to this triangle.
	 */
	copy( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	}

	/**
	 * Computes the area of the triangle.
	 *
	 * @return {number} The triangle's area.
	 */
	getArea() {

		_v0$1.subVectors( this.c, this.b );
		_v1$3.subVectors( this.a, this.b );

		return _v0$1.cross( _v1$3 ).length() * 0.5;

	}

	/**
	 * Computes the midpoint of the triangle.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's midpoint.
	 */
	getMidpoint( target ) {

		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	}

	/**
	 * Computes the normal of the triangle.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's normal.
	 */
	getNormal( target ) {

		return Triangle.getNormal( this.a, this.b, this.c, target );

	}

	/**
	 * Computes a plane the triangle lies within.
	 *
	 * @param {Plane} target - The target vector that is used to store the method's result.
	 * @return {Plane} The plane the triangle lies within.
	 */
	getPlane( target ) {

		return target.setFromCoplanarPoints( this.a, this.b, this.c );

	}

	/**
	 * Computes a barycentric coordinates from the given vector.
	 * Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The barycentric coordinates for the given point
	 */
	getBarycoord( point, target ) {

		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

	}

	/**
	 * Computes the value barycentrically interpolated for the given point on the
	 * triangle. Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - Position of interpolated point.
	 * @param {Vector3} v1 - Value to interpolate of first vertex.
	 * @param {Vector3} v2 - Value to interpolate of second vertex.
	 * @param {Vector3} v3 - Value to interpolate of third vertex.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The interpolated value.
	 */
	getInterpolation( point, v1, v2, v3, target ) {

		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

	}

	/**
	 * Returns `true` if the given point, when projected onto the plane of the
	 * triangle, lies within the triangle.
	 *
	 * @param {Vector3} point - The point in 3D space to test.
	 * @return {boolean} Whether the given point, when projected onto the plane of the
	 * triangle, lies within the triangle or not.
	 */
	containsPoint( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	}

	/**
	 * Returns `true` if the triangle is oriented towards the given direction.
	 *
	 * @param {Vector3} direction - The (normalized) direction vector.
	 * @return {boolean} Whether the triangle is oriented towards the given direction or not.
	 */
	isFrontFacing( direction ) {

		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

	}

	/**
	 * Returns `true` if this triangle intersects with the given box.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @return {boolean} Whether this triangle intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return box.intersectsTriangle( this );

	}

	/**
	 * Returns the closest point on the triangle to the given point.
	 *
	 * @param {Vector3} p - The point to compute the closest point for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The closest point on the triangle.
	 */
	closestPointToPoint( p, target ) {

		const a = this.a, b = this.b, c = this.c;
		let v, w;

		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors( b, a );
		_vac.subVectors( c, a );
		_vap.subVectors( p, a );
		const d1 = _vab.dot( _vap );
		const d2 = _vac.dot( _vap );
		if ( d1 <= 0 && d2 <= 0 ) {

			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy( a );

		}

		_vbp.subVectors( p, b );
		const d3 = _vab.dot( _vbp );
		const d4 = _vac.dot( _vbp );
		if ( d3 >= 0 && d4 <= d3 ) {

			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy( b );

		}

		const vc = d1 * d4 - d3 * d2;
		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

			v = d1 / ( d1 - d3 );
			// edge region of AB; barycentric coords (1-v, v, 0)
			return target.copy( a ).addScaledVector( _vab, v );

		}

		_vcp.subVectors( p, c );
		const d5 = _vab.dot( _vcp );
		const d6 = _vac.dot( _vcp );
		if ( d6 >= 0 && d5 <= d6 ) {

			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy( c );

		}

		const vb = d5 * d2 - d1 * d6;
		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

			w = d2 / ( d2 - d6 );
			// edge region of AC; barycentric coords (1-w, 0, w)
			return target.copy( a ).addScaledVector( _vac, w );

		}

		const va = d3 * d6 - d5 * d4;
		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

			_vbc.subVectors( c, b );
			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
			// edge region of BC; barycentric coords (0, 1-w, w)
			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

		}

		// face region
		const denom = 1 / ( va + vb + vc );
		// u = va * denom
		v = vb * denom;
		w = vc * denom;

		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

	}

	/**
	 * Returns `true` if this triangle is equal with the given one.
	 *
	 * @param {Triangle} triangle - The triangle to test for equality.
	 * @return {boolean} Whether this triangle is equal with the given one.
	 */
	equals( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

}

const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };

function hue2rgb( p, q, t ) {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}

/**
 * A Color instance is represented by RGB components in the linear <i>working
 * color space</i>, which defaults to `LinearSRGBColorSpace`. Inputs
 * conventionally using `SRGBColorSpace` (such as hexadecimals and CSS
 * strings) are converted to the working color space automatically.
 *
 * ```js
 * // converted automatically from SRGBColorSpace to LinearSRGBColorSpace
 * const color = new THREE.Color().setHex( 0x112233 );
 * ```
 * Source color spaces may be specified explicitly, to ensure correct conversions.
 * ```js
 * // assumed already LinearSRGBColorSpace; no conversion
 * const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5 );
 *
 * // converted explicitly from SRGBColorSpace to LinearSRGBColorSpace
 * const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5, SRGBColorSpace );
 * ```
 * If THREE.ColorManagement is disabled, no conversions occur. For details,
 * see <i>Color management</i>. Iterating through a Color instance will yield
 * its components (r, g, b) in the corresponding order. A Color can be initialised
 * in any of the following ways:
 * ```js
 * //empty constructor - will default white
 * const color1 = new THREE.Color();
 *
 * //Hexadecimal color (recommended)
 * const color2 = new THREE.Color( 0xff0000 );
 *
 * //RGB string
 * const color3 = new THREE.Color("rgb(255, 0, 0)");
 * const color4 = new THREE.Color("rgb(100%, 0%, 0%)");
 *
 * //X11 color name - all 140 color names are supported.
 * //Note the lack of CamelCase in the name
 * const color5 = new THREE.Color( 'skyblue' );
 * //HSL string
 * const color6 = new THREE.Color("hsl(0, 100%, 50%)");
 *
 * //Separate RGB values between 0 and 1
 * const color7 = new THREE.Color( 1, 0, 0 );
 * ```
 */
class Color {

	/**
	 * Constructs a new color.
	 *
	 * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
	 * and that method is used throughout the rest of the documentation.
	 *
	 * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
	 * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
	 * @param {number} [g] - The green component.
	 * @param {number} [b] - The blue component.
	 */
	constructor( r, g, b ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isColor = true;

		/**
		 * The red component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.r = 1;

		/**
		 * The green component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.g = 1;

		/**
		 * The blue component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.b = 1;

		return this.set( r, g, b );

	}

	/**
	 * Sets the colors's components from the given values.
	 *
	 * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
	 * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
	 * @param {number} [g] - The green component.
	 * @param {number} [b] - The blue component.
	 * @return {Color} A reference to this color.
	 */
	set( r, g, b ) {

		if ( g === undefined && b === undefined ) {

			// r is THREE.Color, hex or string

			const value = r;

			if ( value && value.isColor ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

		} else {

			this.setRGB( r, g, b );

		}

		return this;

	}

	/**
	 * Sets the colors's components to the given scalar value.
	 *
	 * @param {number} scalar - The scalar value.
	 * @return {Color} A reference to this color.
	 */
	setScalar( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	}

	/**
	 * Sets this color from a hexadecimal value.
	 *
	 * @param {number} hex - The hexadecimal value.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setHex( hex, colorSpace = SRGBColorSpace ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from RGB values.
	 *
	 * @param {number} r - Red channel value between `0.0` and `1.0`.
	 * @param {number} g - Green channel value between `0.0` and `1.0`.
	 * @param {number} b - Blue channel value between `0.0` and `1.0`.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

		this.r = r;
		this.g = g;
		this.b = b;

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from RGB values.
	 *
	 * @param {number} h - Hue value between `0.0` and `1.0`.
	 * @param {number} s - Saturation value between `0.0` and `1.0`.
	 * @param {number} l - Lightness value between `0.0` and `1.0`.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo( h, 1 );
		s = clamp( s, 0, 1 );
		l = clamp( l, 0, 1 );

		if ( s === 0 ) {

			this.r = this.g = this.b = l;

		} else {

			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
			const q = ( 2 * l ) - p;

			this.r = hue2rgb( q, p, h + 1 / 3 );
			this.g = hue2rgb( q, p, h );
			this.b = hue2rgb( q, p, h - 1 / 3 );

		}

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
	 * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
	 * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
	 * all 140 color names are supported).
	 *
	 * @param {string} style - Color as a CSS-style string.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setStyle( style, colorSpace = SRGBColorSpace ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		let m;

		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			let color;
			const name = m[ 1 ];
			const components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
							colorSpace
						);

					}

					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
							colorSpace
						);

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setHSL(
							parseFloat( color[ 1 ] ) / 360,
							parseFloat( color[ 2 ] ) / 100,
							parseFloat( color[ 3 ] ) / 100,
							colorSpace
						);

					}

					break;

				default:

					console.warn( 'THREE.Color: Unknown color model ' + style );

			}

		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

			// hex color

			const hex = m[ 1 ];
			const size = hex.length;

			if ( size === 3 ) {

				// #ff0
				return this.setRGB(
					parseInt( hex.charAt( 0 ), 16 ) / 15,
					parseInt( hex.charAt( 1 ), 16 ) / 15,
					parseInt( hex.charAt( 2 ), 16 ) / 15,
					colorSpace
				);

			} else if ( size === 6 ) {

				// #ff0000
				return this.setHex( parseInt( hex, 16 ), colorSpace );

			} else {

				console.warn( 'THREE.Color: Invalid hex color ' + style );

			}

		} else if ( style && style.length > 0 ) {

			return this.setColorName( style, colorSpace );

		}

		return this;

	}

	/**
	 * Sets this color from a color name. Faster than {@link Color#setStyle} if
	 * you don't need the other CSS-style formats.
	 *
	 * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
	 * ```js
	 * Color.NAMES.aliceblue // returns 0xF0F8FF
	 * ```
	 *
	 * @param {string} style - The color name.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setColorName( style, colorSpace = SRGBColorSpace ) {

		// color keywords
		const hex = _colorKeywords[ style.toLowerCase() ];

		if ( hex !== undefined ) {

			// red
			this.setHex( hex, colorSpace );

		} else {

			// unknown color
			console.warn( 'THREE.Color: Unknown color ' + style );

		}

		return this;

	}

	/**
	 * Returns a new color with copied values from this instance.
	 *
	 * @return {Color} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.r, this.g, this.b );

	}

	/**
	 * Copies the values of the given color to this instance.
	 *
	 * @param {Color} color - The color to copy.
	 * @return {Color} A reference to this color.
	 */
	copy( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	}

	/**
	 * Copies the given color into this color, and then converts this color from
	 * `SRGBColorSpace` to `LinearSRGBColorSpace`.
	 *
	 * @param {Color} color - The color to copy/convert.
	 * @return {Color} A reference to this color.
	 */
	copySRGBToLinear( color ) {

		this.r = SRGBToLinear( color.r );
		this.g = SRGBToLinear( color.g );
		this.b = SRGBToLinear( color.b );

		return this;

	}

	/**
	 * Copies the given color into this color, and then converts this color from
	 * `LinearSRGBColorSpace` to `SRGBColorSpace`.
	 *
	 * @param {Color} color - The color to copy/convert.
	 * @return {Color} A reference to this color.
	 */
	copyLinearToSRGB( color ) {

		this.r = LinearToSRGB( color.r );
		this.g = LinearToSRGB( color.g );
		this.b = LinearToSRGB( color.b );

		return this;

	}

	/**
	 * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
	 *
	 * @return {Color} A reference to this color.
	 */
	convertSRGBToLinear() {

		this.copySRGBToLinear( this );

		return this;

	}

	/**
	 * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
	 *
	 * @return {Color} A reference to this color.
	 */
	convertLinearToSRGB() {

		this.copyLinearToSRGB( this );

		return this;

	}

	/**
	 * Returns the hexadecimal value of this color.
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {number} The hexadecimal value.
	 */
	getHex( colorSpace = SRGBColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

	}

	/**
	 * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {string} The hexadecimal value as a string.
	 */
	getHexString( colorSpace = SRGBColorSpace ) {

		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( -6 );

	}

	/**
	 * Converts the colors RGB values into the HSL format and stores them into the
	 * given target object.
	 *
	 * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {{h:number,s:number,l:number}} The HSL representation of this color.
	 */
	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );

		let hue, saturation;
		const lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			const delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;

		return target;

	}

	/**
	 * Returns the RGB values of this color and stores them into the given target object.
	 *
	 * @param {Color} target - The target color that is used to store the method's result.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} The RGB representation of this color.
	 */
	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		target.r = _color.r;
		target.g = _color.g;
		target.b = _color.b;

		return target;

	}

	/**
	 * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {string} The CSS representation of this color.
	 */
	getStyle( colorSpace = SRGBColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		if ( colorSpace !== SRGBColorSpace ) {

			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

		}

		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

	}

	/**
	 * Adds the given HSL values to this color's values.
	 * Internally, this converts the color's RGB values to HSL, adds HSL
	 * and then converts the color back to RGB.
	 *
	 * @param {number} h - Hue value between `0.0` and `1.0`.
	 * @param {number} s - Saturation value between `0.0` and `1.0`.
	 * @param {number} l - Lightness value between `0.0` and `1.0`.
	 * @return {Color} A reference to this color.
	 */
	offsetHSL( h, s, l ) {

		this.getHSL( _hslA );

		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

	}

	/**
	 * Adds the RGB values of the given color to the RGB values of this color.
	 *
	 * @param {Color} color - The color to add.
	 * @return {Color} A reference to this color.
	 */
	add( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	}

	/**
	 * Adds the RGB values of the given colors and stores the result in this instance.
	 *
	 * @param {Color} color1 - The first color.
	 * @param {Color} color2 - The second color.
	 * @return {Color} A reference to this color.
	 */
	addColors( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	}

	/**
	 * Adds the given scalar value to the RGB values of this color.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Color} A reference to this color.
	 */
	addScalar( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	}

	/**
	 * Subtracts the RGB values of the given color from the RGB values of this color.
	 *
	 * @param {Color} color - The color to subtract.
	 * @return {Color} A reference to this color.
	 */
	sub( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	}

	/**
	 * Multiplies the RGB values of the given color with the RGB values of this color.
	 *
	 * @param {Color} color - The color to multiply.
	 * @return {Color} A reference to this color.
	 */
	multiply( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	}

	/**
	 * Multiplies the given scalar value with the RGB values of this color.
	 *
	 * @param {number} s - The scalar to multiply.
	 * @return {Color} A reference to this color.
	 */
	multiplyScalar( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	}

	/**
	 * Linearly interpolates this color's RGB values toward the RGB values of the
	 * given color. The alpha argument can be thought of as the ratio between
	 * the two colors, where `0.0` is this color and `1.0` is the first argument.
	 *
	 * @param {Color} color - The color to converge on.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerp( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given colors and stores the result in this instance.
	 * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
	 * is the first and `1.0` is the second color.
	 *
	 * @param {Color} color1 - The first color.
	 * @param {Color} color2 - The second color.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerpColors( color1, color2, alpha ) {

		this.r = color1.r + ( color2.r - color1.r ) * alpha;
		this.g = color1.g + ( color2.g - color1.g ) * alpha;
		this.b = color1.b + ( color2.b - color1.b ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates this color's HSL values toward the HSL values of the
	 * given color. It differs from {@link Color#lerp} by not interpolating straight
	 * from one color to the other, but instead going through all the hues in between
	 * those two colors. The alpha argument can be thought of as the ratio between
	 * the two colors, where 0.0 is this color and 1.0 is the first argument.
	 *
	 * @param {Color} color - The color to converge on.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerpHSL( color, alpha ) {

		this.getHSL( _hslA );
		color.getHSL( _hslB );

		const h = lerp( _hslA.h, _hslB.h, alpha );
		const s = lerp( _hslA.s, _hslB.s, alpha );
		const l = lerp( _hslA.l, _hslB.l, alpha );

		this.setHSL( h, s, l );

		return this;

	}

	/**
	 * Sets the color's RGB components from the given 3D vector.
	 *
	 * @param {Vector3} v - The vector to set.
	 * @return {Color} A reference to this color.
	 */
	setFromVector3( v ) {

		this.r = v.x;
		this.g = v.y;
		this.b = v.z;

		return this;

	}

	/**
	 * Transforms this color with the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix.
	 * @return {Color} A reference to this color.
	 */
	applyMatrix3( m ) {

		const r = this.r, g = this.g, b = this.b;
		const e = m.elements;

		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

		return this;

	}

	/**
	 * Returns `true` if this color is equal with the given one.
	 *
	 * @param {Color} c - The color to test for equality.
	 * @return {boolean} Whether this bounding color is equal with the given one.
	 */
	equals( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	}

	/**
	 * Sets this color's RGB components from the given array.
	 *
	 * @param {Array<number>} array - An array holding the RGB values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Color} A reference to this color.
	 */
	fromArray( array, offset = 0 ) {

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	}

	/**
	 * Writes the RGB components of this color to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the color components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The color components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	}

	/**
	 * Sets the components of this color from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding color data.
	 * @param {number} index - The index into the attribute.
	 * @return {Color} A reference to this color.
	 */
	fromBufferAttribute( attribute, index ) {

		this.r = attribute.getX( index );
		this.g = attribute.getY( index );
		this.b = attribute.getZ( index );

		return this;

	}

	/**
	 * This methods defines the serialization result of this class. Returns the color
	 * as a hexadecimal value.
	 *
	 * @return {number} The hexadecimal value.
	 */
	toJSON() {

		return this.getHex();

	}

	*[ Symbol.iterator ]() {

		yield this.r;
		yield this.g;
		yield this.b;

	}

}

const _color = /*@__PURE__*/ new Color();

/**
 * A dictionary with X11 color names.
 *
 * Note that multiple words such as Dark Orange become the string 'darkorange'.
 *
 * @static
 * @type {Object}
 */
Color.NAMES = _colorKeywords;

let _materialId = 0;

/**
 * Abstract base class for materials.
 *
 * Materials define the appearance of renderable 3D objects.
 *
 * @abstract
 * @augments EventDispatcher
 */
class Material extends EventDispatcher {

	/**
	 * Constructs a new material.
	 */
	constructor() {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isMaterial = true;

		/**
		 * The ID of the material.
		 *
		 * @name Material#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _materialId ++ } );

		/**
		 * The UUID of the material.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the material.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The type property is used for detecting the object type
		 * in context of serialization/deserialization.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.type = 'Material';

		/**
		 * Defines the blending type of the material.
		 *
		 * It must be set to `CustomBlending` if custom blending properties like
		 * {@link Material#blendSrc}, {@link Material#blendDst} or {@link Material#blendEquation}
		 * should have any effect.
		 *
		 * @type {(NoBlending|NormalBlending|AdditiveBlending|SubtractiveBlending|MultiplyBlending|CustomBlending)}
		 * @default NormalBlending
		 */
		this.blending = NormalBlending;

		/**
		 * Defines which side of faces will be rendered - front, back or both.
		 *
		 * @type {(FrontSide|BackSide|DoubleSide)}
		 * @default FrontSide
		 */
		this.side = FrontSide;

		/**
		 * If set to `true`, vertex colors should be used.
		 *
		 * The engine supports RGB and RGBA vertex colors depending on whether a three (RGB) or
		 * four (RGBA) component color buffer attribute is used.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.vertexColors = false;

		/**
		 * Defines how transparent the material is.
		 * A value of `0.0` indicates fully transparent, `1.0` is fully opaque.
		 *
		 * If the {@link Material#transparent} is not set to `true`,
		 * the material will remain fully opaque and this value will only affect its color.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.opacity = 1;

		/**
		 * Defines whether this material is transparent. This has an effect on
		 * rendering as transparent objects need special treatment and are rendered
		 * after non-transparent objects.
		 *
		 * When set to true, the extent to which the material is transparent is
		 * controlled by {@link Material#opacity}.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.transparent = false;

		/**
		 * Enables alpha hashed transparency, an alternative to {@link Material#transparent} or
		 * {@link Material#alphaTest}. The material will not be rendered if opacity is lower than
		 * a random threshold. Randomization introduces some grain or noise, but approximates alpha
		 * blending without the associated problems of sorting. Using TAA can reduce the resulting noise.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.alphaHash = false;

		/**
		 * Defines the blending source factor.
		 *
		 * @type {(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default SrcAlphaFactor
		 */
		this.blendSrc = SrcAlphaFactor;

		/**
		 * Defines the blending destination factor.
		 *
		 * @type {(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default OneMinusSrcAlphaFactor
		 */
		this.blendDst = OneMinusSrcAlphaFactor;

		/**
		 * Defines the blending equation.
		 *
		 * @type {(AddEquation|SubtractEquation|ReverseSubtractEquation|MinEquation|MaxEquation)}
		 * @default AddEquation
		 */
		this.blendEquation = AddEquation;

		/**
		 * Defines the blending source alpha factor.
		 *
		 * @type {?(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default null
		 */
		this.blendSrcAlpha = null;

		/**
		 * Defines the blending destination alpha factor.
		 *
		 * @type {?(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default null
		 */
		this.blendDstAlpha = null;

		/**
		 * Defines the blending equation of the alpha channel.
		 *
		 * @type {?(AddEquation|SubtractEquation|ReverseSubtractEquation|MinEquation|MaxEquation)}
		 * @default null
		 */
		this.blendEquationAlpha = null;

		/**
		 * Represents the RGB values of the constant blend color.
		 *
		 * This property has only an effect when using custom blending with `ConstantColor` or `OneMinusConstantColor`.
		 *
		 * @type {Color}
		 * @default (0,0,0)
		 */
		this.blendColor = new Color( 0, 0, 0 );

		/**
		 * Represents the alpha value of the constant blend color.
		 *
		 * This property has only an effect when using custom blending with `ConstantAlpha` or `OneMinusConstantAlpha`.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.blendAlpha = 0;

		/**
		 * Defines the depth function.
		 *
		 * @type {(NeverDepth|AlwaysDepth|LessDepth|LessEqualDepth|EqualDepth|GreaterEqualDepth|GreaterDepth|NotEqualDepth)}
		 * @default LessEqualDepth
		 */
		this.depthFunc = LessEqualDepth;

		/**
		 * Whether to have depth test enabled when rendering this material.
		 * When the depth test is disabled, the depth write will also be implicitly disabled.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthTest = true;

		/**
		 * Whether rendering this material has any effect on the depth buffer.
		 *
		 * When drawing 2D overlays it can be useful to disable the depth writing in
		 * order to layer several things together without creating z-index artifacts.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthWrite = true;

		/**
		 * The bit mask to use when writing to the stencil buffer.
		 *
		 * @type {number}
		 * @default 0xff
		 */
		this.stencilWriteMask = 0xff;

		/**
		 * The stencil comparison function to use.
		 *
		 * @type {NeverStencilFunc|LessStencilFunc|EqualStencilFunc|LessEqualStencilFunc|GreaterStencilFunc|NotEqualStencilFunc|GreaterEqualStencilFunc|AlwaysStencilFunc}
		 * @default AlwaysStencilFunc
		 */
		this.stencilFunc = AlwaysStencilFunc;

		/**
		 * The value to use when performing stencil comparisons or stencil operations.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.stencilRef = 0;

		/**
		 * The bit mask to use when comparing against the stencil buffer.
		 *
		 * @type {number}
		 * @default 0xff
		 */
		this.stencilFuncMask = 0xff;

		/**
		 * Which stencil operation to perform when the comparison function returns `false`.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilFail = KeepStencilOp;

		/**
		 * Which stencil operation to perform when the comparison function returns
		 * `true` but the depth test fails.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilZFail = KeepStencilOp;

		/**
		 * Which stencil operation to perform when the comparison function returns
		 * `true` and the depth test passes.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilZPass = KeepStencilOp;

		/**
		 * Whether stencil operations are performed against the stencil buffer. In
		 * order to perform writes or comparisons against the stencil buffer this
		 * value must be `true`.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.stencilWrite = false;

		/**
		 * User-defined clipping planes specified as THREE.Plane objects in world
		 * space. These planes apply to the objects this material is attached to.
		 * Points in space whose signed distance to the plane is negative are clipped
		 * (not rendered). This requires {@link WebGLRenderer#localClippingEnabled} to
		 * be `true`.
		 *
		 * @type {?Array<Plane>}
		 * @default null
		 */
		this.clippingPlanes = null;

		/**
		 * Changes the behavior of clipping planes so that only their intersection is
		 * clipped, rather than their union.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.clipIntersection = false;

		/**
		 * Defines whether to clip shadows according to the clipping planes specified
		 * on this material.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.clipShadows = false;

		/**
		 * Defines which side of faces cast shadows. If `null`, the side casting shadows
		 * is determined as follows:
		 *
		 * - When {@link Material#side} is set to `FrontSide`, the back side cast shadows.
		 * - When {@link Material#side} is set to `BackSide`, the front side cast shadows.
		 * - When {@link Material#side} is set to `DoubleSide`, both sides cast shadows.
		 *
		 * @type {?(FrontSide|BackSide|DoubleSide)}
		 * @default null
		 */
		this.shadowSide = null;

		/**
		 * Whether to render the material's color.
		 *
		 * This can be used in conjunction with {@link Object3D#renderOder} to create invisible
		 * objects that occlude other objects.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.colorWrite = true;

		/**
		 * Override the renderer's default precision for this material.
		 *
		 * @type {?('highp'|'mediump'|'lowp')}
		 * @default null
		 */
		this.precision = null;

		/**
		 * Whether to use polygon offset or not. When enabled, each fragment's depth value will
		 * be offset after it is interpolated from the depth values of the appropriate vertices.
		 * The offset is added before the depth test is performed and before the value is written
		 * into the depth buffer.
		 *
		 * Can be useful for rendering hidden-line images, for applying decals to surfaces, and for
		 * rendering solids with highlighted edges.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.polygonOffset = false;

		/**
		 * Specifies a scale factor that is used to create a variable depth offset for each polygon.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.polygonOffsetFactor = 0;

		/**
		 * Is multiplied by an implementation-specific value to create a constant depth offset.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.polygonOffsetUnits = 0;

		/**
		 * Whether to apply dithering to the color to remove the appearance of banding.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.dithering = false;

		/**
		 * Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
		 * (meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
		 * will smooth aliasing on clip plane edges and alphaTest-clipped edges.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.alphaToCoverage = false;

		/**
		 * Whether to premultiply the alpha (transparency) value.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.premultipliedAlpha = false;

		/**
		 * Whether double-sided, transparent objects should be rendered with a single pass or not.
		 *
		 * The engine renders double-sided, transparent objects with two draw calls (back faces first,
		 * then front faces) to mitigate transparency artifacts. There are scenarios however where this
		 * approach produces no quality gains but still doubles draw calls e.g. when rendering flat
		 * vegetation like grass sprites. In these cases, set the `forceSinglePass` flag to `true` to
		 * disable the two pass rendering to avoid performance issues.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.forceSinglePass = false;

		/**
		 * Whether it's possible to override the material with {@link Scene#overrideMaterial} or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.allowOverride = true;

		/**
		 * Defines whether 3D objects using this material are visible.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.visible = true;

		/**
		 * Defines whether this material is tone mapped according to the renderer's tone mapping setting.
		 *
		 * It is ignored when rendering to a render taróm»ÓVòµë(š+myØt€¤ì(($$$$$$%­••À€ôÑÉÕ”ì($$$$$$%‰É•…¬ì(($$$$$%ô(($$$$%ô(($$$%ô•±Í”ì(($$$$%­••À€ôÑÉÕ”ì(($$$%ô(($$%ô(($$$¼¼¥¸µÁ±…”½µÁ…Ñ¥½¸(($$%¥˜€ ­••À€¤ì(($$$%¥˜€ ¤€„ôôÝÉ¥Ñ•%¹‘•à€¤ì(($$$$%Ñ¥µ•ÍlÝÉ¥Ñ•%¹‘•àt€ôÑ¥µ•Íl¤tì(($$$$%½¹ÍÐÉ•…‘=™™Í•Ð€ô¤€¨ÍÑÉ¥‘”°($$$$$%ÝÉ¥Ñ•=™™Í•Ð€ôÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”ì(($$$$%™½È€ ±•Ð¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$$$$%Ù…±Õ•ÍlÝÉ¥Ñ•=™™Í•Ð€¬¨t€ôÙ…±Õ•ÍlÉ•…‘=™™Í•Ð€¬¨tì(($$$$%ô(($$$%ô(($$$$¬¬ÝÉ¥Ñ•%¹‘•àì(($$%ô(($%ô(($$¼¼™±ÕÍ ±…ÍÐ­•å™É…µ”€¡½µÁ…Ñ¥½¸±½½­Ì…¡•…¤(($%¥˜€ ±…ÍÑ%¹‘•à€ø€À€¤ì(($$%Ñ¥µ•ÍlÝÉ¥Ñ•%¹‘•àt€ôÑ¥µ•Íl±…ÍÑ%¹‘•àtì(($$%™½È€ ±•ÐÉ•…‘=™™Í•Ð€ô±…ÍÑ%¹‘•à€¨ÍÑÉ¥‘”°ÝÉ¥Ñ•=™™Í•Ð€ôÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”°¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$$%Ù…±Õ•ÍlÝÉ¥Ñ•=™™Í•Ð€¬¨t€ôÙ…±Õ•ÍlÉ•…‘=™™Í•Ð€¬¨tì(($$%ô(($$$¬¬ÝÉ¥Ñ•%¹‘•àì(($%ô(($%¥˜€ ÝÉ¥Ñ•%¹‘•à€„ôôÑ¥µ•Ì¹±•¹Ñ €¤ì(($$%Ñ¡¥Ì¹Ñ¥µ•Ì€ôÑ¥µ•Ì¹Í±¥” €À°ÝÉ¥Ñ•%¹‘•à€¤ì($$%Ñ¡¥Ì¹Ù…±Õ•Ì€ôÙ…±Õ•Ì¹Í±¥” €À°ÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Ñ¥µ•Ì€ôÑ¥µ•Ìì($$%Ñ¡¥Ì¹Ù…±Õ•Ì€ôÙ…±Õ•Ìì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü­•å™É…µ”ÑÉ…¬Ý¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í-•å™É…µ•QÉ…­ô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ì¹Í±¥” ¤ì($%½¹ÍÐÙ…±Õ•Ì€ôÑ¡¥Ì¹Ù…±Õ•Ì¹Í±¥” ¤ì(($%½¹ÍÐQåÁ•‘-•å™É…µ•QÉ…¬€ôÑ¡¥Ì¹½¹ÍÑÉÕÑ½Èì($%½¹ÍÐÑÉ…¬€ô¹•ÜQåÁ•‘-•å™É…µ•QÉ…¬ Ñ¡¥Ì¹¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì(($$¼¼%¹Ñ•ÉÁ½±…¹Ð…ÉÕµ•¹ÐÑ¼½¹ÍÑÉÕÑ½È¥Ì¹½ÐÍ…Ù•°Í¼½ÁäÑ¡”™…Ñ½Éäµ•Ñ¡½‘¥É•Ñ±ä¸($%ÑÉ…¬¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ðì(($%É•ÑÕÉ¸ÑÉ…¬ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€œœ(€¨¼)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€œœì((¼¨¨(€¨Q¡”Ñ¥µ”‰Õ™™•ÈÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”íQåÁ•‘ÉÉ…åñÉÉ…åô(€¨‘•™…Õ±Ð±½…ÐÌÉÉÉ…ä¹½¹ÍÑÉÕÑ½È(€¨¼)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Q¥µ•	Õ™™•ÉQåÁ”€ô±½…ÐÌÉÉÉ…äì((¼¨¨(€¨Q¡”Ù…±Õ”‰Õ™™•ÈÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”íQåÁ•‘ÉÉ…åñÉÉ…åô(€¨‘•™…Õ±Ð±½…ÐÌÉÉÉ…ä¹½¹ÍÑÉÕÑ½È(€¨¼)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ô±½…ÐÌÉÉÉ…äì((¼¨¨(€¨Q¡”‘•™…Õ±Ð¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ô(€¨‘•™…Õ±Ð%¹Ñ•ÉÁ½±…Ñ•1¥¹•…È(€¨¼)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Èì((¼¨¨(€¨ÑÉ…¬™½È‰½½±•…¸­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌ	½½±•…¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‰½½±•…¸­•å™É…µ”ÑÉ…¬¸($€¨($€¨Q¡¥Ì­•å™É…µ”ÑÉ…¬ÑåÁ”¡…Ì¹¼¥¹Ñ•ÉÁ½±…Ñ¥½¹€Á…É…µ•Ñ•È‰•…ÕÍ”Ñ¡”($€¨¥¹Ñ•ÉÁ½±…Ñ¥½¸¥Ì…±Ý…åÌ‘¥ÍÉ•Ñ”¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñ‰½½±•…¸ùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€‰½½°œ(€¨¼)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€‰½½°œì((¼¨¨(€¨Q¡”Ù…±Õ”‰Õ™™•ÈÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”íQåÁ•‘ÉÉ…åñÉÉ…åô(€¨‘•™…Õ±ÐÉÉ…ä¹½¹ÍÑÉÕÑ½È(€¨¼)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ôÉÉ…äì((¼¨¨(€¨Q¡”‘•™…Õ±Ð¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ô(€¨‘•™…Õ±Ð%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”(€¨¼)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”ì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È€ôÕ¹‘•™¥¹•ì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨ÑÉ…¬™½È½±½È­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌ½±½É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü½±½È­•å™É…µ”ÑÉ…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨Á…É…´ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ôm¥¹Ñ•ÉÁ½±…Ñ¥½¹t€´Q¡”¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€½±½Èœ(€¨¼)½±½É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€½±½Èœì((¼¨¨(€¨ÑÉ…¬™½È¹Õµ•É¥Œ­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌ9Õµ‰•É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¹Õµ‰•È­•å™É…µ”ÑÉ…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨Á…É…´ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ôm¥¹Ñ•ÉÁ½±…Ñ¥½¹t€´Q¡”¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€¹Õµ‰•Èœ(€¨¼)9Õµ‰•É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€¹Õµ‰•Èœì((¼¨¨(€¨MÁ¡•É¥…°±¥¹•…ÈÕ¹¥ÐÅÕ…Ñ•É¹¥½¸¥¹Ñ•ÉÁ½±…¹Ð¸(€¨(€¨…Õµ•¹ÑÌ%¹Ñ•ÉÁ½±…¹Ð(€¨¼)±…ÍÌEÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð•áÑ•¹‘Ì%¹Ñ•ÉÁ½±…¹Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜM1I@¥¹Ñ•ÉÁ½±…¹Ð¸($€¨($€¨Á…É…´íQåÁ•‘ÉÉ…åôÁ…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì€´Q¡”Á…É…µ•Ñ•ÈÁ½Í¥Ñ¥½¹Ì¡½±Ñ¡”¥¹Ñ•ÉÁ½±…Ñ¥½¸™…Ñ½ÉÌ¸($€¨Á…É…´íQåÁ•‘ÉÉ…åôÍ…µÁ±•Y…±Õ•Ì€´Q¡”Í…µÁ±”Ù…±Õ•Ì¸($€¨Á…É…´í¹Õµ‰•ÉôÍ…µÁ±•M¥é”€´Q¡”Í…µÁ±”Í¥é”($€¨Á…É…´íQåÁ•‘ÉÉ…åômÉ•ÍÕ±Ñ	Õ™™•Ét€´Q¡”É•ÍÕ±Ð‰Õ™™•È¸($€¨¼(%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì((%ô((%¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä°ÐÀ°Ð°ÐÄ€¤ì(($%½¹ÍÐÉ•ÍÕ±Ð€ôÑ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%…±Á¡„€ô€ Ð€´ÐÀ€¤€¼€ ÐÄ€´ÐÀ€¤ì(($%±•Ð½™™Í•Ð€ô¤Ä€¨ÍÑÉ¥‘”ì(($%™½È€ ±•Ð•¹€ô½™™Í•Ð€¬ÍÑÉ¥‘”ì½™™Í•Ð€„ôô•¹ì½™™Í•Ð€¬ô€Ð€¤ì(($$%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð É•ÍÕ±Ð°€À°Ù…±Õ•Ì°½™™Í•Ð€´ÍÑÉ¥‘”°Ù…±Õ•Ì°½™™Í•Ð°…±Á¡„€¤ì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±Ðì((%ô()ô((¼¨¨(€¨ÑÉ…¬™½ÈEÕ…Ñ•É¹¥½¸­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌEÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜEÕ…Ñ•É¹¥½¸­•å™É…µ”ÑÉ…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨Á…É…´ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ôm¥¹Ñ•ÉÁ½±…Ñ¥½¹t€´Q¡”¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô(($¼¨¨($€¨=Ù•ÉÝÉ¥ÑÑ•¸Í¼Ñ¡”µ•Ñ¡½É•ÑÕÉ¹ÌEÕ…Ñ•É¹¥½¸‰…Í•¥¹Ñ•ÉÁ½±…¹Ð¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íQåÁ•‘ÉÉ…åômÉ•ÍÕ±Ñt€´Q¡”É•ÍÕ±Ð‰Õ™™•È¸($€¨É•ÑÕÉ¸íEÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹ÑôQ¡”¹•Ü¥¹Ñ•ÉÁ½±…¹Ð¸($€¨¼(%%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È É•ÍÕ±Ð€¤ì(($%É•ÑÕÉ¸¹•ÜEÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð Ñ¡¥Ì¹Ñ¥µ•Ì°Ñ¡¥Ì¹Ù…±Õ•Ì°Ñ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°É•ÍÕ±Ð€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€ÅÕ…Ñ•É¹¥½¸œ(€¨¼)EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€ÅÕ…Ñ•É¹¥½¸œì(¼¼Y…±Õ•	Õ™™•ÉQåÁ”¥Ì¥¹¡•É¥Ñ•(¼¼•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸¥Ì¥¹¡•É¥Ñ•ì)EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨ÑÉ…¬™½ÈÍÑÉ¥¹œ­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌMÑÉ¥¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÑÉ¥¹œ­•å™É…µ”ÑÉ…¬¸($€¨($€¨Q¡¥Ì­•å™É…µ”ÑÉ…¬ÑåÁ”¡…Ì¹¼¥¹Ñ•ÉÁ½±…Ñ¥½¹€Á…É…µ•Ñ•È‰•…ÕÍ”Ñ¡”($€¨¥¹Ñ•ÉÁ½±…Ñ¥½¸¥Ì…±Ý…åÌ‘¥ÍÉ•Ñ”¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñÍÑÉ¥¹œùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€ÍÑÉ¥¹œœ(€¨¼)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€ÍÑÉ¥¹œœì((¼¨¨(€¨Q¡”Ù…±Õ”‰Õ™™•ÈÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”íQåÁ•‘ÉÉ…åñÉÉ…åô(€¨‘•™…Õ±ÐÉÉ…ä¹½¹ÍÑÉÕÑ½È(€¨¼)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ôÉÉ…äì((¼¨¨(€¨Q¡”‘•™…Õ±Ð¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”½˜Ñ¡¥Ì­•å™É…µ”ÑÉ…¬¸(€¨(€¨ÑåÁ”ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ô(€¨‘•™…Õ±Ð%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”(€¨¼)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”ì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È€ôÕ¹‘•™¥¹•ì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨ÑÉ…¬™½ÈÙ•Ñ½È­•å™É…µ”Ù…±Õ•Ì¸(€¨(€¨…Õµ•¹ÑÌ-•å™É…µ•QÉ…¬(€¨¼)±…ÍÌY•Ñ½É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÙ•Ñ½È­•å™É…µ”ÑÉ…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”­•å™É…µ”ÑÉ…¬Ì¹…µ”¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÑ¥µ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ñ¥µ•Ì¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÙ…±Õ•Ì€´±¥ÍÐ½˜­•å™É…µ”Ù…±Õ•Ì¸($€¨Á…É…´ì¡%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Éñ%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ•ñ%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ¥ôm¥¹Ñ•ÉÁ½±…Ñ¥½¹t€´Q¡”¥¹Ñ•ÉÁ½±…Ñ¥½¸ÑåÁ”¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%ÍÕÁ•È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô()ô((¼¨¨(€¨Q¡”Ù…±Õ”ÑåÁ”¹…µ”¸(€¨(€¨ÑåÁ”íMÑÉ¥¹ô(€¨‘•™…Õ±Ð€Ù•Ñ½Èœ(€¨¼)Y•Ñ½É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€Ù•Ñ½Èœì((¼¨¨(€¨É•ÕÍ…‰±”Í•Ð½˜­•å™É…µ”ÑÉ…­ÌÝ¡¥ É•ÁÉ•Í•¹Ð…¸…¹¥µ…Ñ¥½¸¸(€¨¼)±…ÍÌ¹¥µ…Ñ¥½¹±¥Àì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…¹¥µ…Ñ¥½¸±¥À¸($€¨($€¨9½Ñ”è%¹ÍÑ•…½˜¥¹ÍÑ…¹Ñ¥…Ñ¥¹œ…¸¹¥µ…Ñ¥½¹±¥À‘¥É•Ñ±äÝ¥Ñ Ñ¡”½¹ÍÑÉÕÑ½È°å½Ô…¸($€¨ÕÍ”Ñ¡”ÍÑ…Ñ¥Œ¥¹Ñ•É™…”½˜Ñ¡¥Ì±…ÍÌ™½ÈÉ•…Ñ¥¹œ±¥ÁÌ¸%¸µ½ÍÐ…Í•ÌÑ¡½Õ °…¹¥µ…Ñ¥½¸±¥ÁÌ($€¨Ý¥±°…ÕÑ½µ…Ñ¥…±±ä‰”É•…Ñ•‰ä±½…‘•ÉÌÝ¡•¸¥µÁ½ÉÑ¥¹œ…¹¥µ…Ñ•€Í…ÍÍ•ÑÌ¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôm¹…µ”ôœt€´Q¡”±¥ÀÌ¹…µ”¸($€¨Á…É…´í¹Õµ‰•Éôm‘ÕÉ…Ñ¥½¸ô´Åt€´Q¡”±¥ÀÌ‘ÕÉ…Ñ¥½¸¥¸Í•½¹‘Ì¸%˜„¹•…Ñ¥Ù”Ù…±Õ”¥ÌÁ…ÍÍ•°($€¨Ñ¡”‘ÕÉ…Ñ¥½¸Ý¥±°‰”…±Õ±…Ñ•™É½´Ñ¡”Á…ÍÍ•­•å™É…µ•Ì¸($€¨Á…É…´íÉÉ…äñ-•å™É…µ•QÉ…¬ùôÑÉ…­Ì€´¸…ÉÉ…ä½˜­•å™É…µ”ÑÉ…­Ì¸($€¨Á…É…´ì¡9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•ñ‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”¥ôm‰±•¹‘5½‘”õ9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•t€´•™¥¹•Ì¡½ÜÑ¡”…¹¥µ…Ñ¥½¸($€¨¥Ì‰±•¹‘•½½µ‰¥¹•Ý¡•¸ÑÝ¼½Èµ½É”…¹¥µ…Ñ¥½¹Ì…É”Í¥µÕ±Ñ…¹•½ÕÍ±äÁ±…å•¸($€¨¼(%½¹ÍÑÉÕÑ½È ¹…µ”€ô€œœ°‘ÕÉ…Ñ¥½¸€ô€´Ä°ÑÉ…­Ì€ômt°‰±•¹‘5½‘”€ô9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”€¤ì(($$¼¨¨($$€¨Q¡”±¥ÀÌ¹…µ”¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹¹…µ”€ô¹…µ”ì(($$¼¨¨($$€¨€¸…ÉÉ…ä½˜­•å™É…µ”ÑÉ…­Ì¸($$€¨($$€¨ÑåÁ”íÉÉ…äñ-•å™É…µ•QÉ…¬ùô($$€¨¼($%Ñ¡¥Ì¹ÑÉ…­Ì€ôÑÉ…­Ìì(($$¼¨¨($$€¨Q¡”±¥ÀÌ‘ÕÉ…Ñ¥½¸¥¸Í•½¹‘Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ô‘ÕÉ…Ñ¥½¸ì(($$¼¨¨($$€¨•™¥¹•Ì¡½ÜÑ¡”…¹¥µ…Ñ¥½¸¥Ì‰±•¹‘•½½µ‰¥¹•Ý¡•¸ÑÝ¼½Èµ½É”…¹¥µ…Ñ¥½¹Ì($$€¨…É”Í¥µÕ±Ñ…¹•½ÕÍ±äÁ±…å•¸($$€¨($$€¨ÑåÁ”ì¡9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•ñ‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”¥ô($$€¨¼($%Ñ¡¥Ì¹‰±•¹‘5½‘”€ô‰±•¹‘5½‘”ì(($$¼¨¨($$€¨Q¡”UU%½˜Ñ¡”…¹¥µ…Ñ¥½¸±¥À¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹ÕÕ¥€ô•¹•É…Ñ•UU% ¤ì(($$¼¨¨($$€¨¸½‰©•ÐÑ¡…Ð…¸‰”ÕÍ•Ñ¼ÍÑ½É”ÕÍÑ½´‘…Ñ„…‰½ÕÐÑ¡”…¹¥µ…Ñ¥½¸±¥À¸($$€¨%ÐÍ¡½Õ±¹½Ð¡½±É•™•É•¹•ÌÑ¼™Õ¹Ñ¥½¹Ì…ÌÑ¡•Í”Ý¥±°¹½Ð‰”±½¹•¸($$€¨($$€¨ÑåÁ”í=‰©•Ñô($$€¨¼($%Ñ¡¥Ì¹ÕÍ•É…Ñ„€ôíôì(($$¼¼Ñ¡¥Ìµ•…¹Ì¥ÐÍ¡½Õ±™¥ÕÉ”½ÕÐ¥ÑÌ‘ÕÉ…Ñ¥½¸‰äÍ…¹¹¥¹œÑ¡”ÑÉ…­Ì($%¥˜€ Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ð€À€¤ì(($$%Ñ¡¥Ì¹É•Í•ÑÕÉ…Ñ¥½¸ ¤ì(($%ô((%ô(($¼¨¨($€¨…Ñ½Éäµ•Ñ¡½™½ÈÉ•…Ñ¥¹œ…¸…¹¥µ…Ñ¥½¸±¥À™É½´Ñ¡”¥Ù•¸)M=8¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é•…¹¥µ…Ñ¥½¸±¥À¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôQ¡”¹•Ü…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%ÍÑ…Ñ¥ŒÁ…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐÑÉ…­Ì€ômt°($$%©Í½¹QÉ…­Ì€ô©Í½¸¹ÑÉ…­Ì°($$%™É…µ•Q¥µ”€ô€Ä¸À€¼€ ©Í½¸¹™ÁÌñð€Ä¸À€¤ì(($%™½È€ ±•Ð¤€ô€À°¸€ô©Í½¹QÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  Á…ÉÍ•-•å™É…µ•QÉ…¬ ©Í½¹QÉ…­Íl¤t€¤¹Í…±” ™É…µ•Q¥µ”€¤€¤ì(($%ô(($%½¹ÍÐ±¥À€ô¹•ÜÑ¡¥Ì ©Í½¸¹¹…µ”°©Í½¸¹‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°©Í½¸¹‰±•¹‘5½‘”€¤ì($%±¥À¹ÕÕ¥€ô©Í½¸¹ÕÕ¥ì(($%±¥À¹ÕÍ•É…Ñ„€ô)M=8¹Á…ÉÍ” ©Í½¸¹ÕÍ•É…Ñ„ñð€íôœ€¤ì(($%É•ÑÕÉ¸±¥Àì((%ô(($¼¨¨($€¨M•É¥…±¥é•ÌÑ¡”¥Ù•¸…¹¥µ…Ñ¥½¸±¥À¥¹Ñ¼)M=8¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥Áô±¥À€´Q¡”…¹¥µ…Ñ¥½¸±¥ÀÑ¼Í•É¥…±¥é”¸($€¨É•ÑÕÉ¸í=‰©•ÑôQ¡”)M=8½‰©•Ð¸($€¨¼(%ÍÑ…Ñ¥ŒÑ½)M=8 ±¥À€¤ì(($%½¹ÍÐÑÉ…­Ì€ômt°($$%±¥ÁQÉ…­Ì€ô±¥À¹ÑÉ…­Ìì(($%½¹ÍÐ©Í½¸€ôì(($$$¹…µ”œè±¥À¹¹…µ”°($$$‘ÕÉ…Ñ¥½¸œè±¥À¹‘ÕÉ…Ñ¥½¸°($$$ÑÉ…­ÌœèÑÉ…­Ì°($$$ÕÕ¥œè±¥À¹ÕÕ¥°($$$‰±•¹‘5½‘”œè±¥À¹‰±•¹‘5½‘”°($$$ÕÍ•É…Ñ„œè)M=8¹ÍÑÉ¥¹¥™ä ±¥À¹ÕÍ•É…Ñ„€¤°(($%ôì(($%™½È€ ±•Ð¤€ô€À°¸€ô±¥ÁQÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  -•å™É…µ•QÉ…¬¹Ñ½)M=8 ±¥ÁQÉ…­Íl¤t€¤€¤ì(($%ô(($%É•ÑÕÉ¸©Í½¸ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü…¹¥µ…Ñ¥½¸±¥À™É½´Ñ¡”Á…ÍÍ•µ½ÉÁ Ñ…É•ÑÌ…ÉÉ…ä½˜„($€¨•½µ•ÑÉä°Ñ…­¥¹œ„¹…µ”…¹Ñ¡”¹Õµ‰•È½˜™É…µ•ÌÁ•ÈÍ•½¹¸($€¨($€¨9½Ñ”èQ¡”™ÁÌÁ…É…µ•Ñ•È¥ÌÉ•ÅÕ¥É•°‰ÕÐÑ¡”…¹¥µ…Ñ¥½¸ÍÁ••…¸‰”($€¨½Ù•ÉÉ¥‘‘•¸Ù¥„í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Í•ÑÕÉ…Ñ¥½¹ô¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”¹…µ”½˜Ñ¡”…¹¥µ…Ñ¥½¸±¥À¸($€¨Á…É…´íÉÉ…äñ=‰©•Ðùôµ½ÉÁ¡Q…É•ÑM•ÅÕ•¹”€´Í•ÅÕ•¹”½˜µ½ÉÁ Ñ…É•ÑÌ¸($€¨Á…É…´í¹Õµ‰•Éô™ÁÌ€´Q¡”É…µ•ÌµA•ÈµM•½¹Ù…±Õ”¸($€¨Á…É…´í‰½½±•…¹ô¹½1½½À€´]¡•Ñ¡•ÈÑ¡”±¥ÀÍ¡½Õ±‰”¹¼±½½À½È¹½Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôQ¡”¹•Ü…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%ÍÑ…Ñ¥ŒÉ•…Ñ•É½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹” ¹…µ”°µ½ÉÁ¡Q…É•ÑM•ÅÕ•¹”°™ÁÌ°¹½1½½À€¤ì(($%½¹ÍÐ¹Õµ5½ÉÁ¡Q…É•ÑÌ€ôµ½ÉÁ¡Q…É•ÑM•ÅÕ•¹”¹±•¹Ñ ì($%½¹ÍÐÑÉ…­Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð¹Õµ5½ÉÁ¡Q…É•ÑÌì¤€¬¬€¤ì(($$%±•ÐÑ¥µ•Ì€ômtì($$%±•ÐÙ…±Õ•Ì€ômtì(($$%Ñ¥µ•Ì¹ÁÕÍ  ($$$$ ¤€¬¹Õµ5½ÉÁ¡Q…É•ÑÌ€´€Ä€¤€”¹Õµ5½ÉÁ¡Q…É•ÑÌ°($$$%¤°($$$$ ¤€¬€Ä€¤€”¹Õµ5½ÉÁ¡Q…É•ÑÌ€¤ì(($$%Ù…±Õ•Ì¹ÁÕÍ  €À°€Ä°€À€¤ì(($$%½¹ÍÐ½É‘•È€ô•Ñ-•å™É…µ•=É‘•È Ñ¥µ•Ì€¤ì($$%Ñ¥µ•Ì€ôÍ½ÉÑ•‘ÉÉ…ä Ñ¥µ•Ì°€Ä°½É‘•È€¤ì($$%Ù…±Õ•Ì€ôÍ½ÉÑ•‘ÉÉ…ä Ù…±Õ•Ì°€Ä°½É‘•È€¤ì(($$$¼¼¥˜Ñ¡•É”¥Ì„­•ä…ÐÑ¡”™¥ÉÍÐ™É…µ”°‘ÕÁ±¥…Ñ”¥Ð…ÌÑ¡”($$$¼¼±…ÍÐ™É…µ”…ÌÝ•±°™½ÈÁ•É™•Ð±½½À¸($$%¥˜€ €„¹½1½½À€˜˜Ñ¥µ•Íl€Àt€ôôô€À€¤ì(($$$%Ñ¥µ•Ì¹ÁÕÍ  ¹Õµ5½ÉÁ¡Q…É•ÑÌ€¤ì($$$%Ù…±Õ•Ì¹ÁÕÍ  Ù…±Õ•Íl€Àt€¤ì(($$%ô(($$%ÑÉ…­Ì¹ÁÕÍ  ($$$%¹•Ü9Õµ‰•É-•å™É…µ•QÉ…¬ ($$$$$œ¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ílœ€¬µ½ÉÁ¡Q…É•ÑM•ÅÕ•¹•l¤t¹¹…µ”€¬€tœ°($$$$%Ñ¥µ•Ì°Ù…±Õ•Ì($$$$¤¹Í…±” €Ä¸À€¼™ÁÌ€¤€¤ì(($%ô(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì ¹…µ”°€´Ä°ÑÉ…­Ì€¤ì((%ô(($¼¨¨($€¨M•…É¡•Ì™½È…¸…¹¥µ…Ñ¥½¸±¥À‰ä¹…µ”°Ñ…­¥¹œ…Ì¥ÑÌ™¥ÉÍÐÁ…É…µ•Ñ•È($€¨•¥Ñ¡•È…¸…ÉÉ…ä½˜±¥ÁÌ°½È„µ•Í ½È•½µ•ÑÉäÑ¡…Ð½¹Ñ…¥¹Ì…¸($€¨…ÉÉ…ä¹…µ•€‰…¹¥µ…Ñ¥½¹ÌˆÁÉ½Á•ÉÑä¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´ì¡ÉÉ…äñ¹¥µ…Ñ¥½¹±¥Àùñ=‰©•ÐÍ¥ô½‰©•Ñ=É±¥ÁÉÉ…ä€´Q¡”…ÉÉ…ä½È½‰©•ÐÑ¼Í•…É Ñ¡É½Õ ¸($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”¹…µ”Ñ¼Í•…É ™½È¸($€¨É•ÑÕÉ¸ìý¹¥µ…Ñ¥½¹±¥ÁôQ¡”™½Õ¹…¹¥µ…Ñ¥½¸±¥À¸I•ÑÕÉ¹Ì¹Õ±±€¥˜¹¼±¥À¡…Ì‰••¸™½Õ¹¸($€¨¼(%ÍÑ…Ñ¥Œ™¥¹‘	å9…µ” ½‰©•Ñ=É±¥ÁÉÉ…ä°¹…µ”€¤ì(($%±•Ð±¥ÁÉÉ…ä€ô½‰©•Ñ=É±¥ÁÉÉ…äì(($%¥˜€ €„ÉÉ…ä¹¥ÍÉÉ…ä ½‰©•Ñ=É±¥ÁÉÉ…ä€¤€¤ì(($$%½¹ÍÐ¼€ô½‰©•Ñ=É±¥ÁÉÉ…äì($$%±¥ÁÉÉ…ä€ô¼¹•½µ•ÑÉä€˜˜¼¹•½µ•ÑÉä¹…¹¥µ…Ñ¥½¹Ìñð¼¹…¹¥µ…Ñ¥½¹Ìì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€ð±¥ÁÉÉ…ä¹±•¹Ñ ì¤€¬¬€¤ì(($$%¥˜€ ±¥ÁÉÉ…ål¤t¹¹…µ”€ôôô¹…µ”€¤ì(($$$%É•ÑÕÉ¸±¥ÁÉÉ…ål¤tì(($$%ô(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì…¸…ÉÉ…ä½˜¹•Ü¹¥µ…Ñ¥½¹±¥ÁÌÉ•…Ñ•™É½´Ñ¡”µ½ÉÁ Ñ…É•Ð($€¨Í•ÅÕ•¹•Ì½˜„•½µ•ÑÉä°ÑÉå¥¹œÑ¼Í½ÉÐµ½ÉÁ Ñ…É•Ð¹…µ•Ì¥¹Ñ¼($€¨…¹¥µ…Ñ¥½¸µÉ½ÕÀµ‰…Í•Á…ÑÑ•É¹Ì±¥­”€‰]…±­|ÀÀÄ°]…±­|ÀÀÈ°IÕ¹|ÀÀÄ°IÕ¹|ÀÀÈ¸¸¸ˆ¸($€¨($€¨M•”í±¥¹¬5É1½…‘•ÈÁ…ÉÍ•ô…Ì…¸•á…µÁ±”™½È¡½ÜÑ¡”µ•Ñ¡½Í¡½Õ±‰”ÕÍ•¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÉÉ…äñ=‰©•Ðùôµ½ÉÁ¡Q…É•ÑÌ€´Í•ÅÕ•¹”½˜µ½ÉÁ Ñ…É•ÑÌ¸($€¨Á…É…´í¹Õµ‰•Éô™ÁÌ€´Q¡”É…µ•ÌµA•ÈµM•½¹Ù…±Õ”¸($€¨Á…É…´í‰½½±•…¹ô¹½1½½À€´]¡•Ñ¡•ÈÑ¡”±¥ÀÍ¡½Õ±‰”¹¼±½½À½È¹½Ð¸($€¨É•ÑÕÉ¸íÉÉ…äñ¹¥µ…Ñ¥½¹±¥Àùô¸…ÉÉ…ä½˜¹•Ü…¹¥µ…Ñ¥½¸±¥ÁÌ¸($€¨¼(%ÍÑ…Ñ¥ŒÉ•…Ñ•±¥ÁÍÉ½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹•Ì µ½ÉÁ¡Q…É•ÑÌ°™ÁÌ°¹½1½½À€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÌ€ôíôì(($$¼¼Ñ•ÍÑ•Ý¥Ñ ¡ÑÑÁÌè¼½É••àÄÀÄ¹½´¼½¸ÑÉ¥¬Í•ÅÕ•¹•Ì($$¼¼ÍÕ ™±…µ¥¹½}™±å|ÀÀÌ°™±…µ¥¹½}ÉÕ¸Å|ÀÀÌ°É‘•…Ñ ÀÀÔä($%½¹ÍÐÁ…ÑÑ•É¸€ô€½x¡mqÜµt¨ü¤¡mq‘t¬¤¼ì(($$¼¼Í½ÉÐµ½ÉÁ Ñ…É•Ð¹…µ•Ì¥¹Ñ¼…¹¥µ…Ñ¥½¸É½ÕÁÌ‰…Í•($$¼¼Á…ÑÑ•É¹Ì±¥­”]…±­|ÀÀÄ°]…±­|ÀÀÈ°IÕ¹|ÀÀÄ°IÕ¹|ÀÀÈ($%™½È€ ±•Ð¤€ô€À°¥°€ôµ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%½¹ÍÐµ½ÉÁ¡Q…É•Ð€ôµ½ÉÁ¡Q…É•ÑÍl¤tì($$%½¹ÍÐÁ…ÉÑÌ€ôµ½ÉÁ¡Q…É•Ð¹¹…µ”¹µ…Ñ  Á…ÑÑ•É¸€¤ì(($$%¥˜€ Á…ÉÑÌ€˜˜Á…ÉÑÌ¹±•¹Ñ €ø€Ä€¤ì(($$$%½¹ÍÐ¹…µ”€ôÁ…ÉÑÍl€Ätì(($$$%±•Ð…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€ô…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”tì(($$$%¥˜€ €„…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$%…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”t€ô…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€ômtì(($$$%ô(($$$%…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ¹ÁÕÍ  µ½ÉÁ¡Q…É•Ð€¤ì(($$%ô(($%ô(($%½¹ÍÐ±¥ÁÌ€ômtì(($%™½È€ ½¹ÍÐ¹…µ”¥¸…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÌ€¤ì(($$%±¥ÁÌ¹ÁÕÍ  Ñ¡¥Ì¹É•…Ñ•É½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹” ¹…µ”°…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”t°™ÁÌ°¹½1½½À€¤€¤ì(($%ô(($%É•ÑÕÉ¸±¥ÁÌì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”…¹¥µ…Ñ¥½¸¹¡¥•É…É¡å€™½Éµ…Ð…¹É•ÑÕÉ¹Ì„¹•Ü…¹¥µ…Ñ¥½¸±¥À¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨‘•ÁÉ•…Ñ•Í¥¹”ÈÄÜÔ¸($€¨Á…É…´í=‰©•Ñô…¹¥µ…Ñ¥½¸€´Í•É¥…±¥é•…¹¥µ…Ñ¥½¸±¥À…Ì)M=8¸($€¨Á…É…´íÉÉ…äñ	½¹•Ìùô‰½¹•Ì€´¸…ÉÉ…ä½˜‰½¹•Ì¸($€¨É•ÑÕÉ¸ìý¹¥µ…Ñ¥½¹±¥ÁôQ¡”¹•Ü…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%ÍÑ…Ñ¥ŒÁ…ÉÍ•¹¥µ…Ñ¥½¸ …¹¥µ…Ñ¥½¸°‰½¹•Ì€¤ì(($%½¹Í½±”¹Ý…É¸ €Q!I¹¹¥µ…Ñ¥½¹±¥ÀèÁ…ÉÍ•¹¥µ…Ñ¥½¸ ¤¥Ì‘•ÁÉ•…Ñ•…¹Ý¥±°‰”É•µ½Ù•Ý¥Ñ ÈÄàÔœ€¤ì(($%¥˜€ €„…¹¥µ…Ñ¥½¸€¤ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹¹¥µ…Ñ¥½¹±¥Àè9¼…¹¥µ…Ñ¥½¸¥¸)M=91½…‘•È‘…Ñ„¸œ€¤ì($$%É•ÑÕÉ¸¹Õ±°ì(($%ô(($%½¹ÍÐ…‘‘9½¹•µÁÑåQÉ…¬€ô™Õ¹Ñ¥½¸€ ÑÉ…­QåÁ”°ÑÉ…­9…µ”°…¹¥µ…Ñ¥½¹-•åÌ°ÁÉ½Á•ÉÑå9…µ”°‘•ÍÑQÉ…­Ì€¤ì(($$$¼¼½¹±äÉ•ÑÕÉ¸ÑÉ…¬¥˜Ñ¡•É”…É”…ÑÕ…±±ä­•åÌ¸($$%¥˜€ …¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ €„ôô€À€¤ì(($$$%½¹ÍÐÑ¥µ•Ì€ômtì($$$%½¹ÍÐÙ…±Õ•Ì€ômtì(($$$%™±…ÑÑ•¹)M=8 …¹¥µ…Ñ¥½¹-•åÌ°Ñ¥µ•Ì°Ù…±Õ•Ì°ÁÉ½Á•ÉÑå9…µ”€¤ì(($$$$¼¼•µÁÑä­•åÌ…É”™¥±Ñ•É•½ÕÐ°Í¼¡•¬……¥¸($$$%¥˜€ Ñ¥µ•Ì¹±•¹Ñ €„ôô€À€¤ì(($$$$%‘•ÍÑQÉ…­Ì¹ÁÕÍ  ¹•ÜÑÉ…­QåÁ” ÑÉ…­9…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤€¤ì(($$$%ô(($$%ô(($%ôì(($%½¹ÍÐÑÉ…­Ì€ômtì(($%½¹ÍÐ±¥Á9…µ”€ô…¹¥µ…Ñ¥½¸¹¹…µ”ñð€‘•™…Õ±Ðœì($%½¹ÍÐ™ÁÌ€ô…¹¥µ…Ñ¥½¸¹™ÁÌñð€ÌÀì($%½¹ÍÐ‰±•¹‘5½‘”€ô…¹¥µ…Ñ¥½¸¹‰±•¹‘5½‘”ì(($$¼¼…ÕÑ½µ…Ñ¥Œ±•¹Ñ ‘•Ñ•Éµ¥¹…Ñ¥½¸¥¸¹¥µ…Ñ¥½¹±¥À¸($%±•Ð‘ÕÉ…Ñ¥½¸€ô…¹¥µ…Ñ¥½¸¹±•¹Ñ ñð€´Äì(($%½¹ÍÐ¡¥•É…É¡åQÉ…­Ì€ô…¹¥µ…Ñ¥½¸¹¡¥•É…É¡äñðmtì(($%™½È€ ±•Ð €ô€Àì €ð¡¥•É…É¡åQÉ…­Ì¹±•¹Ñ ì €¬¬€¤ì(($$%½¹ÍÐ…¹¥µ…Ñ¥½¹-•åÌ€ô¡¥•É…É¡åQÉ…­Íl t¹­•åÌì(($$$¼¼Í­¥À•µÁÑäÑÉ…­Ì($$%¥˜€ €„…¹¥µ…Ñ¥½¹-•åÌñð…¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ €ôôô€À€¤½¹Ñ¥¹Õ”ì(($$$¼¼ÁÉ½•ÍÌµ½ÉÁ Ñ…É•ÑÌ($$%¥˜€ …¹¥µ…Ñ¥½¹-•åÍl€Àt¹µ½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$¼¼™¥ÕÉ”½ÕÐ…±°µ½ÉÁ Ñ…É•ÑÌÕÍ•¥¸Ñ¡¥ÌÑÉ…¬($$$%½¹ÍÐµ½ÉÁ¡Q…É•Ñ9…µ•Ì€ôíôì(($$$%±•Ð¬ì(($$$%™½È€ ¬€ô€Àì¬€ð…¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ ì¬€¬¬€¤ì(($$$$%¥˜€ …¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$$%™½È€ ±•Ð´€ô€Àì´€ð…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì´€¬¬€¤ì(($$$$$$%µ½ÉÁ¡Q…É•Ñ9…µ•Íl…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÍl´tt€ô€´Äì(($$$$$%ô(($$$$%ô(($$$%ô(($$$$¼¼É•…Ñ”„ÑÉ…¬™½È•… µ½ÉÁ Ñ…É•ÐÝ¥Ñ …±°é•É¼($$$$¼¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì•á•ÁÐ™½ÈÑ¡”­•åÌ¥¸Ý¡¥ ($$$$¼¼Ñ¡”µ½ÉÁ¡Q…É•Ð¥Ì¹…µ•¸($$$%™½È€ ½¹ÍÐµ½ÉÁ¡Q…É•Ñ9…µ”¥¸µ½ÉÁ¡Q…É•Ñ9…µ•Ì€¤ì(($$$$%½¹ÍÐÑ¥µ•Ì€ômtì($$$$%½¹ÍÐÙ…±Õ•Ì€ômtì(($$$$%™½È€ ±•Ð´€ô€Àì´€„ôô…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì€¬¬´€¤ì(($$$$$%½¹ÍÐ…¹¥µ…Ñ¥½¹-•ä€ô…¹¥µ…Ñ¥½¹-•åÍl¬tì(($$$$$%Ñ¥µ•Ì¹ÁÕÍ  …¹¥µ…Ñ¥½¹-•ä¹Ñ¥µ”€¤ì($$$$$%Ù…±Õ•Ì¹ÁÕÍ  € …¹¥µ…Ñ¥½¹-•ä¹µ½ÉÁ¡Q…É•Ð€ôôôµ½ÉÁ¡Q…É•Ñ9…µ”€¤€ü€Ä€è€À€¤ì(($$$$%ô(($$$$%ÑÉ…­Ì¹ÁÕÍ  ¹•Ü9Õµ‰•É-•å™É…µ•QÉ…¬ €œ¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•lœ€¬µ½ÉÁ¡Q…É•Ñ9…µ”€¬€tœ°Ñ¥µ•Ì°Ù…±Õ•Ì€¤€¤ì(($$$%ô(($$$%‘ÕÉ…Ñ¥½¸€ôµ½ÉÁ¡Q…É•Ñ9…µ•Ì¹±•¹Ñ €¨™ÁÌì(($$%ô•±Í”ì(($$$$¼¼€¸¸¹…ÍÍÕµ”Í­•±•Ñ…°…¹¥µ…Ñ¥½¸(($$$%½¹ÍÐ‰½¹•9…µ”€ô€œ¹‰½¹•Ílœ€¬‰½¹•Íl t¹¹…µ”€¬€tœì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%Y•Ñ½É-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹Á½Í¥Ñ¥½¸œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€Á½Ìœ°ÑÉ…­Ì€¤ì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹ÅÕ…Ñ•É¹¥½¸œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€É½Ðœ°ÑÉ…­Ì€¤ì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%Y•Ñ½É-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹Í…±”œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€Í°œ°ÑÉ…­Ì€¤ì(($$%ô(($%ô(($%¥˜€ ÑÉ…­Ì¹±•¹Ñ €ôôô€À€¤ì(($$%É•ÑÕÉ¸¹Õ±°ì(($%ô(($%½¹ÍÐ±¥À€ô¹•ÜÑ¡¥Ì ±¥Á9…µ”°‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°‰±•¹‘5½‘”€¤ì(($%É•ÑÕÉ¸±¥Àì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‘ÕÉ…Ñ¥½¸½˜Ñ¡¥Ì±¥ÀÑ¼Ñ¡”‘ÕÉ…Ñ¥½¸½˜¥ÑÌ±½¹•ÍÐ­•å™É…µ”ÑÉ…¬¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%É•Í•ÑÕÉ…Ñ¥½¸ ¤ì(($%½¹ÍÐÑÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Ìì($%±•Ð‘ÕÉ…Ñ¥½¸€ô€Àì(($%™½È€ ±•Ð¤€ô€À°¸€ôÑÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐÑÉ…¬€ôÑ¡¥Ì¹ÑÉ…­Íl¤tì(($$%‘ÕÉ…Ñ¥½¸€ô5…Ñ ¹µ…à ‘ÕÉ…Ñ¥½¸°ÑÉ…¬¹Ñ¥µ•ÍlÑÉ…¬¹Ñ¥µ•Ì¹±•¹Ñ €´€Ät€¤ì(($%ô(($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ô‘ÕÉ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨QÉ¥µÌ…±°ÑÉ…­ÌÑ¼Ñ¡”±¥ÀÌ‘ÕÉ…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%ÑÉ¥´ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹ÑÉ…­Íl¤t¹ÑÉ¥´ €À°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨A•É™½ÉµÌµ¥¹¥µ…°Ù…±¥‘…Ñ¥½¸½¸•… ÑÉ…¬¥¸Ñ¡”±¥À¸I•ÑÕÉ¹ÌÑÉÕ•€¥˜…±°($€¨ÑÉ…­Ì…É”Ù…±¥¸($€¨($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”±¥ÀÌ­•å™É…µ•Ì…É”Ù…±¥½È¹½Ð¸($€¨¼(%Ù…±¥‘…Ñ” ¤ì(($%±•ÐÙ…±¥€ôÑÉÕ”ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ù…±¥€ôÙ…±¥€˜˜Ñ¡¥Ì¹ÑÉ…­Íl¤t¹Ù…±¥‘…Ñ” ¤ì(($%ô(($%É•ÑÕÉ¸Ù…±¥ì((%ô(($¼¨¨($€¨=ÁÑ¥µ¥é•Ì•… ÑÉ…¬‰äÉ•µ½Ù¥¹œ•ÅÕ¥Ù…±•¹ÐÍ•ÅÕ•¹Ñ¥…°­•åÌ€¡Ý¡¥ …É”($€¨½µµ½¸¥¸µ½ÉÁ Ñ…É•ÐÍ•ÅÕ•¹•Ì¤¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%½ÁÑ¥µ¥é” ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹ÑÉ…­Íl¤t¹½ÁÑ¥µ¥é” ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü…¹¥µ…Ñ¥½¸±¥ÀÝ¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥Áô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%½¹ÍÐÑÉ…­Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  Ñ¡¥Ì¹ÑÉ…­Íl¤t¹±½¹” ¤€¤ì(($%ô(($%½¹ÍÐ±¥À€ô¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È Ñ¡¥Ì¹¹…µ”°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°Ñ¡¥Ì¹‰±•¹‘5½‘”€¤ì(($%±¥À¹ÕÍ•É…Ñ„€ô)M=8¹Á…ÉÍ” )M=8¹ÍÑÉ¥¹¥™ä Ñ¡¥Ì¹ÕÍ•É…Ñ„€¤€¤ì(($%É•ÑÕÉ¸±¥Àì((%ô(($¼¨¨($€¨M•É¥…±¥é•ÌÑ¡¥Ì…¹¥µ…Ñ¥½¸±¥À¥¹Ñ¼)M=8¸($€¨($€¨É•ÑÕÉ¸í=‰©•ÑôQ¡”)M=8½‰©•Ð¸($€¨¼(%Ñ½)M=8 ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹½¹ÍÑÉÕÑ½È¹Ñ½)M=8 Ñ¡¥Ì€¤ì((%ô()ô()™Õ¹Ñ¥½¸•ÑQÉ…­QåÁ•½ÉY…±Õ•QåÁ•9…µ” ÑåÁ•9…µ”€¤ì((%ÍÝ¥Ñ € ÑåÁ•9…µ”¹Ñ½1½Ý•É…Í” ¤€¤ì(($%…Í”€Í…±…Èœè($%…Í”€‘½Õ‰±”œè($%…Í”€™±½…Ðœè($%…Í”€¹Õµ‰•Èœè($%…Í”€¥¹Ñ••Èœè(($$%É•ÑÕÉ¸9Õµ‰•É-•å™É…µ•QÉ…¬ì(($%…Í”€Ù•Ñ½Èœè($%…Í”€Ù•Ñ½ÈÈœè($%…Í”€Ù•Ñ½ÈÌœè($%…Í”€Ù•Ñ½ÈÐœè(($$%É•ÑÕÉ¸Y•Ñ½É-•å™É…µ•QÉ…¬ì(($%…Í”€½±½Èœè(($$%É•ÑÕÉ¸½±½É-•å™É…µ•QÉ…¬ì(($%…Í”€ÅÕ…Ñ•É¹¥½¸œè(($$%É•ÑÕÉ¸EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬ì(($%…Í”€‰½½°œè($%…Í”€‰½½±•…¸œè(($$%É•ÑÕÉ¸	½½±•…¹-•å™É…µ•QÉ…¬ì(($%…Í”€ÍÑÉ¥¹œœè(($$%É•ÑÕÉ¸MÑÉ¥¹-•å™É…µ•QÉ…¬ì((%ô((%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èU¹ÍÕÁÁ½ÉÑ•ÑåÁ•9…µ”è€œ€¬ÑåÁ•9…µ”€¤ì()ô()™Õ¹Ñ¥½¸Á…ÉÍ•-•å™É…µ•QÉ…¬ ©Í½¸€¤ì((%¥˜€ ©Í½¸¹ÑåÁ”€ôôôÕ¹‘•™¥¹•€¤ì(($%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èÑÉ…¬ÑåÁ”Õ¹‘•™¥¹•°…¸¹½ÐÁ…ÉÍ”œ€¤ì((%ô((%½¹ÍÐÑÉ…­QåÁ”€ô•ÑQÉ…­QåÁ•½ÉY…±Õ•QåÁ•9…µ” ©Í½¸¹ÑåÁ”€¤ì((%¥˜€ ©Í½¸¹Ñ¥µ•Ì€ôôôÕ¹‘•™¥¹•€¤ì(($%½¹ÍÐÑ¥µ•Ì€ômt°Ù…±Õ•Ì€ômtì(($%™±…ÑÑ•¹)M=8 ©Í½¸¹­•åÌ°Ñ¥µ•Ì°Ù…±Õ•Ì°€Ù…±Õ”œ€¤ì(($%©Í½¸¹Ñ¥µ•Ì€ôÑ¥µ•Ìì($%©Í½¸¹Ù…±Õ•Ì€ôÙ…±Õ•Ìì((%ô(($¼¼‘•É¥Ù•±…ÍÍ•Ì…¸‘•™¥¹”„ÍÑ…Ñ¥ŒÁ…ÉÍ”µ•Ñ¡½(%¥˜€ ÑÉ…­QåÁ”¹Á…ÉÍ”€„ôôÕ¹‘•™¥¹•€¤ì(($%É•ÑÕÉ¸ÑÉ…­QåÁ”¹Á…ÉÍ” ©Í½¸€¤ì((%ô•±Í”ì(($$¼¼‰ä‘•™…Õ±Ð°Ý”…ÍÍÕµ”„½¹ÍÑÉÕÑ½È½µÁ…Ñ¥‰±”Ý¥Ñ Ñ¡”‰…Í”($%É•ÑÕÉ¸¹•ÜÑÉ…­QåÁ” ©Í½¸¹¹…µ”°©Í½¸¹Ñ¥µ•Ì°©Í½¸¹Ù…±Õ•Ì°©Í½¸¹¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô()ô((¼¨¨(€¨±…ÍÌ(€¨±…ÍÍ‘•ÍŒÍ¥µÁ±”…¡¥¹œÍåÍÑ•´°ÕÍ•¥¹Ñ•É¹…±±ä‰äí±¥¹¬¥±•1½…‘•Éô¸(€¨Q¼•¹…‰±”…¡¥¹œ…É½ÍÌ…±°±½…‘•ÉÌÑ¡…ÐÕÍ”í±¥¹¬¥±•1½…‘•Éô°…‘Q!I¹…¡”¹•¹…‰±•€ôÑÉÕ”¹€½¹”¥¸å½ÕÈ…ÁÀ¸(€¨¡¥‘•½¹ÍÑÉÕÑ½È(€¨¼)½¹ÍÐ…¡”€ôì(($¼¨¨($€¨]¡•Ñ¡•È…¡¥¹œ¥Ì•¹…‰±•½È¹½Ð¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨ÑåÁ”í‰½½±•…¹ô($€¨‘•™…Õ±Ð™…±Í”($€¨¼(%•¹…‰±•è™…±Í”°(($¼¨¨($€¨‘¥Ñ¥½¹…ÉäÑ¡…Ð¡½±‘Ì…¡•™¥±•Ì¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨ÑåÁ”í=‰©•ÐñÍÑÉ¥¹œ±=‰©•Ðùô($€¨¼(%™¥±•Ìèíô°(($¼¨¨($€¨‘‘Ì„…¡”•¹ÑÉäÝ¥Ñ „­•äÑ¼É•™•É•¹”Ñ¡”™¥±”¸%˜Ñ¡¥Ì­•ä…±É•…‘ä($€¨¡½±‘Ì„™¥±”°¥Ð¥Ì½Ù•ÉÝÉ¥ÑÑ•¸¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ô­•ä€´Q¡”­•äÑ¼É•™•É•¹”Ñ¡”…¡•™¥±”¸($€¨Á…É…´í=‰©•Ñô™¥±”€´€Q¡”™¥±”Ñ¼‰”…¡•¸($€¨¼(%…‘è™Õ¹Ñ¥½¸€ ­•ä°™¥±”€¤ì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($$¼¼½¹Í½±”¹±½œ €Q!I¹…¡”œ°€‘‘¥¹œ­•äèœ°­•ä€¤ì(($%Ñ¡¥Ì¹™¥±•Íl­•ät€ô™¥±”ì((%ô°(($¼¨¨($€¨•ÑÌÑ¡”…¡•Ù…±Õ”™½ÈÑ¡”¥Ù•¸­•ä¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ô­•ä€´Q¡”­•äÑ¼É•™•É•¹”Ñ¡”…¡•™¥±”¸($€¨É•ÑÕÉ¸í=‰©•ÑñÕ¹‘•™¥¹•‘ôQ¡”…¡•™¥±”¸%˜Ñ¡”­•ä‘½•Ì¹½Ð•á¥ÍÐÕ¹‘•™¥¹•‘€¥ÌÉ•ÑÕÉ¹•¸($€¨¼(%•Ðè™Õ¹Ñ¥½¸€ ­•ä€¤ì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($$¼¼½¹Í½±”¹±½œ €Q!I¹…¡”œ°€¡•­¥¹œ­•äèœ°­•ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±•Íl­•ätì((%ô°(($¼¨¨($€¨I•µ½Ù•ÌÑ¡”…¡•™¥±”…ÍÍ½¥…Ñ•Ý¥Ñ Ñ¡”¥Ù•¸­•ä¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ô­•ä€´Q¡”­•äÑ¼É•™•É•¹”Ñ¡”…¡•™¥±”¸($€¨¼(%É•µ½Ù”è™Õ¹Ñ¥½¸€ ­•ä€¤ì(($%‘•±•Ñ”Ñ¡¥Ì¹™¥±•Íl­•ätì((%ô°(($¼¨¨($€¨I•µ½Ù”…±°Ù…±Õ•Ì™É½´Ñ¡”…¡”¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨¼(%±•…Èè™Õ¹Ñ¥½¸€ ¤ì(($%Ñ¡¥Ì¹™¥±•Ì€ôíôì((%ô()ôì((¼¨¨(€¨!…¹‘±•Ì…¹­••ÁÌÑÉ…¬½˜±½…‘•…¹Á•¹‘¥¹œ‘…Ñ„¸‘•™…Õ±Ð±½‰…°(€¨¥¹ÍÑ…¹”½˜Ñ¡¥Ì±…ÍÌ¥ÌÉ•…Ñ•…¹ÕÍ•‰ä±½…‘•ÉÌ¥˜¹½ÐÍÕÁÁ±¥•(€¨µ…¹Õ…±±ä¸(€¨(€¨%¸•¹•É…°Ñ¡…ÐÍ¡½Õ±‰”ÍÕ™™¥¥•¹Ð°¡½Ý•Ù•ÈÑ¡•É”…É”Ñ¥µ•ÌÝ¡•¸¥Ð…¸(€¨‰”ÕÍ•™Õ°Ñ¼¡…Ù”Í•Á…É…Ñ”±½…‘•ÉÌ€´™½È•á…µÁ±”¥˜å½ÔÝ…¹ÐÑ¼Í¡½Ü(€¨Í•Á…É…Ñ”±½…‘¥¹œ‰…ÉÌ™½È½‰©•ÑÌ…¹Ñ•áÑÕÉ•Ì¸(€¨(€¨©Ì(€¨½¹ÍÐµ…¹…•È€ô¹•ÜQ!I¹1½…‘¥¹5…¹…•È ¤ì(€¨µ…¹…•È¹½¹1½…€ô€ ¤€ôø½¹Í½±”¹±½œ €1½…‘¥¹œ½µÁ±•Ñ”„œ€¤ì(€¨(€¨½¹ÍÐ±½…‘•ÈÄ€ô¹•Ü=	)1½…‘•È µ…¹…•È€¤ì(€¨½¹ÍÐ±½…‘•ÈÈ€ô¹•Ü½±±…‘…1½…‘•È µ…¹…•È€¤ì(€¨€(€¨¼)±…ÍÌ1½…‘¥¹5…¹…•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±½…‘¥¹œµ…¹…•È¸($€¨($€¨Á…É…´íÕ¹Ñ¥½¹ôm½¹1½…‘t€´á•ÕÑ•ÌÝ¡•¸…±°¥Ñ•µÌ¡…Ù”‰••¸±½…‘•¸($€¨Á…É…´íÕ¹Ñ¥½¹ôm½¹AÉ½É•ÍÍt€´á•ÕÑ•ÌÝ¡•¸Í¥¹±”¥Ñ•µÌ¡…Ù”‰••¸±½…‘•¸($€¨Á…É…´íÕ¹Ñ¥½¹ôm½¹ÉÉ½Ét€´á•ÕÑ•ÌÝ¡•¸…¸•ÉÉ½È½ÕÉÌ¸($€¨¼(%½¹ÍÑÉÕÑ½È ½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%±•Ð¥Í1½…‘¥¹œ€ô™…±Í”ì($%±•Ð¥Ñ•µÍ1½…‘•€ô€Àì($%±•Ð¥Ñ•µÍQ½Ñ…°€ô€Àì($%±•ÐÕÉ±5½‘¥™¥•È€ôÕ¹‘•™¥¹•ì($%½¹ÍÐ¡…¹‘±•ÉÌ€ômtì(($$¼¼I•™•ÈÑ¼€ŒÔØàä™½ÈÑ¡”É•…Í½¸Ý¡äÝ”‘½¸ÐÍ•Ð€¹½¹MÑ…ÉÐ($$¼¼¥¸Ñ¡”½¹ÍÑÉÕÑ½È(($$¼¨¨($$€¨á•ÕÑ•ÌÝ¡•¸…¸¥Ñ•´ÍÑ…ÉÑÌ±½…‘¥¹œ¸($$€¨($$€¨ÑåÁ”íÕ¹Ñ¥½¹ñÕ¹‘•™¥¹•‘ô($$€¨‘•™…Õ±ÐÕ¹‘•™¥¹•($$€¨¼($%Ñ¡¥Ì¹½¹MÑ…ÉÐ€ôÕ¹‘•™¥¹•ì(($$¼¨¨($$€¨á•ÕÑ•ÌÝ¡•¸…±°¥Ñ•µÌ¡…Ù”‰••¸±½…‘•¸($$€¨($$€¨ÑåÁ”íÕ¹Ñ¥½¹ñÕ¹‘•™¥¹•‘ô($$€¨‘•™…Õ±ÐÕ¹‘•™¥¹•($$€¨¼($%Ñ¡¥Ì¹½¹1½…€ô½¹1½…ì(($$¼¨¨($$€¨á•ÕÑ•ÌÝ¡•¸Í¥¹±”¥Ñ•µÌ¡…Ù”‰••¸±½…‘•¸($$€¨($$€¨ÑåÁ”íÕ¹Ñ¥½¹ñÕ¹‘•™¥¹•‘ô($$€¨‘•™…Õ±ÐÕ¹‘•™¥¹•($$€¨¼($%Ñ¡¥Ì¹½¹AÉ½É•ÍÌ€ô½¹AÉ½É•ÍÌì(($$¼¨¨($$€¨á•ÕÑ•ÌÝ¡•¸…¸•ÉÉ½È½ÕÉÌ¸($$€¨($$€¨ÑåÁ”íÕ¹Ñ¥½¹ñÕ¹‘•™¥¹•‘ô($$€¨‘•™…Õ±ÐÕ¹‘•™¥¹•($$€¨¼($%Ñ¡¥Ì¹½¹ÉÉ½È€ô½¹ÉÉ½Èì(($$¼¨¨($$€¨UÍ•™½È…‰½ÉÑ¥¹œ½¹½¥¹œÉ•ÅÕ•ÍÑÌ¥¸±½…‘•ÉÌÕÍ¥¹œÑ¡¥Ìµ…¹…•È¸($$€¨($$€¨ÑåÁ”í‰½ÉÑ½¹ÑÉ½±±•Éô($$€¨¼($%Ñ¡¥Ì¹…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì(($$¼¨¨($$€¨Q¡¥ÌÍ¡½Õ±‰”…±±•‰ä…¹ä±½…‘•ÈÕÍ¥¹œÑ¡”µ…¹…•ÈÝ¡•¸Ñ¡”±½…‘•È($$€¨ÍÑ…ÉÑÌ±½…‘¥¹œ…¸¥Ñ•´¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”UI0Ñ¼±½…¸($$€¨¼($%Ñ¡¥Ì¹¥Ñ•µMÑ…ÉÐ€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥Ñ•µÍQ½Ñ…°€¬¬ì(($$%¥˜€ ¥Í1½…‘¥¹œ€ôôô™…±Í”€¤ì(($$$%¥˜€ Í½Á”¹½¹MÑ…ÉÐ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Í½Á”¹½¹MÑ…ÉÐ ÕÉ°°¥Ñ•µÍ1½…‘•°¥Ñ•µÍQ½Ñ…°€¤ì(($$$%ô(($$%ô(($$%¥Í1½…‘¥¹œ€ôÑÉÕ”ì(($%ôì(($$¼¨¨($$€¨Q¡¥ÌÍ¡½Õ±‰”…±±•‰ä…¹ä±½…‘•ÈÕÍ¥¹œÑ¡”µ…¹…•ÈÝ¡•¸Ñ¡”±½…‘•È($$€¨•¹‘•±½…‘¥¹œ…¸¥Ñ•´¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”UI0½˜Ñ¡”±½…‘•¥Ñ•´¸($$€¨¼($%Ñ¡¥Ì¹¥Ñ•µ¹€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥Ñ•µÍ1½…‘•€¬¬ì(($$%¥˜€ Í½Á”¹½¹AÉ½É•ÍÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Í½Á”¹½¹AÉ½É•ÍÌ ÕÉ°°¥Ñ•µÍ1½…‘•°¥Ñ•µÍQ½Ñ…°€¤ì(($$%ô(($$%¥˜€ ¥Ñ•µÍ1½…‘•€ôôô¥Ñ•µÍQ½Ñ…°€¤ì(($$$%¥Í1½…‘¥¹œ€ô™…±Í”ì(($$$%¥˜€ Í½Á”¹½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Í½Á”¹½¹1½… ¤ì(($$$%ô(($$%ô(($%ôì(($$¼¨¨($$€¨Q¡¥ÌÍ¡½Õ±‰”…±±•‰ä…¹ä±½…‘•ÈÕÍ¥¹œÑ¡”µ…¹…•ÈÝ¡•¸Ñ¡”±½…‘•È($$€¨•¹½Õ¹Ñ•ÉÌ…¸•ÉÉ½ÈÝ¡•¸±½…‘¥¹œ…¸¥Ñ•´¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”UI0½˜Ñ¡”¥Ñ•´Ñ¡…ÐÁÉ½‘Õ•Ì…¸•ÉÉ½È¸($$€¨¼($%Ñ¡¥Ì¹¥Ñ•µÉÉ½È€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥˜€ Í½Á”¹½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Í½Á”¹½¹ÉÉ½È ÕÉ°€¤ì(($$%ô(($%ôì(($$¼¨¨($$€¨¥Ù•¸„UI0°ÕÍ•ÌÑ¡”UI0µ½‘¥™¥•È…±±‰…¬€¡¥˜…¹ä¤…¹É•ÑÕÉ¹Ì„($$€¨É•Í½±Ù•UI0¸%˜¹¼UI0µ½‘¥™¥•È¥ÌÍ•Ð°É•ÑÕÉ¹ÌÑ¡”½É¥¥¹…°UI0¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”UI0Ñ¼±½…¸($$€¨É•ÑÕÉ¸íÍÑÉ¥¹ôQ¡”É•Í½±Ù•UI0¸($$€¨¼($%Ñ¡¥Ì¹É•Í½±Ù•UI0€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥˜€ ÕÉ±5½‘¥™¥•È€¤ì(($$$%É•ÑÕÉ¸ÕÉ±5½‘¥™¥•È ÕÉ°€¤ì(($$%ô(($$%É•ÑÕÉ¸ÕÉ°ì(($%ôì(($$¼¨¨($$€¨%˜ÁÉ½Ù¥‘•°Ñ¡”…±±‰…¬Ý¥±°‰”Á…ÍÍ••… É•Í½ÕÉ”UI0‰•™½É”„($$€¨É•ÅÕ•ÍÐ¥ÌÍ•¹Ð¸Q¡”…±±‰…¬µ…äÉ•ÑÕÉ¸Ñ¡”½É¥¥¹…°UI0°½È„¹•ÜUI0Ñ¼($$€¨½Ù•ÉÉ¥‘”±½…‘¥¹œ‰•¡…Ù¥½È¸Q¡¥Ì‰•¡…Ù¥½È…¸‰”ÕÍ•Ñ¼±½……ÍÍ•ÑÌ™É½´($$€¨€¹i%@™¥±•Ì°‘É…œµ…¹µ‘É½ÀA%Ì°…¹…Ñ„UI%Ì¸($$€¨($$€¨©Ì($$€¨½¹ÍÐ‰±½‰Ì€ôì™¥Í ¹±Ñ˜œè‰±½ˆÄ°€‘¥™™ÕÍ”¹Á¹œœè‰±½ˆÈ°€¹½Éµ…°¹Á¹œœè‰±½ˆÍôì($$€¨($$€¨½¹ÍÐµ…¹…•È€ô¹•ÜQ!I¹1½…‘¥¹5…¹…•È ¤ì($$€¨($$€¨€¼¼%¹¥Ñ¥…±¥é”±½…‘¥¹œµ…¹…•ÈÝ¥Ñ UI0…±±‰…¬¸($$€¨½¹ÍÐ½‰©•ÑUI1Ì€ômtì($$€¨µ…¹…•È¹Í•ÑUI15½‘¥™¥•È € ÕÉ°€¤€ôøì($$€¨($$€¨€%ÕÉ°€ôUI0¹É•…Ñ•=‰©•ÑUI0 ‰±½‰ÍlÕÉ°t€¤ì($$€¨€%½‰©•ÑUI1Ì¹ÁÕÍ  ÕÉ°€¤ì($$€¨€%É•ÑÕÉ¸ÕÉ°ì($$€¨($$€¨ô€¤ì($$€¨($$€¨€¼¼1½……ÌÕÍÕ…°°Ñ¡•¸É•Ù½­”Ñ¡”‰±½ˆUI1Ì¸($$€¨½¹ÍÐ±½…‘•È€ô¹•Ü1Q1½…‘•È µ…¹…•È€¤ì($$€¨±½…‘•È¹±½… €™¥Í ¹±Ñ˜œ°€¡±Ñ˜¤€ôøì($$€¨($$€¨€%Í•¹”¹…‘ ±Ñ˜¹Í•¹”€¤ì($$€¨€%½‰©•ÑUI1Ì¹™½É…  € ÕÉ°€¤€ôøUI0¹É•Ù½­•=‰©•ÑUI0 ÕÉ°€¤€¤ì($$€¨($$€¨ô€¤ì($$€¨€($$€¨($$€¨Á…É…´í™Õ¹Ñ¥½¸¡ÍÑÉ¥¹œ¤éÍÑÉ¥¹ôÑÉ…¹Í™½É´€´UI0µ½‘¥™¥•È…±±‰…¬¸…±±•Ý¥Ñ …¸UI0…¹µÕÍÐÉ•ÑÕÉ¸„É•Í½±Ù•UI0¸($$€¨É•ÑÕÉ¸í1½…‘¥¹5…¹…•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±½…‘¥¹œµ…¹…•È¸($$€¨¼($%Ñ¡¥Ì¹Í•ÑUI15½‘¥™¥•È€ô™Õ¹Ñ¥½¸€ ÑÉ…¹Í™½É´€¤ì(($$%ÕÉ±5½‘¥™¥•È€ôÑÉ…¹Í™½É´ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($$¼¨¨($$€¨I•¥ÍÑ•ÉÌ„±½…‘•ÈÝ¥Ñ Ñ¡”¥Ù•¸É•Õ±…È•áÁÉ•ÍÍ¥½¸¸…¸‰”ÕÍ•Ñ¼($$€¨‘•™¥¹”Ý¡…Ð±½…‘•ÈÍ¡½Õ±‰”ÕÍ•¥¸½É‘•ÈÑ¼±½…ÍÁ•¥™¥Œ™¥±•Ì¸($$€¨ÑåÁ¥…°ÕÍ”…Í”¥ÌÑ¼½Ù•ÉÝÉ¥Ñ”Ñ¡”‘•™…Õ±Ð±½…‘•È™½ÈÑ•áÑÕÉ•Ì¸($$€¨($$€¨©Ì($$€¨€¼¼…‘¡…¹‘±•È™½ÈQÑ•áÑÕÉ•Ì($$€¨µ…¹…•È¹…‘‘!…¹‘±•È €½p¹Ñ„½¤°¹•ÜQ1½…‘•È ¤€¤ì($$€¨€($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÉ••à€´É•Õ±…È•áÁÉ•ÍÍ¥½¸¸($$€¨Á…É…´í1½…‘•Éô±½…‘•È€´±½…‘•ÈÑ¡…ÐÍ¡½Õ±¡…¹‘±”µ…Ñ¡•…Í•Ì¸($$€¨É•ÑÕÉ¸í1½…‘¥¹5…¹…•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±½…‘¥¹œµ…¹…•È¸($$€¨¼($%Ñ¡¥Ì¹…‘‘!…¹‘±•È€ô™Õ¹Ñ¥½¸€ É••à°±½…‘•È€¤ì(($$%¡…¹‘±•ÉÌ¹ÁÕÍ  É••à°±½…‘•È€¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($$¼¨¨($$€¨I•µ½Ù•ÌÑ¡”±½…‘•È™½ÈÑ¡”¥Ù•¸É•Õ±…È•áÁÉ•ÍÍ¥½¸¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ôÉ••à€´É•Õ±…È•áÁÉ•ÍÍ¥½¸¸($$€¨É•ÑÕÉ¸í1½…‘¥¹5…¹…•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±½…‘¥¹œµ…¹…•È¸($$€¨¼($%Ñ¡¥Ì¹É•µ½Ù•!…¹‘±•È€ô™Õ¹Ñ¥½¸€ É••à€¤ì(($$%½¹ÍÐ¥¹‘•à€ô¡…¹‘±•ÉÌ¹¥¹‘•á=˜ É••à€¤ì(($$%¥˜€ ¥¹‘•à€„ôô€´Ä€¤ì(($$$%¡…¹‘±•ÉÌ¹ÍÁ±¥” ¥¹‘•à°€È€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($$¼¨¨($$€¨…¸‰”ÕÍ•Ñ¼É•ÑÉ¥•Ù”Ñ¡”É•¥ÍÑ•É•±½…‘•È™½ÈÑ¡”¥Ù•¸™¥±”Á…Ñ ¸($$€¨($$€¨Á…É…´íÍÑÉ¥¹ô™¥±”€´Q¡”™¥±”Á…Ñ ¸($$€¨É•ÑÕÉ¸ìý1½…‘•ÉôQ¡”É•¥ÍÑ•É•±½…‘•È¸I•ÑÕÉ¹Ì¹Õ±±€¥˜¹¼±½…‘•ÈÝ…Ì™½Õ¹¸($$€¨¼($%Ñ¡¥Ì¹•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸€ ™¥±”€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô¡…¹‘±•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬ô€È€¤ì(($$$%½¹ÍÐÉ••à€ô¡…¹‘±•ÉÍl¤tì($$$%½¹ÍÐ±½…‘•È€ô¡…¹‘±•ÉÍl¤€¬€Ätì(($$$%¥˜€ É••à¹±½‰…°€¤É••à¹±…ÍÑ%¹‘•à€ô€Àì€¼¼Í•”€ŒÄÜäÈÀ(($$$%¥˜€ É••à¹Ñ•ÍÐ ™¥±”€¤€¤ì(($$$$%É•ÑÕÉ¸±½…‘•Èì(($$$%ô(($$%ô(($$%É•ÑÕÉ¸¹Õ±°ì(($%ôì(($$¼¨¨($$€¨…¸‰”ÕÍ•Ñ¼…‰½ÉÐ½¹½¥¹œ±½…‘¥¹œÉ•ÅÕ•ÍÑÌ¥¸±½…‘•ÉÌÕÍ¥¹œÑ¡¥Ìµ…¹…•È¸($$€¨Q¡”…‰½ÉÐ½¹±äÝ½É­Ì¥˜Ñ¡”±½…‘•ÉÌ¥µÁ±•µ•¹Ðí±¥¹¬1½…‘•È…‰½ÉÑô…¹‰½ÉÑM¥¹…°¹…¹ä ¥€($$€¨¥ÌÍÕÁÁ½ÉÑ•¥¸Ñ¡”‰É½ÝÍ•È¸($$€¨($$€¨É•ÑÕÉ¸í1½…‘¥¹5…¹…•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±½…‘¥¹œµ…¹…•È¸($$€¨¼($%Ñ¡¥Ì¹…‰½ÉÐ€ô™Õ¹Ñ¥½¸€ ¤ì(($$%Ñ¡¥Ì¹…‰½ÉÑ½¹ÑÉ½±±•È¹…‰½ÉÐ ¤ì($$%Ñ¡¥Ì¹…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì((%ô()ô((¼¨¨(€¨Q¡”±½‰…°‘•™…Õ±Ð±½…‘¥¹œµ…¹…•È¸(€¨(€¨½¹ÍÑ…¹Ð(€¨ÑåÁ”í1½…‘¥¹5…¹…•Éô(€¨¼)½¹ÍÐ•™…Õ±Ñ1½…‘¥¹5…¹…•È€ô€¼©}}AUI}|¨¼¹•Ü1½…‘¥¹5…¹…•È ¤ì((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È±½…‘•ÉÌ¸(€¨(€¨…‰ÍÑÉ…Ð(€¨¼)±…ÍÌ1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($$¼¨¨($$€¨Q¡”±½…‘¥¹œµ…¹…•È¸($$€¨($$€¨ÑåÁ”í1½…‘¥¹5…¹…•Éô($$€¨‘•™…Õ±Ð•™…Õ±Ñ1½…‘¥¹5…¹…•È($$€¨¼($%Ñ¡¥Ì¹µ…¹…•È€ô€ µ…¹…•È€„ôôÕ¹‘•™¥¹•€¤€üµ…¹…•È€è•™…Õ±Ñ1½…‘¥¹5…¹…•Èì(($$¼¨¨($$€¨Q¡”É½ÍÍ=É¥¥¸ÍÑÉ¥¹œÑ¼¥µÁ±•µ•¹Ð=IL™½È±½…‘¥¹œÑ¡”ÕÉ°™É½´„($$€¨‘¥™™•É•¹Ð‘½µ…¥¸Ñ¡…Ð…±±½ÝÌ=IL¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨‘•™…Õ±Ð€…¹½¹åµ½ÕÌœ($$€¨¼($%Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ô€…¹½¹åµ½ÕÌœì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¡”a51!ÑÑÁI•ÅÕ•ÍÐÕÍ•ÌÉ•‘•¹Ñ¥…±Ì¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ô™…±Í”ì(($$¼¨¨($$€¨Q¡”‰…Í”Á…Ñ ™É½´Ý¡¥ Ñ¡”…ÍÍ•ÐÝ¥±°‰”±½…‘•¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹Á…Ñ €ô€œœì(($$¼¨¨($$€¨Q¡”‰…Í”Á…Ñ ™É½´Ý¡¥ …‘‘¥Ñ¥½¹…°É•Í½ÕÉ•Ì±¥­”Ñ•áÑÕÉ•ÌÝ¥±°‰”±½…‘•¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ô€œœì(($$¼¨¨($$€¨Q¡”mÉ•ÅÕ•ÍÐ¡•…‘•Éuí±¥¹¬¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½±½ÍÍ…Éä½I•ÅÕ•ÍÑ}¡•…‘•Éô($$€¨ÕÍ•¥¸!QQ@É•ÅÕ•ÍÐ¸($$€¨($$€¨ÑåÁ”í=‰©•ÐñÍÑÉ¥¹œ°…¹äùô($$€¨¼($%Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€ôíôì((%ô(($¼¨¨($€¨Q¡¥Ìµ•Ñ¡½¹••‘ÌÑ¼‰”¥µÁ±•µ•¹Ñ•‰ä…±°½¹É•Ñ”±½…‘•ÉÌ¸%Ð¡½±‘ÌÑ¡”($€¨±½¥Œ™½È±½…‘¥¹œ…ÍÍ•ÑÌ™É½´Ñ¡”‰…­•¹¸($€¨($€¨…‰ÍÑÉ…Ð($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸($€¨Á…É…´íÕ¹Ñ¥½¹ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ôm½¹AÉ½É•ÍÍt€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ôm½¹ÉÉ½Ét€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… €¼¨ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¨¼€¤íô(($¼¨¨($€¨…Íå¹ŒÙ•ÉÍ¥½¸½˜í±¥¹¬1½…‘•È±½…‘ô¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ôm½¹AÉ½É•ÍÍt€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨É•ÑÕÉ¸íAÉ½µ¥Í•ôAÉ½µ¥Í”Ñ¡…ÐÉ•Í½±Ù•ÌÝ¡•¸Ñ¡”…ÍÍ•Ð¡…Ì‰••¸±½…‘•¸($€¨¼(%±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%É•ÑÕÉ¸¹•ÜAÉ½µ¥Í” ™Õ¹Ñ¥½¸€ É•Í½±Ù”°É•©•Ð€¤ì(($$%Í½Á”¹±½… ÕÉ°°É•Í½±Ù”°½¹AÉ½É•ÍÌ°É•©•Ð€¤ì(($%ô€¤ì((%ô(($¼¨¨($€¨Q¡¥Ìµ•Ñ¡½¹••‘ÌÑ¼‰”¥µÁ±•µ•¹Ñ•‰ä…±°½¹É•Ñ”±½…‘•ÉÌ¸%Ð¡½±‘ÌÑ¡”($€¨±½¥Œ™½ÈÁ…ÉÍ¥¹œÑ¡”…ÍÍ•Ð¥¹Ñ¼Ñ¡É•”¹©Ì•¹Ñ¥Ñ¥•Ì¸($€¨($€¨…‰ÍÑÉ…Ð($€¨Á…É…´í…¹åô‘…Ñ„€´Q¡”‘…Ñ„Ñ¼Á…ÉÍ”¸($€¨¼(%Á…ÉÍ” €¼¨‘…Ñ„€¨¼€¤íô(($¼¨¨($€¨M•ÑÌÑ¡”É½ÍÍ=É¥¥¹€MÑÉ¥¹œÑ¼¥µÁ±•µ•¹Ð=IL™½È±½…‘¥¹œÑ¡”UI0($€¨™É½´„‘¥™™•É•¹Ð‘½µ…¥¸Ñ¡…Ð…±±½ÝÌ=IL¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÉ½ÍÍ=É¥¥¸€´Q¡”É½ÍÍ=É¥¥¹€Ù…±Õ”¸($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑÉ½ÍÍ=É¥¥¸ É½ÍÍ=É¥¥¸€¤ì(($%Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ôÉ½ÍÍ=É¥¥¸ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨]¡•Ñ¡•ÈÑ¡”a51!ÑÑÁI•ÅÕ•ÍÐÕÍ•ÌÉ•‘•¹Ñ¥…±ÌÍÕ …Ì½½­¥•Ì°…ÕÑ¡½É¥é…Ñ¥½¸($€¨¡•…‘•ÉÌ½ÈQ1L±¥•¹Ð•ÉÑ¥™¥…Ñ•Ì°Í•”ma51!ÑÑÁI•ÅÕ•ÍÐ¹Ý¥Ñ¡É•‘•¹Ñ¥…±Íuí±¥¹¬¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½]•ˆ½A$½a51!ÑÑÁI•ÅÕ•ÍÐ½Ý¥Ñ¡É•‘•¹Ñ¥…±Íô¸($€¨($€¨9½Ñ”èQ¡¥ÌÍ•ÑÑ¥¹œ¡…Ì¹¼•™™•Ð¥˜å½Ô…É”±½…‘¥¹œ™¥±•Ì±½…±±ä½È™É½´Ñ¡”Í…µ”‘½µ…¥¸¸($€¨($€¨Á…É…´í‰½½±•…¹ôÙ…±Õ”€´Q¡”Ý¥Ñ¡É•‘•¹Ñ¥…±Í€Ù…±Õ”¸($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‰…Í”Á…Ñ ™½ÈÑ¡”…ÍÍ•Ð¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÁ…Ñ €´Q¡”‰…Í”Á…Ñ ¸($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑA…Ñ  Á…Ñ €¤ì(($%Ñ¡¥Ì¹Á…Ñ €ôÁ…Ñ ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‰…Í”Á…Ñ ™½È‘•Á•¹‘•¹ÐÉ•Í½ÕÉ•Ì±¥­”Ñ•áÑÕÉ•Ì¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÉ•Í½ÕÉ•A…Ñ €´Q¡”É•Í½ÕÉ”Á…Ñ ¸($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑI•Í½ÕÉ•A…Ñ  É•Í½ÕÉ•A…Ñ €¤ì(($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÉ•Í½ÕÉ•A…Ñ ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸É•ÅÕ•ÍÐ¡•…‘•È¸($€¨($€¨Á…É…´í=‰©•ÑôÉ•ÅÕ•ÍÑ!•…‘•È€´mÉ•ÅÕ•ÍÐ¡•…‘•Éuí±¥¹¬¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½±½ÍÍ…Éä½I•ÅÕ•ÍÑ}¡•…‘•Éô($€¨™½È½¹™¥ÕÉ¥¹œÑ¡”!QQ@É•ÅÕ•ÍÐ¸($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑI•ÅÕ•ÍÑ!•…‘•È É•ÅÕ•ÍÑ!•…‘•È€¤ì(($%Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€ôÉ•ÅÕ•ÍÑ!•…‘•Èì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨Q¡¥Ìµ•Ñ¡½…¸‰”¥µÁ±•µ•¹Ñ•¥¸±½…‘•ÉÌ™½È…‰½ÉÑ¥¹œ½¹½¥¹œÉ•ÅÕ•ÍÑÌ¸($€¨($€¨…‰ÍÑÉ…Ð($€¨É•ÑÕÉ¸í1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%…‰½ÉÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨…±±‰…¬™½È½¹AÉ½É•ÍÌ¥¸±½…‘•ÉÌ¸(€¨(€¨…±±‰…¬½¹AÉ½É•ÍÍ…±±‰…¬(€¨Á…É…´íAÉ½É•ÍÍÙ•¹Ñô•Ù•¹Ð€´¸¥¹ÍÑ…¹”½˜AÉ½É•ÍÍÙ•¹Ñ€Ñ¡…ÐÉ•ÁÉ•Í•¹ÑÌÑ¡”ÕÉÉ•¹Ð±½…‘¥¹œÍÑ…ÑÕÌ¸(€¨¼((¼¨¨(€¨…±±‰…¬™½È½¹ÉÉ½È¥¸±½…‘•ÉÌ¸(€¨(€¨…±±‰…¬½¹ÉÉ½É…±±‰…¬(€¨Á…É…´íÉÉ½Éô•ÉÉ½È€´Q¡”•ÉÉ½ÈÝ¡¥ ½ÕÉÉ•‘ÕÉ¥¹œÑ¡”±½…‘¥¹œÁÉ½•ÍÌ¸(€¨¼((¼¨¨(€¨Q¡”‘•™…Õ±Ðµ…Ñ•É¥…°¹…µ”Ñ¡…Ð¥ÌÕÍ•‰ä±½…‘•ÉÌ(€¨Ý¡•¸É•…Ñ¥¹œµ…Ñ•É¥…±Ì™½È±½…‘•€Í½‰©•ÑÌ¸(€¨(€¨9½Ñ”è9½Ð…±°±½…‘•ÉÌµ¥¡Ð¡½¹½ÈÑ¡¥ÌÍ•ÑÑ¥¹œ¸(€¨(€¨ÍÑ…Ñ¥Œ(€¨ÑåÁ”íÍÑÉ¥¹ô(€¨‘•™…Õ±Ð€}}U1Pœ(€¨¼)1½…‘•È¹U1Q}5QI%1}95€ô€}}U1Pœì()½¹ÍÐ±½…‘¥¹œ€ôíôì()±…ÍÌ!ÑÑÁÉÉ½È•áÑ•¹‘ÌÉÉ½Èì((%½¹ÍÑÉÕÑ½È µ•ÍÍ…”°É•ÍÁ½¹Í”€¤ì(($%ÍÕÁ•È µ•ÍÍ…”€¤ì($%Ñ¡¥Ì¹É•ÍÁ½¹Í”€ôÉ•ÍÁ½¹Í”ì((%ô()ô((¼¨¨(€¨±½Ü±•Ù•°±…ÍÌ™½È±½…‘¥¹œÉ•Í½ÕÉ•ÌÝ¥Ñ Ñ¡”•Ñ A$°ÕÍ•¥¹Ñ•É¹…±±ä‰ä(€¨µ½ÍÐ±½…‘•ÉÌ¸%Ð…¸…±Í¼‰”ÕÍ•‘¥É•Ñ±äÑ¼±½……¹ä™¥±”ÑåÁ”Ñ¡…Ð‘½•Ì(€¨¹½Ð¡…Ù”„±½…‘•È¸(€¨(€¨Q¡¥Ì±½…‘•ÈÍÕÁÁ½ÉÑÌ…¡¥¹œ¸%˜å½ÔÝ…¹ÐÑ¼ÕÍ”¥Ð°…‘Q!I¹…¡”¹•¹…‰±•€ôÑÉÕ”í€(€¨½¹”Ñ¼å½ÕÈ…ÁÁ±¥…Ñ¥½¸¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹¥±•1½…‘•È ¤ì(€¨½¹ÍÐ‘…Ñ„€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €•á…µÁ±”¹ÑáÐœ€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ¥±•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü™¥±”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì(($$¼¨¨($$€¨Q¡”•áÁ•Ñ•µ¥µ”ÑåÁ”¸Y…±¥Ù…±Õ•Ì…¸‰”™½Õ¹($$€¨m¡•É•uí±¥¹¬¡¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½]•ˆ½A$½=5A…ÉÍ•È½Á…ÉÍ•É½µMÑÉ¥¹œµ¥µ•ÑåÁ•ô($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹µ¥µ•QåÁ”€ô€œœì(($$¼¨¨($$€¨Q¡”•áÁ•Ñ•É•ÍÁ½¹Í”ÑåÁ”¸($$€¨($$€¨ÑåÁ”ì …ÉÉ…å‰Õ™™•Èð‰±½ˆð‘½Õµ•¹Ðð©Í½¸ðœœ¥ô($$€¨‘•™…Õ±Ð€œœ($$€¨¼($%Ñ¡¥Ì¹É•ÍÁ½¹Í•QåÁ”€ô€œœì(($$¼¨¨($$€¨UÍ•™½È…‰½ÉÑ¥¹œÉ•ÅÕ•ÍÑÌ¸($$€¨($$€¨ÁÉ¥Ù…Ñ”($$€¨ÑåÁ”í‰½ÉÑ½¹ÑÉ½±±•Éô($$€¨¼($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘•É•ÍÁ½¹Í”Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡…¹ä¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ôm½¹AÉ½É•ÍÍt€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ôm½¹ÉÉ½Ét€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸í…¹åñÕ¹‘•™¥¹•‘ôQ¡”…¡•É•Í½ÕÉ”¥˜…Ù…¥±…‰±”¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ ÕÉ°€ôôôÕ¹‘•™¥¹•€¤ÕÉ°€ô€œœì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ™¥±”è‘íÕÉ±õ€€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$%Í•ÑQ¥µ•½ÕÐ € ¤€ôøì(($$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°€À€¤ì(($$%É•ÑÕÉ¸…¡•ì(($%ô(($$¼¼¡•¬¥˜É•ÅÕ•ÍÐ¥Ì‘ÕÁ±¥…Ñ”(($%¥˜€ ±½…‘¥¹lÕÉ°t€„ôôÕ¹‘•™¥¹•€¤ì(($$%±½…‘¥¹lÕÉ°t¹ÁÕÍ  ì(($$$%½¹1½…è½¹1½…°($$$%½¹AÉ½É•ÍÌè½¹AÉ½É•ÍÌ°($$$%½¹ÉÉ½Èè½¹ÉÉ½È(($$%ô€¤ì(($$%É•ÑÕÉ¸ì(($%ô(($$¼¼%¹¥Ñ¥…±¥Í”…ÉÉ…ä™½È‘ÕÁ±¥…Ñ”É•ÅÕ•ÍÑÌ($%±½…‘¥¹lÕÉ°t€ômtì(($%±½…‘¥¹lÕÉ°t¹ÁÕÍ  ì($$%½¹1½…è½¹1½…°($$%½¹AÉ½É•ÍÌè½¹AÉ½É•ÍÌ°($$%½¹ÉÉ½Èè½¹ÉÉ½È°($%ô€¤ì(($$¼¼É•…Ñ”É•ÅÕ•ÍÐ($%½¹ÍÐÉ•Ä€ô¹•ÜI•ÅÕ•ÍÐ ÕÉ°°ì($$%¡•…‘•ÉÌè¹•Ü!•…‘•ÉÌ Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤°($$%É•‘•¹Ñ¥…±ÌèÑ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ü€¥¹±Õ‘”œ€è€Í…µ”µ½É¥¥¸œ°($$%Í¥¹…°è€ ÑåÁ•½˜‰½ÉÑM¥¹…°¹…¹ä€ôôô€™Õ¹Ñ¥½¸œ€¤€ü‰½ÉÑM¥¹…°¹…¹ä lÑ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°°Ñ¡¥Ì¹µ…¹…•È¹…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°t€¤€èÑ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°($%ô€¤ì(($$¼¼É•½ÉÍÑ…Ñ•Ì€ …Ù½¥‘…Ñ„É…”€¤($%½¹ÍÐµ¥µ•QåÁ”€ôÑ¡¥Ì¹µ¥µ•QåÁ”ì($%½¹ÍÐÉ•ÍÁ½¹Í•QåÁ”€ôÑ¡¥Ì¹É•ÍÁ½¹Í•QåÁ”ì(($$¼¼ÍÑ…ÉÐÑ¡”™•Ñ ($%™•Ñ  É•Ä€¤($$$¹Ñ¡•¸ É•ÍÁ½¹Í”€ôøì(($$$%¥˜€ É•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€ÈÀÀñðÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€À€¤ì(($$$$$¼¼M½µ”‰É½ÝÍ•ÉÌÉ•ÑÕÉ¸!QQ@MÑ…ÑÕÌ€ÀÝ¡•¸ÕÍ¥¹œ¹½¸µ¡ÑÑÀÁÉ½Ñ½½°($$$$$¼¼”¹œ¸€™¥±”è¼¼œ½È€‘…Ñ„è¼¼œ¸!…¹‘±”…ÌÍÕ•ÍÌ¸(($$$$%¥˜€ É•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€À€¤ì(($$$$$%½¹Í½±”¹Ý…É¸ €Q!I¹¥±•1½…‘•Èè!QQ@MÑ…ÑÕÌ€ÀÉ••¥Ù•¸œ€¤ì(($$$$%ô(($$$$$¼¼]½É­…É½Õ¹è¡•­¥¹œ¥˜É•ÍÁ½¹Í”¹‰½‘ä€ôôôÕ¹‘•™¥¹•™½È±¥Á…ä‰É½ÝÍ•È€ŒÈÌÔÐà(($$$$%¥˜€ ÑåÁ•½˜I•…‘…‰±•MÑÉ•…´€ôôô€Õ¹‘•™¥¹•œñðÉ•ÍÁ½¹Í”¹‰½‘ä€ôôôÕ¹‘•™¥¹•ñðÉ•ÍÁ½¹Í”¹‰½‘ä¹•ÑI•…‘•È€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”ì(($$$$%ô(($$$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì($$$$%½¹ÍÐÉ•…‘•È€ôÉ•ÍÁ½¹Í”¹‰½‘ä¹•ÑI•…‘•È ¤ì(($$$$$¼¼9¥¹à¹••‘Ì`µ¥±”µM¥é”¡•¬($$$$$¼¼¡ÑÑÁÌè¼½Í•ÉÙ•É™…Õ±Ð¹½´½ÅÕ•ÍÑ¥½¹Ì¼ÐàÈàÜÔ½Ý¡äµ‘½•Ìµ¹¥¹àµÉ•µ½Ù”µ½¹Ñ•¹Ðµ±•¹Ñ µ¡•…‘•Èµ™½Èµ¡Õ¹­•µ½¹Ñ•¹Ð($$$$%½¹ÍÐ½¹Ñ•¹Ñ1•¹Ñ €ôÉ•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð €`µ¥±”µM¥é”œ€¤ñðÉ•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð €½¹Ñ•¹Ðµ1•¹Ñ œ€¤ì($$$$%½¹ÍÐÑ½Ñ…°€ô½¹Ñ•¹Ñ1•¹Ñ €üÁ…ÉÍ•%¹Ð ½¹Ñ•¹Ñ1•¹Ñ €¤€è€Àì($$$$%½¹ÍÐ±•¹Ñ¡½µÁÕÑ…‰±”€ôÑ½Ñ…°€„ôô€Àì($$$$%±•Ð±½…‘•€ô€Àì(($$$$$¼¼Á•É¥½‘¥…±±äÉ•…‘…Ñ„¥¹Ñ¼Ñ¡”¹•ÜÍÑÉ•…´ÑÉ…­¥¹œÝ¡¥±”‘½Ý¹±½…ÁÉ½É•ÍÌ($$$$%½¹ÍÐÍÑÉ•…´€ô¹•ÜI•…‘…‰±•MÑÉ•…´ ì($$$$$%ÍÑ…ÉÐ ½¹ÑÉ½±±•È€¤ì(($$$$$$%É•…‘…Ñ„ ¤ì(($$$$$$%™Õ¹Ñ¥½¸É•…‘…Ñ„ ¤ì(($$$$$$$%É•…‘•È¹É•… ¤¹Ñ¡•¸ € ì‘½¹”°Ù…±Õ”ô€¤€ôøì(($$$$$$$$%¥˜€ ‘½¹”€¤ì(($$$$$$$$$%½¹ÑÉ½±±•È¹±½Í” ¤ì(($$$$$$$$%ô•±Í”ì(($$$$$$$$$%±½…‘•€¬ôÙ…±Õ”¹‰åÑ•1•¹Ñ ì(($$$$$$$$$%½¹ÍÐ•Ù•¹Ð€ô¹•ÜAÉ½É•ÍÍÙ•¹Ð €ÁÉ½É•ÍÌœ°ì±•¹Ñ¡½µÁÕÑ…‰±”°±½…‘•°Ñ½Ñ…°ô€¤ì($$$$$$$$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$$$$$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$$$$$$$%¥˜€ …±±‰…¬¹½¹AÉ½É•ÍÌ€¤…±±‰…¬¹½¹AÉ½É•ÍÌ •Ù•¹Ð€¤ì(($$$$$$$$$%ô(($$$$$$$$$%½¹ÑÉ½±±•È¹•¹ÅÕ•Õ” Ù…±Õ”€¤ì($$$$$$$$$%É•…‘…Ñ„ ¤ì(($$$$$$$$%ô(($$$$$$$%ô°€ ”€¤€ôøì(($$$$$$$$%½¹ÑÉ½±±•È¹•ÉÉ½È ”€¤ì(($$$$$$$%ô€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô€¤ì(($$$$%É•ÑÕÉ¸¹•ÜI•ÍÁ½¹Í” ÍÑÉ•…´€¤ì(($$$%ô•±Í”ì(($$$$%Ñ¡É½Ü¹•Ü!ÑÑÁÉÉ½È ™•Ñ ™½È€ˆ‘íÉ•ÍÁ½¹Í”¹ÕÉ±ôˆÉ•ÍÁ½¹‘•Ý¥Ñ €‘íÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÍôè€‘íÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÍQ•áÑõ€°É•ÍÁ½¹Í”€¤ì(($$$%ô(($$%ô€¤($$$¹Ñ¡•¸ É•ÍÁ½¹Í”€ôøì(($$$%ÍÝ¥Ñ € É•ÍÁ½¹Í•QåÁ”€¤ì(($$$$%…Í”€…ÉÉ…å‰Õ™™•Èœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹…ÉÉ…å	Õ™™•È ¤ì(($$$$%…Í”€‰±½ˆœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹‰±½ˆ ¤ì(($$$$%…Í”€‘½Õµ•¹Ðœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹Ñ•áÐ ¤($$$$$$$¹Ñ¡•¸ Ñ•áÐ€ôøì(($$$$$$$%½¹ÍÐÁ…ÉÍ•È€ô¹•Ü=5A…ÉÍ•È ¤ì($$$$$$$%É•ÑÕÉ¸Á…ÉÍ•È¹Á…ÉÍ•É½µMÑÉ¥¹œ Ñ•áÐ°µ¥µ•QåÁ”€¤ì(($$$$$$%ô€¤ì(($$$$%…Í”€©Í½¸œè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹©Í½¸ ¤ì(($$$$%‘•™…Õ±Ðè(($$$$$%¥˜€ µ¥µ•QåÁ”€ôôô€œœ€¤ì(($$$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹Ñ•áÐ ¤ì(($$$$$%ô•±Í”ì(($$$$$$$¼¼Í¹¥™˜•¹½‘¥¹œ($$$$$$%½¹ÍÐÉ”€ô€½¡…ÉÍ•Ðôˆü¡mxì‰qÍt¨¤ˆü½¤ì($$$$$$%½¹ÍÐ•á•Œ€ôÉ”¹•á•Œ µ¥µ•QåÁ”€¤ì($$$$$$%½¹ÍÐ±…‰•°€ô•á•Œ€˜˜•á•l€Ät€ü•á•l€Ät¹Ñ½1½Ý•É…Í” ¤€èÕ¹‘•™¥¹•ì($$$$$$%½¹ÍÐ‘•½‘•È€ô¹•ÜQ•áÑ•½‘•È ±…‰•°€¤ì($$$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹…ÉÉ…å	Õ™™•È ¤¹Ñ¡•¸ …ˆ€ôø‘•½‘•È¹‘•½‘” …ˆ€¤€¤ì(($$$$$%ô(($$$%ô(($$%ô€¤($$$¹Ñ¡•¸ ‘…Ñ„€ôøì(($$$$¼¼‘Ñ¼…¡”½¹±ä½¸!QQ@ÍÕ•ÍÌ°Í¼Ñ¡…ÐÝ”‘¼¹½Ð…¡”($$$$¼¼•ÉÉ½ÈÉ•ÍÁ½¹Í”‰½‘¥•Ì…ÌÁÉ½Á•ÈÉ•ÍÁ½¹Í•ÌÑ¼É•ÅÕ•ÍÑÌ¸($$$%…¡”¹…‘ ™¥±”è‘íÕÉ±õ€°‘…Ñ„€¤ì(($$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì($$$%‘•±•Ñ”±½…‘¥¹lÕÉ°tì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$%¥˜€ …±±‰…¬¹½¹1½…€¤…±±‰…¬¹½¹1½… ‘…Ñ„€¤ì(($$$%ô(($$%ô€¤($$$¹…Ñ  •ÉÈ€ôøì(($$$$¼¼‰½ÉÐ•ÉÉ½ÉÌ…¹½Ñ¡•È•ÉÉ½ÉÌ…É”¡…¹‘±•Ñ¡”Í…µ”(($$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì(($$$%¥˜€ …±±‰…­Ì€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$¼¼]¡•¸½¹1½…Ý…Ì…±±•…¹ÕÉ°Ý…Ì‘•±•Ñ•¥¸±½…‘¥¹€($$$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$$$%Ñ¡É½Ü•ÉÈì(($$$%ô(($$$%‘•±•Ñ”±½…‘¥¹lÕÉ°tì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$%¥˜€ …±±‰…¬¹½¹ÉÉ½È€¤…±±‰…¬¹½¹ÉÉ½È •ÉÈ€¤ì(($$$%ô(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô€¤($$$¹™¥¹…±±ä € ¤€ôøì(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô€¤ì(($%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•áÁ•Ñ•É•ÍÁ½¹Í”ÑåÁ”¸($€¨($€¨Á…É…´ì …ÉÉ…å‰Õ™™•Èð‰±½ˆð‘½Õµ•¹Ðð©Í½¸ðœœ¥ôÙ…±Õ”€´Q¡”É•ÍÁ½¹Í”ÑåÁ”¸($€¨É•ÑÕÉ¸í¥±•1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì™¥±”±½…‘•È¸($€¨¼(%Í•ÑI•ÍÁ½¹Í•QåÁ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹É•ÍÁ½¹Í•QåÁ”€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•áÁ•Ñ•µ¥µ”ÑåÁ”½˜Ñ¡”±½…‘•™¥±”¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÙ…±Õ”€´Q¡”µ¥µ”ÑåÁ”¸($€¨É•ÑÕÉ¸í¥±•1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì™¥±”±½…‘•È¸($€¨¼(%Í•Ñ5¥µ•QåÁ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹µ¥µ•QåÁ”€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‰½ÉÑÌ½¹½¥¹œ™•Ñ É•ÅÕ•ÍÑÌ¸($€¨($€¨É•ÑÕÉ¸í¥±•1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%…‰½ÉÐ ¤ì(($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹…‰½ÉÐ ¤ì($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œ…¹¥µ…Ñ¥½¸±¥ÁÌ¥¸Ñ¡”)M=8™½Éµ…Ð¸Q¡”™¥±•Ì…É”¥¹Ñ•É¹…±±ä(€¨±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹¹¥µ…Ñ¥½¹1½…‘•È ¤ì(€¨½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €…¹¥µ…Ñ¥½¹Ì½…¹¥µ…Ñ¥½¸¹©Ìœ€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ¹¥µ…Ñ¥½¹1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…¹¥µ…Ñ¥½¸±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘•…¹¥µ…Ñ¥½¹Ì…Ì…¸…ÉÉ…ä($€¨¡½±‘¥¹œ¥¹ÍÑ…¹•Ì½˜í±¥¹¬¹¥µ…Ñ¥½¹±¥ÁôÑ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡ÉÉ…äñ¹¥µ…Ñ¥½¹±¥Àø¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”¥Ù•¸)M=8½‰©•Ð…¹É•ÑÕÉ¹Ì…¸…ÉÉ…ä½˜…¹¥µ…Ñ¥½¸±¥ÁÌ¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é•…¹¥µ…Ñ¥½¸±¥ÁÌ¸($€¨É•ÑÕÉ¸íÉÉ…äñ¹¥µ…Ñ¥½¹±¥ÀùôQ¡”Á…ÉÍ•…¹¥µ…Ñ¥½¸±¥ÁÌ¸($€¨¼(%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð©Í½¸¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ±¥À€ô¹¥µ…Ñ¥½¹±¥À¹Á…ÉÍ” ©Í½¹l¤t€¤ì(($$%…¹¥µ…Ñ¥½¹Ì¹ÁÕÍ  ±¥À€¤ì(($%ô(($%É•ÑÕÉ¸…¹¥µ…Ñ¥½¹Ìì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È±½…‘¥¹œ½µÁÉ•ÍÍ•Ñ•áÑÕÉ”™½Éµ…ÑÌLÍQ°MQ½ÈQ¸(€¨Q•áÑÕÉ•Ì…É”¥¹Ñ•É¹…±±ä±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨•É¥Ù•±…ÍÍ•Ì¡…Ù”Ñ¼¥µÁ±•µ•¹ÐÑ¡”Á…ÉÍ” ¥€µ•Ñ¡½Ý¡¥ ¡½±‘ÌÑ¡”Á…ÉÍ¥¹œ(€¨™½ÈÑ¡”É•ÍÁ•Ñ¥Ù”™½Éµ…Ð¸(€¨(€¨…‰ÍÑÉ…Ð(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ½µÁÉ•ÍÍ•‘Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü½µÁÉ•ÍÍ•Ñ•áÑÕÉ”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÍ•ÌÑ¡”±½…‘•½µÁÉ•ÍÍ•Ñ•áÑÕÉ”($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸Q¡”µ•Ñ¡½…±Í¼É•ÑÕÉ¹Ì„¹•ÜÑ•áÑÕÉ”½‰©•ÐÝ¡¥ …¸($€¨‘¥É•Ñ±ä‰”ÕÍ•™½Èµ…Ñ•É¥…°É•…Ñ¥½¸¸%˜å½Ô‘¼¥ÐÑ¡¥ÌÝ…ä°Ñ¡”Ñ•áÑÕÉ”($€¨µ…äÁ½ÀÕÀ¥¸å½ÕÈÍ•¹”½¹”Ñ¡”É•ÍÁ•Ñ¥Ù”±½…‘¥¹œÁÉ½•ÍÌ¥Ì™¥¹¥Í¡•¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡½µÁÉ•ÍÍ•‘Q•áÑÕÉ”¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸í½µÁÉ•ÍÍ•‘Q•áÑÕÉ•ôQ¡”½µÁÉ•ÍÍ•Ñ•áÑÕÉ”¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ¥µ…•Ì€ômtì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•Ü½µÁÉ•ÍÍ•‘Q•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì(($%±•Ð±½…‘•€ô€Àì(($%™Õ¹Ñ¥½¸±½…‘Q•áÑÕÉ” ¤€¤ì(($$%±½…‘•È¹±½… ÕÉ±l¤t°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$$%½¹ÍÐÑ•á…Ñ…Ì€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È°ÑÉÕ”€¤ì(($$$%¥µ…•Íl¤t€ôì($$$$%Ý¥‘Ñ èÑ•á…Ñ…Ì¹Ý¥‘Ñ °($$$$%¡•¥¡ÐèÑ•á…Ñ…Ì¹¡•¥¡Ð°($$$$%™½Éµ…ÐèÑ•á…Ñ…Ì¹™½Éµ…Ð°($$$$%µ¥Áµ…ÁÌèÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌ($$$%ôì(($$$%±½…‘•€¬ô€Äì(($$$%¥˜€ ±½…‘•€ôôô€Ø€¤ì(($$$$%¥˜€ Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$$$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…•Ìì($$$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$$%ô(($$%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%ô(($%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ôÕÉ°¹±•¹Ñ ì¤€ð¥°ì€¬¬¤€¤ì(($$$%±½…‘Q•áÑÕÉ” ¤€¤ì(($$%ô(($%ô•±Í”ì(($$$¼¼½µÁÉ•ÍÍ•Õ‰•µ…ÀÑ•áÑÕÉ”ÍÑ½É•¥¸„Í¥¹±”L™¥±”(($$%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$$%½¹ÍÐÑ•á…Ñ…Ì€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È°ÑÉÕ”€¤ì(($$$%¥˜€ Ñ•á…Ñ…Ì¹¥ÍÕ‰•µ…À€¤ì(($$$$%½¹ÍÐ™…•Ì€ôÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌ¹±•¹Ñ €¼Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ðì(($$$$%™½È€ ±•Ð˜€ô€Àì˜€ð™…•Ìì˜€¬¬€¤ì(($$$$$%¥µ…•Íl˜t€ôìµ¥Áµ…ÁÌèmtôì(($$$$$%™½È€ ±•Ð¤€ô€Àì¤€ðÑ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ðì¤€¬¬€¤ì(($$$$$$%¥µ…•Íl˜t¹µ¥Áµ…ÁÌ¹ÁÕÍ  Ñ•á…Ñ…Ì¹µ¥Áµ…ÁÍl˜€¨Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€¬¤t€¤ì($$$$$$%¥µ…•Íl˜t¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$$$$%¥µ…•Íl˜t¹Ý¥‘Ñ €ôÑ•á…Ñ…Ì¹Ý¥‘Ñ ì($$$$$$%¥µ…•Íl˜t¹¡•¥¡Ð€ôÑ•á…Ñ…Ì¹¡•¥¡Ðì(($$$$$%ô(($$$$%ô(($$$$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…•Ìì(($$$%ô•±Í”ì(($$$$%Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €ôÑ•á…Ñ…Ì¹Ý¥‘Ñ ì($$$$%Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€ôÑ•á…Ñ…Ì¹¡•¥¡Ðì($$$$%Ñ•áÑÕÉ”¹µ¥Áµ…ÁÌ€ôÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌì(($$$%ô(($$$%¥˜€ Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤ì(($$$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$$%ô(($$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô()½¹ÍÐ}±½…‘¥¹œ€ô¹•Ü]•…­5…À ¤ì((¼¨¨(€¨±½…‘•È™½È±½…‘¥¹œ¥µ…•Ì¸Q¡”±…ÍÌ±½…‘Ì¥µ…•ÌÝ¥Ñ Ñ¡”!Q50%µ…•€A$¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹%µ…•1½…‘•È ¤ì(€¨½¹ÍÐ¥µ…”€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €¥µ…”¹Á¹œœ€¤ì(€¨€(€¨A±•…Í”¹½Ñ”Ñ¡…Ð%µ…•1½…‘•É€¡…Ì‘É½ÁÁ•ÍÕÁÁ½ÉÐ™½ÈÁÉ½É•ÍÌ(€¨•Ù•¹ÑÌ¥¸ÈàÑ€¸½È…¸%µ…•1½…‘•É€Ñ¡…ÐÍÕÁÁ½ÉÑÌÁÉ½É•ÍÌ•Ù•¹ÑÌ°Í•”(€¨mÑ¡¥ÌÑ¡É•…‘uí±¥¹¬¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½µÉ‘½½ˆ½Ñ¡É•”¹©Ì½¥ÍÍÕ•Ì¼ÄÀÐÌä¥ÍÍÕ•½µµ•¹Ð´ÈÜÔÜàÔØÌåô¸(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ%µ…•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¥µ…”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÍ•ÌÑ¡”±½…‘•¥µ…”($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸Q¡”µ•Ñ¡½…±Í¼É•ÑÕÉ¹Ì„¹•Ü%µ…•€½‰©•ÐÝ¡¥ …¸($€¨‘¥É•Ñ±ä‰”ÕÍ•™½ÈÑ•áÑÕÉ”É•…Ñ¥½¸¸%˜å½Ô‘¼¥ÐÑ¡¥ÌÝ…ä°Ñ¡”Ñ•áÑÕÉ”($€¨µ…äÁ½ÀÕÀ¥¸å½ÕÈÍ•¹”½¹”Ñ¡”É•ÍÁ•Ñ¥Ù”±½…‘¥¹œÁÉ½•ÍÌ¥Ì™¥¹¥Í¡•¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡%µ…”¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´U¹ÍÕÁÁ½ÉÑ•¥¸Ñ¡¥Ì±½…‘•È¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸í%µ…•ôQ¡”¥µ…”¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ¥µ…”è‘íÕÉ±õ€€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ …¡•¹½µÁ±•Ñ”€ôôôÑÉÕ”€¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$$%Í•ÑQ¥µ•½ÕÐ ™Õ¹Ñ¥½¸€ ¤ì(($$$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$$%ô°€À€¤ì(($$%ô•±Í”ì(($$$%±•Ð…ÉÈ€ô}±½…‘¥¹œ¹•Ð …¡•€¤ì(($$$%¥˜€ …ÉÈ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%…ÉÈ€ômtì($$$$%}±½…‘¥¹œ¹Í•Ð …¡•°…ÉÈ€¤ì(($$$%ô(($$$%…ÉÈ¹ÁÕÍ  ì½¹1½…°½¹ÉÉ½Èô€¤ì(($$%ô(($$%É•ÑÕÉ¸…¡•ì(($%ô(($%½¹ÍÐ¥µ…”€ôÉ•…Ñ•±•µ•¹Ñ9L €¥µœœ€¤ì(($%™Õ¹Ñ¥½¸½¹%µ…•1½… ¤ì(($$%É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%¥˜€ ½¹1½…€¤½¹1½… Ñ¡¥Ì€¤ì(($$$¼¼(($$%½¹ÍÐ…±±‰…­Ì€ô}±½…‘¥¹œ¹•Ð Ñ¡¥Ì€¤ñðmtì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð…±±‰…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$%¥˜€ …±±‰…¬¹½¹1½…€¤…±±‰…¬¹½¹1½… Ñ¡¥Ì€¤ì(($$%ô(($$%}±½…‘¥¹œ¹‘•±•Ñ” Ñ¡¥Ì€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô(($%™Õ¹Ñ¥½¸½¹%µ…•ÉÉ½È •Ù•¹Ð€¤ì(($$%É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È •Ù•¹Ð€¤ì(($$%…¡”¹É•µ½Ù” ¥µ…”è‘íÕÉ±õ€€¤ì(($$$¼¼(($$%½¹ÍÐ…±±‰…­Ì€ô}±½…‘¥¹œ¹•Ð Ñ¡¥Ì€¤ñðmtì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð…±±‰…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$%¥˜€ …±±‰…¬¹½¹ÉÉ½È€¤…±±‰…¬¹½¹ÉÉ½È •Ù•¹Ð€¤ì(($$%ô(($$%}±½…‘¥¹œ¹‘•±•Ñ” Ñ¡¥Ì€¤ì((($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô(($%™Õ¹Ñ¥½¸É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%¥µ…”¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È €±½…œ°½¹%µ…•1½…°™…±Í”€¤ì($$%¥µ…”¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È €•ÉÉ½Èœ°½¹%µ…•ÉÉ½È°™…±Í”€¤ì(($%ô(($%¥µ…”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È €±½…œ°½¹%µ…•1½…°™…±Í”€¤ì($%¥µ…”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È €•ÉÉ½Èœ°½¹%µ…•ÉÉ½È°™…±Í”€¤ì(($%¥˜€ ÕÉ°¹Í±¥” €À°€Ô€¤€„ôô€‘…Ñ„èœ€¤ì(($$%¥˜€ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€„ôôÕ¹‘•™¥¹•€¤¥µ…”¹É½ÍÍ=É¥¥¸€ôÑ¡¥Ì¹É½ÍÍ=É¥¥¸ì(($%ô(($%…¡”¹…‘ ¥µ…”è‘íÕÉ±õ€°¥µ…”€¤ì($%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($%¥µ…”¹ÍÉŒ€ôÕÉ°ì(($%É•ÑÕÉ¸¥µ…”ì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œÕ‰”Ñ•áÑÕÉ•Ì¸%µ…•Ì…É”¥¹Ñ•É¹…±±ä±½…‘•Ù¥„í±¥¹¬%µ…•1½…‘•Éô¸(€¨(€¨Q¡”±½…‘•ÈÉ•ÑÕÉ¹Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬Õ‰•Q•áÑÕÉ•ô…¹•áÁ•ÑÌÑ¡”Õ‰”µ…ÀÑ¼(€¨‰”‘•™¥¹•…ÌÍ¥àÍ•Á…É…Ñ”¥µ…•ÌÉ•ÁÉ•Í•¹Ñ¥¹œÑ¡”Í¥‘•Ì½˜„Õ‰”¸=Ñ¡•ÈÕ‰”µ…À‘•™¥¹¥Ñ¥½¹Ì(€¨±¥­”Ù•ÉÑ¥…°…¹¡½É¥é½¹Ñ…°É½ÍÌ°½±Õµ¸…¹É½Ü±…å½ÕÑÌ…É”¹½ÐÍÕÁÁ½ÉÑ•¸(€¨(€¨9½Ñ”Ñ¡…Ð°‰ä½¹Ù•¹Ñ¥½¸°Õ‰”µ…ÁÌ…É”ÍÁ•¥™¥•¥¸„½½É‘¥¹…Ñ”ÍåÍÑ•´(€¨¥¸Ý¡¥ Á½Í¥Ñ¥Ù”µà¥ÌÑ¼Ñ¡”É¥¡ÐÝ¡•¸±½½­¥¹œÕÀÑ¡”Á½Í¥Ñ¥Ù”µè…á¥Ì€´´(€¨¥¸½Ñ¡•ÈÝ½É‘Ì°ÕÍ¥¹œ„±•™Ðµ¡…¹‘•½½É‘¥¹…Ñ”ÍåÍÑ•´¸M¥¹”Ñ¡É•”¹©ÌÕÍ•Ì(€¨„É¥¡Ðµ¡…¹‘•½½É‘¥¹…Ñ”ÍåÍÑ•´°•¹Ù¥É½¹µ•¹Ðµ…ÁÌÕÍ•¥¸Ñ¡É•”¹©ÌÝ¥±°(€¨¡…Ù”Á½Ìµà…¹¹•œµàÍÝ…ÁÁ•¸(€¨(€¨Q¡”±½…‘•Õ‰”Ñ•áÑÕÉ”¥Ì¥¸ÍI½±½ÈÍÁ…”¸5•…¹¥¹œí±¥¹¬Q•áÑÕÉ”½±½ÉMÁ…•ô(€¨¥ÌÍ•ÐÑ¼MI	½±½ÉMÁ…•€‰ä‘•™…Õ±Ð¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹Õ‰•Q•áÑÕÉ•1½…‘•È ¤¹Í•ÑA…Ñ  €Ñ•áÑÕÉ•Ì½Õ‰•5…ÁÌ¼œ€¤ì(€¨½¹ÍÐÕ‰•Q•áÑÕÉ”€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ l(€¨€$Áà¹Á¹œœ°€¹à¹Á¹œœ°€Áä¹Á¹œœ°€¹ä¹Á¹œœ°€Áè¹Á¹œœ°€¹è¹Á¹œœ(€¨t€¤ì(€¨Í•¹”¹‰…­É½Õ¹€ôÕ‰•Q•áÑÕÉ”ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌÕ‰•Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÕ‰”Ñ•áÑÕÉ”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”™Õ±±ä±½…‘•Õ‰”Ñ•áÑÕÉ”($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸Q¡”µ•Ñ¡½…±Í¼É•ÑÕÉ¹Ì„¹•ÜÕ‰”Ñ•áÑÕÉ”½‰©•ÐÝ¡¥ …¸($€¨‘¥É•Ñ±ä‰”ÕÍ•™½Èµ…Ñ•É¥…°É•…Ñ¥½¸¸%˜å½Ô‘¼¥ÐÑ¡¥ÌÝ…ä°Ñ¡”Õ‰”Ñ•áÑÕÉ”($€¨µ…äÁ½ÀÕÀ¥¸å½ÕÈÍ•¹”½¹”Ñ¡”É•ÍÁ•Ñ¥Ù”±½…‘¥¹œÁÉ½•ÍÌ¥Ì™¥¹¥Í¡•¸($€¨($€¨Á…É…´íÉÉ…äñÍÑÉ¥¹œùôÕÉ±Ì€´ÉÉ…ä½˜€ØUI1ÌÑ¼¥µ…•Ì°½¹”™½È•… Í¥‘”½˜Ñ¡”($€¨Õ‰”Ñ•áÑÕÉ”¸Q¡”ÕÉ±ÌÍ¡½Õ±‰”ÍÁ•¥™¥•¥¸Ñ¡”™½±±½Ý¥¹œ½É‘•ÈèÁ½Ìµà°($€¨¹•œµà°Á½Ìµä°¹•œµä°Á½Ìµè°¹•œµè¸¸…ÉÉ…ä½˜‘…Ñ„UI%Ì…É”…±±½Ý•…ÌÝ•±°¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡Õ‰•Q•áÑÕÉ”¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´U¹ÍÕÁÁ½ÉÑ•¥¸Ñ¡¥Ì±½…‘•È¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸íÕ‰•Q•áÑÕÉ•ôQ¡”Õ‰”Ñ•áÑÕÉ”¸($€¨¼(%±½… ÕÉ±Ì°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•ÜÕ‰•Q•áÑÕÉ” ¤ì($%Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ôMI	½±½ÉMÁ…”ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì(($%±•Ð±½…‘•€ô€Àì(($%™Õ¹Ñ¥½¸±½…‘Q•áÑÕÉ” ¤€¤ì(($$%±½…‘•È¹±½… ÕÉ±Íl¤t°™Õ¹Ñ¥½¸€ ¥µ…”€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…•Íl¤t€ô¥µ…”ì(($$$%±½…‘•€¬¬ì(($$$%¥˜€ ±½…‘•€ôôô€Ø€¤ì(($$$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$$%ô(($$%ô°Õ¹‘•™¥¹•°½¹ÉÉ½È€¤ì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€ðÕÉ±Ì¹±•¹Ñ ì€¬¬¤€¤ì(($$%±½…‘Q•áÑÕÉ” ¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È±½…‘¥¹œ‰¥¹…ÉäÑ•áÑÕÉ”™½Éµ…ÑÌI	°aH½ÈQ¸(€¨Q•áÑÕÉ•Ì…É”¥¹Ñ•É¹…±±ä±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨•É¥Ù•±…ÍÍ•Ì¡…Ù”Ñ¼¥µÁ±•µ•¹ÐÑ¡”Á…ÉÍ” ¥€µ•Ñ¡½Ý¡¥ ¡½±‘ÌÑ¡”Á…ÉÍ¥¹œ(€¨™½ÈÑ¡”É•ÍÁ•Ñ¥Ù”™½Éµ…Ð¸(€¨(€¨…‰ÍÑÉ…Ð(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ…Ñ…Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‘…Ñ„Ñ•áÑÕÉ”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÍ•ÌÑ¡”±½…‘•‘…Ñ„Ñ•áÑÕÉ”($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸Q¡”µ•Ñ¡½…±Í¼É•ÑÕÉ¹Ì„¹•ÜÑ•áÑÕÉ”½‰©•ÐÝ¡¥ …¸($€¨‘¥É•Ñ±ä‰”ÕÍ•™½Èµ…Ñ•É¥…°É•…Ñ¥½¸¸%˜å½Ô‘¼¥ÐÑ¡¥ÌÝ…ä°Ñ¡”Ñ•áÑÕÉ”($€¨µ…äÁ½ÀÕÀ¥¸å½ÕÈÍ•¹”½¹”Ñ¡”É•ÍÁ•Ñ¥Ù”±½…‘¥¹œÁÉ½•ÍÌ¥Ì™¥¹¥Í¡•¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡…Ñ…Q•áÑÕÉ”¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸í…Ñ…Q•áÑÕÉ•ôQ¡”‘…Ñ„Ñ•áÑÕÉ”¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•Ü…Ñ…Q•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$%±•ÐÑ•á…Ñ„ì(($$%ÑÉäì(($$$%Ñ•á…Ñ„€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È€¤ì(($$%ô…Ñ € •ÉÉ½È€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹ÉÉ½È •ÉÉ½È€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È •ÉÉ½È€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹¥µ…”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…”€ôÑ•á…Ñ„¹¥µ…”ì(($$%ô•±Í”¥˜€ Ñ•á…Ñ„¹‘…Ñ„€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €ôÑ•á…Ñ„¹Ý¥‘Ñ ì($$$%Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€ôÑ•á…Ñ„¹¡•¥¡Ðì($$$%Ñ•áÑÕÉ”¹¥µ…”¹‘…Ñ„€ôÑ•á…Ñ„¹‘…Ñ„ì(($$%ô(($$%Ñ•áÑÕÉ”¹ÝÉ…ÁL€ôÑ•á…Ñ„¹ÝÉ…ÁL€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹ÝÉ…ÁL€è±…µÁQ½‘•]É…ÁÁ¥¹œì($$%Ñ•áÑÕÉ”¹ÝÉ…ÁP€ôÑ•á…Ñ„¹ÝÉ…ÁP€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹ÝÉ…ÁP€è±…µÁQ½‘•]É…ÁÁ¥¹œì(($$%Ñ•áÑÕÉ”¹µ…¥±Ñ•È€ôÑ•á…Ñ„¹µ…¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹µ…¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì($$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ôÑ•á…Ñ„¹µ¥¹¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹µ¥¹¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì(($$%Ñ•áÑÕÉ”¹…¹¥Í½ÑÉ½Áä€ôÑ•á…Ñ„¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹…¹¥Í½ÑÉ½Áä€è€Äì(($$%¥˜€ Ñ•á…Ñ„¹½±½ÉMÁ…”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ôÑ•á…Ñ„¹½±½ÉMÁ…”ì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹™±¥Ád€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹™±¥Ád€ôÑ•á…Ñ„¹™±¥Ádì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹™½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ„¹™½Éµ…Ðì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹ÑåÁ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹ÑåÁ”€ôÑ•á…Ñ„¹ÑåÁ”ì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹µ¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹µ¥Áµ…ÁÌ€ôÑ•á…Ñ„¹µ¥Áµ…ÁÌì($$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•Èì€¼¼ÁÉ•ÍÕµ…‰±ä¸¸¸(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤ì(($$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹•¹•É…Ñ•5¥Áµ…ÁÌ€ôÑ•á…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌì(($$%ô(($$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”°Ñ•á…Ñ„€¤ì(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œÑ•áÑÕÉ•Ì¸%µ…•Ì…É”¥¹Ñ•É¹…±±ä(€¨±½…‘•Ù¥„í±¥¹¬%µ…•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹Q•áÑÕÉ•1½…‘•È ¤ì(€¨½¹ÍÐÑ•áÑÕÉ”€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €Ñ•áÑÕÉ•Ì½±…¹‘}½•…¹}¥•}±½Õ‘|ÈÀÐà¹©Áœœ€¤ì(€¨(€¨½¹ÍÐµ…Ñ•É¥…°€ô¹•ÜQ!I¹5•Í¡	…Í¥5…Ñ•É¥…° ìµ…ÀéÑ•áÑÕÉ”ô€¤ì(€¨€(€¨A±•…Í”¹½Ñ”Ñ¡…ÐQ•áÑÕÉ•1½…‘•É€¡…Ì‘É½ÁÁ•ÍÕÁÁ½ÉÐ™½ÈÁÉ½É•ÍÌ(€¨•Ù•¹ÑÌ¥¸ÈàÑ€¸½È„Q•áÑÕÉ•1½…‘•É€Ñ¡…ÐÍÕÁÁ½ÉÑÌÁÉ½É•ÍÌ•Ù•¹ÑÌ°Í•”(€¨mÑ¡¥ÌÑ¡É•…‘uí±¥¹¬¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½µÉ‘½½ˆ½Ñ¡É•”¹©Ì½¥ÍÍÕ•Ì¼ÄÀÐÌä¥ÍÍÕ•½µµ•¹Ð´ÈäÌÈØÀÄÐÕô¸(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌQ•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÑ•áÑÕÉ”±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”™Õ±±ä±½…‘•Ñ•áÑÕÉ”($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸Q¡”µ•Ñ¡½…±Í¼É•ÑÕÉ¹Ì„¹•ÜÑ•áÑÕÉ”½‰©•ÐÝ¡¥ …¸($€¨‘¥É•Ñ±ä‰”ÕÍ•™½Èµ…Ñ•É¥…°É•…Ñ¥½¸¸%˜å½Ô‘¼¥ÐÑ¡¥ÌÝ…ä°Ñ¡”Ñ•áÑÕÉ”($€¨µ…äÁ½ÀÕÀ¥¸å½ÕÈÍ•¹”½¹”Ñ¡”É•ÍÁ•Ñ¥Ù”±½…‘¥¹œÁÉ½•ÍÌ¥Ì™¥¹¥Í¡•¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡Q•áÑÕÉ”¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´U¹ÍÕÁÁ½ÉÑ•¥¸Ñ¡¥Ì±½…‘•È¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”Ñ•áÑÕÉ”¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•ÜQ•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì(($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ¥µ…”€¤ì(($$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…”ì($$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$$%½¹1½… Ñ•áÑÕÉ”€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È±¥¡ÑÌ€´…±°½Ñ¡•È±¥¡ÐÑåÁ•Ì¥¹¡•É¥ÐÑ¡”(€¨ÁÉ½Á•ÉÑ¥•Ì…¹µ•Ñ¡½‘Ì‘•ÍÉ¥‰•¡•É”¸(€¨(€¨…‰ÍÑÉ…Ð(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌ1¥¡Ð•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€ô€Ä€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¡Ðœì(($$¼¨¨($$€¨Q¡”±¥¡ÐÌ½±½È¸($$€¨($$€¨ÑåÁ”í½±½Éô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È ½±½È€¤ì(($$¼¨¨($$€¨Q¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ô¥¹Ñ•¹Í¥Ñäì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($$¼¼µÁÑä¡•É”¥¸‰…Í”±…ÍÌìÍ½µ”ÍÕ‰±…ÍÍ•Ì½Ù•ÉÉ¥‘”¸((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹¥¹Ñ•¹Í¥Ñäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹½±½È€ôÑ¡¥Ì¹½±½È¹•Ñ!•à ¤ì($%‘…Ñ„¹½‰©•Ð¹¥¹Ñ•¹Í¥Ñä€ôÑ¡¥Ì¹¥¹Ñ•¹Í¥Ñäì(($%¥˜€ Ñ¡¥Ì¹É½Õ¹‘½±½È€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹É½Õ¹‘½±½È€ôÑ¡¥Ì¹É½Õ¹‘½±½È¹•Ñ!•à ¤ì(($%¥˜€ Ñ¡¥Ì¹‘¥ÍÑ…¹”€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹‘¥ÍÑ…¹”€ôÑ¡¥Ì¹‘¥ÍÑ…¹”ì($%¥˜€ Ñ¡¥Ì¹…¹±”€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹…¹±”€ôÑ¡¥Ì¹…¹±”ì($%¥˜€ Ñ¡¥Ì¹‘•…ä€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹‘•…ä€ôÑ¡¥Ì¹‘•…äì($%¥˜€ Ñ¡¥Ì¹Á•¹Õµ‰É„€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹Á•¹Õµ‰É„€ôÑ¡¥Ì¹Á•¹Õµ‰É„ì(($%¥˜€ Ñ¡¥Ì¹Í¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹Í¡…‘½Ü€ôÑ¡¥Ì¹Í¡…‘½Ü¹Ñ½)M=8 ¤ì($%¥˜€ Ñ¡¥Ì¹Ñ…É•Ð€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹Ñ…É•Ð€ôÑ¡¥Ì¹Ñ…É•Ð¹ÕÕ¥ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨±¥¡ÐÍ½ÕÉ”Á½Í¥Ñ¥½¹•‘¥É•Ñ±ä…‰½Ù”Ñ¡”Í•¹”°Ý¥Ñ ½±½È™…‘¥¹œ™É½´(€¨Ñ¡”Í­ä½±½ÈÑ¼Ñ¡”É½Õ¹½±½È¸(€¨(€¨Q¡¥Ì±¥¡Ð…¹¹½Ð‰”ÕÍ•Ñ¼…ÍÐÍ¡…‘½ÝÌ¸(€¨(€¨©Ì(€¨½¹ÍÐ±¥¡Ð€ô¹•ÜQ!I¹!•µ¥ÍÁ¡•É•1¥¡Ð €Áá™™™™‰ˆ°€ÁàÀàÀàÈÀ°€Ä€¤ì(€¨Í•¹”¹…‘ ±¥¡Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌ!•µ¥ÍÁ¡•É•1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¡•µ¥ÍÁ¡•É”±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ômÍ­å½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌÍ­ä½±½È¸($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ômÉ½Õ¹‘½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌÉ½Õ¹½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨¼(%½¹ÍÑÉÕÑ½È Í­å½±½È°É½Õ¹‘½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È Í­å½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í!•µ¥ÍÁ¡•É•1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€!•µ¥ÍÁ¡•É•1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($$¼¨¨($$€¨Q¡”±¥¡ÐÌÉ½Õ¹½±½È¸($$€¨($$€¨ÑåÁ”í½±½Éô($$€¨¼($%Ñ¡¥Ì¹É½Õ¹‘½±½È€ô¹•Ü½±½È É½Õ¹‘½±½È€¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹É½Õ¹‘½±½È¹½Áä Í½ÕÉ”¹É½Õ¹‘½±½È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}ÁÉ½©MÉ••¹5…ÑÉ¥àÄ€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}±½½­Q…É•ÐÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È±¥¡ÐÍ¡…‘½Ü±…ÍÍ•Ì¸Q¡•Í”±…ÍÍ•Ì(€¨É•ÁÉ•Í•¹ÐÑ¡”Í¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸™½È‘¥™™•É•¹Ð±¥¡ÐÑåÁ•Ì¸(€¨(€¨…‰ÍÑÉ…Ð(€¨¼)±…ÍÌ1¥¡ÑM¡…‘½Üì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±¥¡ÐÍ¡…‘½Ü¸($€¨($€¨Á…É…´í…µ•É…ô…µ•É„€´Q¡”±¥¡ÐÌÙ¥•Ü½˜Ñ¡”Ý½É±¸($€¨¼(%½¹ÍÑÉÕÑ½È …µ•É„€¤ì(($$¼¨¨($$€¨Q¡”±¥¡ÐÌÙ¥•Ü½˜Ñ¡”Ý½É±¸($$€¨($$€¨ÑåÁ”í…µ•É…ô($$€¨¼($%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($$¼¨¨($$€¨Q¡”¥¹Ñ•¹Í¥Ñä½˜Ñ¡”Í¡…‘½Ü¸Q¡”‘•™…Õ±Ð¥Ì€Å€¸($$€¨Y…±¥Ù…±Õ•Ì…É”¥¸Ñ¡”É…¹”lÀ°€Åu€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ô€Äì(($$¼¨¨($$€¨M¡…‘½Üµ…À‰¥…Ì°¡½ÜµÕ Ñ¼…‘½ÈÍÕ‰ÑÉ…Ð™É½´Ñ¡”¹½Éµ…±¥é•‘•ÁÑ ($$€¨Ý¡•¸‘•¥‘¥¹œÝ¡•Ñ¡•È„ÍÕÉ™…”¥Ì¥¸Í¡…‘½Ü¸($$€¨($$€¨Q¡”‘•™…Õ±Ð¥Ì€Á€¸Y•ÉäÑ¥¹ä…‘©ÕÍÑµ•¹ÑÌ¡•É”€¡¥¸Ñ¡”½É‘•È½˜€À¸ÀÀÀÅ€¤($$€¨µ…ä¡•±ÀÉ•‘Õ”…ÉÑ¥™…ÑÌ¥¸Í¡…‘½ÝÌ¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹‰¥…Ì€ô€Àì(($$¼¨¨($$€¨•™¥¹•Ì¡½ÜµÕ Ñ¡”Á½Í¥Ñ¥½¸ÕÍ•Ñ¼ÅÕ•ÉäÑ¡”Í¡…‘½Üµ…À¥Ì½™™Í•Ð…±½¹œ($$€¨Ñ¡”½‰©•Ð¹½Éµ…°¸Q¡”‘•™…Õ±Ð¥Ì€Á€¸%¹É•…Í¥¹œÑ¡¥ÌÙ…±Õ”…¸‰”ÕÍ•Ñ¼($$€¨É•‘Õ”Í¡…‘½Ü…¹”•ÍÁ•¥…±±ä¥¸±…É”Í•¹•ÌÝ¡•É”±¥¡ÐÍ¡¥¹•Ì½¹Ñ¼($$€¨•½µ•ÑÉä…Ð„Í¡…±±½Ü…¹±”¸Q¡”½ÍÐ¥ÌÑ¡…ÐÍ¡…‘½ÝÌµ…ä…ÁÁ•…È‘¥ÍÑ½ÉÑ•¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹¹½Éµ…±	¥…Ì€ô€Àì(($$¼¨¨($$€¨M•ÑÑ¥¹œÑ¡¥ÌÑ¼Ù…±Õ•ÌÉ•…Ñ•ÈÑ¡…¸€ÄÝ¥±°‰±ÕÈÑ¡”•‘•Ì½˜Ñ¡”Í¡…‘½Ü¸($$€¨!¥ Ù…±Õ•ÌÝ¥±°…ÕÍ”Õ¹Ý…¹Ñ•‰…¹‘¥¹œ•™™•ÑÌ¥¸Ñ¡”Í¡…‘½ÝÌ€´„É•…Ñ•È($$€¨µ…ÀÍ¥é”Ý¥±°…±±½Ü™½È„¡¥¡•ÈÙ…±Õ”Ñ¼‰”ÕÍ•¡•É”‰•™½É”Ñ¡•Í”•™™•ÑÌ($$€¨‰•½µ”Ù¥Í¥‰±”¸($$€¨($$€¨Q¡”ÁÉ½Á•ÉÑä¡…Ì¹¼•™™•ÐÝ¡•¸Ñ¡”Í¡…‘½Üµ…ÀÑåÁ”¥ÌAM½™ÑM¡…‘½Ý5…Á€…¹($$€¨…¹¥Ð¥ÌÉ•½µµ•¹‘•Ñ¼¥¹É•…Í”Í½™Ñ¹•ÍÌ‰ä‘•É•…Í¥¹œÑ¡”Í¡…‘½Üµ…ÀÍ¥é”¥¹ÍÑ•…¸($$€¨($$€¨Q¡”ÁÉ½Á•ÉÑä¡…Ì¹¼•™™•ÐÝ¡•¸Ñ¡”Í¡…‘½Üµ…ÀÑåÁ”¥Ì	…Í¥M¡…‘½Ý5…Á€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô€Äì(($$¼¨¨($$€¨Q¡”…µ½Õ¹Ð½˜Í…µÁ±•ÌÑ¼ÕÍ”Ý¡•¸‰±ÕÉÉ¥¹œ„YM4Í¡…‘½Üµ…À¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€à($$€¨¼($%Ñ¡¥Ì¹‰±ÕÉM…µÁ±•Ì€ô€àì(($$¼¨¨($$€¨•™¥¹•ÌÑ¡”Ý¥‘Ñ …¹¡•¥¡Ð½˜Ñ¡”Í¡…‘½Üµ…À¸!¥¡•ÈÙ…±Õ•Ì¥Ù”‰•ÑÑ•ÈÅÕ…±¥Ñä($$€¨Í¡…‘½ÝÌ…ÐÑ¡”½ÍÐ½˜½µÁÕÑ…Ñ¥½¸Ñ¥µ”¸Y…±Õ•ÌµÕÍÐ‰”Á½Ý•ÉÌ½˜ÑÝ¼¸($$€¨($$€¨ÑåÁ”íY•Ñ½ÈÉô($$€¨‘•™…Õ±Ð€ ÔÄÈ°ÔÄÈ¤($$€¨¼($%Ñ¡¥Ì¹µ…ÁM¥é”€ô¹•ÜY•Ñ½ÈÈ €ÔÄÈ°€ÔÄÈ€¤ì(($$¼¨¨($$€¨Q¡”ÑåÁ”½˜Í¡…‘½ÜÑ•áÑÕÉ”¸Q¡”‘•™…Õ±Ð¥ÌU¹Í¥¹•‘	åÑ•QåÁ•€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±ÐU¹Í¥¹•‘	åÑ•QåÁ”($$€¨¼($%Ñ¡¥Ì¹µ…ÁQåÁ”€ôU¹Í¥¹•‘	åÑ•QåÁ”ì(($$¼¨¨($$€¨Q¡”‘•ÁÑ µ…À•¹•É…Ñ•ÕÍ¥¹œÑ¡”¥¹Ñ•É¹…°…µ•É„ì„±½…Ñ¥½¸‰•å½¹„($$€¨Á¥á•°Ì‘•ÁÑ ¥Ì¥¸Í¡…‘½Ü¸½µÁÕÑ•¥¹Ñ•É¹…±±ä‘ÕÉ¥¹œÉ•¹‘•É¥¹œ¸($$€¨($$€¨ÑåÁ”ìýI•¹‘•ÉQ…É•Ñô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($$¼¨¨($$€¨Q¡”‘¥ÍÑÉ¥‰ÕÑ¥½¸µ…À•¹•É…Ñ•ÕÍ¥¹œÑ¡”¥¹Ñ•É¹…°…µ•É„ì…¸½±ÕÍ¥½¸¥Ì($$€¨…±Õ±…Ñ•‰…Í•½¸Ñ¡”‘¥ÍÑÉ¥‰ÕÑ¥½¸½˜‘•ÁÑ¡Ì¸½µÁÕÑ•¥¹Ñ•É¹…±±ä‘ÕÉ¥¹œ($$€¨É•¹‘•É¥¹œ¸($$€¨($$€¨ÑåÁ”ìýI•¹‘•ÉQ…É•Ñô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹µ…ÁA…ÍÌ€ô¹Õ±°ì(($$¼¨¨($$€¨5½‘•°Ñ¼Í¡…‘½Ü…µ•É„ÍÁ…”°Ñ¼½µÁÕÑ”±½…Ñ¥½¸…¹‘•ÁÑ ¥¸Í¡…‘½Üµ…À¸($$€¨Q¡¥Ì¥Ì½µÁÕÑ•¥¹Ñ•É¹…±±ä‘ÕÉ¥¹œÉ•¹‘•É¥¹œ¸($$€¨($$€¨ÑåÁ”í5…ÑÉ¥àÑô($$€¨¼($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô¹•Ü5…ÑÉ¥àÐ ¤ì(($$¼¨¨($$€¨¹…‰±•Ì…ÕÑ½µ…Ñ¥ŒÕÁ‘…Ñ•Ì½˜Ñ¡”±¥¡ÐÌÍ¡…‘½Ü¸%˜å½Ô‘¼¹½ÐÉ•ÅÕ¥É”‘å¹…µ¥Œ($$€¨±¥¡Ñ¥¹œ€¼Í¡…‘½ÝÌ°å½Ôµ…äÍ•ÐÑ¡¥ÌÑ¼™…±Í•€¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹…ÕÑ½UÁ‘…Ñ”€ôÑÉÕ”ì(($$¼¨¨($$€¨]¡•¸Í•ÐÑ¼ÑÉÕ•€°Í¡…‘½Üµ…ÁÌÝ¥±°‰”ÕÁ‘…Ñ•¥¸Ñ¡”¹•áÐÉ•¹‘•É€…±°¸($$€¨%˜å½Ô¡…Ù”Í•Ðí±¥¹¬1¥¡ÑM¡…‘½Ü…ÕÑ½UÁ‘…Ñ•ôÑ¼™…±Í•€°å½ÔÝ¥±°¹••Ñ¼($$€¨Í•ÐÑ¡¥ÌÁÉ½Á•ÉÑäÑ¼ÑÉÕ•€…¹Ñ¡•¸µ…­”„É•¹‘•È…±°Ñ¼ÕÁ‘…Ñ”Ñ¡”±¥¡ÐÌÍ¡…‘½Ü¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´€ô¹•ÜÉÕÍÑÕ´ ¤ì($%Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌ€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ð€ô€Äì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÌ€ôl(($$%¹•ÜY•Ñ½ÈÐ €À°€À°€Ä°€Ä€¤(($%tì((%ô(($¼¨¨($€¨UÍ•¥¹Ñ•É¹…±±ä‰äÑ¡”É•¹‘•É•ÈÑ¼•ÐÑ¡”¹Õµ‰•È½˜Ù¥•ÝÁ½ÉÑÌÑ¡…Ð¹••($€¨Ñ¼‰”É•¹‘•É•™½ÈÑ¡¥ÌÍ¡…‘½Ü¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Ù¥•ÝÁ½ÉÐ½Õ¹Ð¸($€¨¼(%•ÑY¥•ÝÁ½ÉÑ½Õ¹Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ðì((%ô(($¼¨¨($€¨•ÑÌÑ¡”Í¡…‘½Ü…µ•É…Ì™ÉÕÍÑÕ´¸UÍ•¥¹Ñ•É¹…±±ä‰äÑ¡”É•¹‘•É•ÈÑ¼Õ±°½‰©•ÑÌ¸($€¨($€¨É•ÑÕÉ¸íÉÕÍÑÕµôQ¡”Í¡…‘½Ü…µ•É„™ÉÕÍÑÕ´¸($€¨¼(%•ÑÉÕÍÑÕ´ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}™ÉÕÍÑÕ´ì((%ô(($¼¨¨($€¨UÁ‘…Ñ”Ñ¡”µ…ÑÉ¥•Ì™½ÈÑ¡”…µ•É„…¹Í¡…‘½Ü°ÕÍ•¥¹Ñ•É¹…±±ä‰äÑ¡”É•¹‘•É•È¸($€¨($€¨Á…É…´í1¥¡Ñô±¥¡Ð€´Q¡”±¥¡Ð™½ÈÝ¡¥ Ñ¡”Í¡…‘½Ü¥Ì‰•¥¹œÉ•¹‘•É•¸($€¨¼(%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì(($%½¹ÍÐÍ¡…‘½Ý…µ•É„€ôÑ¡¥Ì¹…µ•É„ì($%½¹ÍÐÍ¡…‘½Ý5…ÑÉ¥à€ôÑ¡¥Ì¹µ…ÑÉ¥àì(($%}±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%Í¡…‘½Ý…µ•É„¹Á½Í¥Ñ¥½¸¹½Áä }±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä€¤ì(($%}±½½­Q…É•ÐÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì($%Í¡…‘½Ý…µ•É„¹±½½­Ð }±½½­Q…É•ÐÄ€¤ì($%Í¡…‘½Ý…µ•É„¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ¤ì(($%}ÁÉ½©MÉ••¹5…ÑÉ¥àÄ¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì Í¡…‘½Ý…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à°Í¡…‘½Ý…µ•É„¹µ…ÑÉ¥á]½É±‘%¹Ù•ÉÍ”€¤ì($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´¹Í•ÑÉ½µAÉ½©•Ñ¥½¹5…ÑÉ¥à }ÁÉ½©MÉ••¹5…ÑÉ¥àÄ°Í¡…‘½Ý…µ•É„¹½½É‘¥¹…Ñ•MåÍÑ•´°Í¡…‘½Ý…µ•É„¹É•Ù•ÉÍ•‘•ÁÑ €¤ì(($%¥˜€ Í¡…‘½Ý…µ•É„¹É•Ù•ÉÍ•‘•ÁÑ €¤ì(($$%Í¡…‘½Ý5…ÑÉ¥à¹Í•Ð ($$$$À¸Ô°€À¸À°€À¸À°€À¸Ô°($$$$À¸À°€À¸Ô°€À¸À°€À¸Ô°($$$$À¸À°€À¸À°€Ä¸À°€À¸À°($$$$À¸À°€À¸À°€À¸À°€Ä¸À($$$¤ì(($%ô•±Í”ì(($$%Í¡…‘½Ý5…ÑÉ¥à¹Í•Ð ($$$$À¸Ô°€À¸À°€À¸À°€À¸Ô°($$$$À¸À°€À¸Ô°€À¸À°€À¸Ô°($$$$À¸À°€À¸À°€À¸Ô°€À¸Ô°($$$$À¸À°€À¸À°€À¸À°€Ä¸À($$$¤ì(($%ô(($%Í¡…‘½Ý5…ÑÉ¥à¹µÕ±Ñ¥Á±ä }ÁÉ½©MÉ••¹5…ÑÉ¥àÄ€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„Ù¥•ÝÁ½ÉÐ‘•™¥¹¥Ñ¥½¸™½ÈÑ¡”¥Ù•¸Ù¥•ÝÁ½ÉÐ¥¹‘•à¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ¥•ÝÁ½ÉÑ%¹‘•à€´Q¡”Ù¥•ÝÁ½ÉÐ¥¹‘•à¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÑôQ¡”Ù¥•ÝÁ½ÉÐ¸($€¨¼(%•ÑY¥•ÝÁ½ÉÐ Ù¥•ÝÁ½ÉÑ%¹‘•à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÍlÙ¥•ÝÁ½ÉÑ%¹‘•àtì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”™É…µ”•áÑ•¹‘Ì¸($€¨($€¨É•ÑÕÉ¸íY•Ñ½ÈÉôQ¡”™É…µ”•áÑ•¹‘Ì¸($€¨¼(%•ÑÉ…µ•áÑ•¹ÑÌ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%¥˜€ Ñ¡¥Ì¹µ…À€¤ì(($$%Ñ¡¥Ì¹µ…À¹‘¥ÍÁ½Í” ¤ì(($%ô(($%¥˜€ Ñ¡¥Ì¹µ…ÁA…ÍÌ€¤ì(($$%Ñ¡¥Ì¹µ…ÁA…ÍÌ¹‘¥ÍÁ½Í” ¤ì(($%ô((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸±¥¡ÐÍ¡…‘½Ü¥¹ÍÑ…¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´í1¥¡ÑM¡…‘½ÝôÍ½ÕÉ”€´Q¡”±¥¡ÐÍ¡…‘½ÜÑ¼½Áä¸($€¨É•ÑÕÉ¸í1¥¡ÑM¡…‘½ÝôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥¡ÐÍ¡…‘½Ü¥¹ÍÑ…¹”¸($€¨¼(%½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹…µ•É„€ôÍ½ÕÉ”¹…µ•É„¹±½¹” ¤ì(($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹¥¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹‰¥…Ì€ôÍ½ÕÉ”¹‰¥…Ìì($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÍ½ÕÉ”¹É…‘¥ÕÌì(($%Ñ¡¥Ì¹…ÕÑ½UÁ‘…Ñ”€ôÍ½ÕÉ”¹…ÕÑ½UÁ‘…Ñ”ì($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÍ½ÕÉ”¹¹••‘ÍUÁ‘…Ñ”ì($%Ñ¡¥Ì¹¹½Éµ…±	¥…Ì€ôÍ½ÕÉ”¹¹½Éµ…±	¥…Ìì($%Ñ¡¥Ì¹‰±ÕÉM…µÁ±•Ì€ôÍ½ÕÉ”¹‰±ÕÉM…µÁ±•Ìì(($%Ñ¡¥Ì¹µ…ÁM¥é”¹½Áä Í½ÕÉ”¹µ…ÁM¥é”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü±¥¡ÐÍ¡…‘½Ü¥¹ÍÑ…¹”Ý¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í1¥¡ÑM¡…‘½Ýô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô(($¼¨¨($€¨M•É¥…±¥é•ÌÑ¡”±¥¡ÐÍ¡…‘½Ü¥¹Ñ¼)M=8¸($€¨($€¨É•ÑÕÉ¸í=‰©•Ñô)M=8½‰©•ÐÉ•ÁÉ•Í•¹Ñ¥¹œÑ¡”Í•É¥…±¥é•±¥¡ÐÍ¡…‘½Ü¸($€¨Í•”í±¥¹¬=‰©•Ñ1½…‘•ÈÁ…ÉÍ•ô($€¨¼(%Ñ½)M=8 ¤ì(($%½¹ÍÐ½‰©•Ð€ôíôì(($%¥˜€ Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€„ôô€Ä€¤½‰©•Ð¹¥¹Ñ•¹Í¥Ñä€ôÑ¡¥Ì¹¥¹Ñ•¹Í¥Ñäì($%¥˜€ Ñ¡¥Ì¹‰¥…Ì€„ôô€À€¤½‰©•Ð¹‰¥…Ì€ôÑ¡¥Ì¹‰¥…Ìì($%¥˜€ Ñ¡¥Ì¹¹½Éµ…±	¥…Ì€„ôô€À€¤½‰©•Ð¹¹½Éµ…±	¥…Ì€ôÑ¡¥Ì¹¹½Éµ…±	¥…Ìì($%¥˜€ Ñ¡¥Ì¹É…‘¥ÕÌ€„ôô€Ä€¤½‰©•Ð¹É…‘¥ÕÌ€ôÑ¡¥Ì¹É…‘¥ÕÌì($%¥˜€ Ñ¡¥Ì¹µ…ÁM¥é”¹à€„ôô€ÔÄÈñðÑ¡¥Ì¹µ…ÁM¥é”¹ä€„ôô€ÔÄÈ€¤½‰©•Ð¹µ…ÁM¥é”€ôÑ¡¥Ì¹µ…ÁM¥é”¹Ñ½ÉÉ…ä ¤ì(($%½‰©•Ð¹…µ•É„€ôÑ¡¥Ì¹…µ•É„¹Ñ½)M=8 ™…±Í”€¤¹½‰©•Ðì($%‘•±•Ñ”½‰©•Ð¹…µ•É„¹µ…ÑÉ¥àì(($%É•ÑÕÉ¸½‰©•Ðì((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌÑ¡”Í¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸½˜‘¥É•Ñ¥½¹…°±¥¡ÑÌ¸(€¨(€¨…Õµ•¹ÑÌ1¥¡ÑM¡…‘½Ü(€¨¼)±…ÍÌMÁ½Ñ1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÁ½Ð±¥¡ÐÍ¡…‘½Ü¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ €ÔÀ°€Ä°€À¸Ô°€ÔÀÀ€¤€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍMÁ½Ñ1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì(($$¼¨¨($$€¨UÍ•Ñ¼™½ÕÌÑ¡”Í¡…‘½Ü…µ•É„¸Q¡”…µ•É„Ì™¥•±½˜Ù¥•Ü¥ÌÍ•Ð…Ì„($$€¨Á•É•¹Ñ…”½˜Ñ¡”ÍÁ½Ñ±¥¡ÐÌ™¥•±µ½˜µÙ¥•Ü¸I…¹”¥ÌlÀ°€Åu€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹™½ÕÌ€ô€Äì(($$¼¨¨($$€¨Q•áÑÕÉ”…ÍÁ•ÐÉ…Ñ¥¼¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹…ÍÁ•Ð€ô€Äì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì(($%½¹ÍÐ…µ•É„€ôÑ¡¥Ì¹…µ•É„ì(($%½¹ÍÐ™½Ø€ôIÉ€¨€È€¨±¥¡Ð¹…¹±”€¨Ñ¡¥Ì¹™½ÕÌì($%½¹ÍÐ…ÍÁ•Ð€ô€ Ñ¡¥Ì¹µ…ÁM¥é”¹Ý¥‘Ñ €¼Ñ¡¥Ì¹µ…ÁM¥é”¹¡•¥¡Ð€¤€¨Ñ¡¥Ì¹…ÍÁ•Ðì($%½¹ÍÐ™…È€ô±¥¡Ð¹‘¥ÍÑ…¹”ñð…µ•É„¹™…Èì(($%¥˜€ ™½Ø€„ôô…µ•É„¹™½Øñð…ÍÁ•Ð€„ôô…µ•É„¹…ÍÁ•Ðñð™…È€„ôô…µ•É„¹™…È€¤ì(($$%…µ•É„¹™½Ø€ô™½Øì($$%…µ•É„¹…ÍÁ•Ð€ô…ÍÁ•Ðì($$%…µ•É„¹™…È€ô™…Èì($$%…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%ô(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹™½ÕÌ€ôÍ½ÕÉ”¹™½ÕÌì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨Q¡¥Ì±¥¡Ð•ÑÌ•µ¥ÑÑ•™É½´„Í¥¹±”Á½¥¹Ð¥¸½¹”‘¥É•Ñ¥½¸°…±½¹œ„½¹”(€¨Ñ¡…Ð¥¹É•…Í•Ì¥¸Í¥é”Ñ¡”™ÕÉÑ¡•È™É½´Ñ¡”±¥¡Ð¥Ð•ÑÌ¸(€¨(€¨Q¡¥Ì±¥¡Ð…¸…ÍÐÍ¡…‘½ÝÌ€´Í•”Ñ¡”í±¥¹¬MÁ½Ñ1¥¡ÑM¡…‘½Ýô™½È‘•Ñ…¥±Ì¸(€¨(€¨©Ì(€¨€¼¼Ý¡¥Ñ”ÍÁ½Ñ±¥¡ÐÍ¡¥¹¥¹œ™É½´Ñ¡”Í¥‘”°µ½‘Õ±…Ñ•‰ä„Ñ•áÑÕÉ”(€¨½¹ÍÐÍÁ½Ñ1¥¡Ð€ô¹•ÜQ!I¹MÁ½Ñ1¥¡Ð €Áá™™™™™˜€¤ì(€¨ÍÁ½Ñ1¥¡Ð¹Á½Í¥Ñ¥½¸¹Í•Ð €ÄÀÀ°€ÄÀÀÀ°€ÄÀÀ€¤ì(€¨ÍÁ½Ñ1¥¡Ð¹µ…À€ô¹•ÜQ!I¹Q•áÑÕÉ•1½…‘•È ¤¹±½… ÕÉ°€¤ì(€¨(€¨ÍÁ½Ñ1¥¡Ð¹…ÍÑM¡…‘½Ü€ôÑÉÕ”ì(€¨ÍÁ½Ñ1¥¡Ð¹Í¡…‘½Ü¹µ…ÁM¥é”¹Ý¥‘Ñ €ô€ÄÀÈÐì(€¨ÍÁ½Ñ1¥¡Ð¹Í¡…‘½Ü¹µ…ÁM¥é”¹¡•¥¡Ð€ô€ÄÀÈÐì(€¨ÍÁ½Ñ1¥¡Ð¹Í¡…‘½Ü¹…µ•É„¹¹•…È€ô€ÔÀÀì(€¨ÍÁ½Ñ1¥¡Ð¹Í¡…‘½Ü¹…µ•É„¹™…È€ô€ÐÀÀÀì(€¨ÍÁ½Ñ1¥¡Ð¹Í¡…‘½Ü¹…µ•É„¹™½Ø€ô€ÌÀíÌ(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌMÁ½Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÁ½Ð±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñäµ•…ÍÕÉ•¥¸…¹‘•±„€¡¤¸($€¨Á…É…´í¹Õµ‰•Éôm‘¥ÍÑ…¹”ôÁt€´5…á¥µÕ´É…¹”½˜Ñ¡”±¥¡Ð¸€Á€µ•…¹Ì¹¼±¥µ¥Ð¸($€¨Á…É…´í¹Õµ‰•Éôm…¹±”õ5…Ñ ¹A$¼Ít€´5…á¥µÕ´…¹±”½˜±¥¡Ð‘¥ÍÁ•ÉÍ¥½¸™É½´¥ÑÌ‘¥É•Ñ¥½¸Ý¡½Í”ÕÁÁ•È‰½Õ¹¥Ì5…Ñ ¹A$¼É€¸($€¨Á…É…´í¹Õµ‰•ÉômÁ•¹Õµ‰É„ôÁt€´A•É•¹Ð½˜Ñ¡”ÍÁ½Ñ±¥¡Ð½¹”Ñ¡…Ð¥Ì…ÑÑ•¹Õ…Ñ•‘Õ”Ñ¼Á•¹Õµ‰É„¸Y…±Õ”É…¹”¥ÌlÀ°Åu€¸($€¨Á…É…´í¹Õµ‰•Éôm‘•…äôÉt€´Q¡”…µ½Õ¹ÐÑ¡”±¥¡Ð‘¥µÌ…±½¹œÑ¡”‘¥ÍÑ…¹”½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°‘¥ÍÑ…¹”€ô€À°…¹±”€ô5…Ñ ¹A$€¼€Ì°Á•¹Õµ‰É„€ô€À°‘•…ä€ô€È€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍMÁ½Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ½Ñ1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($$¼¨¨($$€¨Q¡”ÍÁ½Ð±¥¡ÐÁ½¥¹ÑÌ™É½´¥ÑÌÁ½Í¥Ñ¥½¸Ñ¼Ñ¡”($$€¨Ñ…É•ÐÌÁ½Í¥Ñ¥½¸¸($$€¨($$€¨½ÈÑ¡”Ñ…É•ÐÌÁ½Í¥Ñ¥½¸Ñ¼‰”¡…¹•Ñ¼…¹åÑ¡¥¹œ½Ñ¡•È($$€¨Ñ¡…¸Ñ¡”‘•™…Õ±Ð°¥ÐµÕÍÐ‰”…‘‘•Ñ¼Ñ¡”Í•¹”¸($$€¨($$€¨%Ð¥Ì…±Í¼Á½ÍÍ¥‰±”Ñ¼Í•ÐÑ¡”Ñ…É•ÐÑ¼‰”…¹½Ñ¡•È€Í½‰©•Ð($$€¨¥¸Ñ¡”Í•¹”¸Q¡”±¥¡ÐÝ¥±°¹½ÜÑÉ…¬Ñ¡”Ñ…É•Ð½‰©•Ð¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍô($$€¨¼($%Ñ¡¥Ì¹Ñ…É•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($$¼¨¨($$€¨5…á¥µÕ´É…¹”½˜Ñ¡”±¥¡Ð¸€Á€µ•…¹Ì¹¼±¥µ¥Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ô‘¥ÍÑ…¹”ì(($$¼¨¨($$€¨5…á¥µÕ´…¹±”½˜±¥¡Ð‘¥ÍÁ•ÉÍ¥½¸™É½´¥ÑÌ‘¥É•Ñ¥½¸Ý¡½Í”ÕÁÁ•È‰½Õ¹¥Ì5…Ñ ¹A$¼É€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð5…Ñ ¹A$¼Ì($$€¨¼($%Ñ¡¥Ì¹…¹±”€ô…¹±”ì(($$¼¨¨($$€¨A•É•¹Ð½˜Ñ¡”ÍÁ½Ñ±¥¡Ð½¹”Ñ¡…Ð¥Ì…ÑÑ•¹Õ…Ñ•‘Õ”Ñ¼Á•¹Õµ‰É„¸($$€¨Y…±Õ”É…¹”¥ÌlÀ°Åu€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹Á•¹Õµ‰É„€ôÁ•¹Õµ‰É„ì(($$¼¨¨($$€¨Q¡”…µ½Õ¹ÐÑ¡”±¥¡Ð‘¥µÌ…±½¹œÑ¡”‘¥ÍÑ…¹”½˜Ñ¡”±¥¡Ð¸%¸½¹Ñ•áÐ½˜($$€¨Á¡åÍ¥…±±äµ½ÉÉ•ÐÉ•¹‘•É¥¹œÑ¡”‘•™…Õ±ÐÙ…±Õ”Í¡½Õ±¹½Ð‰”¡…¹•¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€È($$€¨¼($%Ñ¡¥Ì¹‘•…ä€ô‘•…äì(($$¼¨¨($$€¨Ñ•áÑÕÉ”ÕÍ•Ñ¼µ½‘Õ±…Ñ”Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸Q¡”ÍÁ½Ð±¥¡Ð($$€¨½±½È¥Ìµ¥á•Ý¥Ñ Ñ¡”IÙ…±Õ”½˜Ñ¡¥ÌÑ•áÑÕÉ”°Ý¥Ñ „É…Ñ¥¼($$€¨½ÉÉ•ÍÁ½¹‘¥¹œÑ¼¥ÑÌ…±Á¡„Ù…±Õ”¸Q¡”½½­¥”µ±¥­”µ…Í­¥¹œ•™™•Ð¥Ì($$€¨É•ÁÉ½‘Õ•ÕÍ¥¹œÁ¥á•°Ù…±Õ•Ì€ À°€À°€À°€Äµ½½­¥•}Ù…±Õ”¤¸($$€¨($$€¨€©]…É¹¥¹œ¨èQ¡¥ÌÁÉ½Á•ÉÑä¥Ì‘¥Í…‰±•¥˜í±¥¹¬=‰©•ÐÍ…ÍÑM¡…‘½Ýô¥ÌÍ•ÐÑ¼™…±Í•€¸($$€¨($$€¨ÑåÁ”ìýQ•áÑÕÉ•ô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($$¼¨¨($$€¨Q¡¥ÌÁÉ½Á•ÉÑä¡½±‘ÌÑ¡”±¥¡ÐÌÍ¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸¸($$€¨($$€¨ÑåÁ”íMÁ½Ñ1¥¡ÑM¡…‘½Ýô($$€¨¼($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•ÜMÁ½Ñ1¥¡ÑM¡…‘½Ü ¤ì((%ô(($¼¨¨($€¨Q¡”±¥¡ÐÌÁ½Ý•È¸A½Ý•È¥ÌÑ¡”±Õµ¥¹½ÕÌÁ½Ý•È½˜Ñ¡”±¥¡Ðµ•…ÍÕÉ•¥¸±Õµ•¹Ì€¡±´¤¸($€¨€¡…¹¥¹œÑ¡”Á½Ý•ÈÝ¥±°…±Í¼¡…¹”Ñ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä¸($€¨($€¨ÑåÁ”í¹Õµ‰•Éô($€¨¼(%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤($$¼¼‰ä½¹Ù•¹Ñ¥½¸™½È„ÍÁ½Ñ±¥¡Ð°±Õµ¥¹½ÕÌÁ½Ý•È€¡±´¤€ôƒ> €¨±Õµ¥¹½ÕÌ¥¹Ñ•¹Í¥Ñä€¡¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼5…Ñ ¹A$ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ôÍ½ÕÉ”¹‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹…¹±”€ôÍ½ÕÉ”¹…¹±”ì($%Ñ¡¥Ì¹Á•¹Õµ‰É„€ôÍ½ÕÉ”¹Á•¹Õµ‰É„ì($%Ñ¡¥Ì¹‘•…ä€ôÍ½ÕÉ”¹‘•…äì(($%Ñ¡¥Ì¹Ñ…É•Ð€ôÍ½ÕÉ”¹Ñ…É•Ð¹±½¹” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}ÁÉ½©MÉ••¹5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}±¥¡ÑA½Í¥Ñ¥½¹]½É±€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}±½½­Q…É•Ð€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌÑ¡”Í¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸½˜Á½¥¹Ð±¥¡ÑÌ¸(€¨(€¨…Õµ•¹ÑÌ1¥¡ÑM¡…‘½Ü(€¨¼)±…ÍÌA½¥¹Ñ1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁ½¥¹Ð±¥¡ÐÍ¡…‘½Ü¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ €äÀ°€Ä°€À¸Ô°€ÔÀÀ€¤€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍA½¥¹Ñ1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì(($%Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌ€ô¹•ÜY•Ñ½ÈÈ €Ð°€È€¤ì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ð€ô€Øì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÌ€ôl($$$¼¼Q¡•Í”Ù¥•ÝÁ½ÉÑÌµ…À„Õ‰”µµ…À½¹Ñ¼„€ÉÑ•áÑÕÉ”Ý¥Ñ Ñ¡”($$$¼¼™½±±½Ý¥¹œ½É¥•¹Ñ…Ñ¥½¸è($$$¼¼($$$¼¼€áéah($$$¼¼€€äd($$$¼¼($$$¼¼`€´A½Í¥Ñ¥Ù”à‘¥É•Ñ¥½¸($$$¼¼à€´9•…Ñ¥Ù”à‘¥É•Ñ¥½¸($$$¼¼d€´A½Í¥Ñ¥Ù”ä‘¥É•Ñ¥½¸($$$¼¼ä€´9•…Ñ¥Ù”ä‘¥É•Ñ¥½¸($$$¼¼h€´A½Í¥Ñ¥Ù”è‘¥É•Ñ¥½¸($$$¼¼è€´9•…Ñ¥Ù”è‘¥É•Ñ¥½¸(($$$¼¼Á½Í¥Ñ¥Ù”`($$%¹•ÜY•Ñ½ÈÐ €È°€Ä°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”`($$%¹•ÜY•Ñ½ÈÐ €À°€Ä°€Ä°€Ä€¤°($$$¼¼Á½Í¥Ñ¥Ù”h($$%¹•ÜY•Ñ½ÈÐ €Ì°€Ä°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”h($$%¹•ÜY•Ñ½ÈÐ €Ä°€Ä°€Ä°€Ä€¤°($$$¼¼Á½Í¥Ñ¥Ù”d($$%¹•ÜY•Ñ½ÈÐ €Ì°€À°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”d($$%¹•ÜY•Ñ½ÈÐ €Ä°€À°€Ä°€Ä€¤($%tì(($%Ñ¡¥Ì¹}Õ‰•¥É•Ñ¥½¹Ì€ôl($$%¹•ÜY•Ñ½ÈÌ €Ä°€À°€À€¤°¹•ÜY•Ñ½ÈÌ €´Ä°€À°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°($$%¹•ÜY•Ñ½ÈÌ €À°€À°€´Ä€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€´Ä°€À€¤($%tì(($%Ñ¡¥Ì¹}Õ‰•UÁÌ€ôl($$%¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°($$%¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°%¹•ÜY•Ñ½ÈÌ €À°€À°€´Ä€¤($%tì((%ô(($¼¨¨($€¨UÁ‘…Ñ”Ñ¡”µ…ÑÉ¥•Ì™½ÈÑ¡”…µ•É„…¹Í¡…‘½Ü°ÕÍ•¥¹Ñ•É¹…±±ä‰äÑ¡”É•¹‘•É•È¸($€¨($€¨Á…É…´í1¥¡Ñô±¥¡Ð€´Q¡”±¥¡Ð™½ÈÝ¡¥ Ñ¡”Í¡…‘½Ü¥Ì‰•¥¹œÉ•¹‘•É•¸($€¨Á…É…´í¹Õµ‰•ÉômÙ¥•ÝÁ½ÉÑ%¹‘•àôÁt€´Q¡”Ù¥•ÝÁ½ÉÐ¥¹‘•à¸($€¨¼(%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð°Ù¥•ÝÁ½ÉÑ%¹‘•à€ô€À€¤ì(($%½¹ÍÐ…µ•É„€ôÑ¡¥Ì¹…µ•É„ì($%½¹ÍÐÍ¡…‘½Ý5…ÑÉ¥à€ôÑ¡¥Ì¹µ…ÑÉ¥àì(($%½¹ÍÐ™…È€ô±¥¡Ð¹‘¥ÍÑ…¹”ñð…µ•É„¹™…Èì(($%¥˜€ ™…È€„ôô…µ•É„¹™…È€¤ì(($$%…µ•É„¹™…È€ô™…Èì($$%…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%ô(($%}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%…µ•É„¹Á½Í¥Ñ¥½¸¹½Áä }±¥¡ÑA½Í¥Ñ¥½¹]½É±€¤ì(($%}±½½­Q…É•Ð¹½Áä …µ•É„¹Á½Í¥Ñ¥½¸€¤ì($%}±½½­Q…É•Ð¹…‘ Ñ¡¥Ì¹}Õ‰•¥É•Ñ¥½¹ÍlÙ¥•ÝÁ½ÉÑ%¹‘•àt€¤ì($%…µ•É„¹ÕÀ¹½Áä Ñ¡¥Ì¹}Õ‰•UÁÍlÙ¥•ÝÁ½ÉÑ%¹‘•àt€¤ì($%…µ•É„¹±½½­Ð }±½½­Q…É•Ð€¤ì($%…µ•É„¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ¤ì(($%Í¡…‘½Ý5…ÑÉ¥à¹µ…­•QÉ…¹Í±…Ñ¥½¸ €´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹à°€´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹ä°€´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹è€¤ì(($%}ÁÉ½©MÉ••¹5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì …µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à°…µ•É„¹µ…ÑÉ¥á]½É±‘%¹Ù•ÉÍ”€¤ì($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´¹Í•ÑÉ½µAÉ½©•Ñ¥½¹5…ÑÉ¥à }ÁÉ½©MÉ••¹5…ÑÉ¥à°…µ•É„¹½½É‘¥¹…Ñ•MåÍÑ•´°…µ•É„¹É•Ù•ÉÍ•‘•ÁÑ €¤ì((%ô()ô((¼¨¨(€¨±¥¡ÐÑ¡…Ð•ÑÌ•µ¥ÑÑ•™É½´„Í¥¹±”Á½¥¹Ð¥¸…±°‘¥É•Ñ¥½¹Ì¸½µµ½¸(€¨ÕÍ”…Í”™½ÈÑ¡¥Ì¥ÌÑ¼É•Á±¥…Ñ”Ñ¡”±¥¡Ð•µ¥ÑÑ•™É½´„‰…É”(€¨±¥¡Ñ‰Õ±ˆ¸(€¨(€¨Q¡¥Ì±¥¡Ð…¸…ÍÐÍ¡…‘½ÝÌ€´Í•”Ñ¡”í±¥¹¬A½¥¹Ñ1¥¡ÑM¡…‘½Ýô™½È‘•Ñ…¥±Ì¸(€¨(€¨©Ì(€¨½¹ÍÐ±¥¡Ð€ô¹•ÜQ!I¹A½¥¹Ñ1¥¡Ð €Áá™˜ÀÀÀÀ°€Ä°€ÄÀÀ€¤ì(€¨±¥¡Ð¹Á½Í¥Ñ¥½¸¹Í•Ð €ÔÀ°€ÔÀ°€ÔÀ€¤ì(€¨Í•¹”¹…‘ ±¥¡Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌA½¥¹Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁ½¥¹Ð±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñäµ•…ÍÕÉ•¥¸…¹‘•±„€¡¤¸($€¨Á…É…´í¹Õµ‰•Éôm‘¥ÍÑ…¹”ôÁt€´5…á¥µÕ´É…¹”½˜Ñ¡”±¥¡Ð¸€Á€µ•…¹Ì¹¼±¥µ¥Ð¸($€¨Á…É…´í¹Õµ‰•Éôm‘•…äôÉt€´Q¡”…µ½Õ¹ÐÑ¡”±¥¡Ð‘¥µÌ…±½¹œÑ¡”‘¥ÍÑ…¹”½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°‘¥ÍÑ…¹”€ô€À°‘•…ä€ô€È€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍA½¥¹Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹Ñ1¥¡Ðœì(($$¼¨¨($$€¨]¡•¸‘¥ÍÑ…¹”¥Ìé•É¼°±¥¡ÐÝ¥±°…ÑÑ•¹Õ…Ñ”…½É‘¥¹œÑ¼¥¹Ù•ÉÍ”µÍÅÕ…É”($$€¨±…ÜÑ¼¥¹™¥¹¥Ñ”‘¥ÍÑ…¹”¸]¡•¸‘¥ÍÑ…¹”¥Ì¹½¸µé•É¼°±¥¡ÐÝ¥±°…ÑÑ•¹Õ…Ñ”($$€¨…½É‘¥¹œÑ¼¥¹Ù•ÉÍ”µÍÅÕ…É”±…ÜÕ¹Ñ¥°¹•…ÈÑ¡”‘¥ÍÑ…¹”ÕÑ½™˜°Ý¡•É”¥Ð($$€¨Ý¥±°Ñ¡•¸…ÑÑ•¹Õ…Ñ”ÅÕ¥­±ä…¹Íµ½½Ñ¡±äÑ¼€À¸%¹¡•É•¹Ñ±ä°ÕÑ½™™Ì…É”¹½Ð($$€¨Á¡åÍ¥…±±ä½ÉÉ•Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ô‘¥ÍÑ…¹”ì(($$¼¨¨($$€¨Q¡”…µ½Õ¹ÐÑ¡”±¥¡Ð‘¥µÌ…±½¹œÑ¡”‘¥ÍÑ…¹”½˜Ñ¡”±¥¡Ð¸%¸½¹Ñ•áÐ½˜($$€¨Á¡åÍ¥…±±äµ½ÉÉ•ÐÉ•¹‘•É¥¹œÑ¡”‘•™…Õ±ÐÙ…±Õ”Í¡½Õ±¹½Ð‰”¡…¹•¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€È($$€¨¼($%Ñ¡¥Ì¹‘•…ä€ô‘•…äì(($$¼¨¨($$€¨Q¡¥ÌÁÉ½Á•ÉÑä¡½±‘ÌÑ¡”±¥¡ÐÌÍ¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸¸($$€¨($$€¨ÑåÁ”íA½¥¹Ñ1¥¡ÑM¡…‘½Ýô($$€¨¼($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•ÜA½¥¹Ñ1¥¡ÑM¡…‘½Ü ¤ì((%ô(($¼¨¨($€¨Q¡”±¥¡ÐÌÁ½Ý•È¸A½Ý•È¥ÌÑ¡”±Õµ¥¹½ÕÌÁ½Ý•È½˜Ñ¡”±¥¡Ðµ•…ÍÕÉ•¥¸±Õµ•¹Ì€¡±´¤¸($€¨¡…¹¥¹œÑ¡”Á½Ý•ÈÝ¥±°…±Í¼¡…¹”Ñ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä¸($€¨($€¨ÑåÁ”í¹Õµ‰•Éô($€¨¼(%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤($$¼¼™½È…¸¥Í½ÑÉ½Á¥Œ±¥¡ÐÍ½ÕÉ”°±Õµ¥¹½ÕÌÁ½Ý•È€¡±´¤€ô€Ðƒ> ±Õµ¥¹½ÕÌ¥¹Ñ•¹Í¥Ñä€¡¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨€Ð€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼€ €Ð€¨5…Ñ ¹A$€¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ôÍ½ÕÉ”¹‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹‘•…ä€ôÍ½ÕÉ”¹‘•…äì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨…µ•É„Ñ¡…ÐÕÍ•Ìm½ÉÑ¡½É…Á¡¥ŒÁÉ½©•Ñ¥½¹uí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½=ÉÑ¡½É…Á¡¥}ÁÉ½©•Ñ¥½¹ô¸(€¨(€¨%¸Ñ¡¥ÌÁÉ½©•Ñ¥½¸µ½‘”°…¸½‰©•ÐÌÍ¥é”¥¸Ñ¡”É•¹‘•É•¥µ…”ÍÑ…åÌ(€¨½¹ÍÑ…¹ÐÉ•…É‘±•ÍÌ½˜¥ÑÌ‘¥ÍÑ…¹”™É½´Ñ¡”…µ•É„¸Q¡¥Ì…¸‰”ÕÍ•™Õ°(€¨™½ÈÉ•¹‘•É¥¹œ€ÉÍ•¹•Ì…¹U$•±•µ•¹ÑÌ°…µ½¹ÍÐ½Ñ¡•ÈÑ¡¥¹Ì¸(€¨(€¨©Ì(€¨½¹ÍÐ…µ•É„€ô¹•ÜQ!I¹=ÉÑ¡½É…Á¡¥…µ•É„ Ý¥‘Ñ €¼€´€È°Ý¥‘Ñ €¼€È°¡•¥¡Ð€¼€È°¡•¥¡Ð€¼€´€È°€Ä°€ÄÀÀÀ€¤ì(€¨Í•¹”¹…‘ …µ•É„€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ…µ•É„(€¨¼)±…ÍÌ=ÉÑ¡½É…Á¡¥…µ•É„•áÑ•¹‘Ì…µ•É„ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü½ÉÑ¡½É…Á¡¥Œ…µ•É„¸($€¨($€¨Á…É…´í¹Õµ‰•Éôm±•™Ðô´Åt€´Q¡”±•™ÐÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($€¨Á…É…´í¹Õµ‰•ÉômÉ¥¡ÐôÅt€´Q¡”É¥¡ÐÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($€¨Á…É…´í¹Õµ‰•ÉômÑ½ÀôÅt€´Q¡”Ñ½ÀÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($€¨Á…É…´í¹Õµ‰•Éôm‰½ÑÑ½´ô´Åt€´Q¡”‰½ÑÑ½´Á±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($€¨Á…É…´í¹Õµ‰•Éôm¹•…ÈôÀ¸Åt€´Q¡”…µ•É„Ì¹•…ÈÁ±…¹”¸($€¨Á…É…´í¹Õµ‰•Éôm™…ÈôÈÀÀÁt€´Q¡”…µ•É„Ì™…ÈÁ±…¹”¸($€¨¼(%½¹ÍÑÉÕÑ½È ±•™Ð€ô€´Ä°É¥¡Ð€ô€Ä°Ñ½À€ô€Ä°‰½ÑÑ½´€ô€´Ä°¹•…È€ô€À¸Ä°™…È€ô€ÈÀÀÀ€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í=ÉÑ¡½É…Á¡¥…µ•É„€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€=ÉÑ¡½É…Á¡¥…µ•É„œì(($$¼¨¨($$€¨Q¡”é½½´™…Ñ½È½˜Ñ¡”…µ•É„¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹é½½´€ô€Äì(($$¼¨¨($$€¨I•ÁÉ•Í•¹ÑÌÑ¡”™ÉÕÍÑÕ´Ý¥¹‘½ÜÍÁ•¥™¥…Ñ¥½¸¸Q¡¥ÌÁÉ½Á•ÉÑäÍ¡½Õ±¹½Ð‰”•‘¥Ñ•($$€¨‘¥É•Ñ±ä‰ÕÐÙ¥„í±¥¹¬A•ÉÍÁ•Ñ¥Ù•…µ•É„Í•ÑY¥•Ý=™™Í•Ñô…¹í±¥¹¬A•ÉÍÁ•Ñ¥Ù•…µ•É„±•…ÉY¥•Ý=™™Í•Ñô¸($$€¨($$€¨ÑåÁ”ìý=‰©•Ñô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹Ù¥•Ü€ô¹Õ±°ì(($$¼¨¨($$€¨Q¡”±•™ÐÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€´Ä($$€¨¼($%Ñ¡¥Ì¹±•™Ð€ô±•™Ðì(($$¼¨¨($$€¨Q¡”É¥¡ÐÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹É¥¡Ð€ôÉ¥¡Ðì(($$¼¨¨($$€¨Q¡”Ñ½ÀÁ±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Ñ½À€ôÑ½Àì(($$¼¨¨($$€¨Q¡”‰½ÑÑ½´Á±…¹”½˜Ñ¡”…µ•É„Ì™ÉÕÍÑÕ´¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€´Ä($$€¨¼($%Ñ¡¥Ì¹‰½ÑÑ½´€ô‰½ÑÑ½´ì(($$¼¨¨($$€¨Q¡”…µ•É„Ì¹•…ÈÁ±…¹”¸Q¡”Ù…±¥É…¹”¥ÌÉ•…Ñ•ÈÑ¡…¸€Á€($$€¨…¹±•ÍÌÑ¡…¸Ñ¡”ÕÉÉ•¹ÐÙ…±Õ”½˜í±¥¹¬=ÉÑ¡½É…Á¡¥…µ•É„™…Éô¸($$€¨($$€¨9½Ñ”Ñ¡…Ð°Õ¹±¥­”™½ÈÑ¡”í±¥¹¬A•ÉÍÁ•Ñ¥Ù•…µ•É…ô°€Á€¥Ì„($$€¨Ù…±¥Ù…±Õ”™½È…¸½ÉÑ¡½É…Á¡¥Œ…µ•É„Ì¹•…ÈÁ±…¹”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À¸Ä($$€¨¼($%Ñ¡¥Ì¹¹•…È€ô¹•…Èì(($$¼¨¨($$€¨Q¡”…µ•É„Ì™…ÈÁ±…¹”¸5ÕÍÐ‰”É•…Ñ•ÈÑ¡…¸Ñ¡”($$€¨ÕÉÉ•¹ÐÙ…±Õ”½˜í±¥¹¬=ÉÑ¡½É…Á¡¥…µ•É„¹•…Éô¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€ÈÀÀÀ($$€¨¼($%Ñ¡¥Ì¹™…È€ô™…Èì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹±•™Ð€ôÍ½ÕÉ”¹±•™Ðì($%Ñ¡¥Ì¹É¥¡Ð€ôÍ½ÕÉ”¹É¥¡Ðì($%Ñ¡¥Ì¹Ñ½À€ôÍ½ÕÉ”¹Ñ½Àì($%Ñ¡¥Ì¹‰½ÑÑ½´€ôÍ½ÕÉ”¹‰½ÑÑ½´ì($%Ñ¡¥Ì¹¹•…È€ôÍ½ÕÉ”¹¹•…Èì($%Ñ¡¥Ì¹™…È€ôÍ½ÕÉ”¹™…Èì(($%Ñ¡¥Ì¹é½½´€ôÍ½ÕÉ”¹é½½´ì($%Ñ¡¥Ì¹Ù¥•Ü€ôÍ½ÕÉ”¹Ù¥•Ü€ôôô¹Õ±°€ü¹Õ±°€è=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Ù¥•Ü€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌ…¸½™™Í•Ð¥¸„±…É•È™ÉÕÍÑÕ´¸Q¡¥Ì¥ÌÕÍ•™Õ°™½ÈµÕ±Ñ¤µÝ¥¹‘½Ü½È($€¨µÕ±Ñ¤µµ½¹¥Ñ½È½µÕ±Ñ¤µµ…¡¥¹”Í•ÑÕÁÌ¸($€¨($€¨Á…É…´í¹Õµ‰•Éô™Õ±±]¥‘Ñ €´Q¡”™Õ±°Ý¥‘Ñ ½˜µÕ±Ñ¥Ù¥•ÜÍ•ÑÕÀ¸($€¨Á…É…´í¹Õµ‰•Éô™Õ±±!•¥¡Ð€´Q¡”™Õ±°¡•¥¡Ð½˜µÕ±Ñ¥Ù¥•ÜÍ•ÑÕÀ¸($€¨Á…É…´í¹Õµ‰•Éôà€´Q¡”¡½É¥é½¹Ñ…°½™™Í•Ð½˜Ñ¡”ÍÕ‰…µ•É„¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”Ù•ÉÑ¥…°½™™Í•Ð½˜Ñ¡”ÍÕ‰…µ•É„¸($€¨Á…É…´í¹Õµ‰•ÉôÝ¥‘Ñ €´Q¡”Ý¥‘Ñ ½˜ÍÕ‰…µ•É„¸($€¨Á…É…´í¹Õµ‰•Éô¡•¥¡Ð€´Q¡”¡•¥¡Ð½˜ÍÕ‰…µ•É„¸($€¨Í•”í±¥¹¬A•ÉÍÁ•Ñ¥Ù•…µ•É„Í•ÑY¥•Ý=™™Í•Ñô($€¨¼(%Í•ÑY¥•Ý=™™Í•Ð ™Õ±±]¥‘Ñ °™Õ±±!•¥¡Ð°à°ä°Ý¥‘Ñ °¡•¥¡Ð€¤ì(($%¥˜€ Ñ¡¥Ì¹Ù¥•Ü€ôôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹Ù¥•Ü€ôì($$$%•¹…‰±•èÑÉÕ”°($$$%™Õ±±]¥‘Ñ è€Ä°($$$%™Õ±±!•¥¡Ðè€Ä°($$$%½™™Í•Ñ`è€À°($$$%½™™Í•Ñdè€À°($$$%Ý¥‘Ñ è€Ä°($$$%¡•¥¡Ðè€Ä($$%ôì(($%ô(($%Ñ¡¥Ì¹Ù¥•Ü¹•¹…‰±•€ôÑÉÕ”ì($%Ñ¡¥Ì¹Ù¥•Ü¹™Õ±±]¥‘Ñ €ô™Õ±±]¥‘Ñ ì($%Ñ¡¥Ì¹Ù¥•Ü¹™Õ±±!•¥¡Ð€ô™Õ±±!•¥¡Ðì($%Ñ¡¥Ì¹Ù¥•Ü¹½™™Í•Ñ`€ôàì($%Ñ¡¥Ì¹Ù¥•Ü¹½™™Í•Ñd€ôäì($%Ñ¡¥Ì¹Ù¥•Ü¹Ý¥‘Ñ €ôÝ¥‘Ñ ì($%Ñ¡¥Ì¹Ù¥•Ü¹¡•¥¡Ð€ô¡•¥¡Ðì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì((%ô(($¼¨¨($€¨I•µ½Ù•ÌÑ¡”Ù¥•Ü½™™Í•Ð™É½´Ñ¡”ÁÉ½©•Ñ¥½¸µ…ÑÉ¥à¸($€¨¼(%±•…ÉY¥•Ý=™™Í•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹Ù¥•Ü€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹Ù¥•Ü¹•¹…‰±•€ô™…±Í”ì(($%ô(($%Ñ¡¥Ì¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”…µ•É„ÌÁÉ½©•Ñ¥½¸µ…ÑÉ¥à¸5ÕÍÐ‰”…±±•…™Ñ•È…¹ä¡…¹”½˜($€¨…µ•É„ÁÉ½Á•ÉÑ¥•Ì¸($€¨¼(%ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%½¹ÍÐ‘à€ô€ Ñ¡¥Ì¹É¥¡Ð€´Ñ¡¥Ì¹±•™Ð€¤€¼€ €È€¨Ñ¡¥Ì¹é½½´€¤ì($%½¹ÍÐ‘ä€ô€ Ñ¡¥Ì¹Ñ½À€´Ñ¡¥Ì¹‰½ÑÑ½´€¤€¼€ €È€¨Ñ¡¥Ì¹é½½´€¤ì($%½¹ÍÐà€ô€ Ñ¡¥Ì¹É¥¡Ð€¬Ñ¡¥Ì¹±•™Ð€¤€¼€Èì($%½¹ÍÐä€ô€ Ñ¡¥Ì¹Ñ½À€¬Ñ¡¥Ì¹‰½ÑÑ½´€¤€¼€Èì(($%±•Ð±•™Ð€ôà€´‘àì($%±•ÐÉ¥¡Ð€ôà€¬‘àì($%±•ÐÑ½À€ôä€¬‘äì($%±•Ð‰½ÑÑ½´€ôä€´‘äì(($%¥˜€ Ñ¡¥Ì¹Ù¥•Ü€„ôô¹Õ±°€˜˜Ñ¡¥Ì¹Ù¥•Ü¹•¹…‰±•€¤ì(($$%½¹ÍÐÍ…±•\€ô€ Ñ¡¥Ì¹É¥¡Ð€´Ñ¡¥Ì¹±•™Ð€¤€¼Ñ¡¥Ì¹Ù¥•Ü¹™Õ±±]¥‘Ñ €¼Ñ¡¥Ì¹é½½´ì($$%½¹ÍÐÍ…±• €ô€ Ñ¡¥Ì¹Ñ½À€´Ñ¡¥Ì¹‰½ÑÑ½´€¤€¼Ñ¡¥Ì¹Ù¥•Ü¹™Õ±±!•¥¡Ð€¼Ñ¡¥Ì¹é½½´ì(($$%±•™Ð€¬ôÍ…±•\€¨Ñ¡¥Ì¹Ù¥•Ü¹½™™Í•Ñ`ì($$%É¥¡Ð€ô±•™Ð€¬Í…±•\€¨Ñ¡¥Ì¹Ù¥•Ü¹Ý¥‘Ñ ì($$%Ñ½À€´ôÍ…±• €¨Ñ¡¥Ì¹Ù¥•Ü¹½™™Í•Ñdì($$%‰½ÑÑ½´€ôÑ½À€´Í…±• €¨Ñ¡¥Ì¹Ù¥•Ü¹¡•¥¡Ðì(($%ô(($%Ñ¡¥Ì¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹µ…­•=ÉÑ¡½É…Á¡¥Œ ±•™Ð°É¥¡Ð°Ñ½À°‰½ÑÑ½´°Ñ¡¥Ì¹¹•…È°Ñ¡¥Ì¹™…È°Ñ¡¥Ì¹½½É‘¥¹…Ñ•MåÍÑ•´°Ñ¡¥Ì¹É•Ù•ÉÍ•‘•ÁÑ €¤ì(($%Ñ¡¥Ì¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥á%¹Ù•ÉÍ”¹½Áä Ñ¡¥Ì¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤¹¥¹Ù•ÉÐ ¤ì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹é½½´€ôÑ¡¥Ì¹é½½´ì($%‘…Ñ„¹½‰©•Ð¹±•™Ð€ôÑ¡¥Ì¹±•™Ðì($%‘…Ñ„¹½‰©•Ð¹É¥¡Ð€ôÑ¡¥Ì¹É¥¡Ðì($%‘…Ñ„¹½‰©•Ð¹Ñ½À€ôÑ¡¥Ì¹Ñ½Àì($%‘…Ñ„¹½‰©•Ð¹‰½ÑÑ½´€ôÑ¡¥Ì¹‰½ÑÑ½´ì($%‘…Ñ„¹½‰©•Ð¹¹•…È€ôÑ¡¥Ì¹¹•…Èì($%‘…Ñ„¹½‰©•Ð¹™…È€ôÑ¡¥Ì¹™…Èì(($%¥˜€ Ñ¡¥Ì¹Ù¥•Ü€„ôô¹Õ±°€¤‘…Ñ„¹½‰©•Ð¹Ù¥•Ü€ô=‰©•Ð¹…ÍÍ¥¸ íô°Ñ¡¥Ì¹Ù¥•Ü€¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌÑ¡”Í¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸½˜‘¥É•Ñ¥½¹…°±¥¡ÑÌ¸(€¨(€¨…Õµ•¹ÑÌ1¥¡ÑM¡…‘½Ü(€¨¼)±…ÍÌ¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‘¥É•Ñ¥½¹…°±¥¡ÐÍ¡…‘½Ü¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•Ü=ÉÑ¡½É…Á¡¥…µ•É„ €´Ô°€Ô°€Ô°€´Ô°€À¸Ô°€ÔÀÀ€¤€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì((%ô()ô((¼¨¨(€¨±¥¡ÐÑ¡…Ð•ÑÌ•µ¥ÑÑ•¥¸„ÍÁ•¥™¥Œ‘¥É•Ñ¥½¸¸Q¡¥Ì±¥¡ÐÝ¥±°‰•¡…Ù”(€¨…ÌÑ¡½Õ ¥Ð¥Ì¥¹™¥¹¥Ñ•±ä™…È…Ý…ä…¹Ñ¡”É…åÌÁÉ½‘Õ•™É½´¥Ð…É”…±°(€¨Á…É…±±•°¸Q¡”½µµ½¸ÕÍ”…Í”™½ÈÑ¡¥Ì¥ÌÑ¼Í¥µÕ±…Ñ”‘…å±¥¡ÐìÑ¡”ÍÕ¸¥Ì(€¨™…È•¹½Õ …Ý…äÑ¡…Ð¥ÑÌÁ½Í¥Ñ¥½¸…¸‰”½¹Í¥‘•É•Ñ¼‰”¥¹™¥¹¥Ñ”°…¹(€¨…±°±¥¡ÐÉ…åÌ½µ¥¹œ™É½´¥Ð…É”Á…É…±±•°¸(€¨(€¨½µµ½¸Á½¥¹Ð½˜½¹™ÕÍ¥½¸™½È‘¥É•Ñ¥½¹…°±¥¡ÑÌ¥ÌÑ¡…ÐÍ•ÑÑ¥¹œÑ¡”(€¨É½Ñ…Ñ¥½¸¡…Ì¹¼•™™•Ð¸Q¡¥Ì¥Ì‰•…ÕÍ”Ñ¡É•”¹©ÌÌ¥É•Ñ¥½¹…±1¥¡Ð¥ÌÑ¡”(€¨•ÅÕ¥Ù…±•¹ÐÑ¼Ý¡…Ð¥Ì½™Ñ•¸…±±•„€Q…É•Ð¥É•Ð1¥¡Ðœ¥¸½Ñ¡•È(€¨…ÁÁ±¥…Ñ¥½¹Ì¸(€¨(€¨Q¡¥Ìµ•…¹ÌÑ¡…Ð¥ÑÌ‘¥É•Ñ¥½¸¥Ì…±Õ±…Ñ•…ÌÁ½¥¹Ñ¥¹œ™É½´Ñ¡”±¥¡ÐÌ(€¨í±¥¹¬=‰©•ÐÍÁ½Í¥Ñ¥½¹ôÑ¼Ñ¡”í±¥¹¬¥É•Ñ¥½¹…±1¥¡ÐÑ…É•ÑôÁ½Í¥Ñ¥½¸(€¨€¡…Ì½ÁÁ½Í•Ñ¼„€É•”¥É•Ð1¥¡ÐœÑ¡…Ð©ÕÍÐ¡…Ì„É½Ñ…Ñ¥½¸(€¨½µÁ½¹•¹Ð¤¸(€¨(€¨Q¡¥Ì±¥¡Ð…¸…ÍÐÍ¡…‘½ÝÌ€´Í•”Ñ¡”í±¥¹¬¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ýô™½È‘•Ñ…¥±Ì¸(€¨(€¨©Ì(€¨€¼¼]¡¥Ñ”‘¥É•Ñ¥½¹…°±¥¡Ð…Ð¡…±˜¥¹Ñ•¹Í¥ÑäÍ¡¥¹¥¹œ™É½´Ñ¡”Ñ½À¸(€¨½¹ÍÐ‘¥É•Ñ¥½¹…±1¥¡Ð€ô¹•ÜQ!I¹¥É•Ñ¥½¹…±1¥¡Ð €Áá™™™™™˜°€À¸Ô€¤ì(€¨Í•¹”¹…‘ ‘¥É•Ñ¥½¹…±1¥¡Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌ¥É•Ñ¥½¹…±1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‘¥É•Ñ¥½¹…°±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í¥É•Ñ¥½¹…±1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€¥É•Ñ¥½¹…±1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($$¼¨¨($$€¨Q¡”‘¥É•Ñ¥½¹…°±¥¡ÐÁ½¥¹ÑÌ™É½´¥ÑÌÁ½Í¥Ñ¥½¸Ñ¼Ñ¡”($$€¨Ñ…É•ÐÌÁ½Í¥Ñ¥½¸¸($$€¨($$€¨½ÈÑ¡”Ñ…É•ÐÌÁ½Í¥Ñ¥½¸Ñ¼‰”¡…¹•Ñ¼…¹åÑ¡¥¹œ½Ñ¡•È($$€¨Ñ¡…¸Ñ¡”‘•™…Õ±Ð°¥ÐµÕÍÐ‰”…‘‘•Ñ¼Ñ¡”Í•¹”¸($$€¨($$€¨%Ð¥Ì…±Í¼Á½ÍÍ¥‰±”Ñ¼Í•ÐÑ¡”Ñ…É•ÐÑ¼‰”…¹½Ñ¡•È€Í½‰©•Ð($$€¨¥¸Ñ¡”Í•¹”¸Q¡”±¥¡ÐÝ¥±°¹½ÜÑÉ…¬Ñ¡”Ñ…É•Ð½‰©•Ð¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍô($$€¨¼($%Ñ¡¥Ì¹Ñ…É•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($$¼¨¨($$€¨Q¡¥ÌÁÉ½Á•ÉÑä¡½±‘ÌÑ¡”±¥¡ÐÌÍ¡…‘½Ü½¹™¥ÕÉ…Ñ¥½¸¸($$€¨($$€¨ÑåÁ”í¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ýô($$€¨¼($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•Ü¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü ¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ð€ôÍ½ÕÉ”¹Ñ…É•Ð¹±½¹” ¤ì($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨Q¡¥Ì±¥¡Ð±½‰…±±ä¥±±Õµ¥¹…Ñ•Ì…±°½‰©•ÑÌ¥¸Ñ¡”Í•¹”•ÅÕ…±±ä¸(€¨(€¨%Ð…¹¹½Ð‰”ÕÍ•Ñ¼…ÍÐÍ¡…‘½ÝÌ…Ì¥Ð‘½•Ì¹½Ð¡…Ù”„‘¥É•Ñ¥½¸¸(€¨(€¨©Ì(€¨½¹ÍÐ±¥¡Ð€ô¹•ÜQ!I¹µ‰¥•¹Ñ1¥¡Ð €ÁàÐÀÐÀÐÀ€¤ì€¼¼Í½™ÐÝ¡¥Ñ”±¥¡Ð(€¨Í•¹”¹…‘ ±¥¡Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌµ‰¥•¹Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…µ‰¥•¹Ð±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Íµ‰¥•¹Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€µ‰¥•¹Ñ1¥¡Ðœì((%ô()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ•µ¥ÑÌ±¥¡ÐÕ¹¥™½Éµ±ä…É½ÍÌÑ¡”™…”„É•Ñ…¹Õ±…ÈÁ±…¹”¸(€¨Q¡¥Ì±¥¡ÐÑåÁ”…¸‰”ÕÍ•Ñ¼Í¥µÕ±…Ñ”±¥¡ÐÍ½ÕÉ•ÌÍÕ …Ì‰É¥¡Ð(€¨Ý¥¹‘½ÝÌ½ÈÍÑÉ¥À±¥¡Ñ¥¹œ¸(€¨(€¨%µÁ½ÉÑ…¹Ð9½Ñ•Ìè(€¨(€¨€´Q¡•É”¥Ì¹¼Í¡…‘½ÜÍÕÁÁ½ÉÐ¸(€¨€´=¹±äA	Hµ…Ñ•É¥…±Ì…É”ÍÕÁÁ½ÉÑ•¸(€¨€´e½Ô¡…Ù”Ñ¼¥¹±Õ‘”I•ÑÉ•…1¥¡ÑU¹¥™½ÉµÍ1¥‰€€¡]•‰1I•¹‘•É•É€¤½ÈI•ÑÉ•…1¥¡ÑQ•áÑÕÉ•Í1¥‰€€¡]•‰AUI•¹‘•É•É€¤(€¨¥¹Ñ¼å½ÕÈ…ÁÀ…¹¥¹¥ÐÑ¡”Õ¹¥™½ÉµÌ½Ñ•áÑÕÉ•Ì¸(€¨(€¨©Ì(€¨I•ÑÉ•…1¥¡ÑU¹¥™½ÉµÍ1¥ˆ¹¥¹¥Ð ¤ì€¼¼½¹±äÉ•±•Ù…¹Ð™½È]•‰1I•¹‘•É•È(€¨Q!I¹I•ÑÉ•…1¥¡Ñ9½‘”¹Í•Ñ1Q I•ÑÉ•…1¥¡ÑQ•áÑÕÉ•Í1¥ˆ¹¥¹¥Ð ¤€¤ì€¼¼€½¹±äÉ•±•Ù…¹Ð™½È]•‰AUI•¹‘•É•È(€¨(€¨½¹ÍÐ¥¹Ñ•¹Í¥Ñä€ô€Äì½¹ÍÐÝ¥‘Ñ €ô€ÄÀì½¹ÍÐ¡•¥¡Ð€ô€ÄÀì(€¨½¹ÍÐÉ•Ñ1¥¡Ð€ô¹•ÜQ!I¹I•ÑÉ•…1¥¡Ð €Áá™™™™™˜°¥¹Ñ•¹Í¥Ñä°Ý¥‘Ñ °¡•¥¡Ð€¤ì(€¨É•Ñ1¥¡Ð¹Á½Í¥Ñ¥½¸¹Í•Ð €Ô°€Ô°€À€¤ì(€¨É•Ñ1¥¡Ð¹±½½­Ð €À°€À°€À€¤ì(€¨Í•¹”¹…‘ É•Ñ1¥¡Ð€¤(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌI•ÑÉ•…1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…É•„±¥¡Ð¸($€¨($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™™™™t€´Q¡”±¥¡ÐÌ½±½È¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨Á…É…´í¹Õµ‰•ÉômÝ¥‘Ñ ôÄÁt€´Q¡”Ý¥‘Ñ ½˜Ñ¡”±¥¡Ð¸($€¨Á…É…´í¹Õµ‰•Éôm¡•¥¡ÐôÄÁt€´Q¡”¡•¥¡Ð½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°Ý¥‘Ñ €ô€ÄÀ°¡•¥¡Ð€ô€ÄÀ€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍI•ÑÉ•…1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€I•ÑÉ•…1¥¡Ðœì(($$¼¨¨($$€¨Q¡”Ý¥‘Ñ ½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€ÄÀ($$€¨¼($%Ñ¡¥Ì¹Ý¥‘Ñ €ôÝ¥‘Ñ ì(($$¼¨¨($$€¨Q¡”¡•¥¡Ð½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€ÄÀ($$€¨¼($%Ñ¡¥Ì¹¡•¥¡Ð€ô¡•¥¡Ðì((%ô(($¼¨¨($€¨Q¡”±¥¡ÐÌÁ½Ý•È¸A½Ý•È¥ÌÑ¡”±Õµ¥¹½ÕÌÁ½Ý•È½˜Ñ¡”±¥¡Ðµ•…ÍÕÉ•¥¸±Õµ•¹Ì€¡±´¤¸($€¨¡…¹¥¹œÑ¡”Á½Ý•ÈÝ¥±°…±Í¼¡…¹”Ñ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä¸($€¨($€¨ÑåÁ”í¹Õµ‰•Éô($€¨¼(%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸¹¥ÑÌ¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨Ñ¡¥Ì¹Ý¥‘Ñ €¨Ñ¡¥Ì¹¡•¥¡Ð€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸¹¥ÑÌ¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼€ Ñ¡¥Ì¹Ý¥‘Ñ €¨Ñ¡¥Ì¹¡•¥¡Ð€¨5…Ñ ¹A$€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥‘Ñ ì($%Ñ¡¥Ì¹¡•¥¡Ð€ôÍ½ÕÉ”¹¡•¥¡Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹Ý¥‘Ñ €ôÑ¡¥Ì¹Ý¥‘Ñ ì($%‘…Ñ„¹½‰©•Ð¹¡•¥¡Ð€ôÑ¡¥Ì¹¡•¥¡Ðì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„Ñ¡¥Éµ½É‘•ÈÍÁ¡•É¥…°¡…Éµ½¹¥Ì€¡M ¤¸1¥¡ÐÁÉ½‰•ÌÕÍ”Ñ¡¥Ì±…ÍÌ(€¨Ñ¼•¹½‘”±¥¡Ñ¥¹œ¥¹™½Éµ…Ñ¥½¸¸(€¨(€¨€´AÉ¥µ…ÉäÉ•™•É•¹”èí±¥¹¬¡ÑÑÁÌè¼½É…Á¡¥Ì¹ÍÑ…¹™½É¹•‘Ô½Á…Á•ÉÌ½•¹Ùµ…À½•¹Ùµ…À¹Á‘™ô(€¨€´M•½¹‘…ÉäÉ•™•É•¹”èí±¥¹¬¡ÑÑÁÌè¼½ÝÝÜ¹ÁÁÍ±½…¸¹½Éœ½ÁÕ‰±¥…Ñ¥½¹Ì½MÑÕÁ¥‘M ÌØ¹Á‘™ô(€¨¼)±…ÍÌMÁ¡•É¥…±!…Éµ½¹¥ÌÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍMÁ¡•É¥…±!…Éµ½¹¥ÌÌ€ôÑÉÕ”ì(($$¼¨¨($$€¨¸…ÉÉ…ä¡½±‘¥¹œÑ¡”€ ä¤M ½•™™¥¥•¹ÑÌ¸($$€¨($$€¨ÑåÁ”íÉÉ…äñY•Ñ½ÈÌùô($$€¨¼($%Ñ¡¥Ì¹½•™™¥¥•¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÌ¹ÁÕÍ  ¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ô((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸M ½•™™¥¥•¹ÑÌÑ¼Ñ¡¥Ì¥¹ÍÑ…¹”‰ä½Áå¥¹œ($€¨Ñ¡”Ù…±Õ•Ì¸($€¨($€¨Á…É…´íÉÉ…äñY•Ñ½ÈÌùô½•™™¥¥•¹ÑÌ€´Q¡”M ½•™™¥¥•¹ÑÌ¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%Í•Ð ½•™™¥¥•¹ÑÌ€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹½Áä ½•™™¥¥•¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌ…±°M ½•™™¥¥•¹ÑÌÑ¼€Á€¸($€¨($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%é•É¼ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹Í•Ð €À°€À°€À€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”É…‘¥…¹”¥¸Ñ¡”‘¥É•Ñ¥½¸½˜Ñ¡”¥Ù•¸¹½Éµ…°¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô¹½Éµ…°€´Q¡”¹½Éµ…°Ù•Ñ½È€¡…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ ¤($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”É…‘¥…¹”¸($€¨¼(%•ÑÐ ¹½Éµ…°°Ñ…É•Ð€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($%½¹ÍÐ½•™˜€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($$¼¼‰…¹€À($%Ñ…É•Ð¹½Áä ½•™™l€Àt€¤¹µÕ±Ñ¥Á±åM…±…È €À¸ÈàÈÀäÔ€¤ì(($$¼¼‰…¹€Ä($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ät°€À¸ÐààØÀÌ€¨ä€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Èt°€À¸ÐààØÀÌ€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ìt°€À¸ÐààØÀÌ€¨à€¤ì(($$¼¼‰…¹€È($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ðt°€Ä¸ÀäÈÔÐà€¨€ à€¨ä€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ôt°€Ä¸ÀäÈÔÐà€¨€ ä€¨è€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Øt°€À¸ÌÄÔÌäÈ€¨€ €Ì¸À€¨è€¨è€´€Ä¸À€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Üt°€Ä¸ÀäÈÔÐà€¨€ à€¨è€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€àt°€À¸ÔÐØÈÜÐ€¨€ à€¨à€´ä€¨ä€¤€¤ì(($%É•ÑÕÉ¸Ñ…É•Ðì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”¥ÉÉ…‘¥…¹”€¡É…‘¥…¹”½¹Ù½±Ù•Ý¥Ñ ½Í¥¹”±½‰”¤¥¸Ñ¡”($€¨‘¥É•Ñ¥½¸½˜Ñ¡”¥Ù•¸¹½Éµ…°¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô¹½Éµ…°€´Q¡”¹½Éµ…°Ù•Ñ½È€¡…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ ¤($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”¥ÉÉ…‘¥…¹”¸($€¨¼(%•Ñ%ÉÉ…‘¥…¹•Ð ¹½Éµ…°°Ñ…É•Ð€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($%½¹ÍÐ½•™˜€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($$¼¼‰…¹€À($%Ñ…É•Ð¹½Áä ½•™™l€Àt€¤¹µÕ±Ñ¥Á±åM…±…È €À¸ààØÈÈÜ€¤ì€¼¼ƒ> €¨€À¸ÈàÈÀäÔ(($$¼¼‰…¹€Ä($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ät°€È¸À€¨€À¸ÔÄÄØØÐ€¨ä€¤ì€¼¼€ €È€¨ƒ> €¼€Ì€¤€¨€À¸ÐààØÀÌ($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Èt°€È¸À€¨€À¸ÔÄÄØØÐ€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ìt°€È¸À€¨€À¸ÔÄÄØØÐ€¨à€¤ì(($$¼¼‰…¹€È($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ðt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨à€¨ä€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€Ä¸ÀäÈÔÐà($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ôt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨ä€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Øt°€À¸ÜÐÌÄÈÔ€¨è€¨è€´€À¸ÈÐÜÜÀà€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€À¸ÌÄÔÌäÈ€¨€Ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Üt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨à€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€àt°€À¸ÐÈäÀÐÌ€¨€ à€¨à€´ä€¨ä€¤€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€À¸ÔÐØÈÜÐ(($%É•ÑÕÉ¸Ñ…É•Ðì((%ô(($¼¨¨($€¨‘‘ÌÑ¡”¥Ù•¸M Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”M Ñ¼…‘¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%…‘ Í €¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹…‘ Í ¹½•™™¥¥•¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½¹Ù•¹¥•¹”µ•Ñ¡½™½ÈÁ•É™½Éµ¥¹œí±¥¹¬MÁ¡•É¥…±!…Éµ½¹¥ÌÌ…‘‘ô…¹($€¨í±¥¹¬MÁ¡•É¥…±!…Éµ½¹¥ÌÌÍ…±•ô…Ð½¹”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”M Ñ¼…‘¸($€¨Á…É…´í¹Õµ‰•ÉôÌ€´Q¡”Í…±”™…Ñ½È¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%…‘‘M…±•‘M  Í °Ì€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹…‘‘M…±•‘Y•Ñ½È Í ¹½•™™¥¥•¹ÑÍl¤t°Ì€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M…±•ÌÑ¡¥ÌM ‰äÑ¡”¥Ù•¸Í…±”™…Ñ½È¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÌ€´Q¡”Í…±”™…Ñ½È¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%Í…±” Ì€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹µÕ±Ñ¥Á±åM…±…È Ì€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨1¥¹•…È¥¹Ñ•ÉÁ½±…Ñ•Ì‰•ÑÝ••¸Ñ¡”¥Ù•¸M …¹Ñ¡¥Ì¥¹ÍÑ…¹”‰äÑ¡”¥Ù•¸($€¨…±Á¡„™…Ñ½È¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”M Ñ¼¥¹Ñ•ÉÁ½±…Ñ”Ý¥Ñ ¸($€¨Á…É…´í¹Õµ‰•Éô…±Á¡„€´Q¡”…±Á¡„™…Ñ½È¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%±•ÉÀ Í °…±Á¡„€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹±•ÉÀ Í ¹½•™™¥¥•¹ÑÍl¤t°…±Á¡„€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”ÍÁ¡•É¥…°¡…Éµ½¹¥ÌÑ¼Ñ•ÍÐ™½È•ÅÕ…±¥Ñä¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨¼(%•ÅÕ…±Ì Í €¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%¥˜€ €„Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹•ÅÕ…±Ì Í ¹½•™™¥¥•¹ÑÍl¤t€¤€¤ì(($$$%É•ÑÕÉ¸™…±Í”ì(($$%ô(($%ô(($%É•ÑÕÉ¸ÑÉÕ”ì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸ÍÁ¡•É¥…°¡…Éµ½¹¥ÌÑ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”ÍÁ¡•É¥…°¡…Éµ½¹¥ÌÑ¼½Áä¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¡…Éµ½¹¥Ì¸($€¨¼(%½Áä Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•Ð Í ¹½•™™¥¥•¹ÑÌ€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•ÜÍÁ¡•É¥…°¡…Éµ½¹¥ÌÝ¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”M ½•™™¥¥•¹ÑÌ½˜Ñ¡¥Ì¥¹ÍÑ…¹”™É½´Ñ¡”¥Ù•¸…ÉÉ…ä¸($€¨($€¨Á…É…´íÉÉ…äñ¹Õµ‰•Èùô…ÉÉ…ä€´¸…ÉÉ…ä¡½±‘¥¹œÑ¡”M ½•™™¥¥•¹ÑÌ¸($€¨Á…É…´í¹Õµ‰•Éôm½™™Í•ÐôÁt€´Q¡”…ÉÉ…ä½™™Í•ÐÝ¡•É”Ñ¼ÍÑ…ÉÐ½Áå¥¹œ¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±!…Éµ½¹¥ÌÍô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%™É½µÉÉ…ä …ÉÉ…ä°½™™Í•Ð€ô€À€¤ì(($%½¹ÍÐ½•™™¥¥•¹ÑÌ€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%½•™™¥¥•¹ÑÍl¤t¹™É½µÉÉ…ä …ÉÉ…ä°½™™Í•Ð€¬€ ¤€¨€Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì…¸…ÉÉ…äÝ¥Ñ Ñ¡”M ½•™™¥¥•¹ÑÌ°½È½Á¥•ÌÑ¡•´¥¹Ñ¼Ñ¡”ÁÉ½Ù¥‘•($€¨…ÉÉ…ä¸Q¡”½•™™¥¥•¹ÑÌ…É”É•ÁÉ•Í•¹Ñ•…Ì¹Õµ‰•ÉÌ¸($€¨($€¨Á…É…´íÉÉ…äñ¹Õµ‰•Èùôm…ÉÉ…äõmut€´Q¡”Ñ…É•Ð…ÉÉ…ä¸($€¨Á…É…´í¹Õµ‰•Éôm½™™Í•ÐôÁt€´Q¡”…ÉÉ…ä½™™Í•ÐÝ¡•É”Ñ¼ÍÑ…ÉÐ½Áå¥¹œ¸($€¨É•ÑÕÉ¸íÉÉ…äñ¹Õµ‰•Èùô¸…ÉÉ…äÝ¥Ñ ™±…ÐM ½•™™¥¥•¹ÑÌ¸($€¨¼(%Ñ½ÉÉ…ä …ÉÉ…ä€ômt°½™™Í•Ð€ô€À€¤ì(($%½¹ÍÐ½•™™¥¥•¹ÑÌ€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%½•™™¥¥•¹ÑÍl¤t¹Ñ½ÉÉ…ä …ÉÉ…ä°½™™Í•Ð€¬€ ¤€¨€Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸…ÉÉ…äì((%ô(($¼¨¨($€¨½µÁÕÑ•ÌÑ¡”M ‰…Í¥Ì™½ÈÑ¡”¥Ù•¸¹½Éµ…°Ù•Ñ½È¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô¹½Éµ…°€´Q¡”¹½Éµ…°¸($€¨Á…É…´íÉÉ…äñ¹Õµ‰•ÈùôÍ¡	…Í¥Ì€´Q¡”Ñ…É•Ð…ÉÉ…ä¡½±‘¥¹œÑ¡”M ‰…Í¥Ì¸($€¨¼(%ÍÑ…Ñ¥Œ•Ñ	…Í¥ÍÐ ¹½Éµ…°°Í¡	…Í¥Ì€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($$¼¼‰…¹€À($%Í¡	…Í¥Íl€Àt€ô€À¸ÈàÈÀäÔì(($$¼¼‰…¹€Ä($%Í¡	…Í¥Íl€Ät€ô€À¸ÐààØÀÌ€¨äì($%Í¡	…Í¥Íl€Èt€ô€À¸ÐààØÀÌ€¨èì($%Í¡	…Í¥Íl€Ìt€ô€À¸ÐààØÀÌ€¨àì(($$¼¼‰…¹€È($%Í¡	…Í¥Íl€Ðt€ô€Ä¸ÀäÈÔÐà€¨à€¨äì($%Í¡	…Í¥Íl€Ôt€ô€Ä¸ÀäÈÔÐà€¨ä€¨èì($%Í¡	…Í¥Íl€Øt€ô€À¸ÌÄÔÌäÈ€¨€ €Ì€¨è€¨è€´€Ä€¤ì($%Í¡	…Í¥Íl€Üt€ô€Ä¸ÀäÈÔÐà€¨à€¨èì($%Í¡	…Í¥Íl€àt€ô€À¸ÔÐØÈÜÐ€¨€ à€¨à€´ä€¨ä€¤ì((%ô()ô((¼¨¨(€¨1¥¡ÐÁÉ½‰•Ì…É”…¸…±Ñ•É¹…Ñ¥Ù”Ý…ä½˜…‘‘¥¹œ±¥¡ÐÑ¼„€ÍÍ•¹”¸U¹±¥­”(€¨±…ÍÍ¥…°±¥¡ÐÍ½ÕÉ•Ì€¡”¹œ¸‘¥É•Ñ¥½¹…°°Á½¥¹Ð½ÈÍÁ½Ð±¥¡ÑÌ¤°±¥¡Ð(€¨ÁÉ½‰•Ì‘¼¹½Ð•µ¥Ð±¥¡Ð¸%¹ÍÑ•…Ñ¡•äÍÑ½É”¥¹™½Éµ…Ñ¥½¸…‰½ÕÐ±¥¡Ð(€¨Á…ÍÍ¥¹œÑ¡É½Õ €ÍÍÁ…”¸ÕÉ¥¹œÉ•¹‘•É¥¹œ°Ñ¡”±¥¡ÐÑ¡…Ð¡¥ÑÌ„€Í(€¨½‰©•Ð¥Ì…ÁÁÉ½á¥µ…Ñ•‰äÕÍ¥¹œÑ¡”‘…Ñ„™É½´Ñ¡”±¥¡ÐÁÉ½‰”¸(€¨(€¨1¥¡ÐÁÉ½‰•Ì…É”ÕÍÕ…±±äÉ•…Ñ•™É½´€¡É…‘¥…¹”¤•¹Ù¥É½¹µ•¹Ðµ…ÁÌ¸Q¡”(€¨±…ÍÌí±¥¹¬1¥¡ÑAÉ½‰••¹•É…Ñ½Éô…¸‰”ÕÍ•Ñ¼É•…Ñ”±¥¡ÐÁÉ½‰•Ì™É½´(€¨Õ‰”Ñ•áÑÕÉ•Ì½ÈÉ•¹‘•ÈÑ…É•ÑÌ¸!½Ý•Ù•È°±¥¡Ð•ÍÑ¥µ…Ñ¥½¸‘…Ñ„½Õ±…±Í¼(€¨‰”ÁÉ½Ù¥‘•¥¸½Ñ¡•È™½ÉµÌ”¹œ¸‰ä]•‰aH¸Q¡¥Ì•¹…‰±•ÌÑ¡”É•¹‘•É¥¹œ½˜(€¨…Õµ•¹Ñ•É•…±¥Ñä½¹Ñ•¹ÐÑ¡…ÐÉ•…ÑÌÑ¼É•…°Ý½É±±¥¡Ñ¥¹œ¸(€¨(€¨Q¡”ÕÉÉ•¹ÐÁÉ½‰”¥µÁ±•µ•¹Ñ…Ñ¥½¸¥¸Ñ¡É•”¹©ÌÍÕÁÁ½ÉÑÌÍ¼µ…±±•‘¥™™ÕÍ”(€¨±¥¡ÐÁÉ½‰•Ì¸Q¡¥ÌÑåÁ”½˜±¥¡ÐÁÉ½‰”¥Ì™Õ¹Ñ¥½¹…±±ä•ÅÕ¥Ù…±•¹ÐÑ¼…¸(€¨¥ÉÉ…‘¥…¹”•¹Ù¥É½¹µ•¹Ðµ…À¸(€¨(€¨…Õµ•¹ÑÌ1¥¡Ð(€¨¼)±…ÍÌ1¥¡ÑAÉ½‰”•áÑ•¹‘Ì1¥¡Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±¥¡ÐÁÉ½‰”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±!…Éµ½¹¥ÌÍôÍ €´Q¡”ÍÁ¡•É¥…°¡…Éµ½¹¥ÌÝ¡¥ É•ÁÉ•Í•¹ÑÌ•¹½‘•±¥¡Ñ¥¹œ¥¹™½Éµ…Ñ¥½¸¸($€¨Á…É…´í¹Õµ‰•Éôm¥¹Ñ•¹Í¥ÑäôÅt€´Q¡”±¥¡ÐÌÍÑÉ•¹Ñ ½¥¹Ñ•¹Í¥Ñä¸($€¨¼(%½¹ÍÑÉÕÑ½È Í €ô¹•ÜMÁ¡•É¥…±!…Éµ½¹¥ÌÌ ¤°¥¹Ñ•¹Í¥Ñä€ô€Ä€¤ì(($%ÍÕÁ•È Õ¹‘•™¥¹•°¥¹Ñ•¹Í¥Ñä€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í1¥¡ÑAÉ½‰”€ôÑÉÕ”ì(($$¼¨¨($$€¨±¥¡ÐÁÉ½‰”ÕÍ•ÌÍÁ¡•É¥…°¡…Éµ½¹¥ÌÑ¼•¹½‘”±¥¡Ñ¥¹œ¥¹™½Éµ…Ñ¥½¸¸($$€¨($$€¨ÑåÁ”íMÁ¡•É¥…±!…Éµ½¹¥ÌÍô($$€¨¼($%Ñ¡¥Ì¹Í €ôÍ ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Í ¹½Áä Í½ÕÉ”¹Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨•Í•É¥…±¥é•ÌÑ¡”±¥¡ÐÁÉ½Ù”™É½´Ñ¡”¥Ù•¸)M=8¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”)M=8¡½±‘¥¹œÑ¡”Í•É¥…±¥é•±¥¡ÐÁÉ½‰”¸($€¨É•ÑÕÉ¸í1¥¡ÑAÉ½‰•ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥¡ÐÁÉ½‰”¸($€¨¼(%™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ô©Í½¸¹¥¹Ñ•¹Í¥Ñäì€¼¼Q=<è5½Ù”Ñ¡¥Ì‰¥ÐÑ¼1¥¡Ð¹™É½µ)M=8 ¤ì($%Ñ¡¥Ì¹Í ¹™É½µÉÉ…ä ©Í½¸¹Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹Í €ôÑ¡¥Ì¹Í ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œ•½µ•ÑÉ¥•Ì¸Q¡”™¥±•Ì…É”¥¹Ñ•É¹…±±ä(€¨±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹5…Ñ•É¥…±1½…‘•È ¤ì(€¨½¹ÍÐµ…Ñ•É¥…°€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €µ…Ñ•É¥…°¹©Í½¸œ€¤ì(€¨€(€¨Q¡¥Ì±½…‘•È‘½•Ì¹½ÐÍÕÁÁ½ÉÐ¹½‘”µ…Ñ•É¥…±Ì¸UÍ”í±¥¹¬9½‘•5…Ñ•É¥…±1½…‘•Éô¥¹ÍÑ•…¸(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ5…Ñ•É¥…±1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Üµ…Ñ•É¥…°±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì(($$¼¨¨($$€¨‘¥Ñ¥½¹…Éä¡½±‘¥¹œÑ•áÑÕÉ•ÌÕÍ•‰äÑ¡”µ…Ñ•É¥…°¸($$€¨($$€¨ÑåÁ”í=‰©•ÐñÍÑÉ¥¹œ±Q•áÑÕÉ”ùô($$€¨¼($%Ñ¡¥Ì¹Ñ•áÑÕÉ•Ì€ôíôì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘•µ…Ñ•É¥…°Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡5…Ñ•É¥…°¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Í½Á”¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Í½Á”¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Í½Á”¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”¥Ù•¸)M=8½‰©•Ð…¹É•ÑÕÉ¹Ì„µ…Ñ•É¥…°¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é•µ…Ñ•É¥…°¸($€¨É•ÑÕÉ¸í5…Ñ•É¥…±ôQ¡”Á…ÉÍ•µ…Ñ•É¥…°¸($€¨¼(%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Ñ•áÑÕÉ•Ìì(($%™Õ¹Ñ¥½¸•ÑQ•áÑÕÉ” ¹…µ”€¤ì(($$%¥˜€ Ñ•áÑÕÉ•Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹5…Ñ•É¥…±1½…‘•ÈèU¹‘•™¥¹•Ñ•áÑÕÉ”œ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ•áÑÕÉ•Íl¹…µ”tì(($%ô(($%½¹ÍÐµ…Ñ•É¥…°€ôÑ¡¥Ì¹É•…Ñ•5…Ñ•É¥…±É½µQåÁ” ©Í½¸¹ÑåÁ”€¤ì(($%¥˜€ ©Í½¸¹ÕÕ¥€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÕÕ¥€ô©Í½¸¹ÕÕ¥ì($%¥˜€ ©Í½¸¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹…µ”€ô©Í½¸¹¹…µ”ì($%¥˜€ ©Í½¸¹½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½±½È¹Í•Ñ!•à ©Í½¸¹½±½È€¤ì($%¥˜€ ©Í½¸¹É½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Õ¡¹•ÍÌ€ô©Í½¸¹É½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹µ•Ñ…±¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ•Ñ…±¹•ÍÌ€ô©Í½¸¹µ•Ñ…±¹•ÍÌì($%¥˜€ ©Í½¸¹Í¡••¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¸€ô©Í½¸¹Í¡••¸ì($%¥˜€ ©Í½¸¹Í¡••¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹½±½È€ô¹•Ü½±½È ¤¹Í•Ñ!•à ©Í½¸¹Í¡••¹½±½È€¤ì($%¥˜€ ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹I½Õ¡¹•ÍÌ€ô©Í½¸¹Í¡••¹I½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù”€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù”¹Í•Ñ!•à ©Í½¸¹•µ¥ÍÍ¥Ù”€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹ÍÁ•Õ±…È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…È¹Í•Ñ!•à ©Í½¸¹ÍÁ•Õ±…È€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€ô©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñäì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½È¹Í•Ñ!•à ©Í½¸¹ÍÁ•Õ±…É½±½È€¤ì($%¥˜€ ©Í½¸¹Í¡¥¹¥¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡¥¹¥¹•ÍÌ€ô©Í½¸¹Í¡¥¹¥¹•ÍÌì($%¥˜€ ©Í½¸¹±•…É½…Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ð€ô©Í½¸¹±•…É½…Ðì($%¥˜€ ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…ÑI½Õ¡¹•ÍÌ€ô©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹‘¥ÍÁ•ÉÍ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ•ÉÍ¥½¸€ô©Í½¸¹‘¥ÍÁ•ÉÍ¥½¸ì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹”€ô©Í½¸¹¥É¥‘•Í•¹”ì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•%=H€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•%=H€ô©Í½¸¹¥É¥‘•Í•¹•%=Hì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€ô©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”ì($%¥˜€ ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹Íµ¥ÍÍ¥½¸€ô©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¸ì($%¥˜€ ©Í½¸¹Ñ¡¥­¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ¡¥­¹•ÍÌ€ô©Í½¸¹Ñ¡¥­¹•ÍÌì($%¥˜€ ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€ô©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”ì($%¥˜€ ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹½±½È¹Í•Ñ!•à ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€¤ì($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½Áä€ô©Í½¸¹…¹¥Í½ÑÉ½Áäì($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€ô©Í½¸¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸ì($%¥˜€ ©Í½¸¹™½œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™½œ€ô©Í½¸¹™½œì($%¥˜€ ©Í½¸¹™±…ÑM¡…‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™±…ÑM¡…‘¥¹œ€ô©Í½¸¹™±…ÑM¡…‘¥¹œì($%¥˜€ ©Í½¸¹‰±•¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘¥¹œ€ô©Í½¸¹‰±•¹‘¥¹œì($%¥˜€ ©Í½¸¹½µ‰¥¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½µ‰¥¹”€ô©Í½¸¹½µ‰¥¹”ì($%¥˜€ ©Í½¸¹Í¥‘”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥‘”€ô©Í½¸¹Í¥‘”ì($%¥˜€ ©Í½¸¹Í¡…‘½ÝM¥‘”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡…‘½ÝM¥‘”€ô©Í½¸¹Í¡…‘½ÝM¥‘”ì($%¥˜€ ©Í½¸¹½Á…¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½Á…¥Ñä€ô©Í½¸¹½Á…¥Ñäì($%¥˜€ ©Í½¸¹ÑÉ…¹ÍÁ…É•¹Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹ÍÁ…É•¹Ð€ô©Í½¸¹ÑÉ…¹ÍÁ…É•¹Ðì($%¥˜€ ©Í½¸¹…±Á¡…Q•ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…Q•ÍÐ€ô©Í½¸¹…±Á¡…Q•ÍÐì($%¥˜€ ©Í½¸¹…±Á¡…!…Í €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…!…Í €ô©Í½¸¹…±Á¡…!…Í ì($%¥˜€ ©Í½¸¹‘•ÁÑ¡Õ¹Œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡Õ¹Œ€ô©Í½¸¹‘•ÁÑ¡Õ¹Œì($%¥˜€ ©Í½¸¹‘•ÁÑ¡Q•ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡Q•ÍÐ€ô©Í½¸¹‘•ÁÑ¡Q•ÍÐì($%¥˜€ ©Í½¸¹‘•ÁÑ¡]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡]É¥Ñ”€ô©Í½¸¹‘•ÁÑ¡]É¥Ñ”ì($%¥˜€ ©Í½¸¹½±½É]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½±½É]É¥Ñ”€ô©Í½¸¹½±½É]É¥Ñ”ì($%¥˜€ ©Í½¸¹‰±•¹‘MÉŒ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘MÉŒ€ô©Í½¸¹‰±•¹‘MÉŒì($%¥˜€ ©Í½¸¹‰±•¹‘ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÍÐ€ô©Í½¸¹‰±•¹‘ÍÐì($%¥˜€ ©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÅÕ…Ñ¥½¸€ô©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¸ì($%¥˜€ ©Í½¸¹‰±•¹‘MÉ±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘MÉ±Á¡„€ô©Í½¸¹‰±•¹‘MÉ±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘ÍÑ±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÍÑ±Á¡„€ô©Í½¸¹‰±•¹‘ÍÑ±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„€ô©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹‰±•¹‘½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘½±½È¹Í•Ñ!•à ©Í½¸¹‰±•¹‘½±½È€¤ì($%¥˜€ ©Í½¸¹‰±•¹‘±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘±Á¡„€ô©Í½¸¹‰±•¹‘±Á¡„ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±]É¥Ñ•5…Í¬€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±]É¥Ñ•5…Í¬€ô©Í½¸¹ÍÑ•¹¥±]É¥Ñ•5…Í¬ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±Õ¹Œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±Õ¹Œ€ô©Í½¸¹ÍÑ•¹¥±Õ¹Œì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±I•˜€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±I•˜€ô©Í½¸¹ÍÑ•¹¥±I•˜ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±Õ¹5…Í¬€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±Õ¹5…Í¬€ô©Í½¸¹ÍÑ•¹¥±Õ¹5…Í¬ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±…¥°€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±…¥°€ô©Í½¸¹ÍÑ•¹¥±…¥°ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±i…¥°€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±i…¥°€ô©Í½¸¹ÍÑ•¹¥±i…¥°ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±iA…ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±iA…ÍÌ€ô©Í½¸¹ÍÑ•¹¥±iA…ÍÌì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±]É¥Ñ”€ô©Í½¸¹ÍÑ•¹¥±]É¥Ñ”ì(($%¥˜€ ©Í½¸¹Ý¥É•™É…µ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ”€ô©Í½¸¹Ý¥É•™É…µ”ì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô©Í½¸¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•…À€ô©Í½¸¹Ý¥É•™É…µ•1¥¹•…Àì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•©½¥¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô©Í½¸¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%¥˜€ ©Í½¸¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Ñ…Ñ¥½¸€ô©Í½¸¹É½Ñ…Ñ¥½¸ì(($%¥˜€ ©Í½¸¹±¥¹•Ý¥‘Ñ €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¹•Ý¥‘Ñ €ô©Í½¸¹±¥¹•Ý¥‘Ñ ì($%¥˜€ ©Í½¸¹‘…Í¡M¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘…Í¡M¥é”€ô©Í½¸¹‘…Í¡M¥é”ì($%¥˜€ ©Í½¸¹…ÁM¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÁM¥é”€ô©Í½¸¹…ÁM¥é”ì($%¥˜€ ©Í½¸¹Í…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í…±”€ô©Í½¸¹Í…±”ì(($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•Ð€ô©Í½¸¹Á½±å½¹=™™Í•Ðì($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•Ñ…Ñ½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•Ñ…Ñ½È€ô©Í½¸¹Á½±å½¹=™™Í•Ñ…Ñ½Èì($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•ÑU¹¥ÑÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•ÑU¹¥ÑÌ€ô©Í½¸¹Á½±å½¹=™™Í•ÑU¹¥ÑÌì(($%¥˜€ ©Í½¸¹‘¥Ñ¡•É¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥Ñ¡•É¥¹œ€ô©Í½¸¹‘¥Ñ¡•É¥¹œì(($%¥˜€ ©Í½¸¹…±Á¡…Q½½Ù•É…”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…Q½½Ù•É…”€ô©Í½¸¹…±Á¡…Q½½Ù•É…”ì($%¥˜€ ©Í½¸¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„€ô©Í½¸¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„ì($%¥˜€ ©Í½¸¹™½É•M¥¹±•A…ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™½É•M¥¹±•A…ÍÌ€ô©Í½¸¹™½É•M¥¹±•A…ÍÌì(($%¥˜€ ©Í½¸¹Ù¥Í¥‰±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ù¥Í¥‰±”€ô©Í½¸¹Ù¥Í¥‰±”ì(($%¥˜€ ©Í½¸¹Ñ½¹•5…ÁÁ•€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ½¹•5…ÁÁ•€ô©Í½¸¹Ñ½¹•5…ÁÁ•ì(($%¥˜€ ©Í½¸¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÕÍ•É…Ñ„€ô©Í½¸¹ÕÍ•É…Ñ„ì(($%¥˜€ ©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ ÑåÁ•½˜©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€ôôô€¹Õµ‰•Èœ€¤ì(($$$%µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ô€ ©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€ø€À€¤€üÑÉÕ”€è™…±Í”ì(($$%ô•±Í”ì(($$$%µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ô©Í½¸¹Ù•ÉÑ•á½±½ÉÌì(($$%ô(($%ô(($$¼¼M¡…‘•È5…Ñ•É¥…°(($%¥˜€ ©Í½¸¹Õ¹¥™½ÉµÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐ¹…µ”¥¸©Í½¸¹Õ¹¥™½ÉµÌ€¤ì(($$$%½¹ÍÐÕ¹¥™½É´€ô©Í½¸¹Õ¹¥™½ÉµÍl¹…µ”tì(($$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t€ôíôì(($$$%ÍÝ¥Ñ € Õ¹¥™½É´¹ÑåÁ”€¤ì(($$$$%…Í”€Ðœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô•ÑQ•áÑÕÉ” Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€Œœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü½±½È ¤¹Í•Ñ!•à Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÈœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÌœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÌ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÐœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÐ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€´Ìœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü5…ÑÉ¥àÌ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€´Ðœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü5…ÑÉ¥àÐ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%‘•™…Õ±Ðè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ôÕ¹¥™½É´¹Ù…±Õ”ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸¹‘•™¥¹•Ì€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•™¥¹•Ì€ô©Í½¸¹‘•™¥¹•Ìì($%¥˜€ ©Í½¸¹Ù•ÉÑ•áM¡…‘•È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ù•ÉÑ•áM¡…‘•È€ô©Í½¸¹Ù•ÉÑ•áM¡…‘•Èì($%¥˜€ ©Í½¸¹™É…µ•¹ÑM¡…‘•È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™É…µ•¹ÑM¡…‘•È€ô©Í½¸¹™É…µ•¹ÑM¡…‘•Èì($%¥˜€ ©Í½¸¹±Í±Y•ÉÍ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±Í±Y•ÉÍ¥½¸€ô©Í½¸¹±Í±Y•ÉÍ¥½¸ì(($%¥˜€ ©Í½¸¹•áÑ•¹Í¥½¹Ì€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐ­•ä¥¸©Í½¸¹•áÑ•¹Í¥½¹Ì€¤ì(($$$%µ…Ñ•É¥…°¹•áÑ•¹Í¥½¹Íl­•ät€ô©Í½¸¹•áÑ•¹Í¥½¹Íl­•ätì(($$%ô(($%ô(($%¥˜€ ©Í½¸¹±¥¡ÑÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡ÑÌ€ô©Í½¸¹±¥¡ÑÌì($%¥˜€ ©Í½¸¹±¥ÁÁ¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥ÁÁ¥¹œ€ô©Í½¸¹±¥ÁÁ¥¹œì(($$¼¼™½ÈA½¥¹ÑÍ5…Ñ•É¥…°(($%¥˜€ ©Í½¸¹Í¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥é”€ô©Í½¸¹Í¥é”ì($%¥˜€ ©Í½¸¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€ô©Í½¸¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸ì(($$¼¼µ…ÁÌ(($%¥˜€ ©Í½¸¹µ…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ…À€¤ì($%¥˜€ ©Í½¸¹µ…Ñ…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ…Ñ…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ…Ñ…À€¤ì(($%¥˜€ ©Í½¸¹…±Á¡…5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…±Á¡…5…À€¤ì(($%¥˜€ ©Í½¸¹‰ÕµÁ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰ÕµÁ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹‰ÕµÁ5…À€¤ì($%¥˜€ ©Í½¸¹‰ÕµÁM…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰ÕµÁM…±”€ô©Í½¸¹‰ÕµÁM…±”ì(($%¥˜€ ©Í½¸¹¹½Éµ…±5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹½Éµ…±5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¹½Éµ…±5…À€¤ì($%¥˜€ ©Í½¸¹¹½Éµ…±5…ÁQåÁ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹½Éµ…±5…ÁQåÁ”€ô©Í½¸¹¹½Éµ…±5…ÁQåÁ”ì($%¥˜€ ©Í½¸¹¹½Éµ…±M…±”€„ôôÕ¹‘•™¥¹•€¤ì(($$%±•Ð¹½Éµ…±M…±”€ô©Í½¸¹¹½Éµ…±M…±”ì(($$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹½Éµ…±M…±”€¤€ôôô™…±Í”€¤ì(($$$$¼¼	±•¹‘•È•áÁ½ÉÑ•ÈÕÍ•Ñ¼•áÁ½ÉÐ„Í…±…È¸M•”€ŒÜÐÔä(($$$%¹½Éµ…±M…±”€ôl¹½Éµ…±M…±”°¹½Éµ…±M…±”tì(($$%ô(($$%µ…Ñ•É¥…°¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä ¹½Éµ…±M…±”€¤ì(($%ô(($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ5…À€¤ì($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹ÑM…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô©Í½¸¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%¥˜€ ©Í½¸¹É½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹É½Õ¡¹•ÍÍ5…À€¤ì($%¥˜€ ©Í½¸¹µ•Ñ…±¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ•Ñ…±¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ•Ñ…±¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù•5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù•5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹•µ¥ÍÍ¥Ù•5…À€¤ì($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô©Í½¸¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É5…À€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É½±½É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É½±½É5…À€¤ì(($%¥˜€ ©Í½¸¹•¹Ù5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•¹Ù5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹•¹Ù5…À€¤ì($%¥˜€ ©Í½¸¹•¹Ù5…ÁI½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•¹Ù5…ÁI½Ñ…Ñ¥½¸¹™É½µÉÉ…ä ©Í½¸¹•¹Ù5…ÁI½Ñ…Ñ¥½¸€¤ì($%¥˜€ ©Í½¸¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹•¹Ù5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹É•™±•Ñ¥Ù¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É•™±•Ñ¥Ù¥Ñä€ô©Í½¸¹É•™±•Ñ¥Ù¥Ñäì($%¥˜€ ©Í½¸¹É•™É…Ñ¥½¹I…Ñ¥¼€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É•™É…Ñ¥½¹I…Ñ¥¼€ô©Í½¸¹É•™É…Ñ¥½¹I…Ñ¥¼ì(($%¥˜€ ©Í½¸¹±¥¡Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±¥¡Ñ5…À€¤ì($%¥˜€ ©Í½¸¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹…½5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…½5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…½5…À€¤ì($%¥˜€ ©Í½¸¹…½5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…½5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹É…‘¥•¹Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É…‘¥•¹Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹É…‘¥•¹Ñ5…À€¤ì(($%¥˜€ ©Í½¸¹±•…É½…Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…Ñ5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…Ñ9½Éµ…±5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ9½Éµ…±5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…Ñ9½Éµ…±5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…Ñ9½Éµ…±M…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ9½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä ©Í½¸¹±•…É½…Ñ9½Éµ…±M…±”€¤ì(($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¥É¥‘•Í•¹•5…À€¤ì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€¤ì($%¥˜€ ©Í½¸¹Ñ¡¥­¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ¡¥­¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Ñ¡¥­¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½Áå5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½Áå5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…¹¥Í½ÑÉ½Áå5…À€¤ì(($%¥˜€ ©Í½¸¹Í¡••¹½±½É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹½±½É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Í¡••¹½±½É5…À€¤ì($%¥˜€ ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹I½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÍ5…À€¤ì(($%É•ÑÕÉ¸µ…Ñ•É¥…°ì((%ô(($¼¨¨($€¨Q•áÑÕÉ•Ì…É”¹½Ð•µ‰•‘‘•¥¸Ñ¡”µ…Ñ•É¥…°)M=8Í¼Ñ¡•ä¡…Ù”($€¨Ñ¼‰”¥¹©•Ñ•‰•™½É”Ñ¡”±½…‘¥¹œÁÉ½•ÍÌÍÑ…ÉÑÌ¸($€¨($€¨Á…É…´í=‰©•ÑôÙ…±Õ”€´‘¥Ñ¥½¹…Éä¡½±‘¥¹œÑ•áÑÕÉ•Ì™½Èµ…Ñ•É¥…°ÁÉ½Á•ÉÑ¥•Ì¸($€¨É•ÑÕÉ¸í5…Ñ•É¥…±1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ìµ…Ñ•É¥…°±½…‘•È¸($€¨¼(%Í•ÑQ•áÑÕÉ•Ì Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Ñ•áÑÕÉ•Ì€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É•…Ñ•Ì„µ…Ñ•É¥…°™½ÈÑ¡”¥Ù•¸ÑåÁ”¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÑåÁ”€´Q¡”µ…Ñ•É¥…°ÑåÁ”¸($€¨É•ÑÕÉ¸í5…Ñ•É¥…±ôQ¡”¹•Üµ…Ñ•É¥…°¸($€¨¼(%É•…Ñ•5…Ñ•É¥…±É½µQåÁ” ÑåÁ”€¤ì(($%É•ÑÕÉ¸5…Ñ•É¥…±1½…‘•È¹É•…Ñ•5…Ñ•É¥…±É½µQåÁ” ÑåÁ”€¤ì((%ô(($¼¨¨($€¨É•…Ñ•Ì„µ…Ñ•É¥…°™½ÈÑ¡”¥Ù•¸ÑåÁ”¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ôÑåÁ”€´Q¡”µ…Ñ•É¥…°ÑåÁ”¸($€¨É•ÑÕÉ¸í5…Ñ•É¥…±ôQ¡”¹•Üµ…Ñ•É¥…°¸($€¨¼(%ÍÑ…Ñ¥ŒÉ•…Ñ•5…Ñ•É¥…±É½µQåÁ” ÑåÁ”€¤ì(($%½¹ÍÐµ…Ñ•É¥…±1¥ˆ€ôì($$%M¡…‘½Ý5…Ñ•É¥…°°($$%MÁÉ¥Ñ•5…Ñ•É¥…°°($$%I…ÝM¡…‘•É5…Ñ•É¥…°°($$%M¡…‘•É5…Ñ•É¥…°°($$%A½¥¹ÑÍ5…Ñ•É¥…°°($$%5•Í¡A¡åÍ¥…±5…Ñ•É¥…°°($$%5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°°($$%5•Í¡A¡½¹5…Ñ•É¥…°°($$%5•Í¡Q½½¹5…Ñ•É¥…°°($$%5•Í¡9½Éµ…±5…Ñ•É¥…°°($$%5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°°($$%5•Í¡•ÁÑ¡5…Ñ•É¥…°°($$%5•Í¡¥ÍÑ…¹•5…Ñ•É¥…°°($$%5•Í¡	…Í¥5…Ñ•É¥…°°($$%5•Í¡5…Ñ…Á5…Ñ•É¥…°°($$%1¥¹•…Í¡•‘5…Ñ•É¥…°°($$%1¥¹•	…Í¥5…Ñ•É¥…°°($$%5…Ñ•É¥…°($%ôì(($%É•ÑÕÉ¸¹•Üµ…Ñ•É¥…±1¥‰lÑåÁ”t ¤ì((%ô()ô((¼¨¨(€¨±…ÍÌÝ¥Ñ ±½…‘•ÈÕÑ¥±¥Ñä™Õ¹Ñ¥½¹Ì¸(€¨¼)±…ÍÌ1½…‘•ÉUÑ¥±Ìì(($¼¨¨($€¨áÑÉ…ÑÌÑ¡”‰…Í”UI0™É½´Ñ¡”¥Ù•¸UI0¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€µQ¡”UI0Ñ¼•áÑÉ…ÐÑ¡”‰…Í”UI0™É½´¸($€¨É•ÑÕÉ¸íÍÑÉ¥¹ôQ¡”•áÑÉ…Ñ•‰…Í”UI0¸($€¨¼(%ÍÑ…Ñ¥Œ•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤ì(($%½¹ÍÐ¥¹‘•à€ôÕÉ°¹±…ÍÑ%¹‘•á=˜ €œ¼œ€¤ì(($%¥˜€ ¥¹‘•à€ôôô€´Ä€¤É•ÑÕÉ¸€œ¸¼œì(($%É•ÑÕÉ¸ÕÉ°¹Í±¥” €À°¥¹‘•à€¬€Ä€¤ì((%ô(($¼¨¨($€¨I•Í½±Ù•ÌÉ•±…Ñ¥Ù”UI1Ì……¥¹ÍÐÑ¡”¥Ù•¸Á…Ñ ¸‰Í½±ÕÑ”Á…Ñ¡Ì°‘…Ñ„ÕÉ±Ì°($€¨…¹‰±½ˆUI1ÌÝ¥±°‰”É•ÑÕÉ¹•…Ì¥Ì¸%¹Ù…±¥UI1ÌÝ¥±°É•ÑÕÉ¸…¸•µÁÑä($€¨ÍÑÉ¥¹œ¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€µQ¡”UI0Ñ¼É•Í½±Ù”¸($€¨Á…É…´íÍÑÉ¥¹ôÁ…Ñ €´Q¡”‰…Í”Á…Ñ ™½ÈÉ•±…Ñ¥Ù”UI1ÌÑ¼‰”É•Í½±Ù•……¥¹ÍÐ¸($€¨É•ÑÕÉ¸íÍÑÉ¥¹ôQ¡”É•Í½±Ù•UI0¸($€¨¼(%ÍÑ…Ñ¥ŒÉ•Í½±Ù•UI0 ÕÉ°°Á…Ñ €¤ì(($$¼¼%¹Ù…±¥UI0($%¥˜€ ÑåÁ•½˜ÕÉ°€„ôô€ÍÑÉ¥¹œœñðÕÉ°€ôôô€œœ€¤É•ÑÕÉ¸€œœì(($$¼¼!½ÍÐI•±…Ñ¥Ù”UI0($%¥˜€ €½y¡ÑÑÁÌüép½p¼½¤¹Ñ•ÍÐ Á…Ñ €¤€˜˜€½yp¼¼¹Ñ•ÍÐ ÕÉ°€¤€¤ì(($$%Á…Ñ €ôÁ…Ñ ¹É•Á±…” €¼¡y¡ÑÑÁÌüép½p½myp½t¬¤¸¨½¤°€œÄœ€¤ì(($%ô(($$¼¼‰Í½±ÕÑ”UI0¡ÑÑÀè¼¼±¡ÑÑÁÌè¼¼°¼¼($%¥˜€ €½x¡¡ÑÑÁÌüè¤ýp½p¼½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼…Ñ„UI$($%¥˜€ €½y‘…Ñ„è¸¨°¸¨½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼	±½ˆUI0($%¥˜€ €½y‰±½ˆè¸¨½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼I•±…Ñ¥Ù”UI0($%É•ÑÕÉ¸Á…Ñ €¬ÕÉ°ì((%ô()ô((¼¨¨(€¨¸¥¹ÍÑ…¹•Ù•ÉÍ¥½¸½˜„•½µ•ÑÉä¸(€¨¼)±…ÍÌ%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¥¹ÍÑ…¹•‰Õ™™•È•½µ•ÑÉä¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉäœì(($$¼¨¨($$€¨Q¡”¥¹ÍÑ…¹”½Õ¹Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð%¹™¥¹¥Ñä($$€¨¼($%Ñ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ð€ô%¹™¥¹¥Ñäì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ð€ôÍ½ÕÉ”¹¥¹ÍÑ…¹•½Õ¹Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹¥¹ÍÑ…¹•½Õ¹Ð€ôÑ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ðì(($%‘…Ñ„¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ôÑÉÕ”ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œ•½µ•ÑÉ¥•Ì¸Q¡”™¥±•Ì…É”¥¹Ñ•É¹…±±ä(€¨±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹	Õ™™•É•½µ•ÑÉå1½…‘•È ¤ì(€¨½¹ÍÐ•½µ•ÑÉä€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €µ½‘•±Ì½©Í½¸½ÁÉ•ÍÍÕÉ”¹©Í½¸œ€¤ì(€¨(€¨½¹ÍÐµ…Ñ•É¥…°€ô¹•ÜQ!I¹5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè€ÁáÕÕÔô€¤ì(€¨½¹ÍÐ½‰©•Ð€ô¹•ÜQ!I¹5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(€¨Í•¹”¹…‘ ½‰©•Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ	Õ™™•É•½µ•ÑÉå1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü•½µ•ÑÉä±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘••½µ•ÑÉäÑ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡	Õ™™•É•½µ•ÑÉä¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Í½Á”¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Í½Á”¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Í½Á”¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”¥Ù•¸)M=8½‰©•Ð…¹É•ÑÕÉ¹Ì„•½µ•ÑÉä¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é••½µ•ÑÉä¸($€¨É•ÑÕÉ¸í	Õ™™•É•½µ•ÑÉåôQ¡”Á…ÉÍ••½µ•ÑÉä¸($€¨¼(%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•É5…À€ôíôì($%½¹ÍÐ…ÉÉ…å	Õ™™•É5…À€ôíôì(($%™Õ¹Ñ¥½¸•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸°ÕÕ¥€¤ì(($$%¥˜€ ¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥t€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥tì(($$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÌ€ô©Í½¸¹¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÌì($$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÍlÕÕ¥tì(($$%½¹ÍÐ‰Õ™™•È€ô•ÑÉÉ…å	Õ™™•È ©Í½¸°¥¹Ñ•É±•…Ù•‘	Õ™™•È¹‰Õ™™•È€¤ì(($$%½¹ÍÐ…ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä ¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÑåÁ”°‰Õ™™•È€¤ì($$%½¹ÍÐ¥ˆ€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•È …ÉÉ…ä°¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÍÑÉ¥‘”€¤ì($$%¥ˆ¹ÕÕ¥€ô¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÕÕ¥ì(($$%¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥t€ô¥ˆì(($$%É•ÑÕÉ¸¥ˆì(($%ô(($%™Õ¹Ñ¥½¸•ÑÉÉ…å	Õ™™•È ©Í½¸°ÕÕ¥€¤ì(($$%¥˜€ …ÉÉ…å	Õ™™•É5…ÁlÕÕ¥t€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸…ÉÉ…å	Õ™™•É5…ÁlÕÕ¥tì(($$%½¹ÍÐ…ÉÉ…å	Õ™™•ÉÌ€ô©Í½¸¹…ÉÉ…å	Õ™™•ÉÌì($$%½¹ÍÐ…ÉÉ…å	Õ™™•È€ô…ÉÉ…å	Õ™™•ÉÍlÕÕ¥tì(($$%½¹ÍÐ…ˆ€ô¹•ÜU¥¹ÐÌÉÉÉ…ä …ÉÉ…å	Õ™™•È€¤¹‰Õ™™•Èì(($$%…ÉÉ…å	Õ™™•É5…ÁlÕÕ¥t€ô…ˆì(($$%É•ÑÕÉ¸…ˆì(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô©Í½¸¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ü¹•Ü%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä ¤€è¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐ¥¹‘•à€ô©Í½¸¹‘…Ñ„¹¥¹‘•àì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä ¥¹‘•à¹ÑåÁ”°¥¹‘•à¹…ÉÉ…ä€¤ì($$%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÑåÁ•‘ÉÉ…ä°€Ä€¤€¤ì(($%ô(($%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•Ì€ô©Í½¸¹‘…Ñ„¹…ÑÑÉ¥‰ÕÑ•Ìì(($%™½È€ ½¹ÍÐ­•ä¥¸…ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•Íl­•ätì($$%±•Ð‰Õ™™•ÉÑÑÉ¥‰ÕÑ”ì(($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¥Í%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸¹‘…Ñ„°…ÑÑÉ¥‰ÕÑ”¹‘…Ñ„€¤ì($$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹Ñ•É±•…Ù•‘	Õ™™•È°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹½™™Í•Ð°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$%ô•±Í”ì(($$$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä …ÑÑÉ¥‰ÕÑ”¹ÑåÁ”°…ÑÑÉ¥‰ÕÑ”¹…ÉÉ…ä€¤ì($$$%½¹ÍÐ‰Õ™™•ÉÑÑÉ¥‰ÕÑ•½¹ÍÑÈ€ô…ÑÑÉ¥‰ÕÑ”¹¥Í%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€è	Õ™™•ÉÑÑÉ¥‰ÕÑ”ì($$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü‰Õ™™•ÉÑÑÉ¥‰ÕÑ•½¹ÍÑÈ ÑåÁ•‘ÉÉ…ä°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$%ô(($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹¹…µ”€ô…ÑÑÉ¥‰ÕÑ”¹¹…µ”ì($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹ÕÍ…”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹Í•ÑUÍ…” …ÑÑÉ¥‰ÕÑ”¹ÕÍ…”€¤ì(($$%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” ­•ä°‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($%ô(($%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€ô©Í½¸¹‘…Ñ„¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ìì(($%¥˜€ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$%™½È€ ½¹ÍÐ­•ä¥¸µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•ÉÉ…ä€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•ätì(($$$%½¹ÍÐ…ÉÉ…ä€ômtì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…ÑÑÉ¥‰ÕÑ•ÉÉ…ä¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•ÉÉ…ål¤tì($$$$%±•Ð‰Õ™™•ÉÑÑÉ¥‰ÕÑ”ì(($$$$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¥Í%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$$$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸¹‘…Ñ„°…ÑÑÉ¥‰ÕÑ”¹‘…Ñ„€¤ì($$$$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹Ñ•É±•…Ù•‘	Õ™™•È°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹½™™Í•Ð°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$$$%ô•±Í”ì(($$$$$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä …ÑÑÉ¥‰ÕÑ”¹ÑåÁ”°…ÑÑÉ¥‰ÕÑ”¹…ÉÉ…ä€¤ì($$$$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÑåÁ•‘ÉÉ…ä°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$$$%ô(($$$$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹¹…µ”€ô…ÑÑÉ¥‰ÕÑ”¹¹…µ”ì($$$$%…ÉÉ…ä¹ÁÕÍ  ‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$%ô(($$$%•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•ät€ô…ÉÉ…äì(($$%ô(($%ô(($%½¹ÍÐµ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€ô©Í½¸¹‘…Ñ„¹µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”ì(($%¥˜€ µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€¤ì(($$%•½µ•ÑÉä¹µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€ôÑÉÕ”ì(($%ô(($%½¹ÍÐÉ½ÕÁÌ€ô©Í½¸¹‘…Ñ„¹É½ÕÁÌñð©Í½¸¹‘…Ñ„¹‘É…Ý…±±Ìñð©Í½¸¹‘…Ñ„¹½™™Í•ÑÌì(($%¥˜€ É½ÕÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°¸€ôÉ½ÕÁÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐÉ½ÕÀ€ôÉ½ÕÁÍl¤tì(($$$%•½µ•ÑÉä¹…‘‘É½ÕÀ É½ÕÀ¹ÍÑ…ÉÐ°É½ÕÀ¹½Õ¹Ð°É½ÕÀ¹µ…Ñ•É¥…±%¹‘•à€¤ì(($$%ô(($%ô(($%½¹ÍÐ‰½Õ¹‘¥¹MÁ¡•É”€ô©Í½¸¹‘…Ñ„¹‰½Õ¹‘¥¹MÁ¡•É”ì(($%¥˜€ ‰½Õ¹‘¥¹MÁ¡•É”€„ôôÕ¹‘•™¥¹•€¤ì(($$%•½µ•ÑÉä¹‰½Õ¹‘¥¹MÁ¡•É”€ô¹•ÜMÁ¡•É” ¤¹™É½µ)M=8 ‰½Õ¹‘¥¹MÁ¡•É”€¤ì(($%ô(($%¥˜€ ©Í½¸¹¹…µ”€¤•½µ•ÑÉä¹¹…µ”€ô©Í½¸¹¹…µ”ì($%¥˜€ ©Í½¸¹ÕÍ•É…Ñ„€¤•½µ•ÑÉä¹ÕÍ•É…Ñ„€ô©Í½¸¹ÕÍ•É…Ñ„ì(($%É•ÑÕÉ¸•½µ•ÑÉäì((%ô()ô((¼¨¨(€¨±½…‘•È™½È±½…‘¥¹œ„)M=8É•Í½ÕÉ”¥¸Ñ¡”m)M=8=‰©•Ð½M•¹”™½Éµ…Ñuí±¥¹¬¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½µÉ‘½½ˆ½Ñ¡É•”¹©Ì½Ý¥­¤½)M=8µ=‰©•ÐµM•¹”µ™½Éµ…Ð´Ñô¸(€¨Q¡”™¥±•Ì…É”¥¹Ñ•É¹…±±ä±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹=‰©•Ñ1½…‘•È ¤ì(€¨½¹ÍÐ½‰¨€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €µ½‘•±Ì½©Í½¸½•á…µÁ±”¹©Í½¸œ€¤ì(€¨Í•¹”¹…‘ ½‰¨€¤ì(€¨(€¨€¼¼±Ñ•É¹…Ñ¥Ù•±ä°Ñ¼Á…ÉÍ”„ÁÉ•Ù¥½ÕÍ±ä±½…‘•)M=8ÍÑÉÕÑÕÉ”(€¨½¹ÍÐ½‰©•Ð€ô…Ý…¥Ð±½…‘•È¹Á…ÉÍ•Íå¹Œ …}©Í½¹}½‰©•Ð€¤ì(€¨Í•¹”¹…‘ ½‰©•Ð€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ=‰©•Ñ1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü½‰©•Ð±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘•€Í½‰©•ÐÑ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡=‰©•ÐÍ¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÁ…Ñ €ô€ Ñ¡¥Ì¹Á…Ñ €ôôô€œœ€¤€ü1½…‘•ÉUÑ¥±Ì¹•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤€èÑ¡¥Ì¹Á…Ñ ì($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÑ¡¥Ì¹É•Í½ÕÉ•A…Ñ ñðÁ…Ñ ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%±•Ð©Í½¸€ô¹Õ±°ì(($$%ÑÉäì(($$$%©Í½¸€ô)M=8¹Á…ÉÍ” Ñ•áÐ€¤ì(($$%ô…Ñ € •ÉÉ½È€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤½¹ÉÉ½È •ÉÉ½È€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!Ié=‰©•Ñ1½…‘•Èè…¹pÐÁ…ÉÍ”€œ€¬ÕÉ°€¬€œ¸œ°•ÉÉ½È¹µ•ÍÍ…”€¤ì(($$$%É•ÑÕÉ¸ì(($$%ô(($$%½¹ÍÐµ•Ñ…‘…Ñ„€ô©Í½¸¹µ•Ñ…‘…Ñ„ì(($$%¥˜€ µ•Ñ…‘…Ñ„€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”¹Ñ½1½Ý•É…Í” ¤€ôôô€•½µ•ÑÉäœ€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤½¹ÉÉ½È ¹•ÜÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤ì($$$%É•ÑÕÉ¸ì(($$%ô(($$%Í½Á”¹Á…ÉÍ” ©Í½¸°½¹1½…€¤ì(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô(($¼¨¨($€¨Íå¹ŒÙ•ÉÍ¥½¸½˜í±¥¹¬=‰©•Ñ1½…‘•È±½…‘ô¸($€¨($€¨…Íå¹Œ($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨É•ÑÕÉ¸íAÉ½µ¥Í”ñ=‰©•ÐÍùôAÉ½µ¥Í”Ñ¡…ÐÉ•Í½±Ù•ÌÝ¥Ñ Ñ¡”±½…‘•€Í½‰©•Ð¸($€¨¼(%…Íå¹Œ±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÁ…Ñ €ô€ Ñ¡¥Ì¹Á…Ñ €ôôô€œœ€¤€ü1½…‘•ÉUÑ¥±Ì¹•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤€èÑ¡¥Ì¹Á…Ñ ì($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÑ¡¥Ì¹É•Í½ÕÉ•A…Ñ ñðÁ…Ñ ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì(($%½¹ÍÐÑ•áÐ€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐ©Í½¸€ô)M=8¹Á…ÉÍ” Ñ•áÐ€¤ì(($%½¹ÍÐµ•Ñ…‘…Ñ„€ô©Í½¸¹µ•Ñ…‘…Ñ„ì(($%¥˜€ µ•Ñ…‘…Ñ„€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”¹Ñ½1½Ý•É…Í” ¤€ôôô€•½µ•ÑÉäœ€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤ì(($%ô(($%É•ÑÕÉ¸…Ý…¥ÐÍ½Á”¹Á…ÉÍ•Íå¹Œ ©Í½¸€¤ì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”¥Ù•¸)M=8¸Q¡¥Ì¥ÌÕÍ•¥¹Ñ•É¹…±±ä‰äí±¥¹¬=‰©•Ñ1½…‘•È±½…‘ô($€¨‰ÕÐ…¸…±Í¼‰”ÕÍ•‘¥É•Ñ±äÑ¼Á…ÉÍ”„ÁÉ•Ù¥½ÕÍ±ä±½…‘•)M=8ÍÑÉÕÑÕÉ”¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é•€Í½‰©•Ð¸($€¨Á…É…´í½¹1½…‘ô½¹1½…€´á•ÕÑ•Ý¡•¸…±°É•Í½ÕÉ•Ì€¡”¹œ¸Ñ•áÑÕÉ•Ì¤¡…Ù”‰••¸™Õ±±ä±½…‘•¸($€¨É•ÑÕÉ¸í=‰©•ÐÍôQ¡”Á…ÉÍ•€Í½‰©•Ð¸($€¨¼(%Á…ÉÍ” ©Í½¸°½¹1½…€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸¹…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…ÉÍ•M¡…Á•Ì ©Í½¸¹Í¡…Á•Ì€¤ì($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôÑ¡¥Ì¹Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸¹•½µ•ÑÉ¥•Ì°Í¡…Á•Ì€¤ì(($%½¹ÍÐ¥µ…•Ì€ôÑ¡¥Ì¹Á…ÉÍ•%µ…•Ì ©Í½¸¹¥µ…•Ì°™Õ¹Ñ¥½¸€ ¤ì(($$%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤½¹1½… ½‰©•Ð€¤ì(($%ô€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸¹Ñ•áÑÕÉ•Ì°¥µ…•Ì€¤ì($%½¹ÍÐµ…Ñ•É¥…±Ì€ôÑ¡¥Ì¹Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸¹µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ½‰©•Ð€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ©Í½¸¹½‰©•Ð°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸¹Í­•±•Ñ½¹Ì°½‰©•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì($%Ñ¡¥Ì¹‰¥¹‘1¥¡ÑQ…É•ÑÌ ½‰©•Ð€¤ì(($$¼¼(($%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$%±•Ð¡…Í%µ…•Ì€ô™…±Í”ì(($$%™½È€ ½¹ÍÐÕÕ¥¥¸¥µ…•Ì€¤ì(($$$%¥˜€ ¥µ…•ÍlÕÕ¥t¹‘…Ñ„¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$%¡…Í%µ…•Ì€ôÑÉÕ”ì($$$$%‰É•…¬ì(($$$%ô(($$%ô(($$%¥˜€ ¡…Í%µ…•Ì€ôôô™…±Í”€¤½¹1½… ½‰©•Ð€¤ì(($%ô(($%É•ÑÕÉ¸½‰©•Ðì((%ô(($¼¨¨($€¨Íå¹ŒÙ•ÉÍ¥½¸½˜í±¥¹¬=‰©•Ñ1½…‘•ÈÁ…ÉÍ•ô¸($€¨($€¨Á…É…´í=‰©•Ñô©Í½¸€´Q¡”Í•É¥…±¥é•€Í½‰©•Ð¸($€¨É•ÑÕÉ¸íAÉ½µ¥Í”ñ=‰©•ÐÍùôAÉ½µ¥Í”Ñ¡…ÐÉ•Í½±Ù•ÌÝ¥Ñ Ñ¡”Á…ÉÍ•€Í½‰©•Ð¸($€¨¼(%…Íå¹ŒÁ…ÉÍ•Íå¹Œ ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸¹…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…ÉÍ•M¡…Á•Ì ©Í½¸¹Í¡…Á•Ì€¤ì($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôÑ¡¥Ì¹Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸¹•½µ•ÑÉ¥•Ì°Í¡…Á•Ì€¤ì(($%½¹ÍÐ¥µ…•Ì€ô…Ý…¥ÐÑ¡¥Ì¹Á…ÉÍ•%µ…•ÍÍå¹Œ ©Í½¸¹¥µ…•Ì€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸¹Ñ•áÑÕÉ•Ì°¥µ…•Ì€¤ì($%½¹ÍÐµ…Ñ•É¥…±Ì€ôÑ¡¥Ì¹Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸¹µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ½‰©•Ð€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ©Í½¸¹½‰©•Ð°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸¹Í­•±•Ñ½¹Ì°½‰©•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì($%Ñ¡¥Ì¹‰¥¹‘1¥¡ÑQ…É•ÑÌ ½‰©•Ð€¤ì(($%É•ÑÕÉ¸½‰©•Ðì((%ô(($¼¼¥¹Ñ•É¹…±Ì((%Á…ÉÍ•M¡…Á•Ì ©Í½¸€¤ì(($%½¹ÍÐÍ¡…Á•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ¡…Á”€ô¹•ÜM¡…Á” ¤¹™É½µ)M=8 ©Í½¹l¤t€¤ì(($$$%Í¡…Á•ÍlÍ¡…Á”¹ÕÕ¥t€ôÍ¡…Á”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Í¡…Á•Ìì((%ô((%Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸°½‰©•Ð€¤ì(($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôíôì($%½¹ÍÐ‰½¹•Ì€ôíôì(($$¼¼•¹•É…Ñ”‰½¹”±½½­ÕÀÑ…‰±”(($%½‰©•Ð¹ÑÉ…Ù•ÉÍ” ™Õ¹Ñ¥½¸€ ¡¥±€¤ì(($$%¥˜€ ¡¥±¹¥Í	½¹”€¤‰½¹•Íl¡¥±¹ÕÕ¥t€ô¡¥±ì(($%ô€¤ì(($$¼¼É•…Ñ”Í­•±•Ñ½¹Ì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ­•±•Ñ½¸€ô¹•ÜM­•±•Ñ½¸ ¤¹™É½µ)M=8 ©Í½¹l¤t°‰½¹•Ì€¤ì(($$$%Í­•±•Ñ½¹ÍlÍ­•±•Ñ½¸¹ÕÕ¥t€ôÍ­•±•Ñ½¸ì(($$%ô(($%ô(($%É•ÑÕÉ¸Í­•±•Ñ½¹Ìì((%ô((%Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸°Í¡…Á•Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ‰Õ™™•É•½µ•ÑÉå1½…‘•È€ô¹•Ü	Õ™™•É•½µ•ÑÉå1½…‘•È ¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%±•Ð•½µ•ÑÉäì($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%ÍÝ¥Ñ € ‘…Ñ„¹ÑåÁ”€¤ì(($$$$%…Í”€	Õ™™•É•½µ•ÑÉäœè($$$$%…Í”€%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉäœè(($$$$$%•½µ•ÑÉä€ô‰Õ™™•É•½µ•ÑÉå1½…‘•È¹Á…ÉÍ” ‘…Ñ„€¤ì($$$$$%‰É•…¬ì(($$$$%‘•™…Õ±Ðè(($$$$$%¥˜€ ‘…Ñ„¹ÑåÁ”¥¸•½µ•ÑÉ¥•Ì€¤ì(($$$$$$%•½µ•ÑÉä€ô•½µ•ÑÉ¥•Íl‘…Ñ„¹ÑåÁ”t¹™É½µ)M=8 ‘…Ñ„°Í¡…Á•Ì€¤ì(($$$$$%ô•±Í”ì(($$$$$$%½¹Í½±”¹Ý…É¸ Q!I¹=‰©•Ñ1½…‘•ÈèU¹ÍÕÁÁ½ÉÑ••½µ•ÑÉäÑåÁ”€ˆ‘ì‘…Ñ„¹ÑåÁ”ô‰€€¤ì(($$$$$%ô(($$$%ô(($$$%•½µ•ÑÉä¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($$$%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤•½µ•ÑÉä¹¹…µ”€ô‘…Ñ„¹¹…µ”ì($$$%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤•½µ•ÑÉä¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì(($$$%•½µ•ÑÉ¥•Íl‘…Ñ„¹ÕÕ¥t€ô•½µ•ÑÉäì(($$%ô(($%ô(($%É•ÑÕÉ¸•½µ•ÑÉ¥•Ìì((%ô((%Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ…¡”€ôíôì€¼¼5Õ±Ñ¥5…Ñ•É¥…°($%½¹ÍÐµ…Ñ•É¥…±Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ±½…‘•È€ô¹•Ü5…Ñ•É¥…±1½…‘•È ¤ì($$%±½…‘•È¹Í•ÑQ•áÑÕÉ•Ì Ñ•áÑÕÉ•Ì€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%¥˜€ …¡•l‘…Ñ„¹ÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%…¡•l‘…Ñ„¹ÕÕ¥t€ô±½…‘•È¹Á…ÉÍ” ‘…Ñ„€¤ì(($$$%ô(($$$%µ…Ñ•É¥…±Íl‘…Ñ„¹ÕÕ¥t€ô…¡•l‘…Ñ„¹ÕÕ¥tì(($$%ô(($%ô(($%É•ÑÕÉ¸µ…Ñ•É¥…±Ìì((%ô((%Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð©Í½¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%½¹ÍÐ±¥À€ô¹¥µ…Ñ¥½¹±¥À¹Á…ÉÍ” ‘…Ñ„€¤ì(($$$%…¹¥µ…Ñ¥½¹Íl±¥À¹ÕÕ¥t€ô±¥Àì(($$%ô(($%ô(($%É•ÑÕÉ¸…¹¥µ…Ñ¥½¹Ìì((%ô((%Á…ÉÍ•%µ…•Ì ©Í½¸°½¹1½…€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì($%½¹ÍÐ¥µ…•Ì€ôíôì(($%±•Ð±½…‘•Èì(($%™Õ¹Ñ¥½¸±½…‘%µ…” ÕÉ°€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$%É•ÑÕÉ¸±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°Õ¹‘•™¥¹•°™Õ¹Ñ¥½¸€ ¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô€¤ì(($%ô(($%™Õ¹Ñ¥½¸‘•Í•É¥…±¥é•%µ…” ¥µ…”€¤ì(($$%¥˜€ ÑåÁ•½˜¥µ…”€ôôô€ÍÑÉ¥¹œœ€¤ì(($$$%½¹ÍÐÕÉ°€ô¥µ…”ì(($$$%½¹ÍÐÁ…Ñ €ô€½x¡p½p¼¥ð¡m„µét¬è¡p½p¼¤ü¤½¤¹Ñ•ÍÐ ÕÉ°€¤€üÕÉ°€èÍ½Á”¹É•Í½ÕÉ•A…Ñ €¬ÕÉ°ì(($$$%É•ÑÕÉ¸±½…‘%µ…” Á…Ñ €¤ì(($$%ô•±Í”ì(($$$%¥˜€ ¥µ…”¹‘…Ñ„€¤ì(($$$$%É•ÑÕÉ¸ì($$$$$%‘…Ñ„è•ÑQåÁ•‘ÉÉ…ä ¥µ…”¹ÑåÁ”°¥µ…”¹‘…Ñ„€¤°($$$$$%Ý¥‘Ñ è¥µ…”¹Ý¥‘Ñ °($$$$$%¡•¥¡Ðè¥µ…”¹¡•¥¡Ð($$$$%ôì(($$$%ô•±Í”ì(($$$$%É•ÑÕÉ¸¹Õ±°ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€˜˜©Í½¸¹±•¹Ñ €ø€À€¤ì(($$%½¹ÍÐµ…¹…•È€ô¹•Ü1½…‘¥¹5…¹…•È ½¹1½…€¤ì(($$%±½…‘•È€ô¹•Ü%µ…•1½…‘•È µ…¹…•È€¤ì($$%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ô©Í½¸¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$%½¹ÍÐ¥µ…”€ô©Í½¹l¤tì($$$%½¹ÍÐÕÉ°€ô¥µ…”¹ÕÉ°ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$$$$¼¼±½……ÉÉ…ä½˜¥µ…•Ì”¹œÕ‰•Q•áÑÕÉ”(($$$$%½¹ÍÐ¥µ…•ÉÉ…ä€ômtì(($$$$%™½È€ ±•Ð¨€ô€À°©°€ôÕÉ°¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$$$%½¹ÍÐÕÉÉ•¹ÑUÉ°€ôÕÉ±l¨tì(($$$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô‘•Í•É¥…±¥é•%µ…” ÕÉÉ•¹ÑUÉ°€¤ì(($$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”€„ôô¹Õ±°€¤ì(($$$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$$¼¼ÍÁ•¥…°…Í”è¡…¹‘±”…ÉÉ…ä½˜‘…Ñ„Ñ•áÑÕÉ•Ì™½ÈÕ‰”Ñ•áÑÕÉ•Ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ¹•Ü…Ñ…Q•áÑÕÉ” ‘•Í•É¥…±¥é•‘%µ…”¹‘…Ñ„°‘•Í•É¥…±¥é•‘%µ…”¹Ý¥‘Ñ °‘•Í•É¥…±¥é•‘%µ…”¹¡•¥¡Ð€¤€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ¥µ…•ÉÉ…ä€¤ì(($$$%ô•±Í”ì(($$$$$¼¼±½…Í¥¹±”¥µ…”(($$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô‘•Í•É¥…±¥é•%µ…” ¥µ…”¹ÕÉ°€¤ì($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ‘•Í•É¥…±¥é•‘%µ…”€¤ì((($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸¥µ…•Ìì((%ô((%…Íå¹ŒÁ…ÉÍ•%µ…•ÍÍå¹Œ ©Í½¸€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì($%½¹ÍÐ¥µ…•Ì€ôíôì(($%±•Ð±½…‘•Èì(($%…Íå¹Œ™Õ¹Ñ¥½¸‘•Í•É¥…±¥é•%µ…” ¥µ…”€¤ì(($$%¥˜€ ÑåÁ•½˜¥µ…”€ôôô€ÍÑÉ¥¹œœ€¤ì(($$$%½¹ÍÐÕÉ°€ô¥µ…”ì(($$$%½¹ÍÐÁ…Ñ €ô€½x¡p½p¼¥ð¡m„µét¬è¡p½p¼¤ü¤½¤¹Ñ•ÍÐ ÕÉ°€¤€üÕÉ°€èÍ½Á”¹É•Í½ÕÉ•A…Ñ €¬ÕÉ°ì(($$$%É•ÑÕÉ¸…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ Á…Ñ €¤ì(($$%ô•±Í”ì(($$$%¥˜€ ¥µ…”¹‘…Ñ„€¤ì(($$$$%É•ÑÕÉ¸ì($$$$$%‘…Ñ„è•ÑQåÁ•‘ÉÉ…ä ¥µ…”¹ÑåÁ”°¥µ…”¹‘…Ñ„€¤°($$$$$%Ý¥‘Ñ è¥µ…”¹Ý¥‘Ñ °($$$$$%¡•¥¡Ðè¥µ…”¹¡•¥¡Ð($$$$%ôì(($$$%ô•±Í”ì(($$$$%É•ÑÕÉ¸¹Õ±°ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€˜˜©Í½¸¹±•¹Ñ €ø€À€¤ì(($$%±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($$%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ô©Í½¸¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$%½¹ÍÐ¥µ…”€ô©Í½¹l¤tì($$$%½¹ÍÐÕÉ°€ô¥µ…”¹ÕÉ°ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$$$$¼¼±½……ÉÉ…ä½˜¥µ…•Ì”¹œÕ‰•Q•áÑÕÉ”(($$$$%½¹ÍÐ¥µ…•ÉÉ…ä€ômtì(($$$$%™½È€ ±•Ð¨€ô€À°©°€ôÕÉ°¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$$$%½¹ÍÐÕÉÉ•¹ÑUÉ°€ôÕÉ±l¨tì(($$$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô…Ý…¥Ð‘•Í•É¥…±¥é•%µ…” ÕÉÉ•¹ÑUÉ°€¤ì(($$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”€„ôô¹Õ±°€¤ì(($$$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$$¼¼ÍÁ•¥…°…Í”è¡…¹‘±”…ÉÉ…ä½˜‘…Ñ„Ñ•áÑÕÉ•Ì™½ÈÕ‰”Ñ•áÑÕÉ•Ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ¹•Ü…Ñ…Q•áÑÕÉ” ‘•Í•É¥…±¥é•‘%µ…”¹‘…Ñ„°‘•Í•É¥…±¥é•‘%µ…”¹Ý¥‘Ñ °‘•Í•É¥…±¥é•‘%µ…”¹¡•¥¡Ð€¤€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ¥µ…•ÉÉ…ä€¤ì(($$$%ô•±Í”ì(($$$$$¼¼±½…Í¥¹±”¥µ…”(($$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô…Ý…¥Ð‘•Í•É¥…±¥é•%µ…” ¥µ…”¹ÕÉ°€¤ì($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸¥µ…•Ìì((%ô((%Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸°¥µ…•Ì€¤ì(($%™Õ¹Ñ¥½¸Á…ÉÍ•½¹ÍÑ…¹Ð Ù…±Õ”°ÑåÁ”€¤ì(($$%¥˜€ ÑåÁ•½˜Ù…±Õ”€ôôô€¹Õµ‰•Èœ€¤É•ÑÕÉ¸Ù…±Õ”ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•È¹Á…ÉÍ•Q•áÑÕÉ”è½¹ÍÑ…¹ÐÍ¡½Õ±‰”¥¸¹Õµ•É¥Œ™½É´¸œ°Ù…±Õ”€¤ì(($$%É•ÑÕÉ¸ÑåÁ•lÙ…±Õ”tì(($%ô(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%¥˜€ ‘…Ñ„¹¥µ…”€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•Èè9¼€‰¥µ…”ˆÍÁ•¥™¥•™½Èœ°‘…Ñ„¹ÕÕ¥€¤ì(($$$%ô(($$$%¥˜€ ¥µ…•Íl‘…Ñ„¹¥µ…”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•¥µ…”œ°‘…Ñ„¹¥µ…”€¤ì(($$$%ô(($$$%½¹ÍÐÍ½ÕÉ”€ô¥µ…•Íl‘…Ñ„¹¥µ…”tì($$$%½¹ÍÐ¥µ…”€ôÍ½ÕÉ”¹‘…Ñ„ì(($$$%±•ÐÑ•áÑÕÉ”ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¥µ…”€¤€¤ì(($$$$%Ñ•áÑÕÉ”€ô¹•ÜÕ‰•Q•áÑÕÉ” ¤ì(($$$$%¥˜€ ¥µ…”¹±•¹Ñ €ôôô€Ø€¤Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$%ô•±Í”ì(($$$$%¥˜€ ¥µ…”€˜˜¥µ…”¹‘…Ñ„€¤ì(($$$$$%Ñ•áÑÕÉ”€ô¹•Ü…Ñ…Q•áÑÕÉ” ¤ì(($$$$%ô•±Í”ì(($$$$$%Ñ•áÑÕÉ”€ô¹•ÜQ•áÑÕÉ” ¤ì(($$$$%ô(($$$$%¥˜€ ¥µ…”€¤Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì€¼¼Ñ•áÑÕÉ•Ì…¸¡…Ù”Õ¹‘•™¥¹•¥µ…”‘…Ñ„(($$$%ô(($$$%Ñ•áÑÕÉ”¹Í½ÕÉ”€ôÍ½ÕÉ”ì(($$$%Ñ•áÑÕÉ”¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($$$%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¹…µ”€ô‘…Ñ„¹¹…µ”ì(($$$%¥˜€ ‘…Ñ„¹µ…ÁÁ¥¹œ€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ…ÁÁ¥¹œ€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ…ÁÁ¥¹œ°QaQUI}5AA%9€¤ì($$$%¥˜€ ‘…Ñ„¹¡…¹¹•°€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¡…¹¹•°€ô‘…Ñ„¹¡…¹¹•°ì(($$$%¥˜€ ‘…Ñ„¹½™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½™™Í•Ð¹™É½µÉÉ…ä ‘…Ñ„¹½™™Í•Ð€¤ì($$$%¥˜€ ‘…Ñ„¹É•Á•…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹É•Á•…Ð¹™É½µÉÉ…ä ‘…Ñ„¹É•Á•…Ð€¤ì($$$%¥˜€ ‘…Ñ„¹•¹Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹•¹Ñ•È¹™É½µÉÉ…ä ‘…Ñ„¹•¹Ñ•È€¤ì($$$%¥˜€ ‘…Ñ„¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹É½Ñ…Ñ¥½¸€ô‘…Ñ„¹É½Ñ…Ñ¥½¸ì(($$$%¥˜€ ‘…Ñ„¹ÝÉ…À€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Ñ•áÑÕÉ”¹ÝÉ…ÁL€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹ÝÉ…Ál€Àt°QaQUI}]IAA%9€¤ì($$$$%Ñ•áÑÕÉ”¹ÝÉ…ÁP€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹ÝÉ…Ál€Ät°QaQUI}]IAA%9€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹™½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹™½Éµ…Ð€ô‘…Ñ„¹™½Éµ…Ðì($$$%¥˜€ ‘…Ñ„¹¥¹Ñ•É¹…±½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¥¹Ñ•É¹…±½Éµ…Ð€ô‘…Ñ„¹¥¹Ñ•É¹…±½Éµ…Ðì($$$%¥˜€ ‘…Ñ„¹ÑåÁ”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÑåÁ”€ô‘…Ñ„¹ÑåÁ”ì($$$%¥˜€ ‘…Ñ„¹½±½ÉMÁ…”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ô‘…Ñ„¹½±½ÉMÁ…”ì(($$$%¥˜€ ‘…Ñ„¹µ¥¹¥±Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ¥¹¥±Ñ•È°QaQUI}%1QH€¤ì($$$%¥˜€ ‘…Ñ„¹µ…¥±Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ…¥±Ñ•È€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ…¥±Ñ•È°QaQUI}%1QH€¤ì($$$%¥˜€ ‘…Ñ„¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹…¹¥Í½ÑÉ½Áä€ô‘…Ñ„¹…¹¥Í½ÑÉ½Áäì(($$$%¥˜€ ‘…Ñ„¹™±¥Ád€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹™±¥Ád€ô‘…Ñ„¹™±¥Ádì(($$$%¥˜€ ‘…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹•¹•É…Ñ•5¥Áµ…ÁÌ€ô‘…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌì($$$%¥˜€ ‘…Ñ„¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„€ô‘…Ñ„¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„ì($$$%¥˜€ ‘…Ñ„¹Õ¹Á…­±¥¹µ•¹Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹Õ¹Á…­±¥¹µ•¹Ð€ô‘…Ñ„¹Õ¹Á…­±¥¹µ•¹Ðì($$$%¥˜€ ‘…Ñ„¹½µÁ…É•Õ¹Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½µÁ…É•Õ¹Ñ¥½¸€ô‘…Ñ„¹½µÁ…É•Õ¹Ñ¥½¸ì(($$$%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì(($$$%Ñ•áÑÕÉ•Íl‘…Ñ„¹ÕÕ¥t€ôÑ•áÑÕÉ”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ•Ìì((%ô((%Á…ÉÍ•=‰©•Ð ‘…Ñ„°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì(($%±•Ð½‰©•Ðì(($%™Õ¹Ñ¥½¸•Ñ•½µ•ÑÉä ¹…µ”€¤ì(($$%¥˜€ •½µ•ÑÉ¥•Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹••½µ•ÑÉäœ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸•½µ•ÑÉ¥•Íl¹…µ”tì(($%ô(($%™Õ¹Ñ¥½¸•Ñ5…Ñ•É¥…° ¹…µ”€¤ì(($$%¥˜€ ¹…µ”€ôôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸Õ¹‘•™¥¹•ì(($$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹…µ”€¤€¤ì(($$$%½¹ÍÐ…ÉÉ…ä€ômtì(($$$%™½È€ ±•Ð¤€ô€À°°€ô¹…µ”¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$$%½¹ÍÐÕÕ¥€ô¹…µ•l¤tì(($$$$%¥˜€ µ…Ñ•É¥…±ÍlÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•µ…Ñ•É¥…°œ°ÕÕ¥€¤ì(($$$$%ô(($$$$%…ÉÉ…ä¹ÁÕÍ  µ…Ñ•É¥…±ÍlÕÕ¥t€¤ì(($$$%ô(($$$%É•ÑÕÉ¸…ÉÉ…äì(($$%ô(($$%¥˜€ µ…Ñ•É¥…±Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•µ…Ñ•É¥…°œ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸µ…Ñ•É¥…±Íl¹…µ”tì(($%ô(($%™Õ¹Ñ¥½¸•ÑQ•áÑÕÉ” ÕÕ¥€¤ì(($$%¥˜€ Ñ•áÑÕÉ•ÍlÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•Ñ•áÑÕÉ”œ°ÕÕ¥€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ•áÑÕÉ•ÍlÕÕ¥tì(($%ô(($%±•Ð•½µ•ÑÉä°µ…Ñ•É¥…°ì(($%ÍÝ¥Ñ € ‘…Ñ„¹ÑåÁ”€¤ì(($$%…Í”€M•¹”œè(($$$%½‰©•Ð€ô¹•ÜM•¹” ¤ì(($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%¥˜€ 9Õµ‰•È¹¥Í%¹Ñ••È ‘…Ñ„¹‰…­É½Õ¹€¤€¤ì(($$$$$%½‰©•Ð¹‰…­É½Õ¹€ô¹•Ü½±½È ‘…Ñ„¹‰…­É½Õ¹€¤ì(($$$$%ô•±Í”ì(($$$$$%½‰©•Ð¹‰…­É½Õ¹€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹‰…­É½Õ¹€¤ì(($$$$%ô(($$$%ô(($$$%¥˜€ ‘…Ñ„¹•¹Ù¥É½¹µ•¹Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹•¹Ù¥É½¹µ•¹Ð€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹•¹Ù¥É½¹µ•¹Ð€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹™½œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%¥˜€ ‘…Ñ„¹™½œ¹ÑåÁ”€ôôô€½œœ€¤ì(($$$$$%½‰©•Ð¹™½œ€ô¹•Ü½œ ‘…Ñ„¹™½œ¹½±½È°‘…Ñ„¹™½œ¹¹•…È°‘…Ñ„¹™½œ¹™…È€¤ì(($$$$%ô•±Í”¥˜€ ‘…Ñ„¹™½œ¹ÑåÁ”€ôôô€½áÀÈœ€¤ì(($$$$$%½‰©•Ð¹™½œ€ô¹•Ü½áÀÈ ‘…Ñ„¹™½œ¹½±½È°‘…Ñ„¹™½œ¹‘•¹Í¥Ñä€¤ì(($$$$%ô(($$$$%¥˜€ ‘…Ñ„¹™½œ¹¹…µ”€„ôô€œœ€¤ì(($$$$$%½‰©•Ð¹™½œ¹¹…µ”€ô‘…Ñ„¹™½œ¹¹…µ”ì(($$$$%ô(($$$%ô(($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌ€ô‘…Ñ„¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌì($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñä€ô‘…Ñ„¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñäì($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹‘I½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰…­É½Õ¹‘I½Ñ…Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹‰…­É½Õ¹‘I½Ñ…Ñ¥½¸€¤ì(($$$%¥˜€ ‘…Ñ„¹•¹Ù¥É½¹µ•¹Ñ%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹•¹Ù¥É½¹µ•¹Ñ%¹Ñ•¹Í¥Ñä€ô‘…Ñ„¹•¹Ù¥É½¹µ•¹Ñ%¹Ñ•¹Í¥Ñäì($$$%¥˜€ ‘…Ñ„¹•¹Ù¥É½¹µ•¹ÑI½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹•¹Ù¥É½¹µ•¹ÑI½Ñ…Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹•¹Ù¥É½¹µ•¹ÑI½Ñ…Ñ¥½¸€¤ì(($$$%‰É•…¬ì(($$%…Í”€A•ÉÍÁ•Ñ¥Ù•…µ•É„œè(($$$%½‰©•Ð€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ‘…Ñ„¹™½Ø°‘…Ñ„¹…ÍÁ•Ð°‘…Ñ„¹¹•…È°‘…Ñ„¹™…È€¤ì(($$$%¥˜€ ‘…Ñ„¹™½ÕÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™½ÕÌ€ô‘…Ñ„¹™½ÕÌì($$$%¥˜€ ‘…Ñ„¹é½½´€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹é½½´€ô‘…Ñ„¹é½½´ì($$$%¥˜€ ‘…Ñ„¹™¥±µ…Õ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™¥±µ…Õ”€ô‘…Ñ„¹™¥±µ…Õ”ì($$$%¥˜€ ‘…Ñ„¹™¥±µ=™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™¥±µ=™™Í•Ð€ô‘…Ñ„¹™¥±µ=™™Í•Ðì($$$%¥˜€ ‘…Ñ„¹Ù¥•Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥•Ü€ô=‰©•Ð¹…ÍÍ¥¸ íô°‘…Ñ„¹Ù¥•Ü€¤ì(($$$%‰É•…¬ì(($$%…Í”€=ÉÑ¡½É…Á¡¥…µ•É„œè(($$$%½‰©•Ð€ô¹•Ü=ÉÑ¡½É…Á¡¥…µ•É„ ‘…Ñ„¹±•™Ð°‘…Ñ„¹É¥¡Ð°‘…Ñ„¹Ñ½À°‘…Ñ„¹‰½ÑÑ½´°‘…Ñ„¹¹•…È°‘…Ñ„¹™…È€¤ì(($$$%¥˜€ ‘…Ñ„¹é½½´€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹é½½´€ô‘…Ñ„¹é½½´ì($$$%¥˜€ ‘…Ñ„¹Ù¥•Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥•Ü€ô=‰©•Ð¹…ÍÍ¥¸ íô°‘…Ñ„¹Ù¥•Ü€¤ì(($$$%‰É•…¬ì(($$%…Í”€µ‰¥•¹Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Üµ‰¥•¹Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì(($$$%‰É•…¬ì(($$%…Í”€¥É•Ñ¥½¹…±1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Ü¥É•Ñ¥½¹…±1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì($$$%½‰©•Ð¹Ñ…É•Ð€ô‘…Ñ„¹Ñ…É•Ðñð€œœì(($$$%‰É•…¬ì(($$%…Í”€A½¥¹Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜA½¥¹Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹‘¥ÍÑ…¹”°‘…Ñ„¹‘•…ä€¤ì(($$$%‰É•…¬ì(($$%…Í”€I•ÑÉ•…1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜI•ÑÉ•…1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹Ý¥‘Ñ °‘…Ñ„¹¡•¥¡Ð€¤ì(($$$%‰É•…¬ì(($$%…Í”€MÁ½Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜMÁ½Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹‘¥ÍÑ…¹”°‘…Ñ„¹…¹±”°‘…Ñ„¹Á•¹Õµ‰É„°‘…Ñ„¹‘•…ä€¤ì($$$%½‰©•Ð¹Ñ…É•Ð€ô‘…Ñ„¹Ñ…É•Ðñð€œœì(($$$%‰É•…¬ì(($$%…Í”€!•µ¥ÍÁ¡•É•1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Ü!•µ¥ÍÁ¡•É•1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹É½Õ¹‘½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¡ÑAÉ½‰”œè(($$$%½‰©•Ð€ô¹•Ü1¥¡ÑAÉ½‰” ¤¹™É½µ)M=8 ‘…Ñ„€¤ì(($$$%‰É•…¬ì(($$%…Í”€M­¥¹¹•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$€%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•ÜM­¥¹¹•‘5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$$%¥˜€ ‘…Ñ„¹‰¥¹‘5½‘”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰¥¹‘5½‘”€ô‘…Ñ„¹‰¥¹‘5½‘”ì($$$%¥˜€ ‘…Ñ„¹‰¥¹‘5…ÑÉ¥à€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰¥¹‘5…ÑÉ¥à¹™É½µÉÉ…ä ‘…Ñ„¹‰¥¹‘5…ÑÉ¥à€¤ì($$$%¥˜€ ‘…Ñ„¹Í­•±•Ñ½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í­•±•Ñ½¸€ô‘…Ñ„¹Í­•±•Ñ½¸ì(($$$%‰É•…¬ì(($$%…Í”€5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•Ü5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$$%‰É•…¬ì(($$%…Í”€%¹ÍÑ…¹•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì($$$%½¹ÍÐ½Õ¹Ð€ô‘…Ñ„¹½Õ¹Ðì($$$%½¹ÍÐ¥¹ÍÑ…¹•5…ÑÉ¥à€ô‘…Ñ„¹¥¹ÍÑ…¹•5…ÑÉ¥àì($$$%½¹ÍÐ¥¹ÍÑ…¹•½±½È€ô‘…Ñ„¹¥¹ÍÑ…¹•½±½Èì(($$$%½‰©•Ð€ô¹•Ü%¹ÍÑ…¹•‘5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°°½Õ¹Ð€¤ì($$$%½‰©•Ð¹¥¹ÍÑ…¹•5…ÑÉ¥à€ô¹•Ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹•Ü±½…ÐÌÉÉÉ…ä ¥¹ÍÑ…¹•5…ÑÉ¥à¹…ÉÉ…ä€¤°€ÄØ€¤ì($$$%¥˜€ ¥¹ÍÑ…¹•½±½È€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹¥¹ÍÑ…¹•½±½È€ô¹•Ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹•Ü±½…ÐÌÉÉÉ…ä ¥¹ÍÑ…¹•½±½È¹…ÉÉ…ä€¤°¥¹ÍÑ…¹•½±½È¹¥Ñ•µM¥é”€¤ì(($$$%‰É•…¬ì(($$%…Í”€	…Ñ¡•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•Ü	…Ñ¡•‘5•Í  ‘…Ñ„¹µ…á%¹ÍÑ…¹•½Õ¹Ð°‘…Ñ„¹µ…áY•ÉÑ•á½Õ¹Ð°‘…Ñ„¹µ…á%¹‘•á½Õ¹Ð°µ…Ñ•É¥…°€¤ì($$$%½‰©•Ð¹•½µ•ÑÉä€ô•½µ•ÑÉäì($$$%½‰©•Ð¹Á•É=‰©•ÑÉÕÍÑÕµÕ±±•€ô‘…Ñ„¹Á•É=‰©•ÑÉÕÍÑÕµÕ±±•ì($$$%½‰©•Ð¹Í½ÉÑ=‰©•ÑÌ€ô‘…Ñ„¹Í½ÉÑ=‰©•ÑÌì(($$$%½‰©•Ð¹}‘É…ÝI…¹•Ì€ô‘…Ñ„¹‘É…ÝI…¹•Ìì($$$%½‰©•Ð¹}É•Í•ÉÙ•‘I…¹•Ì€ô‘…Ñ„¹É•Í•ÉÙ•‘I…¹•Ìì(($$$%½‰©•Ð¹}•½µ•ÑÉå%¹™¼€ô‘…Ñ„¹•½µ•ÑÉå%¹™¼¹µ…À ¥¹™¼€ôøì(($$$$%±•Ð‰½à€ô¹Õ±°ì($$$$%±•ÐÍÁ¡•É”€ô¹Õ±°ì($$$$%¥˜€ ¥¹™¼¹‰½Õ¹‘¥¹	½à€„ôôÕ¹‘•™¥¹•€¤ì(($$$$$%‰½à€ô¹•Ü	½àÌ ¤¹™É½µ)M=8 ¥¹™¼¹‰½Õ¹‘¥¹	½à€¤ì(($$$$%ô(($$$$%¥˜€ ¥¹™¼¹‰½Õ¹‘¥¹MÁ¡•É”€„ôôÕ¹‘•™¥¹•€¤ì(($$$$$%ÍÁ¡•É”€ô¹•ÜMÁ¡•É” ¤¹™É½µ)M=8 ¥¹™¼¹‰½Õ¹‘¥¹MÁ¡•É”€¤ì(($$$$%ô(($$$$%É•ÑÕÉ¸ì($$$$$$¸¸¹¥¹™¼°($$$$$%‰½Õ¹‘¥¹	½àè‰½à°($$$$$%‰½Õ¹‘¥¹MÁ¡•É”èÍÁ¡•É”($$$$%ôì(($$$%ô€¤ì($$$%½‰©•Ð¹}¥¹ÍÑ…¹•%¹™¼€ô‘…Ñ„¹¥¹ÍÑ…¹•%¹™¼ì(($$$%½‰©•Ð¹}…Ù…¥±…‰±•%¹ÍÑ…¹•%‘Ì€ô‘…Ñ„¹}…Ù…¥±…‰±•%¹ÍÑ…¹•%‘Ìì($$$%½‰©•Ð¹}…Ù…¥±…‰±••½µ•ÑÉå%‘Ì€ô‘…Ñ„¹}…Ù…¥±…‰±••½µ•ÑÉå%‘Ìì(($$$%½‰©•Ð¹}¹•áÑ%¹‘•áMÑ…ÉÐ€ô‘…Ñ„¹¹•áÑ%¹‘•áMÑ…ÉÐì($$$%½‰©•Ð¹}¹•áÑY•ÉÑ•áMÑ…ÉÐ€ô‘…Ñ„¹¹•áÑY•ÉÑ•áMÑ…ÉÐì($$$%½‰©•Ð¹}•½µ•ÑÉå½Õ¹Ð€ô‘…Ñ„¹•½µ•ÑÉå½Õ¹Ðì(($$$%½‰©•Ð¹}µ…á%¹ÍÑ…¹•½Õ¹Ð€ô‘…Ñ„¹µ…á%¹ÍÑ…¹•½Õ¹Ðì($$$%½‰©•Ð¹}µ…áY•ÉÑ•á½Õ¹Ð€ô‘…Ñ„¹µ…áY•ÉÑ•á½Õ¹Ðì($$$%½‰©•Ð¹}µ…á%¹‘•á½Õ¹Ð€ô‘…Ñ„¹µ…á%¹‘•á½Õ¹Ðì(($$$%½‰©•Ð¹}•½µ•ÑÉå%¹¥Ñ¥…±¥é•€ô‘…Ñ„¹•½µ•ÑÉå%¹¥Ñ¥…±¥é•ì(($$$%½‰©•Ð¹}µ…ÑÉ¥•ÍQ•áÑÕÉ”€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹µ…ÑÉ¥•ÍQ•áÑÕÉ”¹ÕÕ¥€¤ì(($$$%½‰©•Ð¹}¥¹‘¥É•ÑQ•áÑÕÉ”€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹¥¹‘¥É•ÑQ•áÑÕÉ”¹ÕÕ¥€¤ì(($$$%¥˜€ ‘…Ñ„¹½±½ÉÍQ•áÑÕÉ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹}½±½ÉÍQ•áÑÕÉ”€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹½±½ÉÍQ•áÑÕÉ”¹ÕÕ¥€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹‰½Õ¹‘¥¹MÁ¡•É”€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹‰½Õ¹‘¥¹MÁ¡•É”€ô¹•ÜMÁ¡•É” ¤¹™É½µ)M=8 ‘…Ñ„¹‰½Õ¹‘¥¹MÁ¡•É”€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹‰½Õ¹‘¥¹	½à€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹‰½Õ¹‘¥¹	½à€ô¹•Ü	½àÌ ¤¹™É½µ)M=8 ‘…Ñ„¹‰½Õ¹‘¥¹	½à€¤ì(($$$%ô(($$$%‰É•…¬ì(($$%…Í”€1=œè(($$$%½‰©•Ð€ô¹•Ü1= ¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹”œè(($$$%½‰©•Ð€ô¹•Ü1¥¹” •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹•1½½Àœè(($$$%½‰©•Ð€ô¹•Ü1¥¹•1½½À •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹•M•µ•¹ÑÌœè(($$$%½‰©•Ð€ô¹•Ü1¥¹•M•µ•¹ÑÌ •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€A½¥¹Ñ±½Õœè($$%…Í”€A½¥¹ÑÌœè(($$$%½‰©•Ð€ô¹•ÜA½¥¹ÑÌ •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€MÁÉ¥Ñ”œè(($$$%½‰©•Ð€ô¹•ÜMÁÉ¥Ñ” •Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€É½ÕÀœè(($$$%½‰©•Ð€ô¹•ÜÉ½ÕÀ ¤ì(($$$%‰É•…¬ì(($$%…Í”€	½¹”œè(($$$%½‰©•Ð€ô¹•Ü	½¹” ¤ì(($$$%‰É•…¬ì(($$%‘•™…Õ±Ðè(($$$%½‰©•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($%ô(($%½‰©•Ð¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹¹…µ”€ô‘…Ñ„¹¹…µ”ì(($%¥˜€ ‘…Ñ„¹µ…ÑÉ¥à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½‰©•Ð¹µ…ÑÉ¥à¹™É½µÉÉ…ä ‘…Ñ„¹µ…ÑÉ¥à€¤ì(($$%¥˜€ ‘…Ñ„¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô‘…Ñ„¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”ì($$%¥˜€ ½‰©•Ð¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€¤½‰©•Ð¹µ…ÑÉ¥à¹‘•½µÁ½Í” ½‰©•Ð¹Á½Í¥Ñ¥½¸°½‰©•Ð¹ÅÕ…Ñ•É¹¥½¸°½‰©•Ð¹Í…±”€¤ì(($%ô•±Í”ì(($$%¥˜€ ‘…Ñ„¹Á½Í¥Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Á½Í¥Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹Á½Í¥Ñ¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É½Ñ…Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹É½Ñ…Ñ¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹ÅÕ…Ñ•É¹¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÅÕ…Ñ•É¹¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹ÅÕ…Ñ•É¹¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹Í…±”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í…±”¹™É½µÉÉ…ä ‘…Ñ„¹Í…±”€¤ì(($%ô(($%¥˜€ ‘…Ñ„¹ÕÀ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÕÀ¹™É½µÉÉ…ä ‘…Ñ„¹ÕÀ€¤ì(($%¥˜€ ‘…Ñ„¹…ÍÑM¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹…ÍÑM¡…‘½Ü€ô‘…Ñ„¹…ÍÑM¡…‘½Üì($%¥˜€ ‘…Ñ„¹É••¥Ù•M¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É••¥Ù•M¡…‘½Ü€ô‘…Ñ„¹É••¥Ù•M¡…‘½Üì(($%¥˜€ ‘…Ñ„¹Í¡…‘½Ü€¤ì(($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹¥¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹¥¹Ñ•¹Í¥Ñä€ô‘…Ñ„¹Í¡…‘½Ü¹¥¹Ñ•¹Í¥Ñäì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹‰¥…Ì€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹‰¥…Ì€ô‘…Ñ„¹Í¡…‘½Ü¹‰¥…Ìì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ì€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ì€ô‘…Ñ„¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ìì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹É…‘¥ÕÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹É…‘¥ÕÌ€ô‘…Ñ„¹Í¡…‘½Ü¹É…‘¥ÕÌì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹µ…ÁM¥é”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹µ…ÁM¥é”¹™É½µÉÉ…ä ‘…Ñ„¹Í¡…‘½Ü¹µ…ÁM¥é”€¤ì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹…µ•É„€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹…µ•É„€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ‘…Ñ„¹Í¡…‘½Ü¹…µ•É„€¤ì(($%ô(($%¥˜€ ‘…Ñ„¹Ù¥Í¥‰±”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥Í¥‰±”€ô‘…Ñ„¹Ù¥Í¥‰±”ì($%¥˜€ ‘…Ñ„¹™ÉÕÍÑÕµÕ±±•€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™ÉÕÍÑÕµÕ±±•€ô‘…Ñ„¹™ÉÕÍÑÕµÕ±±•ì($%¥˜€ ‘…Ñ„¹É•¹‘•É=É‘•È€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É•¹‘•É=É‘•È€ô‘…Ñ„¹É•¹‘•É=É‘•Èì($%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì($%¥˜€ ‘…Ñ„¹±…å•ÉÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹±…å•ÉÌ¹µ…Í¬€ô‘…Ñ„¹±…å•ÉÌì(($%¥˜€ ‘…Ñ„¹¡¥±‘É•¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ¡¥±‘É•¸€ô‘…Ñ„¹¡¥±‘É•¸ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½‰©•Ð¹…‘ Ñ¡¥Ì¹Á…ÉÍ•=‰©•Ð ¡¥±‘É•¹l¤t°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤€¤ì(($$%ô(($%ô(($%¥˜€ ‘…Ñ„¹…¹¥µ…Ñ¥½¹Ì€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ½‰©•Ñ¹¥µ…Ñ¥½¹Ì€ô‘…Ñ„¹…¹¥µ…Ñ¥½¹Ìì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð½‰©•Ñ¹¥µ…Ñ¥½¹Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐÕÕ¥€ô½‰©•Ñ¹¥µ…Ñ¥½¹Íl¤tì(($$$%½‰©•Ð¹…¹¥µ…Ñ¥½¹Ì¹ÁÕÍ  …¹¥µ…Ñ¥½¹ÍlÕÕ¥t€¤ì(($$%ô(($%ô(($%¥˜€ ‘…Ñ„¹ÑåÁ”€ôôô€1=œ€¤ì(($$%¥˜€ ‘…Ñ„¹…ÕÑ½UÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹…ÕÑ½UÁ‘…Ñ”€ô‘…Ñ„¹…ÕÑ½UÁ‘…Ñ”ì(($$%½¹ÍÐ±•Ù•±Ì€ô‘…Ñ„¹±•Ù•±Ìì(($$%™½È€ ±•Ð°€ô€Àì°€ð±•Ù•±Ì¹±•¹Ñ ì°€¬¬€¤ì(($$$%½¹ÍÐ±•Ù•°€ô±•Ù•±Íl°tì($$$%½¹ÍÐ¡¥±€ô½‰©•Ð¹•Ñ=‰©•Ñ	åAÉ½Á•ÉÑä €ÕÕ¥œ°±•Ù•°¹½‰©•Ð€¤ì(($$$%¥˜€ ¡¥±€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹…‘‘1•Ù•° ¡¥±°±•Ù•°¹‘¥ÍÑ…¹”°±•Ù•°¹¡åÍÑ•É•Í¥Ì€¤ì(($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸½‰©•Ðì((%ô((%‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì(($%¥˜€ =‰©•Ð¹­•åÌ Í­•±•Ñ½¹Ì€¤¹±•¹Ñ €ôôô€À€¤É•ÑÕÉ¸ì(($%½‰©•Ð¹ÑÉ…Ù•ÉÍ” ™Õ¹Ñ¥½¸€ ¡¥±€¤ì(($$%¥˜€ ¡¥±¹¥ÍM­¥¹¹•‘5•Í €ôôôÑÉÕ”€˜˜¡¥±¹Í­•±•Ñ½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$$%½¹ÍÐÍ­•±•Ñ½¸€ôÍ­•±•Ñ½¹Íl¡¥±¹Í­•±•Ñ½¸tì(($$$%¥˜€ Í­•±•Ñ½¸€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•Èè9¼Í­•±•Ñ½¸™½Õ¹Ý¥Ñ UU%èœ°¡¥±¹Í­•±•Ñ½¸€¤ì(($$$%ô•±Í”ì(($$$$%¡¥±¹‰¥¹ Í­•±•Ñ½¸°¡¥±¹‰¥¹‘5…ÑÉ¥à€¤ì(($$$%ô(($$%ô(($%ô€¤ì((%ô((%‰¥¹‘1¥¡ÑQ…É•ÑÌ ½‰©•Ð€¤ì(($%½‰©•Ð¹ÑÉ…Ù•ÉÍ” ™Õ¹Ñ¥½¸€ ¡¥±€¤ì(($$%¥˜€ ¡¥±¹¥Í¥É•Ñ¥½¹…±1¥¡Ðñð¡¥±¹¥ÍMÁ½Ñ1¥¡Ð€¤ì(($$$%½¹ÍÐÕÕ¥€ô¡¥±¹Ñ…É•Ðì(($$$%½¹ÍÐÑ…É•Ð€ô½‰©•Ð¹•Ñ=‰©•Ñ	åAÉ½Á•ÉÑä €ÕÕ¥œ°ÕÕ¥€¤ì(($$$%¥˜€ Ñ…É•Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%¡¥±¹Ñ…É•Ð€ôÑ…É•Ðì(($$$%ô•±Í”ì(($$$$%¡¥±¹Ñ…É•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($$$%ô(($$%ô(($%ô€¤ì((%ô()ô()½¹ÍÐQaQUI}5AA%9€ôì(%UY5…ÁÁ¥¹œèUY5…ÁÁ¥¹œ°(%Õ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œèÕ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œ°(%Õ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œèÕ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œ°(%ÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œèÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œ°(%ÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œèÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œ°(%Õ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œèÕ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œ)ôì()½¹ÍÐQaQUI}]IAA%9€ôì(%I•Á•…Ñ]É…ÁÁ¥¹œèI•Á•…Ñ]É…ÁÁ¥¹œ°(%±…µÁQ½‘•]É…ÁÁ¥¹œè±…µÁQ½‘•]É…ÁÁ¥¹œ°(%5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œè5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œ)ôì()½¹ÍÐQaQUI}%1QH€ôì(%9•…É•ÍÑ¥±Ñ•Èè9•…É•ÍÑ¥±Ñ•È°(%9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•Èè9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°(%9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•Èè9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•È°(%1¥¹•…É¥±Ñ•Èè1¥¹•…É¥±Ñ•È°(%1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•Èè1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°(%1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•Èè1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•È)ôì()½¹ÍÐ}•ÉÉ½É5…À€ô¹•Ü]•…­5…À ¤ì((¼¨¨(€¨±½…‘•È™½È±½…‘¥¹œ¥µ…•Ì…Ì…¸m%µ…•	¥Ñµ…Áuí±¥¹¬¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½]•ˆ½A$½%µ…•	¥Ñµ…Áô¸(€¨¸%µ…•	¥Ñµ…Á€ÁÉ½Ù¥‘•Ì…¸…Íå¹¡É½¹½ÕÌ…¹É•Í½ÕÉ”•™™¥¥•¹ÐÁ…Ñ¡Ý…äÑ¼ÁÉ•Á…É”(€¨Ñ•áÑÕÉ•Ì™½ÈÉ•¹‘•É¥¹œ¸(€¨(€¨9½Ñ”Ñ¡…Ðí±¥¹¬Q•áÑÕÉ”™±¥Áeô…¹í±¥¹¬Q•áÑÕÉ”ÁÉ•µÕ±Ñ¥Á±å±Á¡…ô…É”¥¹½É•Ý¥Ñ ¥µ…”‰¥Ñµ…ÁÌ¸(€¨Q¡•ä¹••‘ÌÑ¡•Í”½¹™¥ÕÉ…Ñ¥½¸½¸‰¥Ñµ…ÀÉ•…Ñ¥½¸Õ¹±¥­”É•Õ±…È¥µ…•Ì¹••Ñ¡•´½¸ÕÁ±½…‘¥¹œÑ¼AT¸(€¨(€¨e½Ô¹••Ñ¼Í•ÐÑ¡”•ÅÕ¥Ù…±•¹Ð½ÁÑ¥½¹ÌÙ¥„í±¥¹¬%µ…•	¥Ñµ…Á1½…‘•ÈÍ•Ñ=ÁÑ¥½¹Íô¥¹ÍÑ•…¸(€¨(€¨±Í¼¹½Ñ”Ñ¡…ÐÕ¹±¥­”í±¥¹¬¥±•1½…‘•Éô°Ñ¡¥Ì±½…‘•È…Ù½¥‘ÌµÕ±Ñ¥Á±”½¹ÕÉÉ•¹ÐÉ•ÅÕ•ÍÑÌÑ¼Ñ¡”Í…µ”UI0½¹±ä¥˜…¡•€¥Ì•¹…‰±•¸(€¨(€¨©Ì(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹%µ…•	¥Ñµ…Á1½…‘•È ¤ì(€¨±½…‘•È¹Í•Ñ=ÁÑ¥½¹Ì ì¥µ…•=É¥•¹Ñ…Ñ¥½¸è€™±¥Ádœô€¤ì€¼¼Í•Ð½ÁÑ¥½¹Ì¥˜¹••‘•(€¨½¹ÍÐ¥µ…•	¥Ñµ…À€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €¥µ…”¹Á¹œœ€¤ì(€¨(€¨½¹ÍÐÑ•áÑÕÉ”€ô¹•ÜQ!I¹Q•áÑÕÉ” ¥µ…•	¥Ñµ…À€¤ì(€¨Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌ%µ…•	¥Ñµ…Á1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¥µ…”‰¥Ñµ…À±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í%µ…•	¥Ñµ…Á1½…‘•È€ôÑÉÕ”ì(($%¥˜€ ÑåÁ•½˜É•…Ñ•%µ…•	¥Ñµ…À€ôôô€Õ¹‘•™¥¹•œ€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹%µ…•	¥Ñµ…Á1½…‘•ÈèÉ•…Ñ•%µ…•	¥Ñµ…À ¤¹½ÐÍÕÁÁ½ÉÑ•¸œ€¤ì(($%ô(($%¥˜€ ÑåÁ•½˜™•Ñ €ôôô€Õ¹‘•™¥¹•œ€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹%µ…•	¥Ñµ…Á1½…‘•Èè™•Ñ  ¤¹½ÐÍÕÁÁ½ÉÑ•¸œ€¤ì(($%ô(($$¼¨¨($$€¨I•ÁÉ•Í•¹ÑÌÑ¡”±½…‘•È½ÁÑ¥½¹Ì¸($$€¨($$€¨ÑåÁ”í=‰©•Ñô($$€¨‘•™…Õ±ÐíÁÉ•µÕ±Ñ¥Á±å±Á¡„è¹½¹”ô($$€¨¼($%Ñ¡¥Ì¹½ÁÑ¥½¹Ì€ôìÁÉ•µÕ±Ñ¥Á±å±Á¡„è€¹½¹”œôì(($$¼¨¨($$€¨UÍ•™½È…‰½ÉÑ¥¹œÉ•ÅÕ•ÍÑÌ¸($$€¨($$€¨ÁÉ¥Ù…Ñ”($$€¨ÑåÁ”í‰½ÉÑ½¹ÑÉ½±±•Éô($$€¨¼($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸±½…‘•È½ÁÑ¥½¹Ì¸Q¡”ÍÑÉÕÑÕÉ”½˜Ñ¡”½‰©•ÐµÕÍÐµ…Ñ Ñ¡”½ÁÑ¥½¹Í€Á…É…µ•Ñ•È½˜($€¨mÉ•…Ñ•%µ…•	¥Ñµ…Áuí±¥¹¬¡ÑÑÁÌè¼½‘•Ù•±½Á•È¹µ½é¥±±„¹½Éœ½•¸µUL½‘½Ì½]•ˆ½A$½]¥¹‘½Ü½É•…Ñ•%µ…•	¥Ñµ…Áô¸($€¨($€¨Á…É…´í=‰©•Ñô½ÁÑ¥½¹Ì€´Q¡”±½…‘•È½ÁÑ¥½¹ÌÑ¼Í•Ð¸($€¨É•ÑÕÉ¸í%µ…•	¥Ñµ…Á1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥µ…”‰¥Ñµ…À±½…‘•È¸($€¨¼(%Í•Ñ=ÁÑ¥½¹Ì ½ÁÑ¥½¹Ì€¤ì(($%Ñ¡¥Ì¹½ÁÑ¥½¹Ì€ô½ÁÑ¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÌÑ¡”±½…‘•¥µ…”‰¥Ñµ…ÀÑ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡%µ…•	¥Ñµ…À¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´U¹ÍÕÁÁ½ÉÑ•¥¸Ñ¡¥Ì±½…‘•È¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨É•ÑÕÉ¸í%µ…•	¥Ñµ…ÁñÕ¹‘•™¥¹•‘ôQ¡”¥µ…”‰¥Ñµ…À¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ ÕÉ°€ôôôÕ¹‘•™¥¹•€¤ÕÉ°€ô€œœì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ¥µ…”µ‰¥Ñµ…Àè‘íÕÉ±õ€€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$$¼¼%˜…¡•¥Ì„ÁÉ½µ¥Í”°Ý…¥Ð™½È¥ÐÑ¼É•Í½±Ù”($$%¥˜€ …¡•¹Ñ¡•¸€¤ì(($$$%…¡•¹Ñ¡•¸ ¥µ…•	¥Ñµ…À€ôøì(($$$$$¼¼¡•¬¥˜Ñ¡•É”¥Ì…¸•ÉÉ½È™½ÈÑ¡”…¡•ÁÉ½µ¥Í”(($$$$%¥˜€ }•ÉÉ½É5…À¹¡…Ì …¡•€¤€ôôôÑÉÕ”€¤ì(($$$$$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È }•ÉÉ½É5…À¹•Ð …¡•€¤€¤ì(($$$$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$$$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$$$%ô•±Í”ì(($$$$$%¥˜€ ½¹1½…€¤½¹1½… ¥µ…•	¥Ñµ…À€¤ì(($$$$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$$$$%É•ÑÕÉ¸¥µ…•	¥Ñµ…Àì(($$$$%ô(($$$%ô€¤ì(($$$%É•ÑÕÉ¸ì(($$%ô(($$$¼¼%˜…¡•¥Ì¹½Ð„ÁÉ½µ¥Í”€¡¤¹”¸°¥ÐÌ…±É•…‘ä…¸¥µ…•	¥Ñµ…À¤($$%Í•ÑQ¥µ•½ÕÐ ™Õ¹Ñ¥½¸€ ¤ì(($$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°€À€¤ì(($$%É•ÑÕÉ¸…¡•ì(($%ô(($%½¹ÍÐ™•Ñ¡=ÁÑ¥½¹Ì€ôíôì($%™•Ñ¡=ÁÑ¥½¹Ì¹É•‘•¹Ñ¥…±Ì€ô€ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ôôô€…¹½¹åµ½ÕÌœ€¤€ü€Í…µ”µ½É¥¥¸œ€è€¥¹±Õ‘”œì($%™•Ñ¡=ÁÑ¥½¹Ì¹¡•…‘•ÉÌ€ôÑ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•Èì($%™•Ñ¡=ÁÑ¥½¹Ì¹Í¥¹…°€ô€ ÑåÁ•½˜‰½ÉÑM¥¹…°¹…¹ä€ôôô€™Õ¹Ñ¥½¸œ€¤€ü‰½ÉÑM¥¹…°¹…¹ä lÑ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°°Ñ¡¥Ì¹µ…¹…•È¹…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°t€¤€èÑ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹Í¥¹…°ì(($%½¹ÍÐÁÉ½µ¥Í”€ô™•Ñ  ÕÉ°°™•Ñ¡=ÁÑ¥½¹Ì€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ É•Ì€¤ì(($$%É•ÑÕÉ¸É•Ì¹‰±½ˆ ¤ì(($%ô€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ ‰±½ˆ€¤ì(($$%É•ÑÕÉ¸É•…Ñ•%µ…•	¥Ñµ…À ‰±½ˆ°=‰©•Ð¹…ÍÍ¥¸ Í½Á”¹½ÁÑ¥½¹Ì°ì½±½ÉMÁ…•½¹Ù•ÉÍ¥½¸è€¹½¹”œô€¤€¤ì(($%ô€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ ¥µ…•	¥Ñµ…À€¤ì(($$%…¡”¹…‘ ¥µ…”µ‰¥Ñµ…Àè‘íÕÉ±õ€°¥µ…•	¥Ñµ…À€¤ì(($$%¥˜€ ½¹1½…€¤½¹1½… ¥µ…•	¥Ñµ…À€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%É•ÑÕÉ¸¥µ…•	¥Ñµ…Àì(($%ô€¤¹…Ñ  ™Õ¹Ñ¥½¸€ ”€¤ì(($$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È ”€¤ì(($$%}•ÉÉ½É5…À¹Í•Ð ÁÉ½µ¥Í”°”€¤ì(($$%…¡”¹É•µ½Ù” ¥µ…”µ‰¥Ñµ…Àè‘íÕÉ±õ€€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô€¤ì(($%…¡”¹…‘ ¥µ…”µ‰¥Ñµ…Àè‘íÕÉ±õ€°ÁÉ½µ¥Í”€¤ì($%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì((%ô(($¼¨¨($€¨‰½ÉÑÌ½¹½¥¹œ™•Ñ É•ÅÕ•ÍÑÌ¸($€¨($€¨É•ÑÕÉ¸í%µ…•	¥Ñµ…Á1½…‘•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%…‰½ÉÐ ¤ì(($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È¹…‰½ÉÐ ¤ì($%Ñ¡¥Ì¹}…‰½ÉÑ½¹ÑÉ½±±•È€ô¹•Ü‰½ÉÑ½¹ÑÉ½±±•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±•Ð}½¹Ñ•áÐì((¼¨¨(€¨5…¹…•ÌÑ¡”±½‰…°…Õ‘¥¼½¹Ñ•áÐ¥¸Ñ¡”•¹¥¹”¸(€¨(€¨¡¥‘•½¹ÍÑÉÕÑ½È(€¨¼)±…ÍÌÕ‘¥½½¹Ñ•áÐì(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”±½‰…°¹…Ñ¥Ù”…Õ‘¥¼½¹Ñ•áÐ¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½½¹Ñ•áÑôQ¡”¹…Ñ¥Ù”…Õ‘¥¼½¹Ñ•áÐ¸($€¨¼(%ÍÑ…Ñ¥Œ•Ñ½¹Ñ•áÐ ¤ì(($%¥˜€ }½¹Ñ•áÐ€ôôôÕ¹‘•™¥¹•€¤ì(($$%}½¹Ñ•áÐ€ô¹•Ü€ Ý¥¹‘½Ü¹Õ‘¥½½¹Ñ•áÐñðÝ¥¹‘½Ü¹Ý•‰­¥ÑÕ‘¥½½¹Ñ•áÐ€¤ ¤ì(($%ô(($%É•ÑÕÉ¸}½¹Ñ•áÐì((%ô(($¼¨¨($€¨±±½ÝÌÑ¼Í•ÐÑ¡”±½‰…°¹…Ñ¥Ù”…Õ‘¥¼½¹Ñ•áÐ™É½´½ÕÑÍ¥‘”¸($€¨($€¨Á…É…´íÕ‘¥½½¹Ñ•áÑôÙ…±Õ”€´Q¡”¹…Ñ¥Ù”½¹Ñ•áÐÑ¼Í•Ð¸($€¨¼(%ÍÑ…Ñ¥ŒÍ•Ñ½¹Ñ•áÐ Ù…±Õ”€¤ì(($%}½¹Ñ•áÐ€ôÙ…±Õ”ì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È±½…‘¥¹œ…Õ‘¥¼‰Õ™™•ÉÌ¸Õ‘¥½Ì…É”¥¹Ñ•É¹…±±ä(€¨±½…‘•Ù¥„í±¥¹¬¥±•1½…‘•Éô¸(€¨(€¨©Ì(€¨½¹ÍÐ…Õ‘¥½1¥ÍÑ•¹•È€ô¹•ÜQ!I¹Õ‘¥½1¥ÍÑ•¹•È ¤ì(€¨½¹ÍÐ…µ‰¥•¹ÑM½Õ¹€ô¹•ÜQ!I¹Õ‘¥¼ …Õ‘¥½1¥ÍÑ•¹•È€¤ì(€¨(€¨½¹ÍÐ±½…‘•È€ô¹•ÜQ!I¹Õ‘¥½1½…‘•È ¤ì(€¨½¹ÍÐ…Õ‘¥½	Õ™™•È€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ €…Õ‘¥¼½…µ‰¥•¹Ñ}½•…¸¹½œœ€¤ì(€¨(€¨…µ‰¥•¹ÑM½Õ¹¹Í•Ñ	Õ™™•È …Õ‘¥½	Õ™™•È€¤ì(€¨…µ‰¥•¹ÑM½Õ¹¹Á±…ä ¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1½…‘•È(€¨¼)±…ÍÌÕ‘¥½1½…‘•È•áÑ•¹‘Ì1½…‘•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…Õ‘¥¼±½…‘•È¸($€¨($€¨Á…É…´í1½…‘¥¹5…¹…•Éômµ…¹…•Ét€´Q¡”±½…‘¥¹œµ…¹…•È¸($€¨¼(%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌ±½…‘¥¹œ™É½´Ñ¡”¥Ù•¸UI0…¹Á…ÍÍ•ÌÑ¡”±½…‘•…Õ‘¥¼‰Õ™™•È($€¨Ñ¼Ñ¡”½¹1½… ¥€…±±‰…¬¸($€¨($€¨Á…É…´íÍÑÉ¥¹ôÕÉ°€´Q¡”Á…Ñ ½UI0½˜Ñ¡”™¥±”Ñ¼‰”±½…‘•¸Q¡¥Ì…¸…±Í¼‰”„‘…Ñ„UI$¸($€¨Á…É…´í™Õ¹Ñ¥½¸¡Õ‘¥½	Õ™™•È¥ô½¹1½…€´á•ÕÑ•Ý¡•¸Ñ¡”±½…‘¥¹œÁÉ½•ÍÌ¡…Ì‰••¸™¥¹¥Í¡•¸($€¨Á…É…´í½¹AÉ½É•ÍÍ…±±‰…­ô½¹AÉ½É•ÍÌ€´á•ÕÑ•Ý¡¥±”Ñ¡”±½…‘¥¹œ¥Ì¥¸ÁÉ½É•ÍÌ¸($€¨Á…É…´í½¹ÉÉ½É…±±‰…­ô½¹ÉÉ½È€´á•ÕÑ•Ý¡•¸•ÉÉ½ÉÌ½ÕÈ¸($€¨¼(%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$%ÑÉäì(($$$$¼¼É•…Ñ”„½Áä½˜Ñ¡”‰Õ™™•È¸Q¡”‘•½‘•Õ‘¥½…Ñ…€µ•Ñ¡½($$$$¼¼‘•Ñ…¡•ÌÑ¡”‰Õ™™•ÈÝ¡•¸½µÁ±•Ñ”°ÁÉ•Ù•¹Ñ¥¹œÉ•ÕÍ”¸($$$%½¹ÍÐ‰Õ™™•É½Áä€ô‰Õ™™•È¹Í±¥” €À€¤ì(($$$%½¹ÍÐ½¹Ñ•áÐ€ôÕ‘¥½½¹Ñ•áÐ¹•Ñ½¹Ñ•áÐ ¤ì($$$%½¹Ñ•áÐ¹‘•½‘•Õ‘¥½…Ñ„ ‰Õ™™•É½Áä°™Õ¹Ñ¥½¸€ …Õ‘¥½	Õ™™•È€¤ì(($$$$%½¹1½… …Õ‘¥½	Õ™™•È€¤ì(($$$%ô€¤¹…Ñ  ¡…¹‘±•ÉÉ½È€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¡…¹‘±•ÉÉ½È ”€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%™Õ¹Ñ¥½¸¡…¹‘±•ÉÉ½È ”€¤ì(($$%¥˜€ ½¹ÉÉ½È€¤ì(($$$%½¹ÉÉ½È ”€¤ì(($$%ô•±Í”ì(($$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$%ô(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($%ô((%ô()ô()½¹ÍÐ}•å•I¥¡Ð€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}•å•1•™Ð€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì((¼¨¨(€¨ÍÁ•¥…°ÑåÁ”½˜…µ•É„Ñ¡…ÐÕÍ•ÌÑÝ¼Á•ÉÍÁ•Ñ¥Ù”…µ•É…ÌÝ¥Ñ (€¨ÍÑ•É•½Í½Á¥ŒÁÉ½©•Ñ¥½¸¸…¸‰”ÕÍ•™½ÈÉ•¹‘•É¥¹œÍÑ•É•¼•™™•ÑÌ(€¨±¥­”lÍ¹…±åÁ¡uí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½¹…±åÁ¡|Íô½È(€¨mA…É…±±…à	…ÉÉ¥•Éuí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½Á…É…±±…á}‰…ÉÉ¥•Éô¸(€¨¼)±…ÍÌMÑ•É•½…µ•É„ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÑ•É•¼…µ•É„¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($$¼¨¨($$€¨Q¡”ÑåÁ”ÁÉ½Á•ÉÑä¥ÌÕÍ•™½È‘•Ñ•Ñ¥¹œÑ¡”½‰©•ÐÑåÁ”($$€¨¥¸½¹Ñ•áÐ½˜Í•É¥…±¥é…Ñ¥½¸½‘•Í•É¥…±¥é…Ñ¥½¸¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹ÑåÁ”€ô€MÑ•É•½…µ•É„œì(($$¼¨¨($$€¨Q¡”…ÍÁ•Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹…ÍÁ•Ð€ô€Äì(($$¼¨¨($$€¨Q¡”•å”Í•Á…É…Ñ¥½¸Ý¡¥ É•ÁÉ•Í•¹ÑÌÑ¡”‘¥ÍÑ…¹”($$€¨‰•ÑÝ••¸Ñ¡”±•™Ð…¹É¥¡Ð…µ•É„¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À¸ÀØÐ($$€¨¼($%Ñ¡¥Ì¹•å•M•À€ô€À¸ÀØÐì(($$¼¨¨($$€¨Q¡”…µ•É„É•ÁÉ•Í•¹Ñ¥¹œÑ¡”±•™Ð•å”¸Q¡¥Ì¥Ì…‘‘•Ñ¼±…å•È€Å€Í¼½‰©•ÑÌÑ¼‰”($$€¨É•¹‘•É•‰äÑ¡”±•™Ð…µ•É„µÕÍÐ…±Í¼‰”…‘‘•Ñ¼Ñ¡¥Ì±…å•È¸($$€¨($$€¨ÑåÁ”íA•ÉÍÁ•Ñ¥Ù•…µ•É…ô($$€¨¼($%Ñ¡¥Ì¹…µ•É…0€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ¤ì($%Ñ¡¥Ì¹…µ•É…0¹±…å•ÉÌ¹•¹…‰±” €Ä€¤ì($%Ñ¡¥Ì¹…µ•É…0¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¨¨($$€¨Q¡”…µ•É„É•ÁÉ•Í•¹Ñ¥¹œÑ¡”É¥¡Ð•å”¸Q¡¥Ì¥Ì…‘‘•Ñ¼±…å•È€É€Í¼½‰©•ÑÌÑ¼‰”($$€¨É•¹‘•É•‰äÑ¡”É¥¡Ð…µ•É„µÕÍÐ…±Í¼‰”…‘‘•Ñ¼Ñ¡¥Ì±…å•È¸($$€¨($$€¨ÑåÁ”íA•ÉÍÁ•Ñ¥Ù•…µ•É…ô($$€¨¼($%Ñ¡¥Ì¹…µ•É…H€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ¤ì($%Ñ¡¥Ì¹…µ•É…H¹±…å•ÉÌ¹•¹…‰±” €È€¤ì($%Ñ¡¥Ì¹…µ•É…H¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹}…¡”€ôì($$%™½ÕÌè¹Õ±°°($$%™½Øè¹Õ±°°($$%…ÍÁ•Ðè¹Õ±°°($$%¹•…Èè¹Õ±°°($$%™…Èè¹Õ±°°($$%é½½´è¹Õ±°°($$%•å•M•Àè¹Õ±°($%ôì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”ÍÑ•É•¼…µ•É„‰…Í•½¸Ñ¡”¥Ù•¸Á•ÉÍÁ•Ñ¥Ù”…µ•É„¸($€¨($€¨Á…É…´íA•ÉÍÁ•Ñ¥Ù•…µ•É…ô…µ•É„€´Q¡”Á•ÉÍÁ•Ñ¥Ù”…µ•É„¸($€¨¼(%ÕÁ‘…Ñ” …µ•É„€¤ì(($%½¹ÍÐ…¡”€ôÑ¡¥Ì¹}…¡”ì(($%½¹ÍÐ¹••‘ÍUÁ‘…Ñ”€ô…¡”¹™½ÕÌ€„ôô…µ•É„¹™½ÕÌñð…¡”¹™½Ø€„ôô…µ•É„¹™½Øñð($$%…¡”¹…ÍÁ•Ð€„ôô…µ•É„¹…ÍÁ•Ð€¨Ñ¡¥Ì¹…ÍÁ•Ðñð…¡”¹¹•…È€„ôô…µ•É„¹¹•…Èñð($$%…¡”¹™…È€„ôô…µ•É„¹™…Èñð…¡”¹é½½´€„ôô…µ•É„¹é½½´ñð…¡”¹•å•M•À€„ôôÑ¡¥Ì¹•å•M•Àì(($%¥˜€ ¹••‘ÍUÁ‘…Ñ”€¤ì(($$%…¡”¹™½ÕÌ€ô…µ•É„¹™½ÕÌì($$%…¡”¹™½Ø€ô…µ•É„¹™½Øì($$%…¡”¹…ÍÁ•Ð€ô…µ•É„¹…ÍÁ•Ð€¨Ñ¡¥Ì¹…ÍÁ•Ðì($$%…¡”¹¹•…È€ô…µ•É„¹¹•…Èì($$%…¡”¹™…È€ô…µ•É„¹™…Èì($$%…¡”¹é½½´€ô…µ•É„¹é½½´ì($$%…¡”¹•å•M•À€ôÑ¡¥Ì¹•å•M•Àì(($$$¼¼=™˜µ…á¥ÌÍÑ•É•½Í½Á¥Œ•™™•Ð‰…Í•½¸($$$¼¼¡ÑÑÀè¼½Á…Õ±‰½ÕÉ­”¹¹•Ð½ÍÑ•É•½É…Á¡¥Ì½ÍÑ•É•½É•¹‘•È¼(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä …µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì($$%½¹ÍÐ•å•M•Á!…±˜€ô…¡”¹•å•M•À€¼€Èì($$%½¹ÍÐ•å•M•Á=¹AÉ½©•Ñ¥½¸€ô•å•M•Á!…±˜€¨…¡”¹¹•…È€¼…¡”¹™½ÕÌì($$%½¹ÍÐåµ…à€ô€ …¡”¹¹•…È€¨5…Ñ ¹Ñ…¸ ÉI€¨…¡”¹™½Ø€¨€À¸Ô€¤€¤€¼…¡”¹é½½´ì($$%±•Ðáµ¥¸°áµ…àì(($$$¼¼ÑÉ…¹Í±…Ñ”á=™™Í•Ð(($$%}•å•1•™Ð¹•±•µ•¹ÑÍl€ÄÈt€ô€´•å•M•Á!…±˜ì($$%}•å•I¥¡Ð¹•±•µ•¹ÑÍl€ÄÈt€ô•å•M•Á!…±˜ì(($$$¼¼™½È±•™Ð•å”(($$%áµ¥¸€ô€´åµ…à€¨…¡”¹…ÍÁ•Ð€¬•å•M•Á=¹AÉ½©•Ñ¥½¸ì($$%áµ…à€ôåµ…à€¨…¡”¹…ÍÁ•Ð€¬•å•M•Á=¹AÉ½©•Ñ¥½¸ì(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€Àt€ô€È€¨…¡”¹¹•…È€¼€ áµ…à€´áµ¥¸€¤ì($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€àt€ô€ áµ…à€¬áµ¥¸€¤€¼€ áµ…à€´áµ¥¸€¤ì(($$%Ñ¡¥Ì¹…µ•É…0¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä }ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì(($$$¼¼™½ÈÉ¥¡Ð•å”(($$%áµ¥¸€ô€´åµ…à€¨…¡”¹…ÍÁ•Ð€´•å•M•Á=¹AÉ½©•Ñ¥½¸ì($$%áµ…à€ôåµ…à€¨…¡”¹…ÍÁ•Ð€´•å•M•Á=¹AÉ½©•Ñ¥½¸ì(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€Àt€ô€È€¨…¡”¹¹•…È€¼€ áµ…à€´áµ¥¸€¤ì($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€àt€ô€ áµ…à€¬áµ¥¸€¤€¼€ áµ…à€´áµ¥¸€¤ì(($$%Ñ¡¥Ì¹…µ•É…H¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä }ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì(($%ô(($%Ñ¡¥Ì¹…µ•É…0¹µ…ÑÉ¥á]½É±¹½Áä …µ•É„¹µ…ÑÉ¥á]½É±€¤¹µÕ±Ñ¥Á±ä }•å•1•™Ð€¤ì($%Ñ¡¥Ì¹…µ•É…H¹µ…ÑÉ¥á]½É±¹½Áä …µ•É„¹µ…ÑÉ¥á]½É±€¤¹µÕ±Ñ¥Á±ä }•å•I¥¡Ð€¤ì((%ô()ô((¼¨¨(€¨Q¡¥ÌÑåÁ”½˜…µ•É„…¸‰”ÕÍ•¥¸½É‘•ÈÑ¼•™™¥¥•¹Ñ±äÉ•¹‘•È„Í•¹”Ý¥Ñ „(€¨ÁÉ•‘•™¥¹•Í•Ð½˜…µ•É…Ì¸Q¡¥Ì¥Ì…¸¥µÁ½ÉÑ…¹ÐÁ•É™½Éµ…¹”…ÍÁ•Ð™½È(€¨É•¹‘•É¥¹œYHÍ•¹•Ì¸(€¨(€¨¸¥¹ÍÑ…¹”½˜ÉÉ…å…µ•É…€…±Ý…åÌ¡…Ì…¸…ÉÉ…ä½˜ÍÕˆ…µ•É…Ì¸%ÐÌµ…¹‘…Ñ½Éä(€¨Ñ¼‘•™¥¹”™½È•… ÍÕˆ…µ•É„Ñ¡”Ù¥•ÝÁ½ÉÑ€ÁÉ½Á•ÉÑäÝ¡¥ ‘•Ñ•Éµ¥¹•ÌÑ¡”(€¨Á…ÉÐ½˜Ñ¡”Ù¥•ÝÁ½ÉÐÑ¡…Ð¥ÌÉ•¹‘•É•Ý¥Ñ Ñ¡¥Ì…µ•É„¸(€¨(€¨…Õµ•¹ÑÌA•ÉÍÁ•Ñ¥Ù•…µ•É„(€¨¼)±…ÍÌÉÉ…å…µ•É„•áÑ•¹‘ÌA•ÉÍÁ•Ñ¥Ù•…µ•É„ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…ÉÉ…ä…µ•É„¸($€¨($€¨Á…É…´íÉÉ…äñA•ÉÍÁ•Ñ¥Ù•…µ•É„ùôm…ÉÉ…äõmut€´¸…ÉÉ…ä½˜Á•ÉÍÁ•Ñ¥Ù”ÍÕˆ…µ•É…Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È …ÉÉ…ä€ômt€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍÉÉ…å…µ•É„€ôÑÉÕ”ì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¡¥Ì…µ•É„¥ÌÕÍ•Ý¥Ñ µÕ±Ñ¥Ù¥•ÜÉ•¹‘•É¥¹œ½È¹½Ð¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹¥Í5Õ±Ñ¥Y¥•Ý…µ•É„€ô™…±Í”ì(($$¼¨¨($$€¨¸…ÉÉ…ä½˜Á•ÉÍÁ•Ñ¥Ù”ÍÕˆ…µ•É…Ì¸($$€¨($$€¨ÑåÁ”íÉÉ…äñA•ÉÍÁ•Ñ¥Ù•…µ•É„ùô($$€¨¼($%Ñ¡¥Ì¹…µ•É…Ì€ô…ÉÉ…äì((%ô()ô((¼¨¨(€¨±…ÍÌ™½È­••Á¥¹œÑÉ…¬½˜Ñ¥µ”¸(€¨¼)±…ÍÌ±½¬ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±½¬¸($€¨($€¨Á…É…´í‰½½±•…¹ôm…ÕÑ½MÑ…ÉÐõÑÉÕ•t€´]¡•Ñ¡•ÈÑ¼…ÕÑ½µ…Ñ¥…±±äÍÑ…ÉÐÑ¡”±½¬Ý¡•¸($€¨•Ñ•±Ñ„ ¥€¥Ì…±±•™½ÈÑ¡”™¥ÉÍÐÑ¥µ”¸($€¨¼(%½¹ÍÑÉÕÑ½È …ÕÑ½MÑ…ÉÐ€ôÑÉÕ”€¤ì(($$¼¨¨($$€¨%˜Í•ÐÑ¼ÑÉÕ•€°Ñ¡”±½¬ÍÑ…ÉÑÌ…ÕÑ½µ…Ñ¥…±±äÝ¡•¸•Ñ•±Ñ„ ¥€¥Ì…±±•($$€¨™½ÈÑ¡”™¥ÉÍÐÑ¥µ”¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€ô…ÕÑ½MÑ…ÉÐì(($$¼¨¨($$€¨!½±‘ÌÑ¡”Ñ¥µ”…ÐÝ¡¥ Ñ¡”±½¬ÌÍÑ…ÉÐ ¥€µ•Ñ¡½Ý…Ì±…ÍÐ…±±•¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô€Àì(($$¼¨¨($$€¨!½±‘ÌÑ¡”Ñ¥µ”…ÐÝ¡¥ Ñ¡”±½¬ÌÍÑ…ÉÐ ¥€°•Ñ±…ÁÍ•‘Q¥µ” ¥€½È($$€¨•Ñ•±Ñ„ ¥€µ•Ñ¡½‘ÌÝ•É”±…ÍÐ…±±•¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹½±‘Q¥µ”€ô€Àì(($$¼¨¨($$€¨-••ÁÌÑÉ…¬½˜Ñ¡”Ñ½Ñ…°Ñ¥µ”Ñ¡…ÐÑ¡”±½¬¡…Ì‰••¸ÉÕ¹¹¥¹œ¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€ô€Àì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¡”±½¬¥ÌÉÕ¹¹¥¹œ½È¹½Ð¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ô™…±Í”ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌÑ¡”±½¬¸]¡•¸…ÕÑ½MÑ…ÉÑ€¥ÌÍ•ÐÑ¼ÑÉÕ•€°Ñ¡”µ•Ñ¡½¥Ì…ÕÑ½µ…Ñ¥…±±ä($€¨…±±•‰äÑ¡”±…ÍÌ¸($€¨¼(%ÍÑ…ÉÐ ¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(($%Ñ¡¥Ì¹½±‘Q¥µ”€ôÑ¡¥Ì¹ÍÑ…ÉÑQ¥µ”ì($%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€ô€Àì($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ôÑÉÕ”ì((%ô(($¼¨¨($€¨MÑ½ÁÌÑ¡”±½¬¸($€¨¼(%ÍÑ½À ¤ì(($%Ñ¡¥Ì¹•Ñ±…ÁÍ•‘Q¥µ” ¤ì($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ô™…±Í”ì($%Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€ô™…±Í”ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•±…ÁÍ•Ñ¥µ”¥¸Í•½¹‘Ì¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”•±…ÁÍ•Ñ¥µ”¸($€¨¼(%•Ñ±…ÁÍ•‘Q¥µ” ¤ì(($%Ñ¡¥Ì¹•Ñ•±Ñ„ ¤ì($%É•ÑÕÉ¸Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”‘•±Ñ„Ñ¥µ”¥¸Í•½¹‘Ì¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”‘•±Ñ„Ñ¥µ”¸($€¨¼(%•Ñ•±Ñ„ ¤ì(($%±•Ð‘¥™˜€ô€Àì(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€˜˜€„Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€¤ì(($$%Ñ¡¥Ì¹ÍÑ…ÉÐ ¤ì($$%É•ÑÕÉ¸€Àì(($%ô(($%¥˜€ Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€¤ì(($$%½¹ÍÐ¹•ÝQ¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(($$%‘¥™˜€ô€ ¹•ÝQ¥µ”€´Ñ¡¥Ì¹½±‘Q¥µ”€¤€¼€ÄÀÀÀì($$%Ñ¡¥Ì¹½±‘Q¥µ”€ô¹•ÝQ¥µ”ì(($$%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€¬ô‘¥™˜ì(($%ô(($%É•ÑÕÉ¸‘¥™˜ì((%ô()ô()½¹ÍÐ}Á½Í¥Ñ¥½¸Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÅÕ…Ñ•É¹¥½¸Ä€ô€¼©}}AUI}|¨¼¹•ÜEÕ…Ñ•É¹¥½¸ ¤ì)½¹ÍÐ}Í…±”Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()½¹ÍÐ}™½ÉÝ…É€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÕÀ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨Q¡”±…ÍÌÉ•ÁÉ•Í•¹ÑÌ„Ù¥ÉÑÕ…°±¥ÍÑ•¹•È½˜Ñ¡”…±°Á½Í¥Ñ¥½¹…°…¹¹½¸µÁ½Í¥Ñ¥½¹…°…Õ‘¥¼•™™•ÑÌ(€¨¥¸Ñ¡”Í•¹”¸Ñ¡É•”¹©Ì…ÁÁ±¥…Ñ¥½¸ÕÍÕ…±±äÉ•…Ñ•Ì„Í¥¹±”±¥ÍÑ•¹•È¸%Ð¥Ì„µ…¹‘…Ñ½Éä(€¨½¹ÍÑÉÕÑ½ÈÁ…É…µ•Ñ•È™½È…Õ‘¥½Ì•¹Ñ¥Ñ¥•Ì±¥­”í±¥¹¬Õ‘¥½ô…¹í±¥¹¬A½Í¥Ñ¥½¹…±Õ‘¥½ô¸(€¨(€¨%¸µ½ÍÐ…Í•Ì°Ñ¡”±¥ÍÑ•¹•È½‰©•Ð¥Ì„¡¥±½˜Ñ¡”…µ•É„¸M¼Ñ¡”€ÍÑÉ…¹Í™½Éµ…Ñ¥½¸½˜Ñ¡”(€¨…µ•É„É•ÁÉ•Í•¹ÑÌÑ¡”€ÍÑÉ…¹Í™½Éµ…Ñ¥½¸½˜Ñ¡”±¥ÍÑ•¹•È¸(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌÕ‘¥½1¥ÍÑ•¹•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…Õ‘¥¼±¥ÍÑ•¹•È¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‘¥½1¥ÍÑ•¹•Èœì(($$¼¨¨($$€¨Q¡”¹…Ñ¥Ù”…Õ‘¥¼½¹Ñ•áÐ¸($$€¨($$€¨ÑåÁ”íÕ‘¥½½¹Ñ•áÑô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹½¹Ñ•áÐ€ôÕ‘¥½½¹Ñ•áÐ¹•Ñ½¹Ñ•áÐ ¤ì(($$¼¨¨($$€¨Q¡”…¥¸¹½‘”ÕÍ•™½ÈÙ½±Õµ”½¹ÑÉ½°¸($$€¨($$€¨ÑåÁ”í…¥¹9½‘•ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹…¥¸€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•…¥¸ ¤ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($$¼¨¨($$€¨¸½ÁÑ¥½¹…°™¥±Ñ•È¸($$€¨($$€¨•™¥¹•Ù¥„í±¥¹¬Õ‘¥½1¥ÍÑ•¹•ÈÍ•Ñ¥±Ñ•Éô¸($$€¨($$€¨ÑåÁ”ìýÕ‘¥½9½‘•ô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹™¥±Ñ•È€ô¹Õ±°ì(($$¼¨¨($$€¨Q¥µ”‘•±Ñ„Ù…±Õ•ÌÉ•ÅÕ¥É•™½È±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” ¥€ÕÍ…”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹Ñ¥µ••±Ñ„€ô€Àì(($$¼¼ÁÉ¥Ù…Ñ”(($%Ñ¡¥Ì¹}±½¬€ô¹•Ü±½¬ ¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”±¥ÍÑ•¹•ÈÌ¥¹ÁÕÐ¹½‘”¸($€¨($€¨Q¡¥Ìµ•Ñ¡½¥ÌÕÍ•‰ä½Ñ¡•È…Õ‘¥¼¹½‘•ÌÑ¼½¹¹•ÐÑ¼Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨($€¨É•ÑÕÉ¸í…¥¹9½‘•ôQ¡”¥¹ÁÕÐ¹½‘”¸($€¨¼(%•Ñ%¹ÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸ì((%ô(($¼¨¨($€¨I•µ½Ù•ÌÑ¡”ÕÉÉ•¹Ð™¥±Ñ•È™É½´Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½1¥ÍÑ•¹•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨¼(%É•µ½Ù•¥±Ñ•È ¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•È€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È€ô¹Õ±°ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹ÐÍ•Ð™¥±Ñ•È¸($€¨($€¨É•ÑÕÉ¸ìýÕ‘¥½9½‘•ôQ¡”™¥±Ñ•È¸($€¨¼(%•Ñ¥±Ñ•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±Ñ•Èì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸™¥±Ñ•ÈÑ¼Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨($€¨Á…É…´íÕ‘¥½9½‘•ôÙ…±Õ”€´Q¡”™¥±Ñ•ÈÑ¼Í•Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½1¥ÍÑ•¹•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨¼(%Í•Ñ¥±Ñ•È Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•È€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%ô(($%Ñ¡¥Ì¹™¥±Ñ•È€ôÙ…±Õ”ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($%Ñ¡¥Ì¹™¥±Ñ•È¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”…ÁÁ±¥…Ñ¥½¹Ìµ…ÍÑ•ÈÙ½±Õµ”¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”µ…ÍÑ•ÈÙ½±Õµ”¸($€¨¼(%•Ñ5…ÍÑ•ÉY½±Õµ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸¹…¥¸¹Ù…±Õ”ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”…ÁÁ±¥…Ñ¥½¹Ìµ…ÍÑ•ÈÙ½±Õµ”¸Q¡¥ÌÙ½±Õµ”Í•ÑÑ¥¹œ…™™•ÑÌ($€¨…±°…Õ‘¥¼¹½‘•Ì¥¸Ñ¡”Í•¹”¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”µ…ÍÑ•ÈÙ½±Õµ”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½1¥ÍÑ•¹•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥ÍÑ•¹•È¸($€¨¼(%Í•Ñ5…ÍÑ•ÉY½±Õµ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹…¥¸¹…¥¸¹Í•ÑQ…É•ÑÑQ¥µ” Ù…±Õ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ±¥ÍÑ•¹•È€ôÑ¡¥Ì¹½¹Ñ•áÐ¹±¥ÍÑ•¹•Èì(($%Ñ¡¥Ì¹Ñ¥µ••±Ñ„€ôÑ¡¥Ì¹}±½¬¹•Ñ•±Ñ„ ¤ì(($%Ñ¡¥Ì¹µ…ÑÉ¥á]½É±¹‘•½µÁ½Í” }Á½Í¥Ñ¥½¸Ä°}ÅÕ…Ñ•É¹¥½¸Ä°}Í…±”Ä€¤ì(($$¼¼Ñ¡”¥¹¥Ñ¥…°™½ÉÝ…É…¹ÕÀ‘¥É•Ñ¥½¹ÌµÕÍÐ‰”½ÉÑ¡½½¹…°($%}™½ÉÝ…É¹Í•Ð €À°€À°€´Ä€¤¹…ÁÁ±åEÕ…Ñ•É¹¥½¸ }ÅÕ…Ñ•É¹¥½¸Ä€¤ì($%}ÕÀ¹Í•Ð €À°€Ä°€À€¤¹…ÁÁ±åEÕ…Ñ•É¹¥½¸ }ÅÕ…Ñ•É¹¥½¸Ä€¤ì(($%¥˜€ ±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹`€¤ì(($$$¼¼½‘”Á…Ñ ™½È¡É½µ”€¡Í•”€ŒÄÐÌäÌ¤(($$%½¹ÍÐ•¹‘Q¥µ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬Ñ¡¥Ì¹Ñ¥µ••±Ñ„ì(($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹è°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }™½ÉÝ…É¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }™½ÉÝ…É¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }™½ÉÝ…É¹è°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁ`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }ÕÀ¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁd¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }ÕÀ¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁh¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }ÕÀ¹è°•¹‘Q¥µ”€¤ì(($%ô•±Í”ì(($$%±¥ÍÑ•¹•È¹Í•ÑA½Í¥Ñ¥½¸ }Á½Í¥Ñ¥½¸Ä¹à°}Á½Í¥Ñ¥½¸Ä¹ä°}Á½Í¥Ñ¥½¸Ä¹è€¤ì($$%±¥ÍÑ•¹•È¹Í•Ñ=É¥•¹Ñ…Ñ¥½¸ }™½ÉÝ…É¹à°}™½ÉÝ…É¹ä°}™½ÉÝ…É¹è°}ÕÀ¹à°}ÕÀ¹ä°}ÕÀ¹è€¤ì(($%ô((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„¹½¸µÁ½Í¥Ñ¥½¹…°€ ±½‰…°€¤…Õ‘¥¼½‰©•Ð¸(€¨(€¨Q¡¥Ì…¹É•±…Ñ•…Õ‘¥¼µ½‘Õ±•Ìµ…­”ÕÍ”½˜Ñ¡”m]•ˆÕ‘¥¼A%uí±¥¹¬¡ÑÑÁÌè¼½ÝÝÜ¹ÜÌ¹½Éœ½QH½Ý•‰…Õ‘¥¼´Ä¸Ä½ô¸(€¨(€¨©Ì(€¨€¼¼É•…Ñ”…¸Õ‘¥½1¥ÍÑ•¹•È…¹…‘¥ÐÑ¼Ñ¡”…µ•É„(€¨½¹ÍÐ±¥ÍÑ•¹•È€ô¹•ÜQ!I¹Õ‘¥½1¥ÍÑ•¹•È ¤ì(€¨…µ•É„¹…‘ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼É•…Ñ”„±½‰…°…Õ‘¥¼Í½ÕÉ”(€¨½¹ÍÐÍ½Õ¹€ô¹•ÜQ!I¹Õ‘¥¼ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼±½…„Í½Õ¹…¹Í•Ð¥Ð…ÌÑ¡”Õ‘¥¼½‰©•ÐÌ‰Õ™™•È(€¨½¹ÍÐ…Õ‘¥½1½…‘•È€ô¹•ÜQ!I¹Õ‘¥½1½…‘•È ¤ì(€¨…Õ‘¥½1½…‘•È¹±½… €Í½Õ¹‘Ì½…µ‰¥•¹Ð¹½œœ°™Õ¹Ñ¥½¸ ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•Ñ	Õ™™•È ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•Ñ1½½À ÑÉÕ”€¤ì(€¨€%Í½Õ¹¹Í•ÑY½±Õµ” €À¸Ô€¤ì(€¨€%Í½Õ¹¹Á±…ä ¤ì(€¨ô¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌÕ‘¥¼•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…Õ‘¥¼¸($€¨($€¨Á…É…´íÕ‘¥½1¥ÍÑ•¹•Éô±¥ÍÑ•¹•È€´Q¡”±½‰…°…Õ‘¥¼±¥ÍÑ•¹•È¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥ÍÑ•¹•È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‘¥¼œì(($$¼¨¨($$€¨Q¡”±½‰…°…Õ‘¥¼±¥ÍÑ•¹•È¸($$€¨($$€¨ÑåÁ”íÕ‘¥½1¥ÍÑ•¹•Éô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹±¥ÍÑ•¹•È€ô±¥ÍÑ•¹•Èì(($$¼¨¨($$€¨Q¡”…Õ‘¥¼½¹Ñ•áÐ¸($$€¨($$€¨ÑåÁ”íÕ‘¥½½¹Ñ•áÑô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹½¹Ñ•áÐ€ô±¥ÍÑ•¹•È¹½¹Ñ•áÐì(($$¼¨¨($$€¨Q¡”…¥¸¹½‘”ÕÍ•™½ÈÙ½±Õµ”½¹ÑÉ½°¸($$€¨($$€¨ÑåÁ”í…¥¹9½‘•ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹…¥¸€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•…¥¸ ¤ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð ±¥ÍÑ•¹•È¹•Ñ%¹ÁÕÐ ¤€¤ì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¼ÍÑ…ÉÐÁ±…å‰…¬…ÕÑ½µ…Ñ¥…±±ä½È¹½Ð¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹…ÕÑ½Á±…ä€ô™…±Í”ì(($$¼¨¨($$€¨É•™•É•¹”Ñ¼…¸…Õ‘¥¼‰Õ™™•È¸($$€¨($$€¨•™¥¹•Ù¥„í±¥¹¬Õ‘¥¼Í•Ñ	Õ™™•Éô¸($$€¨($$€¨ÑåÁ”ìýÕ‘¥½	Õ™™•Éô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹‰Õ™™•È€ô¹Õ±°ì(($$¼¨¨($$€¨5½‘¥™äÁ¥Ñ °µ•…ÍÕÉ•¥¸•¹ÑÌ¸€¬¼´€ÄÀÀ¥Ì„Í•µ¥Ñ½¹”¸($$€¨€¬¼´€ÄÈÀÀ¥Ì…¸½Ñ…Ù”¸($$€¨($$€¨•™¥¹•Ù¥„í±¥¹¬Õ‘¥¼Í•Ñ•ÑÕ¹•ô¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹‘•ÑÕ¹”€ô€Àì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¡”…Õ‘¥¼Í¡½Õ±±½½À½È¹½Ð¸($$€¨($$€¨•™¥¹•Ù¥„í±¥¹¬Õ‘¥¼Í•Ñ1½½Áô¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹±½½À€ô™…±Í”ì(($$¼¨¨($$€¨•™¥¹•ÌÝ¡•É”¥¸Ñ¡”…Õ‘¥¼‰Õ™™•ÈÑ¡”É•Á±…äÍ¡½Õ±($$€¨ÍÑ…ÉÐ°¥¸Í•½¹‘Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹±½½ÁMÑ…ÉÐ€ô€Àì(($$¼¨¨($$€¨•™¥¹•ÌÝ¡•É”¥¸Ñ¡”…Õ‘¥¼‰Õ™™•ÈÑ¡”É•Á±…äÍ¡½Õ±($$€¨ÍÑ½À°¥¸Í•½¹‘Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹±½½Á¹€ô€Àì(($$¼¨¨($$€¨¸½™™Í•ÐÑ¼Ñ¡”Ñ¥µ”Ý¥Ñ¡¥¸Ñ¡”…Õ‘¥¼‰Õ™™•ÈÑ¡”Á±…å‰…¬($$€¨Í¡½Õ±‰•¥¸°¥¸Í•½¹‘Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹½™™Í•Ð€ô€Àì(($$¼¨¨($$€¨=Ù•ÉÉ¥‘•ÌÑ¡”‘•™…Õ±Ð‘ÕÉ…Ñ¥½¸½˜Ñ¡”…Õ‘¥¼¸($$€¨($$€¨ÑåÁ”íÕ¹‘•™¥¹•‘ñ¹Õµ‰•Éô($$€¨‘•™…Õ±ÐÕ¹‘•™¥¹•($$€¨¼($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ôÕ¹‘•™¥¹•ì(($$¼¨¨($$€¨Q¡”Á±…å‰…¬ÍÁ••¸($$€¨($$€¨•™¥¹•Ù¥„í±¥¹¬Õ‘¥¼Í•ÑA±…å‰…­I…Ñ•ô¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€ô€Äì(($$¼¨¨($$€¨%¹‘¥…Ñ•ÌÝ¡•Ñ¡•ÈÑ¡”…Õ‘¥¼¥ÌÁ±…å¥¹œ½È¹½Ð¸($$€¨($$€¨Q¡¥Ì™±…œÝ¥±°‰”…ÕÑ½µ…Ñ¥…±±äÍ•ÐÝ¡•¸ÕÍ¥¹œí±¥¹¬Õ‘¥¼Á±…åô°($$€¨í±¥¹¬Õ‘¥¼Á…ÕÍ•ô°í±¥¹¬Õ‘¥¼ÍÑ½Áô¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì(($$¼¨¨($$€¨%¹‘¥…Ñ•ÌÝ¡•Ñ¡•ÈÑ¡”…Õ‘¥¼Á±…å‰…¬…¸‰”½¹ÑÉ½±±•($$€¨Ý¥Ñ µ•Ñ¡½±¥­”í±¥¹¬Õ‘¥¼Á±…åô½Èí±¥¹¬Õ‘¥¼Á…ÕÍ•ô¸($$€¨($$€¨Q¡¥Ì™±…œÝ¥±°‰”…ÕÑ½µ…Ñ¥…±±äÍ•ÐÝ¡•¸…Õ‘¥¼Í½ÕÉ•Ì…É”($$€¨‘•™¥¹•¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôÑÉÕ”ì(($$¼¨¨($$€¨!½±‘Ì„É•™•É•¹”Ñ¼Ñ¡”ÕÉÉ•¹Ð…Õ‘¥¼Í½ÕÉ”¸($$€¨($$€¨Q¡”ÁÉ½Á•ÉÑä¥Ì…ÕÑ½µ…Ñ¥…±±ä‰ä½¹”½˜Ñ¡”Í•Ð¨ ¥€µ•Ñ¡½‘Ì¸($$€¨($$€¨ÑåÁ”ìýÕ‘¥½9½‘•ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹Í½ÕÉ”€ô¹Õ±°ì(($$¼¨¨($$€¨•™¥¹•ÌÑ¡”Í½ÕÉ”ÑåÁ”¸($$€¨($$€¨Q¡”ÁÉ½Á•ÉÑä¥Ì…ÕÑ½µ…Ñ¥…±±ä‰ä½¹”½˜Ñ¡”Í•Ð¨ ¥€µ•Ñ¡½‘Ì¸($$€¨($$€¨ÑåÁ”ì •µÁÑäð…Õ‘¥½9½‘”ðµ•‘¥…9½‘”ðµ•‘¥…MÑÉ•…µ9½‘”ð‰Õ™™•Èœ¥ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±Ð€•µÁÑäœ($$€¨¼($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€•µÁÑäœì(($%Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð€ô€Àì($%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ô€Àì($%Ñ¡¥Ì¹}½¹¹•Ñ•€ô™…±Í”ì(($$¼¨¨($$€¨…¸‰”ÕÍ•Ñ¼…ÁÁ±ä„Ù…É¥•Ñä½˜±½Üµ½É‘•È™¥±Ñ•ÉÌÑ¼É•…Ñ”($$€¨µ½É”½µÁ±•àÍ½Õ¹•™™•ÑÌ”¹œ¸Ù¥„	¥ÅÕ…‘¥±Ñ•É9½‘•€¸($$€¨($$€¨Q¡”ÁÉ½Á•ÉÑä¥Ì…ÕÑ½µ…Ñ¥…±±äÍ•Ð‰äí±¥¹¬Õ‘¥¼Í•Ñ¥±Ñ•ÉÍô¸($$€¨($$€¨ÑåÁ”íÉÉ…äñÕ‘¥½9½‘”ùô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ômtì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”½ÕÑÁÕÐ…Õ‘¥¼¹½‘”¸($€¨($€¨É•ÑÕÉ¸í…¥¹9½‘•ôQ¡”½ÕÑÁÕÐ¹½‘”¸($€¨¼(%•Ñ=ÕÑÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸…Õ‘¥¼¹½‘”…ÌÑ¡”Í½ÕÉ”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨í±¥¹¬Õ‘¥¼Í½ÕÉ•QåÁ•ô¥ÌÍ•ÐÑ¼…Õ‘¥½9½‘•€…¹í±¥¹¬Õ‘¥¼¡…ÍA±…å‰…­½¹ÑÉ½±ôÑ¼™…±Í•€¸($€¨($€¨Á…É…´íÕ‘¥½9½‘•ô…Õ‘¥½9½‘”€´Q¡”…Õ‘¥¼¹½‘”±¥­”…¸¥¹ÍÑ…¹”½˜=Í¥±±…Ñ½É9½‘•€¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ9½‘•M½ÕÉ” …Õ‘¥½9½‘”€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€…Õ‘¥½9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ô…Õ‘¥½9½‘”ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸µ•‘¥„•±•µ•¹Ð…ÌÑ¡”Í½ÕÉ”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨í±¥¹¬Õ‘¥¼Í½ÕÉ•QåÁ•ô¥ÌÍ•ÐÑ¼µ•‘¥…9½‘•€…¹í±¥¹¬Õ‘¥¼¡…ÍA±…å‰…­½¹ÑÉ½±ôÑ¼™…±Í•€¸($€¨($€¨Á…É…´í!Q515•‘¥…±•µ•¹Ñôµ•‘¥…±•µ•¹Ð€´Q¡”µ•‘¥„•±•µ•¹Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ5•‘¥…±•µ•¹ÑM½ÕÉ” µ•‘¥…±•µ•¹Ð€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€µ•‘¥…9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•5•‘¥…±•µ•¹ÑM½ÕÉ” µ•‘¥…±•µ•¹Ð€¤ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸µ•‘¥„ÍÑÉ•…´…ÌÑ¡”Í½ÕÉ”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨í±¥¹¬Õ‘¥¼Í½ÕÉ•QåÁ•ô¥ÌÍ•ÐÑ¼µ•‘¥…MÑÉ•…µ9½‘•€…¹í±¥¹¬Õ‘¥¼¡…ÍA±…å‰…­½¹ÑÉ½±ôÑ¼™…±Í•€¸($€¨($€¨Á…É…´í5•‘¥…MÑÉ•…µôµ•‘¥…MÑÉ•…´€´Q¡”µ•‘¥„ÍÑÉ•…´¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ5•‘¥…MÑÉ•…µM½ÕÉ” µ•‘¥…MÑÉ•…´€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€µ•‘¥…MÑÉ•…µ9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•5•‘¥…MÑÉ•…µM½ÕÉ” µ•‘¥…MÑÉ•…´€¤ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸…Õ‘¥¼‰Õ™™•È…ÌÑ¡”Í½ÕÉ”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨í±¥¹¬Õ‘¥¼Í½ÕÉ•QåÁ•ô¥ÌÍ•ÐÑ¼‰Õ™™•É€…¹í±¥¹¬Õ‘¥¼¡…ÍA±…å‰…­½¹ÑÉ½±ôÑ¼ÑÉÕ•€¸($€¨($€¨Á…É…´íÕ‘¥½	Õ™™•Éô…Õ‘¥½	Õ™™•È€´Q¡”…Õ‘¥¼‰Õ™™•È¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ	Õ™™•È …Õ‘¥½	Õ™™•È€¤ì(($%Ñ¡¥Ì¹‰Õ™™•È€ô…Õ‘¥½	Õ™™•Èì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€‰Õ™™•Èœì(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½Á±…ä€¤Ñ¡¥Ì¹Á±…ä ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨MÑ…ÉÑÌÑ¡”Á±…å‰…¬½˜Ñ¡”…Õ‘¥¼¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨Á…É…´í¹Õµ‰•Éôm‘•±…äôÁt€´Q¡”‘•±…ä°¥¸Í•½¹‘Ì°…ÐÝ¡¥ Ñ¡”…Õ‘¥¼Í¡½Õ±ÍÑ…ÉÐÁ±…å¥¹œ¸($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Á±…ä ‘•±…ä€ô€À€¤ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÕ‘¥¼¥Ì…±É•…‘äÁ±…å¥¹œ¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬‘•±…äì(($%½¹ÍÐÍ½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•	Õ™™•ÉM½ÕÉ” ¤ì($%Í½ÕÉ”¹‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•Èì($%Í½ÕÉ”¹±½½À€ôÑ¡¥Ì¹±½½Àì($%Í½ÕÉ”¹±½½ÁMÑ…ÉÐ€ôÑ¡¥Ì¹±½½ÁMÑ…ÉÐì($%Í½ÕÉ”¹±½½Á¹€ôÑ¡¥Ì¹±½½Á¹ì($%Í½ÕÉ”¹½¹•¹‘•€ôÑ¡¥Ì¹½¹¹‘•¹‰¥¹ Ñ¡¥Ì€¤ì($%Í½ÕÉ”¹ÍÑ…ÉÐ Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð°Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€¬Ñ¡¥Ì¹½™™Í•Ð°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í½ÕÉ”€ôÍ½ÕÉ”ì(($%Ñ¡¥Ì¹Í•Ñ•ÑÕ¹” Ñ¡¥Ì¹‘•ÑÕ¹”€¤ì($%Ñ¡¥Ì¹Í•ÑA±…å‰…­I…Ñ” Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹½¹¹•Ð ¤ì((%ô(($¼¨¨($€¨A…ÕÍ•ÌÑ¡”Á±…å‰…¬½˜Ñ¡”…Õ‘¥¼¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Á…ÕÍ” ¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$$¼¼ÕÁ‘…Ñ”ÕÉÉ•¹ÐÁÉ½É•ÍÌ(($$%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€¬ô5…Ñ ¹µ…à Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€´Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð°€À€¤€¨Ñ¡¥Ì¹Á±…å‰…­I…Ñ”ì(($$%¥˜€ Ñ¡¥Ì¹±½½À€ôôôÑÉÕ”€¤ì(($$$$¼¼•¹ÍÕÉ”}ÁÉ½É•ÍÌ‘½•Ì¹½Ð•á••‘ÕÉ…Ñ¥½¸Ý¥Ñ ±½½Á•…Õ‘¥½Ì(($$$%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ôÑ¡¥Ì¹}ÁÉ½É•ÍÌ€”€ Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸ñðÑ¡¥Ì¹‰Õ™™•È¹‘ÕÉ…Ñ¥½¸€¤ì(($$%ô(($$%Ñ¡¥Ì¹Í½ÕÉ”¹ÍÑ½À ¤ì($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹•¹‘•€ô¹Õ±°ì(($$%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨MÑ½ÁÌÑ¡”Á±…å‰…¬½˜Ñ¡”…Õ‘¥¼¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨Á…É…´í¹Õµ‰•Éôm‘•±…äôÁt€´Q¡”‘•±…ä°¥¸Í•½¹‘Ì°…ÐÝ¡¥ Ñ¡”…Õ‘¥¼Í¡½Õ±ÍÑ½ÀÁ±…å¥¹œ¸($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%ÍÑ½À ‘•±…ä€ô€À€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ô€Àì(($%¥˜€ Ñ¡¥Ì¹Í½ÕÉ”€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹ÍÑ½À Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬‘•±…ä€¤ì($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹•¹‘•€ô¹Õ±°ì(($%ô(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½¹¹•ÑÌÑ¼Ñ¡”…Õ‘¥¼Í½ÕÉ”¸Q¡¥Ì¥ÌÕÍ•¥¹Ñ•É¹…±±ä½¸($€¨¥¹¥Ñ¥…±¥Í…Ñ¥½¸…¹Ý¡•¸Í•ÑÑ¥¹œ€¼É•µ½Ù¥¹œ™¥±Ñ•ÉÌ¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%½¹¹•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €ø€À€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl€Àt€¤ì(($$%™½È€ ±•Ð¤€ô€Ä°°€ôÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤€´€Ät¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤t€¤ì(($$%ô(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÍlÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €´€Ät¹½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô(($%Ñ¡¥Ì¹}½¹¹•Ñ•€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨¥Í½¹¹•ÑÌÑ¼Ñ¡”…Õ‘¥¼Í½ÕÉ”¸Q¡¥Ì¥ÌÕÍ•¥¹Ñ•É¹…±±ä½¸($€¨¥¹¥Ñ¥…±¥Í…Ñ¥½¸…¹Ý¡•¸Í•ÑÑ¥¹œ€¼É•µ½Ù¥¹œ™¥±Ñ•ÉÌ¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%‘¥Í½¹¹•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹}½¹¹•Ñ•€ôôô™…±Í”€¤ì(($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €ø€À€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl€Àt€¤ì(($$%™½È€ ±•Ð¤€ô€Ä°°€ôÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤€´€Ät¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤t€¤ì(($$%ô(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÍlÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €´€Ät¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô(($%Ñ¡¥Ì¹}½¹¹•Ñ•€ô™…±Í”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹ÐÍ•Ð™¥±Ñ•ÉÌ¸($€¨($€¨É•ÑÕÉ¸íÉÉ…äñÕ‘¥½9½‘”ùôQ¡”±¥ÍÐ½˜™¥±Ñ•ÉÌ¸($€¨¼(%•Ñ¥±Ñ•ÉÌ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±Ñ•ÉÌì((%ô(($¼¨¨($€¨M•ÑÌ…¸…ÉÉ…ä½˜™¥±Ñ•ÉÌ…¹½¹¹•ÑÌÑ¡•´Ý¥Ñ Ñ¡”…Õ‘¥¼Í½ÕÉ”¸($€¨($€¨Á…É…´íÉÉ…äñÕ‘¥½9½‘”ùômÙ…±Õ•t€´±¥ÍÐ½˜™¥±Ñ•ÉÌ¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ¥±Ñ•ÉÌ Ù…±Õ”€¤ì(($%¥˜€ €„Ù…±Õ”€¤Ù…±Õ”€ômtì(($%¥˜€ Ñ¡¥Ì¹}½¹¹•Ñ•€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹‘¥Í½¹¹•Ð ¤ì($$%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ôÙ…±Õ”¹Í±¥” ¤ì($$%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ôÙ…±Õ”¹Í±¥” ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”‘•ÑÕ¹¥¹œ½˜½Í¥±±…Ñ¥½¸¥¸•¹ÑÌ¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”‘•ÑÕ¹¥¹œ½˜½Í¥±±…Ñ¥½¸¥¸•¹ÑÌ¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ•ÑÕ¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹‘•ÑÕ¹”€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€˜˜Ñ¡¥Ì¹Í½ÕÉ”¹‘•ÑÕ¹”€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘•ÑÕ¹”¹Í•ÑQ…É•ÑÑQ¥µ” Ñ¡¥Ì¹‘•ÑÕ¹”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”‘•ÑÕ¹¥¹œ½˜½Í¥±±…Ñ¥½¸¥¸•¹ÑÌ¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”‘•ÑÕ¹¥¹œ½˜½Í¥±±…Ñ¥½¸¥¸•¹ÑÌ¸($€¨¼(%•Ñ•ÑÕ¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•ÑÕ¹”ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”™¥ÉÍÐ™¥±Ñ•È¥¸Ñ¡”±¥ÍÐ½˜™¥±Ñ•ÉÌ¸($€¨($€¨É•ÑÕÉ¸íÕ‘¥½9½‘•ñÕ¹‘•™¥¹•‘ôQ¡”™¥ÉÍÐ™¥±Ñ•È¥¸Ñ¡”±¥ÍÐ½˜™¥±Ñ•ÉÌ¸($€¨¼(%•Ñ¥±Ñ•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•Ñ¥±Ñ•ÉÌ ¥l€Àtì((%ô(($¼¨¨($€¨ÁÁ±¥•Ì„Í¥¹±”™¥±Ñ•È¹½‘”Ñ¼Ñ¡”…Õ‘¥¼¸($€¨($€¨Á…É…´íÕ‘¥½9½‘•ôm™¥±Ñ•Ét€´Q¡”™¥±Ñ•ÈÑ¼Í•Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ¥±Ñ•È ™¥±Ñ•È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•Ñ¥±Ñ•ÉÌ ™¥±Ñ•È€ül™¥±Ñ•Èt€èmt€¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”Á±…å‰…¬É…Ñ”¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÙ…±Õ•t€´Q¡”Á±…å‰…¬É…Ñ”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑA±…å‰…­I…Ñ” Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹Á±…å‰…­I…Ñ”¹Í•ÑQ…É•ÑÑQ¥µ” Ñ¡¥Ì¹Á±…å‰…­I…Ñ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹ÐÁ±…å‰…¬É…Ñ”¸(($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Á±…å‰…¬É…Ñ”¸($€¨¼(%•ÑA±…å‰…­I…Ñ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á±…å‰…­I…Ñ”ì((%ô(($¼¨¨($€¨ÕÑ½µ…Ñ¥…±±ä…±±•Ý¡•¸Á±…å‰…¬™¥¹¥Í¡•¸($€¨¼(%½¹¹‘• ¤ì(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì($%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ô€Àì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”±½½À™±…œ¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”…Õ‘¥¼Í¡½Õ±±½½À½È¹½Ð¸($€¨¼(%•Ñ1½½À ¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸™…±Í”ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ì¹±½½Àì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±½½À™±…œ¸($€¨($€¨…¸½¹±ä‰”ÕÍ•Ý¥Ñ ½µÁ…Ñ¥‰±”…Õ‘¥¼Í½ÕÉ•ÌÑ¡…Ð…±±½ÜÁ±…å‰…¬½¹ÑÉ½°¸($€¨($€¨Á…É…´í‰½½±•…¹ôÙ…±Õ”€´]¡•Ñ¡•ÈÑ¡”…Õ‘¥¼Í¡½Õ±±½½À½È¹½Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½ñÕ¹‘•™¥¹•‘ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ1½½À Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹±½½À€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹±½½À€ôÑ¡¥Ì¹±½½Àì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±½½ÀÍÑ…ÉÐÙ…±Õ”Ý¡¥ ‘•™¥¹•ÌÝ¡•É”¥¸Ñ¡”…Õ‘¥¼‰Õ™™•ÈÑ¡”É•Á±…äÍ¡½Õ±($€¨ÍÑ…ÉÐ°¥¸Í•½¹‘Ì¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”±½½ÀÍÑ…ÉÐÙ…±Õ”¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ1½½ÁMÑ…ÉÐ Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹±½½ÁMÑ…ÉÐ€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±½½À•¹Ù…±Õ”Ý¡¥ ‘•™¥¹•ÌÝ¡•É”¥¸Ñ¡”…Õ‘¥¼‰Õ™™•ÈÑ¡”É•Á±…äÍ¡½Õ±($€¨ÍÑ½À°¥¸Í•½¹‘Ì¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”±½½À•¹Ù…±Õ”¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ1½½Á¹ Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹±½½Á¹€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”Ù½±Õµ”¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Ù½±Õµ”¸($€¨¼(%•ÑY½±Õµ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸¹…¥¸¹Ù…±Õ”ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”Ù½±Õµ”¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”Ù½±Õµ”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íÕ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑY½±Õµ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹…¥¸¹…¥¸¹Í•ÑQ…É•ÑÑQ¥µ” Ù…±Õ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%¥˜€ Í½ÕÉ”¹Í½ÕÉ•QåÁ”€„ôô€‰Õ™™•Èœ€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÕ‘¥¼Í½ÕÉ”ÑåÁ”…¹¹½Ð‰”½Á¥•¸œ€¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ô(($%Ñ¡¥Ì¹…ÕÑ½Á±…ä€ôÍ½ÕÉ”¹…ÕÑ½Á±…äì(($%Ñ¡¥Ì¹‰Õ™™•È€ôÍ½ÕÉ”¹‰Õ™™•Èì($%Ñ¡¥Ì¹‘•ÑÕ¹”€ôÍ½ÕÉ”¹‘•ÑÕ¹”ì($%Ñ¡¥Ì¹±½½À€ôÍ½ÕÉ”¹±½½Àì($%Ñ¡¥Ì¹±½½ÁMÑ…ÉÐ€ôÍ½ÕÉ”¹±½½ÁMÑ…ÉÐì($%Ñ¡¥Ì¹±½½Á¹€ôÍ½ÕÉ”¹±½½Á¹ì($%Ñ¡¥Ì¹½™™Í•Ð€ôÍ½ÕÉ”¹½™™Í•Ðì($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ôÍ½ÕÉ”¹‘ÕÉ…Ñ¥½¸ì($%Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€ôÍ½ÕÉ”¹Á±…å‰…­I…Ñ”ì($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôÍ½ÕÉ”¹¡…ÍA±…å‰…­½¹ÑÉ½°ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ôÍ½ÕÉ”¹Í½ÕÉ•QåÁ”ì(($%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ôÍ½ÕÉ”¹™¥±Ñ•ÉÌ¹Í±¥” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” É•ÕÉÍ¥Ù”€¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È Ñ¡¥Ì¹±¥ÍÑ•¹•È€¤¹½Áä Ñ¡¥Ì°É•ÕÉÍ¥Ù”€¤ì((%ô()ô()½¹ÍÐ}Á½Í¥Ñ¥½¸€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÅÕ…Ñ•É¹¥½¸€ô€¼©}}AUI}|¨¼¹•ÜEÕ…Ñ•É¹¥½¸ ¤ì)½¹ÍÐ}Í…±”€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}½É¥•¹Ñ…Ñ¥½¸€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„Á½Í¥Ñ¥½¹…°…Õ‘¥¼½‰©•Ð¸(€¨(€¨©Ì(€¨€¼¼É•…Ñ”…¸Õ‘¥½1¥ÍÑ•¹•È…¹…‘¥ÐÑ¼Ñ¡”…µ•É„(€¨½¹ÍÐ±¥ÍÑ•¹•È€ô¹•ÜQ!I¹Õ‘¥½1¥ÍÑ•¹•È ¤ì(€¨…µ•É„¹…‘ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼É•…Ñ”Ñ¡”A½Í¥Ñ¥½¹…±Õ‘¥¼½‰©•Ð€¡Á…ÍÍ¥¹œ¥¸Ñ¡”±¥ÍÑ•¹•È¤(€¨½¹ÍÐÍ½Õ¹€ô¹•ÜQ!I¹A½Í¥Ñ¥½¹…±Õ‘¥¼ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼±½…„Í½Õ¹…¹Í•Ð¥Ð…ÌÑ¡”A½Í¥Ñ¥½¹…±Õ‘¥¼½‰©•ÐÌ‰Õ™™•È(€¨½¹ÍÐ…Õ‘¥½1½…‘•È€ô¹•ÜQ!I¹Õ‘¥½1½…‘•È ¤ì(€¨…Õ‘¥½1½…‘•È¹±½… €Í½Õ¹‘Ì½Í½¹œ¹½œœ°™Õ¹Ñ¥½¸ ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•Ñ	Õ™™•È ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•ÑI•™¥ÍÑ…¹” €ÈÀ€¤ì(€¨€%Í½Õ¹¹Á±…ä ¤ì(€¨ô¤ì(€¨(€¨€¼¼É•…Ñ”…¸½‰©•Ð™½ÈÑ¡”Í½Õ¹Ñ¼Á±…ä™É½´(€¨½¹ÍÐÍÁ¡•É”€ô¹•ÜQ!I¹MÁ¡•É••½µ•ÑÉä €ÈÀ°€ÌÈ°€ÄØ€¤ì(€¨½¹ÍÐµ…Ñ•É¥…°€ô¹•ÜQ!I¹5•Í¡A¡½¹5…Ñ•É¥…° ì½±½Èè€Áá™˜ÈÈÀÀô€¤ì(€¨½¹ÍÐµ•Í €ô¹•ÜQ!I¹5•Í  ÍÁ¡•É”°µ…Ñ•É¥…°€¤ì(€¨Í•¹”¹…‘ µ•Í €¤ì(€¨(€¨€¼¼™¥¹…±±ä…‘Ñ¡”Í½Õ¹Ñ¼Ñ¡”µ•Í (€¨µ•Í ¹…‘ Í½Õ¹€¤ì(€¨(€¨…Õµ•¹ÑÌÕ‘¥¼(€¨¼)±…ÍÌA½Í¥Ñ¥½¹…±Õ‘¥¼•áÑ•¹‘ÌÕ‘¥¼ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„Á½Í¥Ñ¥½¹…°…Õ‘¥¼¸($€¨($€¨Á…É…´íÕ‘¥½1¥ÍÑ•¹•Éô±¥ÍÑ•¹•È€´Q¡”±½‰…°…Õ‘¥¼±¥ÍÑ•¹•È¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥ÍÑ•¹•È€¤ì(($%ÍÕÁ•È ±¥ÍÑ•¹•È€¤ì(($$¼¨¨($$€¨Q¡”Á…¹¹•È¹½‘”É•ÁÉ•Í•¹ÑÌÑ¡”±½…Ñ¥½¸°‘¥É•Ñ¥½¸°…¹‰•¡…Ù¥½È½˜…¸…Õ‘¥¼($$€¨Í½ÕÉ”¥¸€ÍÍÁ…”¸($$€¨($$€¨ÑåÁ”íA…¹¹•É9½‘•ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹Á…¹¹•È€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•A…¹¹•È ¤ì($%Ñ¡¥Ì¹Á…¹¹•È¹Á…¹¹¥¹5½‘•°€ô€!IQœì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì((%ô((%½¹¹•Ð ¤ì(($%ÍÕÁ•È¹½¹¹•Ð ¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥Í½¹¹•Ð ¤ì(($%ÍÕÁ•È¹‘¥Í½¹¹•Ð ¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ=ÕÑÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•Èì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹ÐÉ•™•É•¹”‘¥ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”É•™•É•¹”‘¥ÍÑ…¹”¸($€¨¼(%•ÑI•™¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹É•™¥ÍÑ…¹”ì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”É•™•É•¹”‘¥ÍÑ…¹”™½ÈÉ•‘Õ¥¹œÙ½±Õµ”…ÌÑ¡”…Õ‘¥¼Í½ÕÉ”µ½Ù•Ì($€¨™ÕÉÑ¡•È™É½´Ñ¡”±¥ÍÑ•¹•ÈƒŠL¤¹”¸Ñ¡”‘¥ÍÑ…¹”…ÐÝ¡¥ Ñ¡”Ù½±Õµ”É•‘ÕÑ¥½¸($€¨ÍÑ…ÉÑÌÑ…­¥¹œ•™™•Ð¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”É•™•É•¹”‘¥ÍÑ…¹”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íA½Í¥Ñ¥½¹…±Õ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑI•™¥ÍÑ…¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹É•™¥ÍÑ…¹”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹ÐÉ½±±½™˜™…Ñ½È¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”É½±±½™˜™…Ñ½È¸($€¨¼(%•ÑI½±±½™™…Ñ½È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹É½±±½™™…Ñ½Èì((%ô(($¼¨¨($€¨•™¥¹•Ì¡½ÜÅÕ¥­±äÑ¡”Ù½±Õµ”¥ÌÉ•‘Õ•…ÌÑ¡”Í½ÕÉ”µ½Ù•Ì…Ý…ä™É½´Ñ¡”±¥ÍÑ•¹•È¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”É½±±½™˜™…Ñ½È¸($€¨É•ÑÕÉ¸íA½Í¥Ñ¥½¹…±Õ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑI½±±½™™…Ñ½È Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹É½±±½™™…Ñ½È€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹Ð‘¥ÍÑ…¹”µ½‘•°¸($€¨($€¨É•ÑÕÉ¸ì ±¥¹•…Èð¥¹Ù•ÉÍ”ð•áÁ½¹•¹Ñ¥…°œ¥ôQ¡”‘¥ÍÑ…¹”µ½‘•°¸($€¨¼(%•Ñ¥ÍÑ…¹•5½‘•° ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹‘¥ÍÑ…¹•5½‘•°ì((%ô(($¼¨¨($€¨•™¥¹•ÌÝ¡¥ …±½É¥Ñ¡´Ñ¼ÕÍ”Ñ¼É•‘Õ”Ñ¡”Ù½±Õµ”½˜Ñ¡”…Õ‘¥¼Í½ÕÉ”($€¨…Ì¥Ðµ½Ù•Ì…Ý…ä™É½´Ñ¡”±¥ÍÑ•¹•È¸($€¨($€¨I•…mÑ¡”ÍÁ•uí±¥¹¬¡ÑÑÁÌè¼½ÝÝÜ¹ÜÌ¹½Éœ½QH½Ý•‰…Õ‘¥¼´Ä¸Ä¼•¹Õµ‘•˜µ‘¥ÍÑ…¹•µ½‘•±ÑåÁ•ô($€¨™½Èµ½É”‘•Ñ…¥±Ì¸($€¨($€¨Á…É…´ì ±¥¹•…Èð¥¹Ù•ÉÍ”ð•áÁ½¹•¹Ñ¥…°œ¥ôÙ…±Õ”€´Q¡”‘¥ÍÑ…¹”µ½‘•°Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íA½Í¥Ñ¥½¹…±Õ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ¥ÍÑ…¹•5½‘•° Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹‘¥ÍÑ…¹•5½‘•°€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹Ðµ…à‘¥ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”µ…à‘¥ÍÑ…¹”¸($€¨¼(%•Ñ5…á¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹µ…á¥ÍÑ…¹”ì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”µ…á¥µÕ´‘¥ÍÑ…¹”‰•ÑÝ••¸Ñ¡”…Õ‘¥¼Í½ÕÉ”…¹Ñ¡”±¥ÍÑ•¹•È°($€¨…™Ñ•ÈÝ¡¥ Ñ¡”Ù½±Õµ”¥Ì¹½ÐÉ•‘Õ•…¹ä™ÕÉÑ¡•È¸($€¨($€¨Q¡¥ÌÙ…±Õ”¥ÌÕÍ•½¹±ä‰äÑ¡”±¥¹•…É€‘¥ÍÑ…¹”µ½‘•°¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ”€´Q¡”µ…à‘¥ÍÑ…¹”¸($€¨É•ÑÕÉ¸íA½Í¥Ñ¥½¹…±Õ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ5…á¥ÍÑ…¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹µ…á¥ÍÑ…¹”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‘¥É•Ñ¥½¹…°½¹”¥¸Ý¡¥ Ñ¡”…Õ‘¥¼…¸‰”±¥ÍÑ•¹•¸($€¨($€¨Á…É…´í¹Õµ‰•Éô½¹•%¹¹•É¹±”€´¸…¹±”°¥¸‘•É••Ì°½˜„½¹”¥¹Í¥‘”½˜Ý¡¥ Ñ¡•É”Ý¥±°‰”¹¼Ù½±Õµ”É•‘ÕÑ¥½¸¸($€¨Á…É…´í¹Õµ‰•Éô½¹•=ÕÑ•É¹±”€´¸…¹±”°¥¸‘•É••Ì°½˜„½¹”½ÕÑÍ¥‘”½˜Ý¡¥ Ñ¡”Ù½±Õµ”Ý¥±°‰”É•‘Õ•‰ä„½¹ÍÑ…¹ÐÙ…±Õ”°‘•™¥¹•‰äÑ¡”½¹•=ÕÑ•É…¥¹€Á…É…µ•Ñ•È¸($€¨Á…É…´í¹Õµ‰•Éô½¹•=ÕÑ•É…¥¸€´Q¡”…µ½Õ¹Ð½˜Ù½±Õµ”É•‘ÕÑ¥½¸½ÕÑÍ¥‘”Ñ¡”½¹”‘•™¥¹•‰äÑ¡”½¹•=ÕÑ•É¹±•€¸]¡•¸Í•ÐÑ¼€Á€°¹¼Í½Õ¹…¸‰”¡•…É¸($€¨É•ÑÕÉ¸íA½Í¥Ñ¥½¹…±Õ‘¥½ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ¥É•Ñ¥½¹…±½¹” ½¹•%¹¹•É¹±”°½¹•=ÕÑ•É¹±”°½¹•=ÕÑ•É…¥¸€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•%¹¹•É¹±”€ô½¹•%¹¹•É¹±”ì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•=ÕÑ•É¹±”€ô½¹•=ÕÑ•É¹±”ì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•=ÕÑ•É…¥¸€ô½¹•=ÕÑ•É…¥¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôôÑÉÕ”€˜˜Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($%Ñ¡¥Ì¹µ…ÑÉ¥á]½É±¹‘•½µÁ½Í” }Á½Í¥Ñ¥½¸°}ÅÕ…Ñ•É¹¥½¸°}Í…±”€¤ì(($%}½É¥•¹Ñ…Ñ¥½¸¹Í•Ð €À°€À°€Ä€¤¹…ÁÁ±åEÕ…Ñ•É¹¥½¸ }ÅÕ…Ñ•É¹¥½¸€¤ì(($%½¹ÍÐÁ…¹¹•È€ôÑ¡¥Ì¹Á…¹¹•Èì(($%¥˜€ Á…¹¹•È¹Á½Í¥Ñ¥½¹`€¤ì(($$$¼¼½‘”Á…Ñ ™½È¡É½µ”…¹¥É•™½à€¡Í•”€ŒÄÐÌäÌ¤(($$%½¹ÍÐ•¹‘Q¥µ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬Ñ¡¥Ì¹±¥ÍÑ•¹•È¹Ñ¥µ••±Ñ„ì(($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹à°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹ä°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹è°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹à°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹ä°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹è°•¹‘Q¥µ”€¤ì(($%ô•±Í”ì(($$%Á…¹¹•È¹Í•ÑA½Í¥Ñ¥½¸ }Á½Í¥Ñ¥½¸¹à°}Á½Í¥Ñ¥½¸¹ä°}Á½Í¥Ñ¥½¸¹è€¤ì($$%Á…¹¹•È¹Í•Ñ=É¥•¹Ñ…Ñ¥½¸ }½É¥•¹Ñ…Ñ¥½¸¹à°}½É¥•¹Ñ…Ñ¥½¸¹ä°}½É¥•¹Ñ…Ñ¥½¸¹è€¤ì(($%ô((%ô()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ…¸‰”ÕÍ•Ñ¼…¹…±åÍ”…Õ‘¥¼‘…Ñ„¸(€¨(€¨©Ì(€¨€¼¼É•…Ñ”…¸Õ‘¥½1¥ÍÑ•¹•È…¹…‘¥ÐÑ¼Ñ¡”…µ•É„(€¨½¹ÍÐ±¥ÍÑ•¹•È€ô¹•ÜQ!I¹Õ‘¥½1¥ÍÑ•¹•È ¤ì(€¨…µ•É„¹…‘ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼É•…Ñ”…¸Õ‘¥¼Í½ÕÉ”(€¨½¹ÍÐÍ½Õ¹€ô¹•ÜQ!I¹Õ‘¥¼ ±¥ÍÑ•¹•È€¤ì(€¨(€¨€¼¼±½…„Í½Õ¹…¹Í•Ð¥Ð…ÌÑ¡”Õ‘¥¼½‰©•ÐÌ‰Õ™™•È(€¨½¹ÍÐ…Õ‘¥½1½…‘•È€ô¹•ÜQ!I¹Õ‘¥½1½…‘•È ¤ì(€¨…Õ‘¥½1½…‘•È¹±½… €Í½Õ¹‘Ì½…µ‰¥•¹Ð¹½œœ°™Õ¹Ñ¥½¸ ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•Ñ	Õ™™•È ‰Õ™™•È€¤ì(€¨€%Í½Õ¹¹Í•Ñ1½½À¡ÑÉÕ”¤ì(€¨€%Í½Õ¹¹Í•ÑY½±Õµ” À¸Ô¤ì(€¨€%Í½Õ¹¹Á±…ä ¤ì(€¨ô¤ì(€¨(€¨€¼¼É•…Ñ”…¸Õ‘¥½¹…±åÍ•È°Á…ÍÍ¥¹œ¥¸Ñ¡”Í½Õ¹…¹‘•Í¥É•™™ÑM¥é”(€¨½¹ÍÐ…¹…±åÍ•È€ô¹•ÜQ!I¹Õ‘¥½¹…±åÍ•È Í½Õ¹°€ÌÈ€¤ì(€¨(€¨€¼¼•ÐÑ¡”…Ù•É…”™É•ÅÕ•¹ä½˜Ñ¡”Í½Õ¹(€¨½¹ÍÐ‘…Ñ„€ô…¹…±åÍ•È¹•ÑÙ•É…•É•ÅÕ•¹ä ¤ì(€¨€(€¨¼)±…ÍÌÕ‘¥½¹…±åÍ•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…Õ‘¥¼…¹…±åé•È¸($€¨($€¨Á…É…´íÕ‘¥½ô…Õ‘¥¼€´Q¡”…Õ‘¥¼Ñ¼…¹…±åé”¸($€¨Á…É…´í¹Õµ‰•Éôm™™ÑM¥é”ôÈÀÐát€´Q¡”Ý¥¹‘½ÜÍ¥é”¥¸Í…µÁ±•ÌÑ¡…Ð¥ÌÕÍ•Ý¡•¸Á•É™½Éµ¥¹œ„…ÍÐ½ÕÉ¥•ÈQÉ…¹Í™½É´€¡P¤Ñ¼•Ð™É•ÅÕ•¹ä‘½µ…¥¸‘…Ñ„¸($€¨¼(%½¹ÍÑÉÕÑ½È …Õ‘¥¼°™™ÑM¥é”€ô€ÈÀÐà€¤ì(($$¼¨¨($$€¨Q¡”±½‰…°…Õ‘¥¼±¥ÍÑ•¹•È¸($$€¨($$€¨ÑåÁ”í¹…±åÍ•É9½‘•ô($$€¨¼($%Ñ¡¥Ì¹…¹…±åÍ•È€ô…Õ‘¥¼¹½¹Ñ•áÐ¹É•…Ñ•¹…±åÍ•È ¤ì($%Ñ¡¥Ì¹…¹…±åÍ•È¹™™ÑM¥é”€ô™™ÑM¥é”ì(($$¼¨¨($$€¨!½±‘ÌÑ¡”…¹…±åé•‘…Ñ„¸($$€¨($$€¨ÑåÁ”íU¥¹ÐáÉÉ…åô($$€¨¼($%Ñ¡¥Ì¹‘…Ñ„€ô¹•ÜU¥¹ÐáÉÉ…ä Ñ¡¥Ì¹…¹…±åÍ•È¹™É•ÅÕ•¹å	¥¹½Õ¹Ð€¤ì(($%…Õ‘¥¼¹•Ñ=ÕÑÁÕÐ ¤¹½¹¹•Ð Ñ¡¥Ì¹…¹…±åÍ•È€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì…¸…ÉÉ…äÝ¥Ñ ™É•ÅÕ•¹ä‘…Ñ„½˜Ñ¡”…Õ‘¥¼¸($€¨($€¨… ¥Ñ•´¥¸Ñ¡”…ÉÉ…äÉ•ÁÉ•Í•¹ÑÌÑ¡”‘•¥‰•°Ù…±Õ”™½È„ÍÁ•¥™¥Œ™É•ÅÕ•¹ä¸($€¨Q¡”™É•ÅÕ•¹¥•Ì…É”ÍÁÉ•…±¥¹•…É±ä™É½´€ÀÑ¼€Ä¼È½˜Ñ¡”Í…µÁ±”É…Ñ”¸($€¨½È•á…µÁ±”°™½È€ÐàÀÀÀÍ…µÁ±”É…Ñ”°Ñ¡”±…ÍÐ¥Ñ•´½˜Ñ¡”…ÉÉ…äÝ¥±°É•ÁÉ•Í•¹Ð($€¨Ñ¡”‘•¥‰•°Ù…±Õ”™½È€ÈÐÀÀÀ!è¸($€¨($€¨É•ÑÕÉ¸íU¥¹ÐáÉÉ…åôQ¡”™É•ÅÕ•¹ä‘…Ñ„¸($€¨¼(%•ÑÉ•ÅÕ•¹å…Ñ„ ¤ì(($%Ñ¡¥Ì¹…¹…±åÍ•È¹•Ñ	åÑ•É•ÅÕ•¹å…Ñ„ Ñ¡¥Ì¹‘…Ñ„€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘…Ñ„ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”…Ù•É…”½˜Ñ¡”™É•ÅÕ•¹¥•ÌÉ•ÑÕÉ¹•‰äí±¥¹¬Õ‘¥½¹…±åÍ•È•ÑÉ•ÅÕ•¹å…Ñ…ô¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”…Ù•É…”™É•ÅÕ•¹ä¸($€¨¼(%•ÑÙ•É…•É•ÅÕ•¹ä ¤ì(($%±•ÐÙ…±Õ”€ô€Àì($%½¹ÍÐ‘…Ñ„€ôÑ¡¥Ì¹•ÑÉ•ÅÕ•¹å…Ñ„ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð‘…Ñ„¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ù…±Õ”€¬ô‘…Ñ…l¤tì(($%ô(($%É•ÑÕÉ¸Ù…±Õ”€¼‘…Ñ„¹±•¹Ñ ì((%ô()ô((¼¨¨(€¨	Õ™™•É•Í•¹”É…Á ÁÉ½Á•ÉÑäÑ¡…Ð…±±½ÝÌÝ•¥¡Ñ•…ÕµÕ±…Ñ¥½¸ìÕÍ•¥¹Ñ•É¹…±±ä¸(€¨¼)±…ÍÌAÉ½Á•ÉÑå5¥á•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁÉ½Á•ÉÑäµ¥á•È¸($€¨($€¨Á…É…´íAÉ½Á•ÉÑå	¥¹‘¥¹ô‰¥¹‘¥¹œ€´Q¡”ÁÉ½Á•ÉÑä‰¥¹‘¥¹œ¸($€¨Á…É…´íÍÑÉ¥¹ôÑåÁ•9…µ”€´Q¡”­•å™É…µ”ÑÉ…¬ÑåÁ”¹…µ”¸($€¨Á…É…´í¹Õµ‰•ÉôÙ…±Õ•M¥é”€´Q¡”­•å™É…µ”ÑÉ…¬Ù…±Õ”Í¥é”¸($€¨¼(%½¹ÍÑÉÕÑ½È ‰¥¹‘¥¹œ°ÑåÁ•9…µ”°Ù…±Õ•M¥é”€¤ì(($$¼¨¨($$€¨Q¡”ÁÉ½Á•ÉÑä‰¥¹‘¥¹œ¸($$€¨($$€¨ÑåÁ”íAÉ½Á•ÉÑå	¥¹‘¥¹ô($$€¨¼($%Ñ¡¥Ì¹‰¥¹‘¥¹œ€ô‰¥¹‘¥¹œì(($$¼¨¨($$€¨Q¡”­•å™É…µ”ÑÉ…¬Ù…±Õ”Í¥é”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹Ù…±Õ•M¥é”€ôÙ…±Õ•M¥é”ì(($%±•Ðµ¥áÕ¹Ñ¥½¸°($$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”°($$%Í•Ñ%‘•¹Ñ¥Ñäì(($$¼¼‰Õ™™•È±…å½ÕÐèl¥¹½µ¥¹œð…ÔÀð…ÔÄð½É¥œð…‘‘Ôð€¡½ÁÑ¥½¹…°Ý½É¬¤t($$¼¼($$¼¼¥¹Ñ•ÉÁ½±…Ñ½ÉÌ…¸ÕÍ”€¹‰Õ™™•È…ÌÑ¡•¥È€¹É•ÍÕ±Ð($$¼¼Ñ¡”‘…Ñ„Ñ¡•¸½•ÌÑ¼€¥¹½µ¥¹œœ($$¼¼($$¼¼€…ÔÀœ…¹€…ÔÄœ…É”ÕÍ•™É…µ”µ¥¹Ñ•É±•…Ù•™½È($$¼¼Ñ¡”ÕµÕ±…Ñ¥Ù”É•ÍÕ±Ð…¹…É”½µÁ…É•Ñ¼‘•Ñ•Ð($$¼¼¡…¹•Ì($$¼¼($$¼¼€½É¥œœÍÑ½É•ÌÑ¡”½É¥¥¹…°ÍÑ…Ñ”½˜Ñ¡”ÁÉ½Á•ÉÑä($$¼¼($$¼¼€…‘œ¥ÌÕÍ•™½È…‘‘¥Ñ¥Ù”ÕµÕ±…Ñ¥Ù”É•ÍÕ±ÑÌ($$¼¼($$¼¼€Ý½É¬œ¥Ì½ÁÑ¥½¹…°…¹¥Ì½¹±äÁÉ•Í•¹Ð™½ÈÅÕ…Ñ•É¹¥½¸ÑåÁ•Ì¸%Ð¥ÌÕÍ•($$¼¼Ñ¼ÍÑ½É”¥¹Ñ•Éµ•‘¥…Ñ”ÅÕ…Ñ•É¹¥½¸µÕ±Ñ¥Á±¥…Ñ¥½¸É•ÍÕ±ÑÌ(($%ÍÝ¥Ñ € ÑåÁ•9…µ”€¤ì(($$%…Í”€ÅÕ…Ñ•É¹¥½¸œè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}Í±•ÉÀì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}Í±•ÉÁ‘‘¥Ñ¥Ù”ì($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥ÑåEÕ…Ñ•É¹¥½¸ì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•Ü±½…ÐØÑÉÉ…ä Ù…±Õ•M¥é”€¨€Ø€¤ì($$$%Ñ¡¥Ì¹}Ý½É­%¹‘•à€ô€Ôì($$$%‰É•…¬ì(($$%…Í”€ÍÑÉ¥¹œœè($$%…Í”€‰½½°œè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}Í•±•Ðì(($$$$¼¼UÍ”Ñ¡”É•Õ±…Èµ¥à™Õ¹Ñ¥½¸…¹™½È…‘‘¥Ñ¥Ù”½¸Ñ¡•Í”ÑåÁ•Ì°($$$$¼¼…‘‘¥Ñ¥Ù”¥Ì¹½ÐÉ•±•Ù…¹Ð™½È¹½¸µ¹Õµ•É¥ŒÑåÁ•Ì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}Í•±•Ðì(($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå=Ñ¡•Èì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•ÜÉÉ…ä Ù…±Õ•M¥é”€¨€Ô€¤ì($$$%‰É•…¬ì(($$%‘•™…Õ±Ðè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}±•ÉÀì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}±•ÉÁ‘‘¥Ñ¥Ù”ì($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•Ü±½…ÐØÑÉÉ…ä Ù…±Õ•M¥é”€¨€Ô€¤ì(($%ô(($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸€ôµ¥áÕ¹Ñ¥½¸ì($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù”€ôµ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”ì($%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä€ôÍ•Ñ%‘•¹Ñ¥Ñäì($%Ñ¡¥Ì¹}½É¥%¹‘•à€ô€Ìì($%Ñ¡¥Ì¹}…‘‘%¹‘•à€ô€Ðì(($$¼¨¨($$€¨Q=<($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì(($$¼¨¨($$€¨Q=<($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì(($$¼¨¨($$€¨Q=<($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹ÕÍ•½Õ¹Ð€ô€Àì(($$¼¨¨($$€¨Q=<($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹É•™•É•¹•½Õ¹Ð€ô€Àì((%ô(($¼¨¨($€¨ÕµÕ±…Ñ•Ì‘…Ñ„¥¸Ñ¡”¥¹½µ¥¹€É•¥½¸¥¹Ñ¼…Ôñ¤ù€¸($€¨($€¨Á…É…´í¹Õµ‰•Éô…Õ%¹‘•à€´Q¡”…ÕµÕ±…Ñ¥½¸¥¹‘•à¸($€¨Á…É…´í¹Õµ‰•ÉôÝ•¥¡Ð€´Q¡”Ý•¥¡Ð¸($€¨¼(%…ÕµÕ±…Ñ” …Õ%¹‘•à°Ý•¥¡Ð€¤ì(($$¼¼¹½Ñ”è¡…ÁÁ¥±ä…ÕµÕ±…Ñ¥¹œ¹½Ñ¡¥¹œÝ¡•¸Ý•¥¡Ð€ô€À°Ñ¡”…±±•È­¹½ÝÌ($$¼¼Ñ¡”Ý•¥¡Ð…¹Í¡½Õ±‘¸Ð¡…Ù”µ…‘”Ñ¡”…±°¥¸Ñ¡”™¥ÉÍÐÁ±…”(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%½™™Í•Ð€ô…Õ%¹‘•à€¨ÍÑÉ¥‘”€¬ÍÑÉ¥‘”ì(($%±•ÐÕÉÉ•¹Ñ]•¥¡Ð€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ðì(($%¥˜€ ÕÉÉ•¹Ñ]•¥¡Ð€ôôô€À€¤ì(($$$¼¼…Õ8€èô¥¹½µ¥¹œ€¨Ý•¥¡Ð(($$%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$$%‰Õ™™•Él½™™Í•Ð€¬¤t€ô‰Õ™™•Él¤tì(($$%ô(($$%ÕÉÉ•¹Ñ]•¥¡Ð€ôÝ•¥¡Ðì(($%ô•±Í”ì(($$$¼¼…Õ8€èô…Õ8€¬¥¹½µ¥¹œ€¨Ý•¥¡Ð(($$%ÕÉÉ•¹Ñ]•¥¡Ð€¬ôÝ•¥¡Ðì($$%½¹ÍÐµ¥à€ôÝ•¥¡Ð€¼ÕÉÉ•¹Ñ]•¥¡Ðì($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸ ‰Õ™™•È°½™™Í•Ð°€À°µ¥à°ÍÑÉ¥‘”€¤ì(($%ô(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ôÕÉÉ•¹Ñ]•¥¡Ðì((%ô(($¼¨¨($€¨ÕµÕ±…Ñ•Ì‘…Ñ„¥¸Ñ¡”¥¹½µ¥¹€É•¥½¸¥¹Ñ¼…‘‘€¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÝ•¥¡Ð€´Q¡”Ý•¥¡Ð¸($€¨¼(%…ÕµÕ±…Ñ•‘‘¥Ñ¥Ù” Ý•¥¡Ð€¤ì(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%½™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}…‘‘%¹‘•àì(($%¥˜€ Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ôôô€À€¤ì(($$$¼¼…‘€ô¥‘•¹Ñ¥Ñä(($$%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä ¤ì(($%ô(($$¼¼…‘€èô…‘€¬¥¹½µ¥¹œ€¨Ý•¥¡Ð(($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù” ‰Õ™™•È°½™™Í•Ð°€À°Ý•¥¡Ð°ÍÑÉ¥‘”€¤ì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€¬ôÝ•¥¡Ðì((%ô(($¼¨¨($€¨ÁÁ±¥•ÌÑ¡”ÍÑ…Ñ”½˜…Ôñ¤ù€Ñ¼Ñ¡”‰¥¹‘¥¹œÝ¡•¸…ÕÌ‘¥™™•È¸($€¨($€¨Á…É…´í¹Õµ‰•Éô…Õ%¹‘•à€´Q¡”…ÕµÕ±…Ñ¥½¸¥¹‘•à¸($€¨¼(%…ÁÁ±ä …Õ%¹‘•à€¤ì(($%½¹ÍÐÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%½™™Í•Ð€ô…Õ%¹‘•à€¨ÍÑÉ¥‘”€¬ÍÑÉ¥‘”°(($$%Ý•¥¡Ð€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð°($$%Ý•¥¡Ñ‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”°(($$%‰¥¹‘¥¹œ€ôÑ¡¥Ì¹‰¥¹‘¥¹œì(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì(($%¥˜€ Ý•¥¡Ð€ð€Ä€¤ì(($$$¼¼…Õ8€èô…Õ8€¬½É¥¥¹…°€¨€ €Ä€´ÕµÕ±…Ñ¥Ù•]•¥¡Ð€¤(($$%½¹ÍÐ½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}½É¥%¹‘•àì(($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸ ($$$%‰Õ™™•È°½™™Í•Ð°½É¥¥¹…±Y…±Õ•=™™Í•Ð°€Ä€´Ý•¥¡Ð°ÍÑÉ¥‘”€¤ì(($%ô(($%¥˜€ Ý•¥¡Ñ‘‘¥Ñ¥Ù”€ø€À€¤ì(($$$¼¼…Õ8€èô…Õ8€¬…‘‘¥Ñ¥Ù”…Õ8(($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù” ‰Õ™™•È°½™™Í•Ð°Ñ¡¥Ì¹}…‘‘%¹‘•à€¨ÍÑÉ¥‘”°€Ä°ÍÑÉ¥‘”€¤ì(($%ô(($%™½È€ ±•Ð¤€ôÍÑÉ¥‘”°”€ôÍÑÉ¥‘”€¬ÍÑÉ¥‘”ì¤€„ôô”ì€¬¬¤€¤ì(($$%¥˜€ ‰Õ™™•Él¤t€„ôô‰Õ™™•Él¤€¬ÍÑÉ¥‘”t€¤ì(($$$$¼¼Ù…±Õ”¡…Ì¡…¹•€´øÕÁ‘…Ñ”Í•¹”É…Á (($$$%‰¥¹‘¥¹œ¹Í•ÑY…±Õ” ‰Õ™™•È°½™™Í•Ð€¤ì($$$%‰É•…¬ì(($$%ô(($%ô((%ô((($¼¨¨($€¨I•µ•µ‰•ÉÌÑ¡”ÍÑ…Ñ”½˜Ñ¡”‰½Õ¹ÁÉ½Á•ÉÑä…¹½Áä¥ÐÑ¼‰½Ñ …ÕÌ¸($€¨¼(%Í…Ù•=É¥¥¹…±MÑ…Ñ” ¤ì(($%½¹ÍÐ‰¥¹‘¥¹œ€ôÑ¡¥Ì¹‰¥¹‘¥¹œì(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}½É¥%¹‘•àì(($%‰¥¹‘¥¹œ¹•ÑY…±Õ” ‰Õ™™•È°½É¥¥¹…±Y…±Õ•=™™Í•Ð€¤ì(($$¼¼…ÕlÀ¸¸Åt€èô½É¥œ€´´¥¹¥Ñ¥…±±ä‘•Ñ•Ð¡…¹•Ì……¥¹ÍÐÑ¡”½É¥¥¹…°($%™½È€ ±•Ð¤€ôÍÑÉ¥‘”°”€ô½É¥¥¹…±Y…±Õ•=™™Í•Ðì¤€„ôô”ì€¬¬¤€¤ì(($$%‰Õ™™•Él¤t€ô‰Õ™™•Él½É¥¥¹…±Y…±Õ•=™™Í•Ð€¬€ ¤€”ÍÑÉ¥‘”€¤tì(($%ô(($$¼¼‘Ñ¼¥‘•¹Ñ¥Ñä™½È…‘‘¥Ñ¥Ù”($%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä ¤ì(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì((%ô(($¼¨¨($€¨ÁÁ±¥•ÌÑ¡”ÍÑ…Ñ”ÁÉ•Ù¥½ÕÍ±äÑ…­•¸Ù¥„í±¥¹¬AÉ½Á•ÉÑå5¥á•ÈÍ…Ù•=É¥¥¹…±MÑ…Ñ•ôÑ¼Ñ¡”‰¥¹‘¥¹œ¸($€¨¼(%É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì(($%½¹ÍÐ½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÑ¡¥Ì¹Ù…±Õ•M¥é”€¨€Ìì($%Ñ¡¥Ì¹‰¥¹‘¥¹œ¹Í•ÑY…±Õ” Ñ¡¥Ì¹‰Õ™™•È°½É¥¥¹…±Y…±Õ•=™™Í•Ð€¤ì((%ô(($¼¼¥¹Ñ•É¹…±Ì((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œ ¤ì(($%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì($%½¹ÍÐ•¹‘%¹‘•à€ôÍÑ…ÉÑ%¹‘•à€¬Ñ¡¥Ì¹Ù…±Õ•M¥é”ì(($%™½È€ ±•Ð¤€ôÍÑ…ÉÑ%¹‘•àì¤€ð•¹‘%¹‘•àì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹‰Õ™™•Él¤t€ô€Àì(($%ô((%ô((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥ÑåEÕ…Ñ•É¹¥½¸ ¤ì(($%Ñ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œ ¤ì($%Ñ¡¥Ì¹‰Õ™™•ÉlÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”€¬€Ìt€ô€Äì((%ô((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå=Ñ¡•È ¤ì(($%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÑ¡¥Ì¹}½É¥%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì($%½¹ÍÐÑ…É•Ñ%¹‘•à€ôÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹Ù…±Õ•M¥é”ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹‰Õ™™•ÉlÑ…É•Ñ%¹‘•à€¬¤t€ôÑ¡¥Ì¹‰Õ™™•ÉlÍÑ…ÉÑ%¹‘•à€¬¤tì(($%ô((%ô((($¼¼µ¥à™Õ¹Ñ¥½¹Ì((%}Í•±•Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%¥˜€ Ð€øô€À¸Ô€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$$%‰Õ™™•Él‘ÍÑ=™™Í•Ð€¬¤t€ô‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤tì(($$%ô(($%ô((%ô((%}Í±•ÉÀ ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð€¤ì(($%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°ÍÉ=™™Í•Ð°Ð€¤ì((%ô((%}Í±•ÉÁ‘‘¥Ñ¥Ù” ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%½¹ÍÐÝ½É­=™™Í•Ð€ôÑ¡¥Ì¹}Ý½É­%¹‘•à€¨ÍÑÉ¥‘”ì(($$¼¼MÑ½É”É•ÍÕ±Ð¥¸¥¹Ñ•Éµ•‘¥…Ñ”‰Õ™™•È½™™Í•Ð($%EÕ…Ñ•É¹¥½¸¹µÕ±Ñ¥Á±åEÕ…Ñ•É¹¥½¹Í±…Ð ‰Õ™™•È°Ý½É­=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°ÍÉ=™™Í•Ð€¤ì(($$¼¼M±•ÉÀÑ¼Ñ¡”¥¹Ñ•Éµ•‘¥…Ñ”É•ÍÕ±Ð($%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°Ý½É­=™™Í•Ð°Ð€¤ì((%ô((%}±•ÉÀ ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%½¹ÍÐÌ€ô€Ä€´Ðì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%½¹ÍÐ¨€ô‘ÍÑ=™™Í•Ð€¬¤ì(($$%‰Õ™™•Él¨t€ô‰Õ™™•Él¨t€¨Ì€¬‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤t€¨Ðì(($%ô((%ô((%}±•ÉÁ‘‘¥Ñ¥Ù” ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%½¹ÍÐ¨€ô‘ÍÑ=™™Í•Ð€¬¤ì(($$%‰Õ™™•Él¨t€ô‰Õ™™•Él¨t€¬‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤t€¨Ðì(($%ô((%ô()ô((¼¼¡…É…Ñ•ÉÌmt¸è¼…É”É•Í•ÉÙ•™½ÈÑÉ…¬‰¥¹‘¥¹œÍå¹Ñ…à¸)½¹ÍÐ}IMIY}!IM}I€ô€qqmqquqp¸éqp¼œì)½¹ÍÐ}É•Í•ÉÙ•‘I”€ô¹•ÜI•áÀ €lœ€¬}IMIY}!IM}I€¬€tœ°€œœ€¤ì((¼¼ÑÑ•µÁÑÌÑ¼…±±½Ü¹½‘”¹…µ•Ì™É½´…¹ä±…¹Õ…”¸LÔÌqÝ€É••áÀµ…Ñ¡•Ì(¼¼½¹±ä±…Ñ¥¸¡…É…Ñ•ÉÌ°…¹Ñ¡”Õ¹¥½‘”qÁí1ô¥Ì¹½Ðå•ÐÍÕÁÁ½ÉÑ•¸M¼(¼¼¥¹ÍÑ•…°Ý”•á±Õ‘”É•Í•ÉÙ•¡…É…Ñ•ÉÌ…¹µ…Ñ •Ù•ÉåÑ¡¥¹œ•±Í”¸)½¹ÍÐ}Ý½É‘¡…È€ô€mxœ€¬}IMIY}!IM}I€¬€tœì)½¹ÍÐ}Ý½É‘¡…É=É½Ð€ô€mxœ€¬}IMIY}!IM}I¹É•Á±…” €qp¸œ°€œœ€¤€¬€tœì((¼¼A…É•¹Ð‘¥É•Ñ½É¥•Ì°‘•±¥µ¥Ñ•‰ä€œ¼œ½È€œèœ¸ÕÉÉ•¹Ñ±äÕ¹ÕÍ•°‰ÕÐµÕÍÐ(¼¼‰”µ…Ñ¡•Ñ¼Á…ÉÍ”Ñ¡”É•ÍÐ½˜Ñ¡”ÑÉ…¬¹…µ”¸)½¹ÍÐ}‘¥É•Ñ½ÉåI”€ô€¼©}}AUI}|¨¼€¼  üé]­mp¼ét¤¨¤¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì((¼¼Q…É•Ð¹½‘”¸5…ä½¹Ñ…¥¸Ý½É¡…É…Ñ•ÉÌ€¡„µéµhÀ´å|¤…¹€œ¸œ½È€œ´œ¸)½¹ÍÐ}¹½‘•I”€ô€¼©}}AUI}|¨¼€¼¡]=¬¤ü¼¹Í½ÕÉ”¹É•Á±…” €]=œ°}Ý½É‘¡…É=É½Ð€¤ì((¼¼=‰©•Ð½¸Ñ…É•Ð¹½‘”°…¹…•ÍÍ½È¸5…ä¹½Ð½¹Ñ…¥¸É•Í•ÉÙ•(¼¼¡…É…Ñ•ÉÌ¸•ÍÍ½Èµ…ä½¹Ñ…¥¸…¹ä¡…É…Ñ•È•á•ÁÐ±½Í¥¹œ‰É…­•Ð¸)½¹ÍÐ}½‰©•ÑI”€ô€¼©}}AUI}|¨¼€¼ üép¸¡]¬¤ üéql ¸¬¥qt¤ü¤ü¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì((¼¼AÉ½Á•ÉÑä…¹…•ÍÍ½È¸5…ä¹½Ð½¹Ñ…¥¸É•Í•ÉÙ•¡…É…Ñ•ÉÌ¸•ÍÍ½Èµ…ä(¼¼½¹Ñ…¥¸…¹ä¹½¸µ‰É…­•Ð¡…É…Ñ•ÉÌ¸)½¹ÍÐ}ÁÉ½Á•ÉÑåI”€ô€¼©}}AUI}|¨¼€½p¸¡]¬¤ üéql ¸¬¥qt¤ü¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì()½¹ÍÐ}ÑÉ…­I”€ô¹•ÜI•áÀ €œœ($¬€xœ($¬}‘¥É•Ñ½ÉåI”($¬}¹½‘•I”($¬}½‰©•ÑI”($¬}ÁÉ½Á•ÉÑåI”($¬€œœ(¤ì()½¹ÍÐ}ÍÕÁÁ½ÉÑ•‘=‰©•Ñ9…µ•Ì€ôl€µ…Ñ•É¥…°œ°€µ…Ñ•É¥…±Ìœ°€‰½¹•Ìœ°€µ…Àœtì()±…ÍÌ½µÁ½Í¥Ñ”ì((%½¹ÍÑÉÕÑ½È Ñ…É•ÑÉ½ÕÀ°Á…Ñ °½ÁÑ¥½¹…±A…ÉÍ•‘A…Ñ €¤ì(($%½¹ÍÐÁ…ÉÍ•‘A…Ñ €ô½ÁÑ¥½¹…±A…ÉÍ•‘A…Ñ ñðAÉ½Á•ÉÑå	¥¹‘¥¹œ¹Á…ÉÍ•QÉ…­9…µ” Á…Ñ €¤ì(($%Ñ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ€ôÑ…É•ÑÉ½ÕÀì($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ôÑ…É•ÑÉ½ÕÀ¹ÍÕ‰ÍÉ¥‰•| Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì((%ô((%•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì€¼¼‰¥¹…±°‰¥¹‘¥¹œ(($%½¹ÍÐ™¥ÉÍÑY…±¥‘%¹‘•à€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°($$%‰¥¹‘¥¹œ€ôÑ¡¥Ì¹}‰¥¹‘¥¹Íl™¥ÉÍÑY…±¥‘%¹‘•àtì(($$¼¼…¹½¹±ä…±°€¹•ÑY…±Õ”½¸Ñ¡”™¥ÉÍÐ($%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤‰¥¹‘¥¹œ¹•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì((%ô((%Í•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹Í•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%ô((%ô((%‰¥¹ ¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹‰¥¹ ¤ì(($%ô((%ô((%Õ¹‰¥¹ ¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹Õ¹‰¥¹ ¤ì(($%ô((%ô()ô((¼¼9½Ñ”èQ¡¥Ì±…ÍÌÕÍ•Ì„MÑ…Ñ”Á…ÑÑ•É¸½¸„Á•Èµµ•Ñ¡½‰…Í¥Ìè(¼¼€‰¥¹œÍ•ÑÌ€Ñ¡¥Ì¹•ÑY…±Õ”œ€¼€Í•ÑY…±Õ”œ…¹Í¡…‘½ÝÌÑ¡”(¼¼ÁÉ½Ñ½ÑåÁ”Ù•ÉÍ¥½¸½˜Ñ¡•Í”µ•Ñ¡½‘ÌÝ¥Ñ ½¹”Ñ¡…ÐÉ•ÁÉ•Í•¹ÑÌ(¼¼Ñ¡”‰½Õ¹ÍÑ…Ñ”¸]¡•¸Ñ¡”ÁÉ½Á•ÉÑä¥Ì¹½Ð™½Õ¹°Ñ¡”µ•Ñ¡½‘Ì(¼¼‰•½µ”¹¼µ½ÁÌ¸(((¼¨¨(€¨Q¡¥Ì¡½±‘Ì„É•™•É•¹”Ñ¼„É•…°ÁÉ½Á•ÉÑä¥¸Ñ¡”Í•¹”É…Á ìÕÍ•¥¹Ñ•É¹…±±ä¸(€¨¼)±…ÍÌAÉ½Á•ÉÑå	¥¹‘¥¹œì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁÉ½Á•ÉÑä‰¥¹‘¥¹œ¸($€¨($€¨Á…É…´í=‰©•ÑôÉ½½Ñ9½‘”€´Q¡”É½½Ð¹½‘”¸($€¨Á…É…´íÍÑÉ¥¹ôÁ…Ñ €´Q¡”Á…Ñ ¸($€¨Á…É…´ìý=‰©•ÑômÁ…ÉÍ•‘A…Ñ¡t€´Q¡”Á…ÉÍ•Á…Ñ ¸($€¨¼(%½¹ÍÑÉÕÑ½È É½½Ñ9½‘”°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($$¼¨¨($$€¨Q¡”½‰©•ÐÁ…Ñ Ñ¼Ñ¡”…¹¥µ…Ñ•ÁÉ½Á•ÉÑä¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹Á…Ñ €ôÁ…Ñ ì(($$¼¨¨($$€¨¸½‰©•Ð¡½±‘¥¹œ¥¹™½Éµ…Ñ¥½¸…‰½ÕÐÑ¡”Á…Ñ ¸($$€¨($$€¨ÑåÁ”í=‰©•Ñô($$€¨¼($%Ñ¡¥Ì¹Á…ÉÍ•‘A…Ñ €ôÁ…ÉÍ•‘A…Ñ ñðAÉ½Á•ÉÑå	¥¹‘¥¹œ¹Á…ÉÍ•QÉ…­9…µ” Á…Ñ €¤ì(($$¼¨¨($$€¨Q¡”½‰©•Ð½Ý¹ÌÑ¡”…¹¥µ…Ñ•ÁÉ½Á•ÉÑä¸($$€¨($$€¨ÑåÁ”ìý=‰©•Ñô($$€¨¼($%Ñ¡¥Ì¹¹½‘”€ôAÉ½Á•ÉÑå	¥¹‘¥¹œ¹™¥¹‘9½‘” É½½Ñ9½‘”°Ñ¡¥Ì¹Á…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”€¤ì(($$¼¨¨($$€¨Q¡”É½½Ð¹½‘”¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍñM­•±•Ñ½¹ô($$€¨¼($%Ñ¡¥Ì¹É½½Ñ9½‘”€ôÉ½½Ñ9½‘”ì(($$¼¼¥¹¥Ñ¥…°ÍÑ…Ñ”½˜Ñ¡•Í”µ•Ñ¡½‘ÌÑ¡…Ð…±±Ì€‰¥¹œ($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹‰½Õ¹ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹‰½Õ¹ì((%ô((($¼¨¨($€¨…Ñ½Éäµ•Ñ¡½™½ÈÉ•…Ñ¥¹œ„ÁÉ½Á•ÉÑä‰¥¹‘¥¹œ™É½´Ñ¡”¥Ù•¸Á…É…µ•Ñ•ÉÌ¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´í=‰©•ÑôÉ½½Ð€´Q¡”É½½Ð¹½‘”¸($€¨Á…É…´íÍÑÉ¥¹ôÁ…Ñ €´Q¡”Á…Ñ ¸($€¨Á…É…´ìý=‰©•ÑômÁ…ÉÍ•‘A…Ñ¡t€´Q¡”Á…ÉÍ•Á…Ñ ¸($€¨É•ÑÕÉ¸íAÉ½Á•ÉÑå	¥¹‘¥¹ñ½µÁ½Í¥Ñ•ôQ¡”É•…Ñ•ÁÉ½Á•ÉÑä‰¥¹‘¥¹œ½È½µÁ½Í¥Ñ”¸($€¨¼(%ÍÑ…Ñ¥ŒÉ•…Ñ” É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%¥˜€ €„€ É½½Ð€˜˜É½½Ð¹¥Í¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ€¤€¤ì(($$%É•ÑÕÉ¸¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô•±Í”ì(($$%É•ÑÕÉ¸¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ” É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô((%ô(($¼¨¨($€¨I•Á±…•ÌÍÁ…•ÌÝ¥Ñ Õ¹‘•ÉÍ½É•Ì…¹É•µ½Ù•ÌÕ¹ÍÕÁÁ½ÉÑ•¡…É…Ñ•ÉÌ™É½´($€¨¹½‘”¹…µ•Ì°Ñ¼•¹ÍÕÉ”½µÁ…Ñ¥‰¥±¥ÑäÝ¥Ñ Á…ÉÍ•QÉ…­9…µ” ¤¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´9½‘”¹…µ”Ñ¼‰”Í…¹¥Ñ¥é•¸($€¨É•ÑÕÉ¸íÍÑÉ¥¹ôQ¡”Í…¹¥Ñ¥é•¹½‘”¹…µ”¸($€¨¼(%ÍÑ…Ñ¥ŒÍ…¹¥Ñ¥é•9½‘•9…µ” ¹…µ”€¤ì(($%É•ÑÕÉ¸¹…µ”¹É•Á±…” €½qÌ½œ°€|œ€¤¹É•Á±…” }É•Í•ÉÙ•‘I”°€œœ€¤ì((%ô(($¼¨¨($€¨A…ÉÍ•ÌÑ¡”¥Ù•¸ÑÉ…¬¹…µ”€¡…¸½‰©•ÐÁ…Ñ Ñ¼…¸…¹¥µ…Ñ•ÁÉ½Á•ÉÑä¤…¹($€¨É•ÑÕÉ¹Ì…¸½‰©•ÐÝ¥Ñ ¥¹™½Éµ…Ñ¥½¸…‰½ÕÐÑ¡”Á…Ñ ¸5…Ñ¡•ÌÍÑÉ¥¹Ì¥¸Ñ¡”™½±±½Ý¥¹œ™½ÉµÌè($€¨($€¨€´¹½‘•9…µ”¹ÁÉ½Á•ÉÑä($€¨€´¹½‘•9…µ”¹ÁÉ½Á•ÉÑåm…•ÍÍ½Ét($€¨€´¹½‘•9…µ”¹µ…Ñ•É¥…°¹ÁÉ½Á•ÉÑåm…•ÍÍ½Ét($€¨€´ÕÕ¥¹ÁÉ½Á•ÉÑåm…•ÍÍ½Ét($€¨€´ÕÕ¥¹½‰©•Ñ9…µ•m½‰©•Ñ%¹‘•át¹ÁÉ½Á•ÉÑå9…µ•mÁÉ½Á•ÉÑå%¹‘•át($€¨€´Á…É•¹Ñ9…µ”½¹½‘•9…µ”¹ÁÉ½Á•ÉÑä($€¨€´Á…É•¹Ñ9…µ”½Á…É•¹Ñ9…µ”½¹½‘•9…µ”¹ÁÉ½Á•ÉÑåm¥¹‘•át($€¨€´€¹‰½¹•mÉµ…ÑÕÉ”¹}½t¹Á½Í¥Ñ¥½¸($€¨€´Í•¹”é¡•±¥Õµ}‰…±±½½¹}µ½‘•°é¡•±¥Õµ}‰…±±½½¹}µ½‘•°¹Á½Í¥Ñ¥½¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´íÍÑÉ¥¹ôÑÉ…­9…µ”€´Q¡”ÑÉ…¬¹…µ”Ñ¼Á…ÉÍ”¸($€¨É•ÑÕÉ¸í=‰©•ÑôQ¡”Á…ÉÍ•ÑÉ…¬¹…µ”…Ì…¸½‰©•Ð¸($€¨¼(%ÍÑ…Ñ¥ŒÁ…ÉÍ•QÉ…­9…µ” ÑÉ…­9…µ”€¤ì(($%½¹ÍÐµ…Ñ¡•Ì€ô}ÑÉ…­I”¹•á•Œ ÑÉ…­9…µ”€¤ì(($%¥˜€ µ…Ñ¡•Ì€ôôô¹Õ±°€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €AÉ½Á•ÉÑå	¥¹‘¥¹œè…¹¹½ÐÁ…ÉÍ”ÑÉ…­9…µ”è€œ€¬ÑÉ…­9…µ”€¤ì(($%ô(($%½¹ÍÐÉ•ÍÕ±ÑÌ€ôì($$$¼¼‘¥É•Ñ½Éå9…µ”èµ…Ñ¡•Íl€Ät°€¼¼€¡ÑÍ¡Ü¤ÕÉÉ•¹Ñ±äÕ¹ÕÍ•($$%¹½‘•9…µ”èµ…Ñ¡•Íl€Èt°($$%½‰©•Ñ9…µ”èµ…Ñ¡•Íl€Ìt°($$%½‰©•Ñ%¹‘•àèµ…Ñ¡•Íl€Ðt°($$%ÁÉ½Á•ÉÑå9…µ”èµ…Ñ¡•Íl€Ôt°€¼¼É•ÅÕ¥É•($$%ÁÉ½Á•ÉÑå%¹‘•àèµ…Ñ¡•Íl€Øt($%ôì(($%½¹ÍÐ±…ÍÑ½Ð€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”€˜˜É•ÍÕ±ÑÌ¹¹½‘•9…µ”¹±…ÍÑ%¹‘•á=˜ €œ¸œ€¤ì(($%¥˜€ ±…ÍÑ½Ð€„ôôÕ¹‘•™¥¹•€˜˜±…ÍÑ½Ð€„ôô€´Ä€¤ì(($$%½¹ÍÐ½‰©•Ñ9…µ”€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”¹ÍÕ‰ÍÑÉ¥¹œ ±…ÍÑ½Ð€¬€Ä€¤ì(($$$¼¼=‰©•Ð¹…µ•ÌµÕÍÐ‰”¡•­•……¥¹ÍÐ…¸…±±½Ý±¥ÍÐ¸=Ñ¡•ÉÝ¥Í”°Ñ¡•É”($$$¼¼¥Ì¹¼Ý…äÑ¼Á…ÉÍ”€™½¼¹‰…È¹‰…èœè€‰…èœµÕÍÐ‰”„ÁÉ½Á•ÉÑä°‰ÕÐ($$$¼¼€‰…Èœ½Õ±‰”Ñ¡”½‰©•Ñ9…µ”°½ÈÁ…ÉÐ½˜„¹½‘•9…µ”€¡Ý¡¥ …¸($$$¼¼¥¹±Õ‘”€œ¸œ¡…É…Ñ•ÉÌ¤¸($$%¥˜€ }ÍÕÁÁ½ÉÑ•‘=‰©•Ñ9…µ•Ì¹¥¹‘•á=˜ ½‰©•Ñ9…µ”€¤€„ôô€´Ä€¤ì(($$$%É•ÍÕ±ÑÌ¹¹½‘•9…µ”€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”¹ÍÕ‰ÍÑÉ¥¹œ €À°±…ÍÑ½Ð€¤ì($$$%É•ÍÕ±ÑÌ¹½‰©•Ñ9…µ”€ô½‰©•Ñ9…µ”ì(($$%ô(($%ô(($%¥˜€ É•ÍÕ±ÑÌ¹ÁÉ½Á•ÉÑå9…µ”€ôôô¹Õ±°ñðÉ•ÍÕ±ÑÌ¹ÁÉ½Á•ÉÑå9…µ”¹±•¹Ñ €ôôô€À€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½ÐÁ…ÉÍ”ÁÉ½Á•ÉÑå9…µ”™É½´ÑÉ…­9…µ”è€œ€¬ÑÉ…­9…µ”€¤ì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±ÑÌì((%ô(($¼¨¨($€¨M•…É¡•Ì™½È„¹½‘”¥¸Ñ¡”¡¥•É…É¡ä½˜Ñ¡”¥Ù•¸É½½Ð½‰©•Ð‰äÑ¡”¥Ù•¸($€¨¹½‘”¹…µ”¸($€¨($€¨ÍÑ…Ñ¥Œ($€¨Á…É…´í=‰©•ÑôÉ½½Ð€´Q¡”É½½Ð½‰©•Ð¸($€¨Á…É…´íÍÑÉ¥¹ñ¹Õµ‰•Éô¹½‘•9…µ”€´Q¡”¹…µ”½˜Ñ¡”¹½‘”¸($€¨É•ÑÕÉ¸ìý=‰©•ÑôQ¡”™½Õ¹¹½‘”¸I•ÑÕÉ¹Ì¹Õ±±€¥˜¹¼½‰©•ÐÝ…Ì™½Õ¹¸($€¨¼(%ÍÑ…Ñ¥Œ™¥¹‘9½‘” É½½Ð°¹½‘•9…µ”€¤ì(($%¥˜€ ¹½‘•9…µ”€ôôôÕ¹‘•™¥¹•ñð¹½‘•9…µ”€ôôô€œœñð¹½‘•9…µ”€ôôô€œ¸œñð¹½‘•9…µ”€ôôô€´Äñð¹½‘•9…µ”€ôôôÉ½½Ð¹¹…µ”ñð¹½‘•9…µ”€ôôôÉ½½Ð¹ÕÕ¥€¤ì(($$%É•ÑÕÉ¸É½½Ðì(($%ô(($$¼¼Í•…É ¥¹Ñ¼Í­•±•Ñ½¸‰½¹•Ì¸($%¥˜€ É½½Ð¹Í­•±•Ñ½¸€¤ì(($$%½¹ÍÐ‰½¹”€ôÉ½½Ð¹Í­•±•Ñ½¸¹•Ñ	½¹•	å9…µ” ¹½‘•9…µ”€¤ì(($$%¥˜€ ‰½¹”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%É•ÑÕÉ¸‰½¹”ì(($$%ô(($%ô(($$¼¼Í•…É ¥¹Ñ¼¹½‘”ÍÕ‰ÑÉ•”¸($%¥˜€ É½½Ð¹¡¥±‘É•¸€¤ì(($$%½¹ÍÐÍ•…É¡9½‘•MÕ‰ÑÉ•”€ô™Õ¹Ñ¥½¸€ ¡¥±‘É•¸€¤ì(($$$%™½È€ ±•Ð¤€ô€Àì¤€ð¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$$%½¹ÍÐ¡¥±‘9½‘”€ô¡¥±‘É•¹l¤tì(($$$$%¥˜€ ¡¥±‘9½‘”¹¹…µ”€ôôô¹½‘•9…µ”ñð¡¥±‘9½‘”¹ÕÕ¥€ôôô¹½‘•9…µ”€¤ì(($$$$$%É•ÑÕÉ¸¡¥±‘9½‘”ì(($$$$%ô(($$$$%½¹ÍÐÉ•ÍÕ±Ð€ôÍ•…É¡9½‘•MÕ‰ÑÉ•” ¡¥±‘9½‘”¹¡¥±‘É•¸€¤ì(($$$$%¥˜€ É•ÍÕ±Ð€¤É•ÑÕÉ¸É•ÍÕ±Ðì(($$$%ô(($$$%É•ÑÕÉ¸¹Õ±°ì(($$%ôì(($$%½¹ÍÐÍÕ‰QÉ••9½‘”€ôÍ•…É¡9½‘•MÕ‰ÑÉ•” É½½Ð¹¡¥±‘É•¸€¤ì(($$%¥˜€ ÍÕ‰QÉ••9½‘”€¤ì(($$$%É•ÑÕÉ¸ÍÕ‰QÉ••9½‘”ì(($$%ô(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¼Ñ¡•Í”…É”ÕÍ•Ñ¼€‰‰¥¹ˆ„¹½¹•á¥ÍÑ•¹ÐÁÉ½Á•ÉÑä(%}•ÑY…±Õ•}Õ¹…Ù…¥±…‰±” ¤íô(%}Í•ÑY…±Õ•}Õ¹…Ù…¥±…‰±” ¤íô(($¼¼•ÑÑ•ÉÌ((%}•ÑY…±Õ•}‘¥É•Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%‰Õ™™•Él½™™Í•Ðt€ôÑ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”tì((%ô((%}•ÑY…±Õ•}…ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐÍ½ÕÉ”€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ôÍ½ÕÉ”¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰Õ™™•Él½™™Í•Ð€¬¬t€ôÍ½ÕÉ•l¤tì(($%ô((%ô((%}•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%‰Õ™™•Él½™™Í•Ðt€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àtì((%ô((%}•ÑY…±Õ•}Ñ½ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹Ñ½ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì((%ô(($¼¼¥É•Ð((%}Í•ÑY…±Õ•}‘¥É•Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì((%ô((%}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼¹Ñ¥É•ÉÉ…ä((%}Í•ÑY…±Õ•}…ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼ÉÉ…å±•µ•¹Ð((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼!…ÍQ½É½µÉÉ…ä((%}Í•ÑY…±Õ•}™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì((%ô((%}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}•ÑY…±Õ•}Õ¹‰½Õ¹ Ñ…É•ÑÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì($%Ñ¡¥Ì¹•ÑY…±Õ” Ñ…É•ÑÉÉ…ä°½™™Í•Ð€¤ì((%ô((%}Í•ÑY…±Õ•}Õ¹‰½Õ¹ Í½ÕÉ•ÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì($%Ñ¡¥Ì¹Í•ÑY…±Õ” Í½ÕÉ•ÉÉ…ä°½™™Í•Ð€¤ì((%ô(($¼¨¨($€¨É•…Ñ•Ì„•ÑÑ•È€¼Í•ÑÑ•ÈÁ…¥È™½ÈÑ¡”ÁÉ½Á•ÉÑäÑÉ…­•‰äÑ¡¥Ì‰¥¹‘¥¹œ¸($€¨¼(%‰¥¹ ¤ì(($%±•ÐÑ…É•Ñ=‰©•Ð€ôÑ¡¥Ì¹¹½‘”ì($%½¹ÍÐÁ…ÉÍ•‘A…Ñ €ôÑ¡¥Ì¹Á…ÉÍ•‘A…Ñ ì(($%½¹ÍÐ½‰©•Ñ9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹½‰©•Ñ9…µ”ì($%½¹ÍÐÁÉ½Á•ÉÑå9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹ÁÉ½Á•ÉÑå9…µ”ì($%±•ÐÁÉ½Á•ÉÑå%¹‘•à€ôÁ…ÉÍ•‘A…Ñ ¹ÁÉ½Á•ÉÑå%¹‘•àì(($%¥˜€ €„Ñ…É•Ñ=‰©•Ð€¤ì(($$%Ñ…É•Ñ=‰©•Ð€ôAÉ½Á•ÉÑå	¥¹‘¥¹œ¹™¥¹‘9½‘” Ñ¡¥Ì¹É½½Ñ9½‘”°Á…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”€¤ì(($$%Ñ¡¥Ì¹¹½‘”€ôÑ…É•Ñ=‰©•Ðì(($%ô(($$¼¼Í•Ð™…¥°ÍÑ…Ñ”Í¼Ý”…¸©ÕÍÐ€É•ÑÕÉ¸œ½¸•ÉÉ½È($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹…Ù…¥±…‰±”ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹…Ù…¥±…‰±”ì(($$¼¼•¹ÍÕÉ”Ñ¡•É”¥Ì„Ù…±Õ”¹½‘”($%¥˜€ €„Ñ…É•Ñ=‰©•Ð€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè9¼Ñ…É•Ð¹½‘”™½Õ¹™½ÈÑÉ…¬è€œ€¬Ñ¡¥Ì¹Á…Ñ €¬€œ¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ ½‰©•Ñ9…µ”€¤ì(($$%±•Ð½‰©•Ñ%¹‘•à€ôÁ…ÉÍ•‘A…Ñ ¹½‰©•Ñ%¹‘•àì(($$$¼¼ÍÁ•¥…°…Í•ÌÝ•É”Ý”¹••Ñ¼É•… ‘••Á•È¥¹Ñ¼Ñ¡”¡¥•É…É¡äÑ¼•ÐÑ¡”™…”µ…Ñ•É¥…±Ì¸¸¸¸($$%ÍÝ¥Ñ € ½‰©•Ñ9…µ”€¤ì(($$$%…Í”€µ…Ñ•É¥…±Ìœè(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…°¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ì€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ì…Ì¹½‘”¹µ…Ñ•É¥…°‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…±Ì…ÉÉ…ä¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ìì(($$$$%‰É•…¬ì(($$$%…Í”€‰½¹•Ìœè(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹Í­•±•Ñ½¸€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼‰½¹•Ì…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„Í­•±•Ñ½¸¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$$¼¼Á½Ñ•¹Ñ¥…°™ÕÑÕÉ”½ÁÑ¥µ¥é…Ñ¥½¸èÍ­¥ÀÑ¡¥Ì¥˜ÁÉ½Á•ÉÑå%¹‘•à¥Ì…±É•…‘ä…¸¥¹Ñ••È($$$$$¼¼…¹½¹Ù•ÉÐÑ¡”¥¹Ñ••ÈÍÑÉ¥¹œÑ¼„ÑÉÕ”¥¹Ñ••È¸(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹Í­•±•Ñ½¸¹‰½¹•Ìì(($$$$$¼¼ÍÕÁÁ½ÉÐÉ•Í½±Ù¥¹œµ½ÉÁ¡Q…É•Ð¹…µ•Ì¥¹Ñ¼¥¹‘¥•Ì¸($$$$%™½È€ ±•Ð¤€ô€Àì¤€ðÑ…É•Ñ=‰©•Ð¹±•¹Ñ ì¤€¬¬€¤ì(($$$$$%¥˜€ Ñ…É•Ñ=‰©•Ñl¤t¹¹…µ”€ôôô½‰©•Ñ%¹‘•à€¤ì(($$$$$$%½‰©•Ñ%¹‘•à€ô¤ì($$$$$$%‰É•…¬ì(($$$$$%ô(($$$$%ô(($$$$%‰É•…¬ì(($$$%…Í”€µ…Àœè(($$$$%¥˜€ €µ…Àœ¥¸Ñ…É•Ñ=‰©•Ð€¤ì(($$$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Àì($$$$$%‰É•…¬ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…°¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…À€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°¹µ…À…Ì¹½‘”¹µ…Ñ•É¥…°‘½•Ì¹½Ð¡…Ù”„µ…À¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Àì($$$$%‰É•…¬ì(($$$%‘•™…Õ±Ðè(($$$$%¥˜€ Ñ…É•Ñ=‰©•Ñl½‰©•Ñ9…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼½‰©•Ñ9…µ”½˜¹½‘”Õ¹‘•™¥¹•¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ñl½‰©•Ñ9…µ”tì(($$%ô((($$%¥˜€ ½‰©•Ñ%¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$%¥˜€ Ñ…É•Ñ=‰©•Ñl½‰©•Ñ%¹‘•àt€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œèQÉå¥¹œÑ¼‰¥¹Ñ¼½‰©•Ñ%¹‘•à½˜½‰©•Ñ9…µ”°‰ÕÐ¥ÌÕ¹‘•™¥¹•¸œ°Ñ¡¥Ì°Ñ…É•Ñ=‰©•Ð€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ñl½‰©•Ñ%¹‘•àtì(($$%ô(($%ô(($$¼¼É•Í½±Ù”ÁÉ½Á•ÉÑä($%½¹ÍÐ¹½‘•AÉ½Á•ÉÑä€ôÑ…É•Ñ=‰©•ÑlÁÉ½Á•ÉÑå9…µ”tì(($%¥˜€ ¹½‘•AÉ½Á•ÉÑä€ôôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ¹½‘•9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œèQÉå¥¹œÑ¼ÕÁ‘…Ñ”ÁÉ½Á•ÉÑä™½ÈÑÉ…¬è€œ€¬¹½‘•9…µ”€¬($$$$œ¸œ€¬ÁÉ½Á•ÉÑå9…µ”€¬€œ‰ÕÐ¥ÐÝ…Í¹pÐ™½Õ¹¸œ°Ñ…É•Ñ=‰©•Ð€¤ì($$%É•ÑÕÉ¸ì(($%ô(($$¼¼‘•Ñ•Éµ¥¹”Ù•ÉÍ¥½¹¥¹œÍ¡•µ”($%±•ÐÙ•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹9½¹”ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ðì(($%¥˜€ Ñ…É•Ñ=‰©•Ð¹¥Í5…Ñ•É¥…°€ôôôÑÉÕ”€¤ì(($$%Ù•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹9••‘ÍUÁ‘…Ñ”ì(($%ô•±Í”¥˜€ Ñ…É•Ñ=‰©•Ð¹¥Í=‰©•ÐÍ€ôôôÑÉÕ”€¤ì(($$%Ù•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”ì(($%ô(($$¼¼‘•Ñ•Éµ¥¹”¡½ÜÑ¡”ÁÉ½Á•ÉÑä•ÑÌ‰½Õ¹($%±•Ð‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹¥É•Ðì(($%¥˜€ ÁÉ½Á•ÉÑå%¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼…•ÍÌ„ÍÕˆ•±•µ•¹Ð½˜Ñ¡”ÁÉ½Á•ÉÑä…ÉÉ…ä€¡½¹±äÁÉ¥µ¥Ñ¥Ù•Ì…É”ÍÕÁÁ½ÉÑ•É¥¡Ð¹½Ü¤(($$%¥˜€ ÁÉ½Á•ÉÑå9…µ”€ôôô€µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ìœ€¤ì(($$$$¼¼Á½Ñ•¹Ñ¥…°½ÁÑ¥µ¥é…Ñ¥½¸°Í­¥ÀÑ¡¥Ì¥˜ÁÉ½Á•ÉÑå%¹‘•à¥Ì…±É•…‘ä…¸¥¹Ñ••È°…¹½¹Ù•ÉÐÑ¡”¥¹Ñ••ÈÍÑÉ¥¹œÑ¼„ÑÉÕ”¥¹Ñ••È¸(($$$$¼¼ÍÕÁÁ½ÉÐÉ•Í½±Ù¥¹œµ½ÉÁ¡Q…É•Ð¹…µ•Ì¥¹Ñ¼¥¹‘¥•Ì¸($$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹•½µ•ÑÉä€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì‰•…ÕÍ”¹½‘”‘½•Ì¹½Ð¡…Ù”„•½µ•ÑÉä¸œ°Ñ¡¥Ì€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì‰•…ÕÍ”¹½‘”‘½•Ì¹½Ð¡…Ù”„•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì¸œ°Ñ¡¥Ì€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%¥˜€ Ñ…É•Ñ=‰©•Ð¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…ÉålÁÉ½Á•ÉÑå%¹‘•àt€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%ÁÉ½Á•ÉÑå%¹‘•à€ôÑ…É•Ñ=‰©•Ð¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…ÉålÁÉ½Á•ÉÑå%¹‘•àtì(($$$%ô(($$%ô(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹ÉÉ…å±•µ•¹Ðì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì($$%Ñ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•à€ôÁÉ½Á•ÉÑå%¹‘•àì(($%ô•±Í”¥˜€ ¹½‘•AÉ½Á•ÉÑä¹™É½µÉÉ…ä€„ôôÕ¹‘•™¥¹•€˜˜¹½‘•AÉ½Á•ÉÑä¹Ñ½ÉÉ…ä€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼µÕÍÐÕÍ”½Áä™½È=‰©•ÐÍ¹Õ±•È½EÕ…Ñ•É¹¥½¸(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹!…ÍÉ½µQ½ÉÉ…äì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì(($%ô•±Í”¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹½‘•AÉ½Á•ÉÑä€¤€¤ì(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹¹Ñ¥É•ÉÉ…äì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”€ôÁÉ½Á•ÉÑå9…µ”ì(($%ô(($$¼¼Í•±•Ð•ÑÑ•È€¼Í•ÑÑ•È($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹•ÑÑ•É	å	¥¹‘¥¹QåÁ•l‰¥¹‘¥¹QåÁ”tì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹M•ÑÑ•É	å	¥¹‘¥¹QåÁ•¹‘Y•ÉÍ¥½¹¥¹l‰¥¹‘¥¹QåÁ”ulÙ•ÉÍ¥½¹¥¹œtì((%ô(($¼¨¨($€¨U¹‰¥¹‘ÌÑ¡”ÁÉ½Á•ÉÑä¸($€¨¼(%Õ¹‰¥¹ ¤ì(($%Ñ¡¥Ì¹¹½‘”€ô¹Õ±°ì(($$¼¼‰…¬Ñ¼Ñ¡”ÁÉ½Ñ½ÑåÁ”Ù•ÉÍ¥½¸½˜•ÑY…±Õ”€¼Í•ÑY…±Õ”($$¼¼¹½Ñ”è…Ù½¥‘¥¹œÑ¼µÕÑ…Ñ”Ñ¡”Í¡…Á”½˜€Ñ¡¥ÌœÙ¥„€‘•±•Ñ”œ($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹‰½Õ¹ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹‰½Õ¹ì((%ô()ô()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”€ô½µÁ½Í¥Ñ”ì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹	¥¹‘¥¹QåÁ”€ôì(%¥É•Ðè€À°(%¹Ñ¥É•ÉÉ…äè€Ä°(%ÉÉ…å±•µ•¹Ðè€È°(%!…ÍÉ½µQ½ÉÉ…äè€Ì)ôì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹Y•ÉÍ¥½¹¥¹œ€ôì(%9½¹”è€À°(%9••‘ÍUÁ‘…Ñ”è€Ä°(%5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”è€È)ôì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹•ÑÑ•É	å	¥¹‘¥¹QåÁ”€ôl((%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}‘¥É•Ð°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}…ÉÉ…ä°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}Ñ½ÉÉ…ä°()tì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹M•ÑÑ•É	å	¥¹‘¥¹QåÁ•¹‘Y•ÉÍ¥½¹¥¹œ€ôl((%l($$¼¼¥É•Ð($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ð°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼¹Ñ¥É•ÉÉ…ä(($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…ä°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼ÉÉ…å±•µ•¹Ð($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼!…ÍQ½É½µÉÉ…ä($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…ä°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t()tì((¼¨¨(€¨É½ÕÀ½˜½‰©•ÑÌÑ¡…ÐÉ••¥Ù•Ì„Í¡…É•…¹¥µ…Ñ¥½¸ÍÑ…Ñ”¸(€¨(€¨UÍ…”è(€¨(€¨€´‘½‰©•ÑÌå½ÔÝ½Õ±½Ñ¡•ÉÝ¥Í”Á…ÍÌ…Ì€É½½ÐœÑ¼Ñ¡”(€¨½¹ÍÑÉÕÑ½È½ÈÑ¡”€¹±¥ÁÑ¥½¸µ•Ñ¡½½˜¹¥µ…Ñ¥½¹5¥á•È¸(€¨€´%¹ÍÑ•…Á…ÍÌÑ¡¥Ì½‰©•Ð…Ì€É½½Ðœ¸(€¨€´e½Ô…¸…±Í¼…‘…¹É•µ½Ù”½‰©•ÑÌ±…Ñ•ÈÝ¡•¸Ñ¡”µ¥á•È¥ÌÉÕ¹¹¥¹œ¸(€¨(€¨9½Ñ”è(€¨(€¨€´=‰©•ÑÌ½˜Ñ¡¥Ì±…ÍÌ…ÁÁ•…È…Ì½¹”½‰©•ÐÑ¼Ñ¡”µ¥á•È°(€¨Í¼…¡”½¹ÑÉ½°½˜Ñ¡”¥¹‘¥Ù¥‘Õ…°½‰©•ÑÌµÕÍÐ‰”‘½¹”½¸Ñ¡”É½ÕÀ¸(€¨(€¨1¥µ¥Ñ…Ñ¥½¸è(€¨(€¨€´Q¡”…¹¥µ…Ñ•ÁÉ½Á•ÉÑ¥•ÌµÕÍÐ‰”½µÁ…Ñ¥‰±”…µ½¹œÑ¡”…±°½‰©•ÑÌ¥¸Ñ¡”É½ÕÀ¸(€¨€´Í¥¹±”ÁÉ½Á•ÉÑä…¸•¥Ñ¡•È‰”½¹ÑÉ½±±•Ñ¡É½Õ „Ñ…É•ÐÉ½ÕÀ½È‘¥É•Ñ±ä°‰ÕÐ¹½Ð‰½Ñ ¸(€¨¼)±…ÍÌ¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…¹¥µ…Ñ¥½¸É½ÕÀ¸($€¨($€¨Á…É…´ì¸¸¹=‰©•ÐÍô…ÉÕµ•¹ÑÌ€´¸…É‰¥ÑÉ…Éä¹Õµ‰•È½˜€Í½‰©•ÑÌÑ¡…ÐÍ¡…É”Ñ¡”Í…µ”…¹¥µ…Ñ¥½¸ÍÑ…Ñ”¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ€ôÑÉÕ”ì(($$¼¨¨($$€¨Q¡”UU%½˜Ñ¡”€Í½‰©•Ð¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨É•…‘½¹±ä($$€¨¼($%Ñ¡¥Ì¹ÕÕ¥€ô•¹•É…Ñ•UU% ¤ì(($$¼¼…¡•½‰©•ÑÌ™½±±½Ý•‰äÑ¡”…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}½‰©•ÑÌ€ôÉÉ…ä¹ÁÉ½Ñ½ÑåÁ”¹Í±¥”¹…±° …ÉÕµ•¹ÑÌ€¤ì(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô€Àì€¼¼Ñ¡É•Í¡½±($$¼¼¹½Ñ”èÉ•…‰äAÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”(($%½¹ÍÐ¥¹‘¥•Ì€ôíôì($%Ñ¡¥Ì¹}¥¹‘¥•Í	åUU%€ô¥¹‘¥•Ìì€¼¼™½È‰½½­­••Á¥¹œ(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%¥¹‘¥•Íl…ÉÕµ•¹ÑÍl¤t¹ÕÕ¥t€ô¤ì(($%ô(($%Ñ¡¥Ì¹}Á…Ñ¡Ì€ômtì€¼¼¥¹Í¥‘”èÍÑÉ¥¹œ($%Ñ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì€ômtì€¼¼¥¹Í¥‘”èìÝ”‘½¸Ð…É”°¡•É”ô($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ômtì€¼¼¥¹Í¥‘”èÉÉ…äðAÉ½Á•ÉÑå	¥¹‘¥¹œ€ø($%Ñ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ €ôíôì€¼¼¥¹Í¥‘”è¥¹‘¥•Ì¥¸Ñ¡•Í”…ÉÉ…åÌ(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%Ñ¡¥Ì¹ÍÑ…ÑÌ€ôì(($$%½‰©•ÑÌèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}½‰©•ÑÌ¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Ñ¡¥Ì¹Ñ½Ñ…°€´Í½Á”¹¹…¡•‘=‰©•ÑÍ|ì(($$$%ô($$%ô°($$%•Ð‰¥¹‘¥¹ÍA•É=‰©•Ð ¤ì(($$$%É•ÑÕÉ¸Í½Á”¹}‰¥¹‘¥¹Ì¹±•¹Ñ ì(($$%ô(($%ôì((%ô(($¼¨¨($€¨‘‘Ì…¸…É‰¥ÑÉ…Éä¹Õµ‰•È½˜½‰©•ÑÌÑ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸É½ÕÀ¸($€¨($€¨Á…É…´ì¸¸¹=‰©•ÐÍô…ÉÕµ•¹ÑÌ€´Q¡”€Í½‰©•ÑÌÑ¼…‘¸($€¨¼(%…‘ ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%Á…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð­¹½Ý¹=‰©•Ð€ôÕ¹‘•™¥¹•°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ °($$%¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥ì($$%±•Ð¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€ôôôÕ¹‘•™¥¹•€¤ì(($$$$¼¼Õ¹­¹½Ý¸½‰©•Ð€´ø…‘¥ÐÑ¼Ñ¡”Q%YÉ•¥½¸(($$$%¥¹‘•à€ô¹=‰©•ÑÌ€¬¬ì($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÌ¹ÁÕÍ  ½‰©•Ð€¤ì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%‰¥¹‘¥¹Íl¨t¹ÁÕÍ  ¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ¡Íl¨t°Á…ÉÍ•‘A…Ñ¡Íl¨t€¤€¤ì(($$$%ô(($$%ô•±Í”¥˜€ ¥¹‘•à€ð¹…¡•‘=‰©•ÑÌ€¤ì(($$$%­¹½Ý¹=‰©•Ð€ô½‰©•ÑÍl¥¹‘•àtì(($$$$¼¼µ½Ù”•á¥ÍÑ¥¹œ½‰©•ÐÑ¼Ñ¡”Q%YÉ•¥½¸(($$$%½¹ÍÐ™¥ÉÍÑÑ¥Ù•%¹‘•à€ô€´´¹…¡•‘=‰©•ÑÌ°($$$$%±…ÍÑ…¡•‘=‰©•Ð€ô½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àtì(($$$%¥¹‘¥•Í	åUU%l±…ÍÑ…¡•‘=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ…¡•‘=‰©•Ðì(($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô™¥ÉÍÑÑ¥Ù•%¹‘•àì($$$%½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô½‰©•Ðì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$%±…ÍÑ…¡•€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àtì(($$$$%±•Ð‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àtì(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô±…ÍÑ…¡•ì(($$$$%¥˜€ ‰¥¹‘¥¹œ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$$¼¼Í¥¹”Ý”‘¼¹½Ð‰½Ñ¡•ÈÑ¼É•…Ñ”¹•Ü‰¥¹‘¥¹Ì($$$$$$¼¼™½È½‰©•ÑÌÑ¡…Ð…É”…¡•°Ñ¡”‰¥¹‘¥¹œµ…ä($$$$$$¼¼½Èµ…ä¹½Ð•á¥ÍÐ(($$$$$%‰¥¹‘¥¹œ€ô¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ¡Íl¨t°Á…ÉÍ•‘A…Ñ¡Íl¨t€¤ì(($$$$%ô(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($$$%ô(($$%ô•±Í”¥˜€ ½‰©•ÑÍl¥¹‘•àt€„ôô­¹½Ý¹=‰©•Ð€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀè¥™™•É•¹Ð½‰©•ÑÌÝ¥Ñ Ñ¡”Í…µ”UU%€œ€¬($$$$$‘•Ñ•Ñ•¸±•…¸Ñ¡”…¡•Ì½ÈÉ•É•…Ñ”å½ÕÈ¥¹™É…ÍÑÉÕÑÕÉ”Ý¡•¸É•±½…‘¥¹œÍ•¹•Ì¸œ€¤ì(($$%ô€¼¼•±Í”Ñ¡”½‰©•Ð¥Ì…±É•…‘äÝ¡•É”Ý”Ý…¹Ð¥ÐÑ¼‰”(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô(($¼¨¨($€¨I•µ½Ù•Ì…¸…É‰¥ÑÉ…Éä¹Õµ‰•È½˜½‰©•ÑÌÑ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸É½ÕÀ($€¨($€¨Á…É…´ì¸¸¹=‰©•ÐÍô…ÉÕµ•¹ÑÌ€´Q¡”€Í½‰©•ÑÌÑ¼É•µ½Ù”¸($€¨¼(%É•µ½Ù” ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥°($$$%¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€˜˜¥¹‘•à€øô¹…¡•‘=‰©•ÑÌ€¤ì(($$$$¼¼µ½Ù”•á¥ÍÑ¥¹œ½‰©•Ð¥¹Ñ¼Ñ¡”!É•¥½¸(($$$%½¹ÍÐ±…ÍÑ…¡•‘%¹‘•à€ô¹…¡•‘=‰©•ÑÌ€¬¬°($$$$%™¥ÉÍÑÑ¥Ù•=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ…¡•‘%¹‘•àtì(($$$%¥¹‘¥•Í	åUU%l™¥ÉÍÑÑ¥Ù•=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÍl¥¹‘•àt€ô™¥ÉÍÑÑ¥Ù•=‰©•Ðì(($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô±…ÍÑ…¡•‘%¹‘•àì($$$%½‰©•ÑÍl±…ÍÑ…¡•‘%¹‘•àt€ô½‰©•Ðì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$%™¥ÉÍÑÑ¥Ù”€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ…¡•‘%¹‘•àt°($$$$$%‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àtì(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô™¥ÉÍÑÑ¥Ù”ì($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ…¡•‘%¹‘•àt€ô‰¥¹‘¥¹œì(($$$%ô(($$%ô(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô(($¼¨¨($€¨•…±±½…Ñ•Ì…±°µ•µ½ÉäÉ•Í½ÕÉ•Ì™½ÈÑ¡”Á…ÍÍ•€Í½‰©•ÑÌ½˜Ñ¡¥Ì…¹¥µ…Ñ¥½¸É½ÕÀ¸($€¨($€¨Á…É…´ì¸¸¹=‰©•ÐÍô…ÉÕµ•¹ÑÌ€´Q¡”€Í½‰©•ÑÌÑ¼Õ¹…¡”¸($€¨¼(%Õ¹…¡” ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥°($$$%¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$%‘•±•Ñ”¥¹‘¥•Í	åUU%lÕÕ¥tì(($$$%¥˜€ ¥¹‘•à€ð¹…¡•‘=‰©•ÑÌ€¤ì(($$$$$¼¼½‰©•Ð¥Ì…¡•°Í¡É¥¹¬Ñ¡”!É•¥½¸(($$$$%½¹ÍÐ™¥ÉÍÑÑ¥Ù•%¹‘•à€ô€´´¹…¡•‘=‰©•ÑÌ°($$$$$%±…ÍÑ…¡•‘=‰©•Ð€ô½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt°($$$$$%±…ÍÑ%¹‘•à€ô€´´¹=‰©•ÑÌ°($$$$$%±…ÍÑ=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ%¹‘•àtì(($$$$$¼¼±…ÍÐ…¡•½‰©•ÐÑ…­•ÌÑ¡¥Ì½‰©•ÐÌÁ±…”($$$$%¥¹‘¥•Í	åUU%l±…ÍÑ…¡•‘=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ…¡•‘=‰©•Ðì(($$$$$¼¼±…ÍÐ½‰©•Ð½•ÌÑ¼Ñ¡”…Ñ¥Ù…Ñ•Í±½Ð…¹Á½À($$$$%¥¹‘¥•Í	åUU%l±…ÍÑ=‰©•Ð¹ÕÕ¥t€ô™¥ÉÍÑÑ¥Ù•%¹‘•àì($$$$%½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô±…ÍÑ=‰©•Ðì($$$$%½‰©•ÑÌ¹Á½À ¤ì(($$$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$$%±…ÍÑ…¡•€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt°($$$$$$%±…ÍÐ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ%¹‘•àtì(($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô±…ÍÑ…¡•ì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô±…ÍÐì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ ¹Á½À ¤ì(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼½‰©•Ð¥Ì…Ñ¥Ù”°©ÕÍÐÍÝ…ÀÝ¥Ñ Ñ¡”±…ÍÐ…¹Á½À(($$$$%½¹ÍÐ±…ÍÑ%¹‘•à€ô€´´¹=‰©•ÑÌ°($$$$$%±…ÍÑ=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ%¹‘•àtì(($$$$%¥˜€ ±…ÍÑ%¹‘•à€ø€À€¤ì(($$$$$%¥¹‘¥•Í	åUU%l±…ÍÑ=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì(($$$$%ô(($$$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ=‰©•Ðì($$$$%½‰©•ÑÌ¹Á½À ¤ì(($$$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨tì(($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ%¹‘•àtì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ ¹Á½À ¤ì(($$$$%ô(($$$%ô€¼¼…¡•½È…Ñ¥Ù”(($$%ô€¼¼¥˜½‰©•Ð¥Ì­¹½Ý¸(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô(($¼¼%¹Ñ•É¹…°¥¹Ñ•É™…”ÕÍ•‰ä‰•™É¥•¹‘•AÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”è((%ÍÕ‰ÍÉ¥‰•| Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($$¼¼É•ÑÕÉ¹Ì…¸…ÉÉ…ä½˜‰¥¹‘¥¹Ì™½ÈÑ¡”¥Ù•¸Á…Ñ Ñ¡…Ð¥Ì¡…¹•($$¼¼…½É‘¥¹œÑ¼Ñ¡”½¹Ñ…¥¹•½‰©•ÑÌ¥¸Ñ¡”É½ÕÀ(($%½¹ÍÐ¥¹‘¥•Í	åA…Ñ €ôÑ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ ì($%±•Ð¥¹‘•à€ô¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ tì($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸‰¥¹‘¥¹Íl¥¹‘•àtì(($%½¹ÍÐÁ…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$%½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ °($$%¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|°($$%‰¥¹‘¥¹Í½ÉA…Ñ €ô¹•ÜÉÉ…ä ¹=‰©•ÑÌ€¤ì(($%¥¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ t€ô¥¹‘•àì(($%Á…Ñ¡Ì¹ÁÕÍ  Á…Ñ €¤ì($%Á…ÉÍ•‘A…Ñ¡Ì¹ÁÕÍ  Á…ÉÍ•‘A…Ñ €¤ì($%‰¥¹‘¥¹Ì¹ÁÕÍ  ‰¥¹‘¥¹Í½ÉA…Ñ €¤ì(($%™½È€ ±•Ð¤€ô¹…¡•‘=‰©•ÑÌ°¸€ô½‰©•ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô½‰©•ÑÍl¤tì($$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¤t€ô¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô(($%É•ÑÕÉ¸‰¥¹‘¥¹Í½ÉA…Ñ ì((%ô((%Õ¹ÍÕ‰ÍÉ¥‰•| Á…Ñ €¤ì(($$¼¼Ñ•±±ÌÑ¡”É½ÕÀÑ¼™½É•Ð…‰½ÕÐ„ÁÉ½Á•ÉÑäÁ…Ñ …¹¹¼±½¹•È($$¼¼ÕÁ‘…Ñ”Ñ¡”…ÉÉ…äÁÉ•Ù¥½ÕÍ±ä½‰Ñ…¥¹•Ý¥Ñ €ÍÕ‰ÍÉ¥‰•|œ(($%½¹ÍÐ¥¹‘¥•Í	åA…Ñ €ôÑ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ °($$%¥¹‘•à€ô¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ tì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐÁ…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$$%±…ÍÑ	¥¹‘¥¹Í%¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ €´€Ä°($$$%±…ÍÑ	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àt°($$$%±…ÍÑ	¥¹‘¥¹ÍA…Ñ €ôÁ…Ñ¡l±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì(($$%¥¹‘¥•Í	åA…Ñ¡l±…ÍÑ	¥¹‘¥¹ÍA…Ñ t€ô¥¹‘•àì(($$%‰¥¹‘¥¹Íl¥¹‘•àt€ô±…ÍÑ	¥¹‘¥¹Ìì($$%‰¥¹‘¥¹Ì¹Á½À ¤ì(($$%Á…ÉÍ•‘A…Ñ¡Íl¥¹‘•àt€ôÁ…ÉÍ•‘A…Ñ¡Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì($$%Á…ÉÍ•‘A…Ñ¡Ì¹Á½À ¤ì(($$%Á…Ñ¡Íl¥¹‘•àt€ôÁ…Ñ¡Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì($$%Á…Ñ¡Ì¹Á½À ¤ì(($%ô((%ô()ô((¼¨¨(€¨¸¥¹ÍÑ…¹”½˜¹¥µ…Ñ¥½¹Ñ¥½¹€Í¡•‘Õ±•ÌÑ¡”Á±…å‰…¬½˜…¸…¹¥µ…Ñ¥½¸Ý¡¥ ¥Ì(€¨ÍÑ½É•¥¸í±¥¹¬¹¥µ…Ñ¥½¹±¥Áô¸(€¨¼)±…ÍÌ¹¥µ…Ñ¥½¹Ñ¥½¸ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹5¥á•Éôµ¥á•È€´Q¡”µ¥á•ÈÑ¡…Ð¥Ì½¹ÑÉ½±±•‰äÑ¡¥Ì…Ñ¥½¸¸($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥Áô±¥À€´Q¡”…¹¥µ…Ñ¥½¸±¥ÀÑ¡…Ð¡½±‘ÌÑ¡”…ÑÕ…°­•å™É…µ•Ì¸($€¨Á…É…´ìý=‰©•ÐÍôm±½…±I½½Ðõ¹Õ±±t€´Q¡”É½½Ð½‰©•Ð½¸Ý¡¥ Ñ¡¥Ì…Ñ¥½¸¥ÌÁ•É™½Éµ•¸($€¨Á…É…´ì¡9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•ñ‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”¥ôm‰±•¹‘5½‘•t€´Q¡”‰±•¹µ½‘”¸($€¨¼(%½¹ÍÑÉÕÑ½È µ¥á•È°±¥À°±½…±I½½Ð€ô¹Õ±°°‰±•¹‘5½‘”€ô±¥À¹‰±•¹‘5½‘”€¤ì(($%Ñ¡¥Ì¹}µ¥á•È€ôµ¥á•Èì($%Ñ¡¥Ì¹}±¥À€ô±¥Àì($%Ñ¡¥Ì¹}±½…±I½½Ð€ô±½…±I½½Ðì(($$¼¨¨($$€¨•™¥¹•Ì¡½ÜÑ¡”…¹¥µ…Ñ¥½¸¥Ì‰±•¹‘•½½µ‰¥¹•Ý¡•¸ÑÝ¼½Èµ½É”…¹¥µ…Ñ¥½¹Ì($$€¨…É”Í¥µÕ±Ñ…¹•½ÕÍ±äÁ±…å•¸($$€¨($$€¨ÑåÁ”ì¡9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•ñ‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”¥ô($$€¨¼($%Ñ¡¥Ì¹‰±•¹‘5½‘”€ô‰±•¹‘5½‘”ì(($%½¹ÍÐÑÉ…­Ì€ô±¥À¹ÑÉ…­Ì°($$%¹QÉ…­Ì€ôÑÉ…­Ì¹±•¹Ñ °($$%¥¹Ñ•ÉÁ½±…¹ÑÌ€ô¹•ÜÉÉ…ä ¹QÉ…­Ì€¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ì€ôì($$%•¹‘¥¹MÑ…ÉÐèi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ°($$%•¹‘¥¹¹èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ($%ôì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹QÉ…­Ìì€¬¬¤€¤ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑÉ…­Íl¤t¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð ¹Õ±°€¤ì($$%¥¹Ñ•ÉÁ½±…¹ÑÍl¤t€ô¥¹Ñ•ÉÁ½±…¹Ðì($$%¥¹Ñ•ÉÁ½±…¹Ð¹Í•ÑÑ¥¹Ì€ô¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%ô(($%Ñ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ì€ô¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%Ñ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑÌ€ô¥¹Ñ•ÉÁ½±…¹ÑÌì€¼¼‰½Õ¹‰äÑ¡”µ¥á•È(($$¼¼¥¹Í¥‘”èAÉ½Á•ÉÑå5¥á•È€¡µ…¹…•‰äÑ¡”µ¥á•È¤($%Ñ¡¥Ì¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ì€ô¹•ÜÉÉ…ä ¹QÉ…­Ì€¤ì(($%Ñ¡¥Ì¹}…¡•%¹‘•à€ô¹Õ±°ì€¼¼™½ÈÑ¡”µ•µ½Éäµ…¹…•È($%Ñ¡¥Ì¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì€¼¼™½ÈÑ¡”µ•µ½Éäµ…¹…•È(($%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì(($$¼¨¨($$€¨Q¡”±½½Àµ½‘”°Í•ÐÙ¥„í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Í•Ñ1½½Áô¸($$€¨($$€¨ÑåÁ”ì¡1½½ÁI•Á•…Ññ1½½Á=¹•ñ1½½ÁA¥¹A½¹œ¥ô($$€¨‘•™…Õ±Ð1½½ÁI•Á•…Ð($$€¨¼($%Ñ¡¥Ì¹±½½À€ô1½½ÁI•Á•…Ðì($%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€´Äì(($$¼¼±½‰…°µ¥á•ÈÑ¥µ”Ý¡•¸Ñ¡”…Ñ¥½¸¥ÌÑ¼‰”ÍÑ…ÉÑ•($$¼¼¥ÐÌÍ•Ð‰…¬Ñ¼€¹Õ±°œÕÁ½¸ÍÑ…ÉÐ½˜Ñ¡”…Ñ¥½¸($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì(($$¼¨¨($$€¨Q¡”±½…°Ñ¥µ”½˜Ñ¡¥Ì…Ñ¥½¸€¡¥¸Í•½¹‘Ì°ÍÑ…ÉÑ¥¹œÝ¥Ñ €Á€¤¸($$€¨($$€¨Q¡”Ù…±Õ”•ÑÌ±…µÁ•½ÈÝÉ…ÁÁ•Ñ¼lÀ±±¥À¹‘ÕÉ…Ñ¥½¹u€€¡…½É‘¥¹œÑ¼Ñ¡”($$€¨±½½ÀÍÑ…Ñ”¤¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð%¹™¥¹¥Ñä($$€¨¼($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì(($$¼¨¨($$€¨M…±¥¹œ™…Ñ½È™½ÈÑ¡”í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Ñ¥µ•ô¸Ù…±Õ”½˜€Á€…ÕÍ•ÌÑ¡”($$€¨…¹¥µ…Ñ¥½¸Ñ¼Á…ÕÍ”¸9•…Ñ¥Ù”Ù…±Õ•Ì…ÕÍ”Ñ¡”…¹¥µ…Ñ¥½¸Ñ¼Á±…ä‰…­Ý…É‘Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô€Äì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ô€Äì(($$¼¨¨($$€¨Q¡”‘•É•”½˜¥¹™±Õ•¹”½˜Ñ¡¥Ì…Ñ¥½¸€¡¥¸Ñ¡”¥¹Ñ•ÉÙ…°lÀ°€Åu€¤¸Y…±Õ•Ì($$€¨‰•ÑÝ••¸€Á€€¡¹¼¥µÁ…Ð¤…¹€Å€€¡™Õ±°¥µÁ…Ð¤…¸‰”ÕÍ•Ñ¼‰±•¹‰•ÑÝ••¸($$€¨Í•Ù•É…°…Ñ¥½¹Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Ý•¥¡Ð€ô€Äì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ô€Äì(($$¼¨¨($$€¨Q¡”¹Õµ‰•È½˜É•Á•Ñ¥Ñ¥½¹Ì½˜Ñ¡”Á•É™½Éµ•±¥À½Ù•ÈÑ¡”½ÕÉÍ”½˜Ñ¡¥Ì…Ñ¥½¸¸($$€¨…¸‰”Í•ÐÙ¥„í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Í•Ñ1½½Áô¸($$€¨($$€¨M•ÑÑ¥¹œÑ¡¥Ì¹Õµ‰•È¡…Ì¹¼•™™•Ð¥˜í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸±½½Áô¥ÌÍ•ÐÑ¼($$€¨Q!Ié1½½Á=¹•€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð%¹™¥¹¥Ñä($$€¨¼($%Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ô%¹™¥¹¥Ñäì(($$¼¨¨($$€¨%˜Í•ÐÑ¼ÑÉÕ•€°Ñ¡”Á±…å‰…¬½˜Ñ¡”…Ñ¥½¸¥ÌÁ…ÕÍ•¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹Á…ÕÍ•€ô™…±Í”ì(($$¼¨¨($$€¨%˜Í•ÐÑ¼™…±Í•€°Ñ¡”…Ñ¥½¸¥Ì‘¥Í…‰±•Í¼¥Ð¡…Ì¹¼¥µÁ…Ð¸($$€¨($$€¨]¡•¸Ñ¡”…Ñ¥½¸¥ÌÉ”µ•¹…‰±•°Ñ¡”…¹¥µ…Ñ¥½¸½¹Ñ¥¹Õ•Ì™É½´¥ÑÌÕÉÉ•¹Ð($$€¨Ñ¥µ”€¡Í•ÑÑ¥¹œ•¹…‰±•‘€Ñ¼™…±Í•€‘½•Í¸ÐÉ•Í•ÐÑ¡”…Ñ¥½¸¤¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì(($$¼¨¨($$€¨%˜Í•ÐÑ¼ÑÉÕ”Ñ¡”…¹¥µ…Ñ¥½¸Ý¥±°…ÕÑ½µ…Ñ¥…±±ä‰”Á…ÕÍ•½¸¥ÑÌ±…ÍÐ™É…µ”¸($$€¨($$€¨%˜Í•ÐÑ¼™…±Í”°í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸•¹…‰±•‘ôÝ¥±°…ÕÑ½µ…Ñ¥…±±ä‰”ÍÝ¥Ñ¡•($$€¨Ñ¼™…±Í•€Ý¡•¸Ñ¡”±…ÍÐ±½½À½˜Ñ¡”…Ñ¥½¸¡…Ì™¥¹¥Í¡•°Í¼Ñ¡…ÐÑ¡¥Ì…Ñ¥½¸¡…Ì($$€¨¹¼™ÕÉÑ¡•È¥µÁ…Ð¸($$€¨($$€¨9½Ñ”èQ¡¥Ìµ•µ‰•È¡…Ì¹¼¥µÁ…Ð¥˜Ñ¡”…Ñ¥½¸¥Ì¥¹Ñ•ÉÉÕÁÑ•€¡¥Ð($$€¨¡…Ì½¹±ä…¸•™™•Ð¥˜¥ÑÌ±…ÍÐ±½½À¡…ÌÉ•…±±ä™¥¹¥Í¡•¤¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±Ð™…±Í”($$€¨¼($%Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€ô™…±Í”ì(($$¼¨¨($$€¨¹…‰±•ÌÍµ½½Ñ ¥¹Ñ•ÉÁ½±…Ñ¥½¸Ý¥Ñ¡½ÕÐÍ•Á…É…Ñ”±¥ÁÌ™½ÈÍÑ…ÉÐ°±½½À…¹•¹¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹é•É½M±½Á•ÑMÑ…ÉÐ€ôÑÉÕ”ì(($$¼¨¨($$€¨¹…‰±•ÌÍµ½½Ñ ¥¹Ñ•ÉÁ½±…Ñ¥½¸Ý¥Ñ¡½ÕÐÍ•Á…É…Ñ”±¥ÁÌ™½ÈÍÑ…ÉÐ°±½½À…¹•¹¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹é•É½M±½Á•Ñ¹€ôÑÉÕ”ì((%ô(($¼¨¨($€¨MÑ…ÉÑÌÑ¡”Á±…å‰…¬½˜Ñ¡”…¹¥µ…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Á±…ä ¤ì(($%Ñ¡¥Ì¹}µ¥á•È¹}…Ñ¥Ù…Ñ•Ñ¥½¸ Ñ¡¥Ì€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨MÑ½ÁÌÑ¡”Á±…å‰…¬½˜Ñ¡”…¹¥µ…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%ÍÑ½À ¤ì(($%Ñ¡¥Ì¹}µ¥á•È¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ Ñ¡¥Ì€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹É•Í•Ð ¤ì((%ô(($¼¨¨($€¨I•Í•ÑÌÑ¡”Á±…å‰…¬½˜Ñ¡”…¹¥µ…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%É•Í•Ð ¤ì(($%Ñ¡¥Ì¹Á…ÕÍ•€ô™…±Í”ì($%Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì€¼¼É•ÍÑ…ÉÐ±¥À($%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€´Äì¼¼™½É•ÐÁÉ•Ù¥½ÕÌ±½½ÁÌ($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì¼¼™½É•ÐÍ¡•‘Õ±¥¹œ(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡”…¹¥µ…Ñ¥½¸¥ÌÉÕ¹¹¥¹œ¸($€¨($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”…¹¥µ…Ñ¥½¸¥ÌÉÕ¹¹¥¹œ½È¹½Ð¸($€¨¼(%¥ÍIÕ¹¹¥¹œ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•¹…‰±•€˜˜€„Ñ¡¥Ì¹Á…ÕÍ•€˜˜Ñ¡¥Ì¹Ñ¥µ•M…±”€„ôô€À€˜˜($$%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ôôô¹Õ±°€˜˜Ñ¡¥Ì¹}µ¥á•È¹}¥ÍÑ¥Ù•Ñ¥½¸ Ñ¡¥Ì€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€Ý¡•¸í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Á±…åô¡…Ì‰••¸…±±•¸($€¨($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”…¹¥µ…Ñ¥½¸¥ÌÍ¡•‘Õ±•½È¹½Ð¸($€¨¼(%¥ÍM¡•‘Õ±• ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}µ¥á•È¹}¥ÍÑ¥Ù•Ñ¥½¸ Ñ¡¥Ì€¤ì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”Ñ¥µ”Ý¡•¸Ñ¡”…¹¥µ…Ñ¥½¸Í¡½Õ±ÍÑ…ÉÐ¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑ¥µ”€´Q¡”ÍÑ…ÉÐÑ¥µ”¥¸Í•½¹‘Ì¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%ÍÑ…ÉÑÐ Ñ¥µ”€¤ì(($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ôÑ¥µ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½¹™¥ÕÉ•ÌÑ¡”±½½ÀÍ•ÑÑ¥¹Ì™½ÈÑ¡¥Ì…Ñ¥½¸¸($€¨($€¨Á…É…´ì¡1½½ÁI•Á•…Ññ1½½Á=¹•ñ1½½ÁA¥¹A½¹œ¥ôµ½‘”€´Q¡”±½½Àµ½‘”¸($€¨Á…É…´í¹Õµ‰•ÉôÉ•Á•Ñ¥Ñ¥½¹Ì€´Q¡”¹Õµ‰•È½˜É•Á•Ñ¥Ñ¥½¹Ì¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Í•Ñ1½½À µ½‘”°É•Á•Ñ¥Ñ¥½¹Ì€¤ì(($%Ñ¡¥Ì¹±½½À€ôµ½‘”ì($%Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôÉ•Á•Ñ¥Ñ¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•™™•Ñ¥Ù”Ý•¥¡Ð½˜Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨¸…Ñ¥½¸¡…Ì¹¼•™™•Ð…¹Ñ¡ÕÌ…¸•™™•Ñ¥Ù”Ý•¥¡Ð½˜é•É¼Ý¡•¸Ñ¡”($€¨…Ñ¥½¸¥Ì‘¥Í…‰±•¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÝ•¥¡Ð€´Q¡”Ý•¥¡ÐÑ¼Í•Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Í•Ñ™™•Ñ¥Ù•]•¥¡Ð Ý•¥¡Ð€¤ì(($%Ñ¡¥Ì¹Ý•¥¡Ð€ôÝ•¥¡Ðì(($$¼¼¹½Ñ”èÍ…µ”±½¥Œ…ÌÝ¡•¸ÕÁ‘…Ñ•…ÐÉÕ¹Ñ¥µ”($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ôÑ¡¥Ì¹•¹…‰±•€üÝ•¥¡Ð€è€Àì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•™™•Ñ¥Ù”Ý•¥¡Ð½˜Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”•™™•Ñ¥Ù”Ý•¥¡Ð¸($€¨¼(%•Ñ™™•Ñ¥Ù•]•¥¡Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ðì((%ô(($¼¨¨($€¨…‘•ÌÑ¡”…¹¥µ…Ñ¥½¸¥¸‰ä¥¹É•…Í¥¹œ¥ÑÌÝ•¥¡ÐÉ…‘Õ…±±ä™É½´€Á€Ñ¼€Å€°($€¨Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°¸($€¨($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸½˜Ñ¡”™…‘”¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%™…‘•%¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°€À°€Ä€¤ì((%ô(($¼¨¨($€¨…‘•ÌÑ¡”…¹¥µ…Ñ¥½¸½ÕÐ‰ä‘•É•…Í¥¹œ¥ÑÌÝ•¥¡ÐÉ…‘Õ…±±ä™É½´€Å€Ñ¼€Á€°($€¨Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°¸($€¨($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸½˜Ñ¡”™…‘”¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%™…‘•=ÕÐ ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°€Ä°€À€¤ì((%ô(($¼¨¨($€¨…ÕÍ•ÌÑ¡¥Ì…Ñ¥½¸Ñ¼™…‘”¥¸…¹Ñ¡”¥Ù•¸…Ñ¥½¸Ñ¼™…‘”½ÕÐ°($€¨Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹Ñ¥½¹ô™…‘•=ÕÑÑ¥½¸€´Q¡”…¹¥µ…Ñ¥½¸…Ñ¥½¸Ñ¼™…‘”½ÕÐ¸($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸½˜Ñ¡”™…‘”¸($€¨Á…É…´í‰½½±•…¹ômÝ…ÉÀõ™…±Í•t€´]¡•Ñ¡•ÈÝ…ÉÁ¥¹œÍ¡½Õ±‰”ÕÍ•½È¹½Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%É½ÍÍ…‘•É½´ ™…‘•=ÕÑÑ¥½¸°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€ô™…±Í”€¤ì(($%™…‘•=ÕÑÑ¥½¸¹™…‘•=ÕÐ ‘ÕÉ…Ñ¥½¸€¤ì($%Ñ¡¥Ì¹™…‘•%¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%¥˜€ Ý…ÉÀ€ôôôÑÉÕ”€¤ì(($$%½¹ÍÐ™…‘•%¹ÕÉ…Ñ¥½¸€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸°($$$%™…‘•=ÕÑÕÉ…Ñ¥½¸€ô™…‘•=ÕÑÑ¥½¸¹}±¥À¹‘ÕÉ…Ñ¥½¸°(($$$%ÍÑ…ÉÑ¹‘I…Ñ¥¼€ô™…‘•=ÕÑÕÉ…Ñ¥½¸€¼™…‘•%¹ÕÉ…Ñ¥½¸°($$$%•¹‘MÑ…ÉÑI…Ñ¥¼€ô™…‘•%¹ÕÉ…Ñ¥½¸€¼™…‘•=ÕÑÕÉ…Ñ¥½¸ì(($$%™…‘•=ÕÑÑ¥½¸¹Ý…ÉÀ €Ä¸À°ÍÑ…ÉÑ¹‘I…Ñ¥¼°‘ÕÉ…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹Ý…ÉÀ •¹‘MÑ…ÉÑI…Ñ¥¼°€Ä¸À°‘ÕÉ…Ñ¥½¸€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨…ÕÍ•ÌÑ¡¥Ì…Ñ¥½¸Ñ¼™…‘”½ÕÐ…¹Ñ¡”¥Ù•¸…Ñ¥½¸Ñ¼™…‘”¥¸°($€¨Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹Ñ¥½¹ô™…‘•%¹Ñ¥½¸€´Q¡”…¹¥µ…Ñ¥½¸…Ñ¥½¸Ñ¼™…‘”¥¸¸($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸½˜Ñ¡”™…‘”¸($€¨Á…É…´í‰½½±•…¹ômÝ…ÉÀõ™…±Í•t€´]¡•Ñ¡•ÈÝ…ÉÁ¥¹œÍ¡½Õ±‰”ÕÍ•½È¹½Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%É½ÍÍ…‘•Q¼ ™…‘•%¹Ñ¥½¸°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€ô™…±Í”€¤ì(($%É•ÑÕÉ¸™…‘•%¹Ñ¥½¸¹É½ÍÍ…‘•É½´ Ñ¡¥Ì°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€¤ì((%ô(($¼¨¨($€¨MÑ½ÁÌ…¹ä™…‘¥¹œÝ¡¥ ¥Ì…ÁÁ±¥•Ñ¼Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%ÍÑ½Á…‘¥¹œ ¤ì(($%½¹ÍÐÝ•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($$%Ñ¡¥Ì¹}µ¥á•È¹}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•™™•Ñ¥Ù”Ñ¥µ”Í…±”½˜Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨¸…Ñ¥½¸¡…Ì¹¼•™™•Ð…¹Ñ¡ÕÌ…¸•™™•Ñ¥Ù”Ñ¥µ”Í…±”½˜é•É¼Ý¡•¸Ñ¡”($€¨…Ñ¥½¸¥ÌÁ…ÕÍ•¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑ¥µ•M…±”€´Q¡”Ñ¥µ”Í…±”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Í•Ñ™™•Ñ¥Ù•Q¥µ•M…±” Ñ¥µ•M…±”€¤ì(($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¥µ•M…±”ì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ôÑ¡¥Ì¹Á…ÕÍ•€ü€À€èÑ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•™™•Ñ¥Ù”Ñ¥µ”Í…±”½˜Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”•™™•Ñ¥Ù”Ñ¥µ”Í…±”¸($€¨¼(%•Ñ™™•Ñ¥Ù•Q¥µ•M…±” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‘ÕÉ…Ñ¥½¸™½È„Í¥¹±”±½½À½˜Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Í•ÑÕÉ…Ñ¥½¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸€¼‘ÕÉ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô(($¼¨¨($€¨Må¹¡É½¹¥é•ÌÑ¡¥Ì…Ñ¥½¸Ý¥Ñ Ñ¡”Á…ÍÍ•½Ñ¡•È…Ñ¥½¸¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹Ñ¥½¹ô…Ñ¥½¸€´Q¡”…Ñ¥½¸Ñ¼Íå¹ŒÝ¥Ñ ¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Íå¹]¥Ñ  …Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô…Ñ¥½¸¹Ñ¥µ”ì($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô…Ñ¥½¸¹Ñ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô(($¼¨¨($€¨••±•É…Ñ•ÌÑ¡¥Ì…¹¥µ…Ñ¥½¸ÌÍÁ••Ñ¼€Á€Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°¸($€¨($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%¡…±Ð ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Ý…ÉÀ Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”°€À°‘ÕÉ…Ñ¥½¸€¤ì((%ô(($¼¨¨($€¨¡…¹•ÌÑ¡”Á±…å‰…¬ÍÁ••°Ý¥Ñ¡¥¸Ñ¡”Á…ÍÍ•Ñ¥µ”¥¹Ñ•ÉÙ…°°‰äµ½‘¥™å¥¹œ($€¨í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸Ñ¥µ•M…±•ôÉ…‘Õ…±±ä™É½´ÍÑ…ÉÑQ¥µ•M…±•€Ñ¼($€¨•¹‘Q¥µ•M…±•€¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÍÑ…ÉÑQ¥µ•M…±”€´Q¡”ÍÑ…ÉÐÑ¥µ”Í…±”¸($€¨Á…É…´í¹Õµ‰•Éô•¹‘Q¥µ•M…±”€´Q¡”•¹Ñ¥µ”Í…±”¸($€¨Á…É…´í¹Õµ‰•Éô‘ÕÉ…Ñ¥½¸€´Q¡”‘ÕÉ…Ñ¥½¸¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%Ý…ÉÀ ÍÑ…ÉÑQ¥µ•M…±”°•¹‘Q¥µ•M…±”°‘ÕÉ…Ñ¥½¸€¤ì(($%½¹ÍÐµ¥á•È€ôÑ¡¥Ì¹}µ¥á•È°($$%¹½Ü€ôµ¥á•È¹Ñ¥µ”°($$%Ñ¥µ•M…±”€ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôô¹Õ±°€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ôµ¥á•È¹}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì($$%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%½¹ÍÐÑ¥µ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°($$%Ù…±Õ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Í…µÁ±•Y…±Õ•Ìì(($%Ñ¥µ•Íl€Àt€ô¹½Üì($%Ñ¥µ•Íl€Ät€ô¹½Ü€¬‘ÕÉ…Ñ¥½¸ì(($%Ù…±Õ•Íl€Àt€ôÍÑ…ÉÑQ¥µ•M…±”€¼Ñ¥µ•M…±”ì($%Ù…±Õ•Íl€Ät€ô•¹‘Q¥µ•M…±”€¼Ñ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨MÑ½ÁÌ…¹äÍ¡•‘Õ±•Ý…ÉÁ¥¹œÝ¡¥ ¥Ì…ÁÁ±¥•Ñ¼Ñ¡¥Ì…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹Ñ¥½¹ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%ÍÑ½Á]…ÉÁ¥¹œ ¤ì(($%½¹ÍÐÑ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($$%Ñ¡¥Ì¹}µ¥á•È¹}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”…¹¥µ…Ñ¥½¸µ¥á•È½˜Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹5¥á•ÉôQ¡”…¹¥µ…Ñ¥½¸µ¥á•È¸($€¨¼(%•Ñ5¥á•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}µ¥á•Èì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”…¹¥µ…Ñ¥½¸±¥À½˜Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹±¥ÁôQ¡”…¹¥µ…Ñ¥½¸±¥À¸($€¨¼(%•Ñ±¥À ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}±¥Àì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”É½½Ð½‰©•Ð½˜Ñ¡¥Ì…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨($€¨É•ÑÕÉ¸í=‰©•ÐÍôQ¡”É½½Ð½‰©•Ð¸($€¨¼(%•ÑI½½Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}±½…±I½½ÐñðÑ¡¥Ì¹}µ¥á•È¹}É½½Ðì((%ô(($¼¼%¹Ñ•É¹„((%}ÕÁ‘…Ñ” Ñ¥µ”°‘•±Ñ…Q¥µ”°Ñ¥µ•¥É•Ñ¥½¸°…Õ%¹‘•à€¤ì(($$¼¼…±±•‰äÑ¡”µ¥á•È(($%¥˜€ €„Ñ¡¥Ì¹•¹…‰±•€¤ì(($$$¼¼…±°€¹}ÕÁ‘…Ñ•]•¥¡Ð ¤Ñ¼ÕÁ‘…Ñ”€¹}•™™•Ñ¥Ù•]•¥¡Ð(($$%Ñ¡¥Ì¹}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%½¹ÍÐÍÑ…ÉÑQ¥µ”€ôÑ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”ì(($%¥˜€ ÍÑ…ÉÑQ¥µ”€„ôô¹Õ±°€¤ì(($$$¼¼¡•¬™½ÈÍ¡•‘Õ±•ÍÑ…ÉÐ½˜…Ñ¥½¸(($$%½¹ÍÐÑ¥µ•IÕ¹¹¥¹œ€ô€ Ñ¥µ”€´ÍÑ…ÉÑQ¥µ”€¤€¨Ñ¥µ•¥É•Ñ¥½¸ì($$%¥˜€ Ñ¥µ•IÕ¹¹¥¹œ€ð€ÀñðÑ¥µ•¥É•Ñ¥½¸€ôôô€À€¤ì(($$$%‘•±Ñ…Q¥µ”€ô€Àì(($$%ô•±Í”ì((($$$%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì€¼¼Õ¹Í¡•‘Õ±”($$$%‘•±Ñ…Q¥µ”€ôÑ¥µ•¥É•Ñ¥½¸€¨Ñ¥µ•IÕ¹¹¥¹œì(($$%ô(($%ô(($$¼¼…ÁÁ±äÑ¥µ”Í…±”…¹…‘Ù…¹”Ñ¥µ”(($%‘•±Ñ…Q¥µ”€¨ôÑ¡¥Ì¹}ÕÁ‘…Ñ•Q¥µ•M…±” Ñ¥µ”€¤ì($%½¹ÍÐ±¥ÁQ¥µ”€ôÑ¡¥Ì¹}ÕÁ‘…Ñ•Q¥µ” ‘•±Ñ…Q¥µ”€¤ì(($$¼¼¹½Ñ”è}ÕÁ‘…Ñ•Q¥µ”µ…ä‘¥Í…‰±”Ñ¡”…Ñ¥½¸É•ÍÕ±Ñ¥¹œ¥¸($$¼¼…¸•™™•Ñ¥Ù”Ý•¥¡Ð½˜€À(($%½¹ÍÐÝ•¥¡Ð€ôÑ¡¥Ì¹}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì(($%¥˜€ Ý•¥¡Ð€ø€À€¤ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑÌì($$%½¹ÍÐÁÉ½Á•ÉÑå5¥á•ÉÌ€ôÑ¡¥Ì¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$%ÍÝ¥Ñ € Ñ¡¥Ì¹‰±•¹‘5½‘”€¤ì(($$$%…Í”‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”è(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¥¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%¥¹Ñ•ÉÁ½±…¹ÑÍl¨t¹•Ù…±Õ…Ñ” ±¥ÁQ¥µ”€¤ì($$$$$%ÁÉ½Á•ÉÑå5¥á•ÉÍl¨t¹…ÕµÕ±…Ñ•‘‘¥Ñ¥Ù” Ý•¥¡Ð€¤ì(($$$$%ô(($$$$%‰É•…¬ì(($$$%…Í”9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”è($$$%‘•™…Õ±Ðè(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¥¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%¥¹Ñ•ÉÁ½±…¹ÑÍl¨t¹•Ù…±Õ…Ñ” ±¥ÁQ¥µ”€¤ì($$$$$%ÁÉ½Á•ÉÑå5¥á•ÉÍl¨t¹…ÕµÕ±…Ñ” …Õ%¹‘•à°Ý•¥¡Ð€¤ì(($$$$%ô(($$%ô(($%ô((%ô((%}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì(($%±•ÐÝ•¥¡Ð€ô€Àì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€¤ì(($$%Ý•¥¡Ð€ôÑ¡¥Ì¹Ý•¥¡Ðì($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($$%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ô¥¹Ñ•ÉÁ½±…¹Ð¹•Ù…±Õ…Ñ” Ñ¥µ”€¥l€Àtì(($$$%Ý•¥¡Ð€¨ô¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”ì(($$$%¥˜€ Ñ¥µ”€ø¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Íl€Ät€¤ì(($$$$%Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤ì(($$$$%¥˜€ ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ôôô€À€¤ì(($$$$$$¼¼™…‘•½ÕÐ°‘¥Í…‰±”($$$$$%Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ôÝ•¥¡Ðì($%É•ÑÕÉ¸Ý•¥¡Ðì((%ô((%}ÕÁ‘…Ñ•Q¥µ•M…±” Ñ¥µ”€¤ì(($%±•ÐÑ¥µ•M…±”€ô€Àì(($%¥˜€ €„Ñ¡¥Ì¹Á…ÕÍ•€¤ì(($$%Ñ¥µ•M…±”€ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($$%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ô¥¹Ñ•ÉÁ½±…¹Ð¹•Ù…±Õ…Ñ” Ñ¥µ”€¥l€Àtì(($$$%Ñ¥µ•M…±”€¨ô¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”ì(($$$%¥˜€ Ñ¥µ”€ø¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Íl€Ät€¤ì(($$$$%Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì(($$$$%¥˜€ Ñ¥µ•M…±”€ôôô€À€¤ì(($$$$$$¼¼µ½Ñ¥½¸¡…Ì¡…±Ñ•°Á…ÕÍ”($$$$$%Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì(($$$$%ô•±Í”ì(($$$$$$¼¼Ý…ÉÀ‘½¹”€´…ÁÁ±ä™¥¹…°Ñ¥µ”Í…±”($$$$$%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¥µ•M…±”ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ôÑ¥µ•M…±”ì($%É•ÑÕÉ¸Ñ¥µ•M…±”ì((%ô((%}ÕÁ‘…Ñ•Q¥µ” ‘•±Ñ…Q¥µ”€¤ì(($%½¹ÍÐ‘ÕÉ…Ñ¥½¸€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸ì($%½¹ÍÐ±½½À€ôÑ¡¥Ì¹±½½Àì(($%±•ÐÑ¥µ”€ôÑ¡¥Ì¹Ñ¥µ”€¬‘•±Ñ…Q¥µ”ì($%±•Ð±½½Á½Õ¹Ð€ôÑ¡¥Ì¹}±½½Á½Õ¹Ðì(($%½¹ÍÐÁ¥¹A½¹œ€ô€ ±½½À€ôôô1½½ÁA¥¹A½¹œ€¤ì(($%¥˜€ ‘•±Ñ…Q¥µ”€ôôô€À€¤ì(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´Ä€¤É•ÑÕÉ¸Ñ¥µ”ì(($$%É•ÑÕÉ¸€ Á¥¹A½¹œ€˜˜€ ±½½Á½Õ¹Ð€˜€Ä€¤€ôôô€Ä€¤€ü‘ÕÉ…Ñ¥½¸€´Ñ¥µ”€èÑ¥µ”ì(($%ô(($%¥˜€ ±½½À€ôôô1½½Á=¹”€¤ì(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´Ä€¤ì(($$$$¼¼©ÕÍÐÍÑ…ÉÑ•(($$$%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€Àì($$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ÑÉÕ”°ÑÉÕ”°™…±Í”€¤ì(($$%ô(($$%¡…¹‘±•}ÍÑ½Àèì(($$$%¥˜€ Ñ¥µ”€øô‘ÕÉ…Ñ¥½¸€¤ì(($$$$%Ñ¥µ”€ô‘ÕÉ…Ñ¥½¸ì(($$$%ô•±Í”¥˜€ Ñ¥µ”€ð€À€¤ì(($$$$%Ñ¥µ”€ô€Àì(($$$%ô•±Í”ì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%‰É•…¬¡…¹‘±•}ÍÑ½Àì(($$$%ô(($$$%¥˜€ Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€¤Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì($$$%•±Í”Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$%ÑåÁ”è€™¥¹¥Í¡•œ°…Ñ¥½¸èÑ¡¥Ì°($$$$%‘¥É•Ñ¥½¸è‘•±Ñ…Q¥µ”€ð€À€ü€´Ä€è€Ä($$$%ô€¤ì(($$%ô(($%ô•±Í”ì€¼¼É•Á•Ñ¥Ñ¥Ù”I•Á•…Ð½ÈA¥¹A½¹œ(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´Ä€¤ì(($$$$¼¼©ÕÍÐÍÑ…ÉÑ•(($$$%¥˜€ ‘•±Ñ…Q¥µ”€øô€À€¤ì(($$$$%±½½Á½Õ¹Ð€ô€Àì(($$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ÑÉÕ”°Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôôô€À°Á¥¹A½¹œ€¤ì(($$$%ô•±Í”ì(($$$$$¼¼Ý¡•¸±½½Á¥¹œ¥¸É•Ù•ÉÍ”‘¥É•Ñ¥½¸°Ñ¡”¥¹¥Ñ¥…°($$$$$¼¼ÑÉ…¹Í¥Ñ¥½¸Ñ¡É½Õ é•É¼½Õ¹ÑÌ…Ì„É•Á•Ñ¥Ñ¥½¸°($$$$$¼¼Í¼±•…Ù”±½½Á½Õ¹Ð…Ð€´Ä(($$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôôô€À°ÑÉÕ”°Á¥¹A½¹œ€¤ì(($$$%ô(($$%ô(($$%¥˜€ Ñ¥µ”€øô‘ÕÉ…Ñ¥½¸ñðÑ¥µ”€ð€À€¤ì(($$$$¼¼ÝÉ…À…É½Õ¹(($$$%½¹ÍÐ±½½Á•±Ñ„€ô5…Ñ ¹™±½½È Ñ¥µ”€¼‘ÕÉ…Ñ¥½¸€¤ì€¼¼Í¥¹•($$$%Ñ¥µ”€´ô‘ÕÉ…Ñ¥½¸€¨±½½Á•±Ñ„ì(($$$%±½½Á½Õ¹Ð€¬ô5…Ñ ¹…‰Ì ±½½Á•±Ñ„€¤ì(($$$%½¹ÍÐÁ•¹‘¥¹œ€ôÑ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€´±½½Á½Õ¹Ðì(($$$%¥˜€ Á•¹‘¥¹œ€ðô€À€¤ì(($$$$$¼¼¡…Ù”Ñ¼ÍÑ½À€¡ÍÝ¥Ñ ÍÑ…Ñ”°±…µÀÑ¥µ”°™¥É”•Ù•¹Ð¤(($$$$%¥˜€ Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€¤Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì($$$$%•±Í”Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$$%Ñ¥µ”€ô‘•±Ñ…Q¥µ”€ø€À€ü‘ÕÉ…Ñ¥½¸€è€Àì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$$%ÑåÁ”è€™¥¹¥Í¡•œ°…Ñ¥½¸èÑ¡¥Ì°($$$$$%‘¥É•Ñ¥½¸è‘•±Ñ…Q¥µ”€ø€À€ü€Ä€è€´Ä($$$$%ô€¤ì(($$$%ô•±Í”ì(($$$$$¼¼­••ÀÉÕ¹¹¥¹œ(($$$$%¥˜€ Á•¹‘¥¹œ€ôôô€Ä€¤ì(($$$$$$¼¼•¹Ñ•É¥¹œÑ¡”±…ÍÐÉ½Õ¹(($$$$$%½¹ÍÐ…ÑMÑ…ÉÐ€ô‘•±Ñ…Q¥µ”€ð€Àì($$$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì …ÑMÑ…ÉÐ°€„…ÑMÑ…ÉÐ°Á¥¹A½¹œ€¤ì(($$$$%ô•±Í”ì(($$$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ™…±Í”°™…±Í”°Á¥¹A½¹œ€¤ì(($$$$%ô(($$$$%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô±½½Á½Õ¹Ðì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$$%ÑåÁ”è€±½½Àœ°…Ñ¥½¸èÑ¡¥Ì°±½½Á•±Ñ„è±½½Á•±Ñ„($$$$%ô€¤ì(($$$%ô(($$%ô•±Í”ì(($$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$%ô(($$%¥˜€ Á¥¹A½¹œ€˜˜€ ±½½Á½Õ¹Ð€˜€Ä€¤€ôôô€Ä€¤ì(($$$$¼¼¥¹Ù•ÉÐÑ¥µ”™½ÈÑ¡”€‰Á½¹œÉ½Õ¹ˆ(($$$%É•ÑÕÉ¸‘ÕÉ…Ñ¥½¸€´Ñ¥µ”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¥µ”ì((%ô((%}Í•Ñ¹‘¥¹Ì …ÑMÑ…ÉÐ°…Ñ¹°Á¥¹A½¹œ€¤ì(($%½¹ÍÐÍ•ÑÑ¥¹Ì€ôÑ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%¥˜€ Á¥¹A½¹œ€¤ì(($$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ôi•É½M±½Á•¹‘¥¹œì($$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€ôi•É½M±½Á•¹‘¥¹œì(($%ô•±Í”ì(($$$¼¼…ÍÍÕµ¥¹œ™½È1½½Á=¹”…ÑMÑ…ÉÐ€ôô…Ñ¹€ôôÑÉÕ”(($$%¥˜€ …ÑMÑ…ÉÐ€¤ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ôÑ¡¥Ì¹é•É½M±½Á•ÑMÑ…ÉÐ€üi•É½M±½Á•¹‘¥¹œ€èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œì(($$%ô•±Í”ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ô]É…ÁÉ½Õ¹‘¹‘¥¹œì(($$%ô(($$%¥˜€ …Ñ¹€¤ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€ôÑ¡¥Ì¹é•É½M±½Á•Ñ¹€üi•É½M±½Á•¹‘¥¹œ€èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œì(($$%ô•±Í”ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€$€ô]É…ÁÉ½Õ¹‘¹‘¥¹œì(($$%ô(($%ô((%ô((%}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°Ý•¥¡Ñ9½Ü°Ý•¥¡ÑQ¡•¸€¤ì(($%½¹ÍÐµ¥á•È€ôÑ¡¥Ì¹}µ¥á•È°¹½Ü€ôµ¥á•È¹Ñ¥µ”ì($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôô¹Õ±°€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ôµ¥á•È¹}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì($$%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%½¹ÍÐÑ¥µ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°($$%Ù…±Õ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Í…µÁ±•Y…±Õ•Ìì(($%Ñ¥µ•Íl€Àt€ô¹½Üì($%Ù…±Õ•Íl€Àt€ôÝ•¥¡Ñ9½Üì($%Ñ¥µ•Íl€Ät€ô¹½Ü€¬‘ÕÉ…Ñ¥½¸ì($%Ù…±Õ•Íl€Ät€ôÝ•¥¡ÑQ¡•¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÍI•ÍÕ±Ñ	Õ™™•È€ô¹•Ü±½…ÐÌÉÉÉ…ä €Ä€¤ì((¼¨¨(€¨¹¥µ…Ñ¥½¹5¥á•É€¥Ì„Á±…å•È™½È…¹¥µ…Ñ¥½¹Ì½¸„Á…ÉÑ¥Õ±…È½‰©•Ð¥¸(€¨Ñ¡”Í•¹”¸]¡•¸µÕ±Ñ¥Á±”½‰©•ÑÌ¥¸Ñ¡”Í•¹”…É”…¹¥µ…Ñ•¥¹‘•Á•¹‘•¹Ñ±ä°(€¨½¹”¹¥µ…Ñ¥½¹5¥á•É€µ…ä‰”ÕÍ•™½È•… ½‰©•Ð¸(€¨¼)±…ÍÌ¹¥µ…Ñ¥½¹5¥á•È•áÑ•¹‘ÌÙ•¹Ñ¥ÍÁ…Ñ¡•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…¹¥µ…Ñ¥½¸µ¥á•È¸($€¨($€¨Á…É…´í=‰©•ÐÍôÉ½½Ð€´Q¡”½‰©•ÐÝ¡½Í”…¹¥µ…Ñ¥½¹ÌÍ¡…±°‰”Á±…å•‰äÑ¡¥Ìµ¥á•È¸($€¨¼(%½¹ÍÑÉÕÑ½È É½½Ð€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹}É½½Ð€ôÉ½½Ðì($%Ñ¡¥Ì¹}¥¹¥Ñ5•µ½Éå5…¹…•È ¤ì($%Ñ¡¥Ì¹}…Õ%¹‘•à€ô€Àì(($$¼¨¨($$€¨Q¡”±½‰…°µ¥á•ÈÑ¥µ”€¡¥¸Í•½¹‘ÌìÍÑ…ÉÑ¥¹œÝ¥Ñ €Á€½¸Ñ¡”µ¥á•ÈÌÉ•…Ñ¥½¸¤¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì(($$¼¨¨($$€¨Í…±¥¹œ™…Ñ½È™½ÈÑ¡”±½‰…°Ñ¥µ”¸($$€¨($$€¨9½Ñ”èM•ÑÑ¥¹œÑ¡¥Ìµ•µ‰•ÈÑ¼€Á€…¹±…Ñ•È‰…¬Ñ¼€Å€¥Ì„($$€¨Á½ÍÍ¥‰¥±¥ÑäÑ¼Á…ÕÍ”½Õ¹Á…ÕÍ”…±°…Ñ¥½¹ÌÑ¡…Ð…É”½¹ÑÉ½±±•‰äÑ¡¥Ì($$€¨µ¥á•È¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô€Ä¸Àì((%ô((%}‰¥¹‘Ñ¥½¸ …Ñ¥½¸°ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€¤ì(($%½¹ÍÐÉ½½Ð€ô…Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%ÑÉ…­Ì€ô…Ñ¥½¸¹}±¥À¹ÑÉ…­Ì°($$%¹QÉ…­Ì€ôÑÉ…­Ì¹±•¹Ñ °($$%‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ì°($$%¥¹Ñ•ÉÁ½±…¹ÑÌ€ô…Ñ¥½¸¹}¥¹Ñ•ÉÁ½±…¹ÑÌ°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°($$%‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”ì(($%±•Ð‰¥¹‘¥¹Í	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹Í	å9…µ”€ôôôÕ¹‘•™¥¹•€¤ì(($$%‰¥¹‘¥¹Í	å9…µ”€ôíôì($$%‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t€ô‰¥¹‘¥¹Í	å9…µ”ì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹QÉ…­Ìì€¬¬¤€¤ì(($$%½¹ÍÐÑÉ…¬€ôÑÉ…­Íl¤t°($$$%ÑÉ…­9…µ”€ôÑÉ…¬¹¹…µ”ì(($$%±•Ð‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í	å9…µ•lÑÉ…­9…µ”tì(($$%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$%‰¥¹‘¥¹Íl¤t€ô‰¥¹‘¥¹œì(($$%ô•±Í”ì(($$$%‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$$¼¼•á¥ÍÑ¥¹œ‰¥¹‘¥¹œ°µ…­”ÍÕÉ”Ñ¡”…¡”­¹½ÝÌ(($$$$%¥˜€ ‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ôôô¹Õ±°€¤ì(($$$$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($$$$%ô(($$$$%½¹Ñ¥¹Õ”ì(($$$%ô(($$$%½¹ÍÐÁ…Ñ €ôÁÉ½Ñ½ÑåÁ•Ñ¥½¸€˜˜ÁÉ½Ñ½ÑåÁ•Ñ¥½¸¸($$$$%}ÁÉ½Á•ÉÑå	¥¹‘¥¹Íl¤t¹‰¥¹‘¥¹œ¹Á…ÉÍ•‘A…Ñ ì(($$$%‰¥¹‘¥¹œ€ô¹•ÜAÉ½Á•ÉÑå5¥á•È ($$$$%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹É•…Ñ” É½½Ð°ÑÉ…­9…µ”°Á…Ñ €¤°($$$$%ÑÉ…¬¹Y…±Õ•QåÁ•9…µ”°ÑÉ…¬¹•ÑY…±Õ•M¥é” ¤€¤ì(($$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($$$%‰¥¹‘¥¹Íl¤t€ô‰¥¹‘¥¹œì(($$%ô(($$%¥¹Ñ•ÉÁ½±…¹ÑÍl¤t¹É•ÍÕ±Ñ	Õ™™•È€ô‰¥¹‘¥¹œ¹‰Õ™™•Èì(($%ô((%ô((%}…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($%¥˜€ €„Ñ¡¥Ì¹}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤€¤ì(($$%¥˜€ …Ñ¥½¸¹}…¡•%¹‘•à€ôôô¹Õ±°€¤ì(($$$$¼¼Ñ¡¥Ì…Ñ¥½¸¡…Ì‰••¸™½É½ÑÑ•¸‰äÑ¡”…¡”°‰ÕÐÑ¡”ÕÍ•È($$$$¼¼…ÁÁ•…ÉÌÑ¼‰”ÍÑ¥±°ÕÍ¥¹œ¥Ð€´øÉ•‰¥¹(($$$%½¹ÍÐÉ½½ÑUÕ¥€ô€ …Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð€¤¹ÕÕ¥°($$$$%±¥ÁUÕ¥€ô…Ñ¥½¸¹}±¥À¹ÕÕ¥°($$$$%…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($$$%Ñ¡¥Ì¹}‰¥¹‘Ñ¥½¸ …Ñ¥½¸°($$$$%…Ñ¥½¹Í½É±¥À€˜˜…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Íl€Àt€¤ì(($$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($$%ô(($$%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$$¼¼¥¹É•µ•¹ÐÉ•™•É•¹”½Õ¹ÑÌ€¼Í½ÉÐ½ÕÐÍÑ…Ñ”($$%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ ‰¥¹‘¥¹œ¹ÕÍ•½Õ¹Ð€¬¬€ôôô€À€¤ì(($$$$%Ñ¡¥Ì¹}±•¹‘	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì($$$$%‰¥¹‘¥¹œ¹Í…Ù•=É¥¥¹…±MÑ…Ñ” ¤ì(($$$%ô(($$%ô(($$%Ñ¡¥Ì¹}±•¹‘Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô((%}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($%¥˜€ Ñ¡¥Ì¹}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤€¤ì(($$%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$$¼¼‘•É•µ•¹ÐÉ•™•É•¹”½Õ¹ÑÌ€¼Í½ÉÐ½ÕÐÍÑ…Ñ”($$%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ €´´‰¥¹‘¥¹œ¹ÕÍ•½Õ¹Ð€ôôô€À€¤ì(($$$$%‰¥¹‘¥¹œ¹É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì($$$$%Ñ¡¥Ì¹}Ñ…­•	…­	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$$%ô(($$%ô(($$%Ñ¡¥Ì¹}Ñ…­•	…­Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô(($¼¼5•µ½Éäµ…¹…•È((%}¥¹¥Ñ5•µ½Éå5…¹…•È ¤ì(($%Ñ¡¥Ì¹}…Ñ¥½¹Ì€ômtì€¼¼€¹Ñ¥Ù•Ñ¥½¹Ìœ™½±±½Ý•‰ä¥¹…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì€ô€Àì(($%Ñ¡¥Ì¹}…Ñ¥½¹Í	å±¥À€ôíôì($$¼¼¥¹Í¥‘”è($$¼¼ì($$¼¼€%­¹½Ý¹Ñ¥½¹ÌèÉÉ…äð¹¥µ…Ñ¥½¹Ñ¥½¸€ø€´ÕÍ•…ÌÁÉ½Ñ½ÑåÁ•Ì($$¼¼€%…Ñ¥½¹	åI½½Ðè¹¥µ…Ñ¥½¹Ñ¥½¸€´±½½­ÕÀ($$¼¼ô((($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ômtì€¼¼€¹Ñ¥Ù•	¥¹‘¥¹Ìœ™½±±½Ý•‰ä¥¹…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì€ô€Àì(($%Ñ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”€ôíôì€¼¼¥¹Í¥‘”è5…Àð¹…µ”°AÉ½Á•ÉÑå5¥á•È€ø((($%Ñ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€ômtì€¼¼Í…µ”…µ”…Ì…‰½Ù”($%Ñ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€ô€Àì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%Ñ¡¥Ì¹ÍÑ…ÑÌ€ôì(($$%…Ñ¥½¹Ìèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}…Ñ¥½¹Ì¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•Ñ¥½¹Ìì(($$$%ô($$%ô°($$%‰¥¹‘¥¹Ìèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}‰¥¹‘¥¹Ì¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•	¥¹‘¥¹Ìì(($$$%ô($$%ô°($$%½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌì(($$$%ô($$%ô(($%ôì((%ô(($¼¼5•µ½Éäµ…¹…•µ•¹Ð™½È¹¥µ…Ñ¥½¹Ñ¥½¸½‰©•ÑÌ((%}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ¥¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•àì($%É•ÑÕÉ¸¥¹‘•à€„ôô¹Õ±°€˜˜¥¹‘•à€ðÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ìì((%ô((%}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Àì(($%±•Ð…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€ôôôÕ¹‘•™¥¹•€¤ì(($$%…Ñ¥½¹Í½É±¥À€ôì(($$$%­¹½Ý¹Ñ¥½¹Ìèl…Ñ¥½¸t°($$$%…Ñ¥½¹	åI½½Ðèíô(($$%ôì(($$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô€Àì(($$%…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t€ô…Ñ¥½¹Í½É±¥Àì(($%ô•±Í”ì(($$%½¹ÍÐ­¹½Ý¹Ñ¥½¹Ì€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ìì(($$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô­¹½Ý¹Ñ¥½¹Ì¹±•¹Ñ ì($$%­¹½Ý¹Ñ¥½¹Ì¹ÁÕÍ  …Ñ¥½¸€¤ì(($%ô(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô…Ñ¥½¹Ì¹±•¹Ñ ì($%…Ñ¥½¹Ì¹ÁÕÍ  …Ñ¥½¸€¤ì(($%…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥t€ô…Ñ¥½¸ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl…Ñ¥½¹Ì¹±•¹Ñ €´€Ät°($$%…¡•%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•àì(($%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($%…Ñ¥½¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì($%…Ñ¥½¹Ì¹Á½À ¤ì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô¹Õ±°ì((($%½¹ÍÐ±¥ÁUÕ¥€ô…Ñ¥½¸¹}±¥À¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥À°($$%…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t°($$%­¹½Ý¹Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ì°(($$%±…ÍÑ-¹½Ý¹Ñ¥½¸€ô($$$%­¹½Ý¹Ñ¥½¹Í½É±¥Ál­¹½Ý¹Ñ¥½¹Í½É±¥À¹±•¹Ñ €´€Ät°(($$%‰å±¥Á…¡•%¹‘•à€ô…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•àì(($%±…ÍÑ-¹½Ý¹Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô‰å±¥Á…¡•%¹‘•àì($%­¹½Ý¹Ñ¥½¹Í½É±¥Ál‰å±¥Á…¡•%¹‘•àt€ô±…ÍÑ-¹½Ý¹Ñ¥½¸ì($%­¹½Ý¹Ñ¥½¹Í½É±¥À¹Á½À ¤ì(($%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì((($%½¹ÍÐ…Ñ¥½¹	åI½½Ð€ô…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½Ð°($$%É½½ÑUÕ¥€ô€ …Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð€¤¹ÕÕ¥ì(($%‘•±•Ñ”…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ­¹½Ý¹Ñ¥½¹Í½É±¥À¹±•¹Ñ €ôôô€À€¤ì(($$%‘•±•Ñ”…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%ô(($%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$%¥˜€ €´´‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ð€ôôô€À€¤ì(($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$%ô(($%ô((%ô((%}±•¹‘Ñ¥½¸ …Ñ¥½¸€¤ì(($$¼¼l…Ñ¥Ù”…Ñ¥½¹Ìð€¥¹…Ñ¥Ù”…Ñ¥½¹Ì€t($$¼¼l€…Ñ¥Ù”…Ñ¥½¹Ì€ùð¥¹…Ñ¥Ù”…Ñ¥½¹Ìt($$¼¼€€€€€€€€€€€€€€€€Ì€€€€€€€„($$¼¼€€€€€€€€€€€€€€€€€€ðµÍÝ…À´ø($$¼¼€€€€€€€€€€€€€€€€„€€€€€€€Ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%ÁÉ•Ù%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°(($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì€¬¬°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl±…ÍÑÑ¥Ù•%¹‘•àtì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($%…Ñ¥½¹Íl±…ÍÑÑ¥Ù•%¹‘•àt€ô…Ñ¥½¸ì(($%™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%…Ñ¥½¹ÍlÁÉ•Ù%¹‘•àt€ô™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì((%ô((%}Ñ…­•	…­Ñ¥½¸ …Ñ¥½¸€¤ì(($$¼¼l€…Ñ¥Ù”…Ñ¥½¹Ì€ð¥¹…Ñ¥Ù”…Ñ¥½¹Ìt($$¼¼l…Ñ¥Ù”…Ñ¥½¹Ìðð¥¹…Ñ¥Ù”…Ñ¥½¹Ì€t($$¼¼€€€€€€€„€€€€€€€Ì($$¼¼€€€€€€€€€ðµÍÝ…À´ø($$¼¼€€€€€€€Ì€€€€€€€„(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%ÁÉ•Ù%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì°(($$%±…ÍÑÑ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%…Ñ¥½¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô…Ñ¥½¸ì(($%±…ÍÑÑ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%…Ñ¥½¹ÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•Ñ¥½¸ì((%ô(($¼¼5•µ½Éäµ…¹…•µ•¹Ð™½ÈAÉ½Á•ÉÑå5¥á•È½‰©•ÑÌ((%}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%±•Ð‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹	å9…µ”€ôôôÕ¹‘•™¥¹•€¤ì(($$%‰¥¹‘¥¹	å9…µ”€ôíôì($$%‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t€ô‰¥¹‘¥¹	å9…µ”ì(($%ô(($%‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”t€ô‰¥¹‘¥¹œì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì($%‰¥¹‘¥¹Ì¹ÁÕÍ  ‰¥¹‘¥¹œ€¤ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ½Á	¥¹‘¥¹œ€ô‰¥¹‘¥¹œ¹‰¥¹‘¥¹œ°($$%É½½ÑUÕ¥€ôÁÉ½Á	¥¹‘¥¹œ¹É½½Ñ9½‘”¹ÕÕ¥°($$%ÑÉ…­9…µ”€ôÁÉ½Á	¥¹‘¥¹œ¹Á…Ñ °($$%‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t°(($$%±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl‰¥¹‘¥¹Ì¹±•¹Ñ €´€Ät°($$%…¡•%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•àì(($%±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($%‰¥¹‘¥¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œì($%‰¥¹‘¥¹Ì¹Á½À ¤ì(($%‘•±•Ñ”‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”tì(($%¥˜€ =‰©•Ð¹­•åÌ ‰¥¹‘¥¹	å9…µ”€¤¹±•¹Ñ €ôôô€À€¤ì(($$%‘•±•Ñ”‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%ô((%ô((%}±•¹‘	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ•Ù%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•à°(($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì€¬¬°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl±…ÍÑÑ¥Ù•%¹‘•àtì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($%‰¥¹‘¥¹Íl±…ÍÑÑ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($%™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%‰¥¹‘¥¹ÍlÁÉ•Ù%¹‘•àt€ô™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œì((%ô((%}Ñ…­•	…­	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ•Ù%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì°(($$%±…ÍÑÑ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%‰¥¹‘¥¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($%±…ÍÑÑ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%‰¥¹‘¥¹ÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•	¥¹‘¥¹œì((%ô((($¼¼5•µ½Éäµ…¹…•µ•¹Ð½˜%¹Ñ•ÉÁ½±…¹ÑÌ™½ÈÝ•¥¡Ð…¹Ñ¥µ”Í…±”((%}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€¬¬ì(($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹ÑÍl±…ÍÑÑ¥Ù•%¹‘•àtì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôôÕ¹‘•™¥¹•€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ô¹•Ü1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð ($$$%¹•Ü±½…ÐÌÉÉÉ…ä €È€¤°¹•Ü±½…ÐÌÉÉÉ…ä €È€¤°($$$$Ä°}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÍI•ÍÕ±Ñ	Õ™™•È€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($$%¥¹Ñ•ÉÁ½±…¹ÑÍl±…ÍÑÑ¥Ù•%¹‘•àt€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%É•ÑÕÉ¸¥¹Ñ•ÉÁ½±…¹Ðì((%ô((%}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¥¹Ñ•ÉÁ½±…¹Ð€¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°($$%ÁÉ•Ù%¹‘•à€ô¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°(($$%±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹ÑÍl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%¥¹Ñ•ÉÁ½±…¹ÑÍl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%¥¹Ñ•ÉÁ½±…¹ÑÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ðì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¹ô™½ÈÑ¡”Á…ÍÍ•±¥À¸($€¨($€¨%˜…¸…Ñ¥½¸™¥ÑÑ¥¹œÑ¡”±¥À…¹É½½ÐÁ…É…µ•Ñ•ÉÌ‘½•Í¸Ðå•Ð•á¥ÍÐ°¥Ð($€¨Ý¥±°‰”É•…Ñ•‰äÑ¡¥Ìµ•Ñ¡½¸…±±¥¹œÑ¡¥Ìµ•Ñ¡½Í•Ù•É…°Ñ¥µ•ÌÝ¥Ñ Ñ¡”($€¨Í…µ”±¥À…¹É½½ÐÁ…É…µ•Ñ•ÉÌ…±Ý…åÌÉ•ÑÕÉ¹ÌÑ¡”Í…µ”…Ñ¥½¸¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥ÁñÍÑÉ¥¹ô±¥À€´¸…¹¥µ…Ñ¥½¸±¥À½È…±Ñ•É¹…Ñ¥Ù•±äÑ¡”¹…µ”½˜Ñ¡”…¹¥µ…Ñ¥½¸±¥À¸($€¨Á…É…´í=‰©•ÐÍôm½ÁÑ¥½¹…±I½½Ñt€´¸…±Ñ•É¹…Ñ¥Ù”É½½Ð½‰©•Ð¸($€¨Á…É…´ì¡9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘•ñ‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”¥ôm‰±•¹‘5½‘•t€´Q¡”‰±•¹µ½‘”¸($€¨É•ÑÕÉ¸ìý¹¥µ…Ñ¥½¹Ñ¥½¹ôQ¡”…¹¥µ…Ñ¥½¸…Ñ¥½¸¸($€¨¼(%±¥ÁÑ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð°‰±•¹‘5½‘”€¤ì(($%½¹ÍÐÉ½½Ð€ô½ÁÑ¥½¹…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥ì(($%±•Ð±¥Á=‰©•Ð€ôÑåÁ•½˜±¥À€ôôô€ÍÑÉ¥¹œœ€ü¹¥µ…Ñ¥½¹±¥À¹™¥¹‘	å9…µ” É½½Ð°±¥À€¤€è±¥Àì(($%½¹ÍÐ±¥ÁUÕ¥€ô±¥Á=‰©•Ð€„ôô¹Õ±°€ü±¥Á=‰©•Ð¹ÕÕ¥€è±¥Àì(($%½¹ÍÐ…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì($%±•ÐÁÉ½Ñ½ÑåÁ•Ñ¥½¸€ô¹Õ±°ì(($%¥˜€ ‰±•¹‘5½‘”€ôôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ ±¥Á=‰©•Ð€„ôô¹Õ±°€¤ì(($$$%‰±•¹‘5½‘”€ô±¥Á=‰©•Ð¹‰±•¹‘5½‘”ì(($$%ô•±Í”ì(($$$%‰±•¹‘5½‘”€ô9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”ì(($$%ô(($%ô(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ•á¥ÍÑ¥¹Ñ¥½¸€ô…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($$%¥˜€ •á¥ÍÑ¥¹Ñ¥½¸€„ôôÕ¹‘•™¥¹•€˜˜•á¥ÍÑ¥¹Ñ¥½¸¹‰±•¹‘5½‘”€ôôô‰±•¹‘5½‘”€¤ì(($$$%É•ÑÕÉ¸•á¥ÍÑ¥¹Ñ¥½¸ì(($$%ô(($$$¼¼Ý”­¹½ÜÑ¡”±¥À°Í¼Ý”‘½¸Ð¡…Ù”Ñ¼Á…ÉÍ”…±°($$$¼¼Ñ¡”‰¥¹‘¥¹Ì……¥¸‰ÕÐ…¸©ÕÍÐ½Áä($$%ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Íl€Àtì(($$$¼¼…±Í¼°Ñ…­”Ñ¡”±¥À™É½´Ñ¡”ÁÉ½Ñ½ÑåÁ”…Ñ¥½¸($$%¥˜€ ±¥Á=‰©•Ð€ôôô¹Õ±°€¤($$$%±¥Á=‰©•Ð€ôÁÉ½Ñ½ÑåÁ•Ñ¥½¸¹}±¥Àì(($%ô(($$¼¼±¥ÀµÕÍÐ‰”­¹½Ý¸Ý¡•¸ÍÁ•¥™¥•Ù¥„ÍÑÉ¥¹œ($%¥˜€ ±¥Á=‰©•Ð€ôôô¹Õ±°€¤É•ÑÕÉ¸¹Õ±°ì(($$¼¼…±±½…Ñ”…±°É•Í½ÕÉ•ÌÉ•ÅÕ¥É•Ñ¼ÉÕ¸¥Ð($%½¹ÍÐ¹•ÝÑ¥½¸€ô¹•Ü¹¥µ…Ñ¥½¹Ñ¥½¸ Ñ¡¥Ì°±¥Á=‰©•Ð°½ÁÑ¥½¹…±I½½Ð°‰±•¹‘5½‘”€¤ì(($%Ñ¡¥Ì¹}‰¥¹‘Ñ¥½¸ ¹•ÝÑ¥½¸°ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€¤ì(($$¼¼…¹µ…­”Ñ¡”…Ñ¥½¸­¹½Ý¸Ñ¼Ñ¡”µ•µ½Éäµ…¹…•È($%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ ¹•ÝÑ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($%É•ÑÕÉ¸¹•ÝÑ¥½¸ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì…¸•á¥ÍÑ¥¹œ…¹¥µ…Ñ¥½¸…Ñ¥½¸™½ÈÑ¡”Á…ÍÍ•±¥À¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥ÁñÍÑÉ¥¹ô±¥À€´¸…¹¥µ…Ñ¥½¸±¥À½È…±Ñ•É¹…Ñ¥Ù•±äÑ¡”¹…µ”½˜Ñ¡”…¹¥µ…Ñ¥½¸±¥À¸($€¨Á…É…´í=‰©•ÐÍôm½ÁÑ¥½¹…±I½½Ñt€´¸…±Ñ•É¹…Ñ¥Ù”É½½Ð½‰©•Ð¸($€¨É•ÑÕÉ¸ìý¹¥µ…Ñ¥½¹Ñ¥½¹ôQ¡”…¹¥µ…Ñ¥½¸…Ñ¥½¸¸I•ÑÕÉ¹Ì¹Õ±±€¥˜¹¼…Ñ¥½¸Ý…Ì™½Õ¹¸($€¨¼(%•á¥ÍÑ¥¹Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%½¹ÍÐÉ½½Ð€ô½ÁÑ¥½¹…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°(($$%±¥Á=‰©•Ð€ôÑåÁ•½˜±¥À€ôôô€ÍÑÉ¥¹œœ€ü($$$%¹¥µ…Ñ¥½¹±¥À¹™¥¹‘	å9…µ” É½½Ð°±¥À€¤€è±¥À°(($$%±¥ÁUÕ¥€ô±¥Á=‰©•Ð€ü±¥Á=‰©•Ð¹ÕÕ¥€è±¥À°(($$%…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$%É•ÑÕÉ¸…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tñð¹Õ±°ì(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¨¨($€¨•…Ñ¥Ù…Ñ•Ì…±°ÁÉ•Ù¥½ÕÍ±äÍ¡•‘Õ±•…Ñ¥½¹Ì½¸Ñ¡¥Ìµ¥á•È¸($€¨($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹5¥á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¤…¹¥µ…Ñ¥½¸µ¥á•È¸($€¨¼(%ÍÑ½Á±±Ñ¥½¸ ¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%¹Ñ¥½¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ìì(($%™½È€ ±•Ð¤€ô¹Ñ¥½¹Ì€´€Äì¤€øô€Àì€´´¤€¤ì(($$%…Ñ¥½¹Íl¤t¹ÍÑ½À ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘Ù…¹•ÌÑ¡”±½‰…°µ¥á•ÈÑ¥µ”…¹ÕÁ‘…Ñ•ÌÑ¡”…¹¥µ…Ñ¥½¸¸($€¨($€¨Q¡¥Ì¥ÌÕÍÕ…±±ä‘½¹”¥¸Ñ¡”É•¹‘•È±½½À‰äÁ…ÍÍ¥¹œÑ¡”‘•±Ñ„($€¨Ñ¥µ”™É½´í±¥¹¬±½­ô½Èí±¥¹¬Q¥µ•Éô¸($€¨($€¨Á…É…´í¹Õµ‰•Éô‘•±Ñ…Q¥µ”€´Q¡”‘•±Ñ„Ñ¥µ”¥¸Í•½¹‘Ì¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹5¥á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¤…¹¥µ…Ñ¥½¸µ¥á•È¸($€¨¼(%ÕÁ‘…Ñ” ‘•±Ñ…Q¥µ”€¤ì(($%‘•±Ñ…Q¥µ”€¨ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%¹Ñ¥½¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì°(($$%Ñ¥µ”€ôÑ¡¥Ì¹Ñ¥µ”€¬ô‘•±Ñ…Q¥µ”°($$%Ñ¥µ•¥É•Ñ¥½¸€ô5…Ñ ¹Í¥¸ ‘•±Ñ…Q¥µ”€¤°(($$%…Õ%¹‘•à€ôÑ¡¥Ì¹}…Õ%¹‘•àxô€Äì(($$¼¼ÉÕ¸…Ñ¥Ù”…Ñ¥½¹Ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹Ñ¥½¹Ìì€¬¬¤€¤ì(($$%½¹ÍÐ…Ñ¥½¸€ô…Ñ¥½¹Íl¤tì(($$%…Ñ¥½¸¹}ÕÁ‘…Ñ” Ñ¥µ”°‘•±Ñ…Q¥µ”°Ñ¥µ•¥É•Ñ¥½¸°…Õ%¹‘•à€¤ì(($%ô(($$¼¼ÕÁ‘…Ñ”Í•¹”É…Á (($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹	¥¹‘¥¹Ìì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹…ÁÁ±ä …Õ%¹‘•à€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±½‰…°µ¥á•ÈÑ¼„ÍÁ•¥™¥ŒÑ¥µ”…¹ÕÁ‘…Ñ•ÌÑ¡”…¹¥µ…Ñ¥½¸…½É‘¥¹±ä¸($€¨($€¨Q¡¥Ì¥ÌÕÍ•™Õ°Ý¡•¸å½Ô¹••Ñ¼©ÕµÀÑ¼…¸•á…ÐÑ¥µ”¥¸…¸…¹¥µ…Ñ¥½¸¸Q¡”($€¨¥¹ÁÕÐÁ…É…µ•Ñ•ÈÝ¥±°‰”Í…±•‰äí±¥¹¬¹¥µ…Ñ¥½¹5¥á•ÈÑ¥µ•M…±•ô($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑ¥µ”€´Q¡”Ñ¥µ”Ñ¼Í•Ð¥¸Í•½¹‘Ì¸($€¨É•ÑÕÉ¸í¹¥µ…Ñ¥½¹5¥á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¤…¹¥µ…Ñ¥½¸µ¥á•È¸($€¨¼(%Í•ÑQ¥µ” Ñ¥µ”€¤ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì€¼¼i•É¼½ÕÐÑ¥µ”…ÑÑÉ¥‰ÕÑ”™½È¹¥µ…Ñ¥½¹5¥á•È½‰©•Ðì($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹}…Ñ¥½¹Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹}…Ñ¥½¹Íl¤t¹Ñ¥µ”€ô€Àì€¼¼i•É¼½ÕÐÑ¥µ”…ÑÑÉ¥‰ÕÑ”™½È…±°…ÍÍ½¥…Ñ•¹¥µ…Ñ¥½¹Ñ¥½¸½‰©•ÑÌ¸(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÕÁ‘…Ñ” Ñ¥µ”€¤ì€¼¼UÁ‘…Ñ”ÕÍ•Ñ¼Í•Ð•á…ÐÑ¥µ”¸I•ÑÕÉ¹Ì€‰Ñ¡¥Ìˆ¹¥µ…Ñ¥½¹5¥á•È½‰©•Ð¸((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡¥Ìµ¥á•ÈÌÉ½½Ð½‰©•Ð¸($€¨($€¨É•ÑÕÉ¸í=‰©•ÐÍôQ¡”µ¥á•ÈÌÉ½½Ð½‰©•Ð¸($€¨¼(%•ÑI½½Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}É½½Ðì((%ô(($¼¨¨($€¨•…±±½…Ñ•Ì…±°µ•µ½ÉäÉ•Í½ÕÉ•Ì™½È„±¥À¸	•™½É”ÕÍ¥¹œÑ¡¥Ìµ•Ñ¡½µ…­”($€¨ÍÕÉ”Ñ¼…±°í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸ÍÑ½Áô™½È…±°É•±…Ñ•…Ñ¥½¹Ì¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥Áô±¥À€´Q¡”±¥ÀÑ¼Õ¹…¡”¸($€¨¼(%Õ¹…¡•±¥À ±¥À€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%±¥ÁUÕ¥€ô±¥À¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥À°($$%…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼¹½Ñ”è©ÕÍÐ…±±¥¹œ}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸Ý½Õ±µ•ÍÌÕÀÑ¡”($$$¼¼¥Ñ•É…Ñ¥½¸ÍÑ…Ñ”…¹…±Í¼É•ÅÕ¥É”ÕÁ‘…Ñ¥¹œÑ¡”ÍÑ…Ñ”Ý”…¸($$$¼¼©ÕÍÐÑ¡É½Ü…Ý…ä(($$%½¹ÍÐ…Ñ¥½¹ÍQ½I•µ½Ù”€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ìì(($$%™½È€ ±•Ð¤€ô€À°¸€ô…Ñ¥½¹ÍQ½I•µ½Ù”¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ…Ñ¥½¸€ô…Ñ¥½¹ÍQ½I•µ½Ù•l¤tì(($$$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($$$%½¹ÍÐ…¡•%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°($$$$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl…Ñ¥½¹Ì¹±•¹Ñ €´€Ätì(($$$%…Ñ¥½¸¹}…¡•%¹‘•à€ô¹Õ±°ì($$$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì(($$$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($$$%…Ñ¥½¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì($$$%…Ñ¥½¹Ì¹Á½À ¤ì(($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì(($$%ô(($$%‘•±•Ñ”…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%ô((%ô(($¼¨¨($€¨•…±±½…Ñ•Ì…±°µ•µ½ÉäÉ•Í½ÕÉ•Ì™½È„É½½Ð½‰©•Ð¸	•™½É”ÕÍ¥¹œÑ¡¥Ì($€¨µ•Ñ¡½µ…­”ÍÕÉ”Ñ¼…±°í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸ÍÑ½Áô™½È…±°É•±…Ñ•($€¨…Ñ¥½¹Ì½È…±Ñ•É¹…Ñ¥Ù•±äí±¥¹¬¹¥µ…Ñ¥½¹5¥á•ÈÍÑ½Á±±Ñ¥½¹ôÝ¡•¸Ñ¡”($€¨µ¥á•È½Á•É…Ñ•Ì½¸„Í¥¹±”É½½Ð¸($€¨($€¨Á…É…´í=‰©•ÐÍôÉ½½Ð€´Q¡”É½½Ð½‰©•ÐÑ¼Õ¹…¡”¸($€¨¼(%Õ¹…¡•I½½Ð É½½Ð€¤ì(($%½¹ÍÐÉ½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Àì(($%™½È€ ½¹ÍÐ±¥ÁUÕ¥¥¸…Ñ¥½¹Í	å±¥À€¤ì(($$%½¹ÍÐ…Ñ¥½¹	åI½½Ð€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t¹…Ñ¥½¹	åI½½Ð°($$$%…Ñ¥½¸€ô…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($$%¥˜€ …Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($$%ô(($%ô(($%½¹ÍÐ‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹	å9…µ”€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐÑÉ…­9…µ”¥¸‰¥¹‘¥¹	å9…µ”€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”tì($$$%‰¥¹‘¥¹œ¹É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$%ô(($%ô((%ô(($¼¨¨($€¨•…±±½…Ñ•Ì…±°µ•µ½ÉäÉ•Í½ÕÉ•Ì™½È…¸…Ñ¥½¸¸Q¡”…Ñ¥½¸¥Ì¥‘•¹Ñ¥™¥•‰äÑ¡”($€¨¥Ù•¸±¥À…¹…¸½ÁÑ¥½¹…°É½½Ð½‰©•Ð¸	•™½É”ÕÍ¥¹œÑ¡¥Ìµ•Ñ¡½µ…­”($€¨ÍÕÉ”Ñ¼…±°í±¥¹¬¹¥µ…Ñ¥½¹Ñ¥½¸ÍÑ½ÁôÑ¼‘•…Ñ¥Ù…Ñ”Ñ¡”…Ñ¥½¸¸($€¨($€¨Á…É…´í¹¥µ…Ñ¥½¹±¥ÁñÍÑÉ¥¹ô±¥À€´¸…¹¥µ…Ñ¥½¸±¥À½È…±Ñ•É¹…Ñ¥Ù•±äÑ¡”¹…µ”½˜Ñ¡”…¹¥µ…Ñ¥½¸±¥À¸($€¨Á…É…´í=‰©•ÐÍôm½ÁÑ¥½¹…±I½½Ñt€´¸…±Ñ•É¹…Ñ¥Ù”É½½Ð½‰©•Ð¸($€¨¼(%Õ¹…¡•Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%½¹ÍÐ…Ñ¥½¸€ôÑ¡¥Ì¹•á¥ÍÑ¥¹Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%¥˜€ …Ñ¥½¸€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„€ÍÉ•¹‘•ÈÑ…É•Ð¸(€¨(€¨…Õµ•¹ÑÌI•¹‘•ÉQ…É•Ð(€¨¼)±…ÍÌI•¹‘•ÉQ…É•ÐÍ•áÑ•¹‘ÌI•¹‘•ÉQ…É•Ðì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü€ÍÉ•¹‘•ÈÑ…É•Ð¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÝ¥‘Ñ ôÅt€´Q¡”Ý¥‘Ñ ½˜Ñ¡”É•¹‘•ÈÑ…É•Ð¸($€¨Á…É…´í¹Õµ‰•Éôm¡•¥¡ÐôÅt€´Q¡”¡•¥¡Ð½˜Ñ¡”É•¹‘•ÈÑ…É•Ð¸($€¨Á…É…´í¹Õµ‰•Éôm‘•ÁÑ ôÅt€´Q¡”¡•¥¡Ð½˜Ñ¡”É•¹‘•ÈÑ…É•Ð¸($€¨Á…É…´íI•¹‘•ÉQ…É•Ñù=ÁÑ¥½¹Íôm½ÁÑ¥½¹Ít€´Q¡”½¹™¥ÕÉ…Ñ¥½¸½‰©•Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È Ý¥‘Ñ €ô€Ä°¡•¥¡Ð€ô€Ä°‘•ÁÑ €ô€Ä°½ÁÑ¥½¹Ì€ôíô€¤ì(($%ÍÕÁ•È Ý¥‘Ñ °¡•¥¡Ð°½ÁÑ¥½¹Ì€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍI•¹‘•ÉQ…É•ÐÍ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹‘•ÁÑ €ô‘•ÁÑ ì(($$¼¨¨($$€¨=Ù•ÉÝÉ¥ÑÑ•¸Ý¥Ñ „‘¥™™•É•¹ÐÑ•áÑÕÉ”ÑåÁ”¸($$€¨($$€¨ÑåÁ”í…Ñ„ÍQ•áÑÕÉ•ô($$€¨¼($%Ñ¡¥Ì¹Ñ•áÑÕÉ”€ô¹•Ü…Ñ„ÍQ•áÑÕÉ” ¹Õ±°°Ý¥‘Ñ °¡•¥¡Ð°‘•ÁÑ €¤ì($%Ñ¡¥Ì¹}Í•ÑQ•áÑÕÉ•=ÁÑ¥½¹Ì ½ÁÑ¥½¹Ì€¤ì(($%Ñ¡¥Ì¹Ñ•áÑÕÉ”¹¥ÍI•¹‘•ÉQ…É•ÑQ•áÑÕÉ”€ôÑÉÕ”ì((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„Õ¹¥™½É´Ý¡¥ ¥Ì„±½‰…°Í¡…‘•ÈÙ…É¥…‰±”¸Q¡•ä…É”Á…ÍÍ•Ñ¼Í¡…‘•ÈÁÉ½É…µÌ¸(€¨(€¨]¡•¸‘•±…É¥¹œ„Õ¹¥™½É´½˜„í±¥¹¬M¡…‘•É5…Ñ•É¥…±ô°¥Ð¥Ì‘•±…É•‰äÙ…±Õ”½È‰ä½‰©•Ð¸(€¨©Ì(€¨Õ¹¥™½ÉµÌèì(€¨€%Ñ¥µ”èìÙ…±Õ”è€Ä¸Àô°(€¨€%É•Í½±ÕÑ¥½¸è¹•ÜU¹¥™½É´ ¹•ÜY•Ñ½ÈÈ ¤€¤(€¨ôì(€¨€(€¨M¥¹”Ñ¡¥Ì±…ÍÌ…¸½¹±ä‰”ÕÍ•¥¸½¹Ñ•áÐ½˜í±¥¹¬M¡…‘•É5…Ñ•É¥…±ô°¥Ð¥Ì½¹±äÍÕÁÁ½ÉÑ•(€¨¥¸í±¥¹¬]•‰1I•¹‘•É•Éô¸(€¨¼)±…ÍÌU¹¥™½É´ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÕ¹¥™½É´¸($€¨($€¨Á…É…´í…¹åôÙ…±Õ”€´Q¡”Õ¹¥™½É´Ù…±Õ”¸($€¨¼(%½¹ÍÑÉÕÑ½È Ù…±Õ”€¤ì(($$¼¨¨($$€¨Q¡”Õ¹¥™½É´Ù…±Õ”¸($$€¨($$€¨ÑåÁ”í…¹åô($$€¨¼($%Ñ¡¥Ì¹Ù…±Õ”€ôÙ…±Õ”ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•ÜÕ¹¥™½É´Ý¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨%˜Ñ¡”Ù…±Õ”¡…Ì„±½¹” ¥€µ•Ñ¡½°Ñ¡”Ù…±Õ”¥Ì±½¹•…ÌÝ•±°¸($€¨($€¨É•ÑÕÉ¸íU¹¥™½Éµô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜU¹¥™½É´ Ñ¡¥Ì¹Ù…±Õ”¹±½¹”€ôôôÕ¹‘•™¥¹•€üÑ¡¥Ì¹Ù…±Õ”€èÑ¡¥Ì¹Ù…±Õ”¹±½¹” ¤€¤ì((%ô()ô()±•Ð}¥€ô€Àì((¼¨¨(€¨±…ÍÌ™½Èµ…¹…¥¹œµÕ±Ñ¥Á±”Õ¹¥™½ÉµÌ¥¸„Í¥¹±”É½ÕÀ¸Q¡”É•¹‘•É•ÈÝ¥±°ÁÉ½•ÍÌ(€¨ÍÕ „‘•™¥¹¥Ñ¥½¸…Ì„Í¥¹±”U	<¸(€¨(€¨M¥¹”Ñ¡¥Ì±…ÍÌ…¸½¹±ä‰”ÕÍ•¥¸½¹Ñ•áÐ½˜í±¥¹¬M¡…‘•É5…Ñ•É¥…±ô°¥Ð¥Ì½¹±äÍÕÁÁ½ÉÑ•(€¨¥¸í±¥¹¬]•‰1I•¹‘•É•Éô¸(€¨(€¨…Õµ•¹ÑÌÙ•¹Ñ¥ÍÁ…Ñ¡•È(€¨¼)±…ÍÌU¹¥™½ÉµÍÉ½ÕÀ•áÑ•¹‘ÌÙ•¹Ñ¥ÍÁ…Ñ¡•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍU¹¥™½ÉµÍÉ½ÕÀ€ôÑÉÕ”ì(($$¼¨¨($$€¨Q¡”%½˜Ñ¡”€Í½‰©•Ð¸($$€¨($$€¨¹…µ”U¹¥™½ÉµÍÉ½ÕÀ¥($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨É•…‘½¹±ä($$€¨¼($%=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä Ñ¡¥Ì°€¥œ°ìÙ…±Õ”è}¥€¬¬ô€¤ì(($$¼¨¨($$€¨Q¡”¹…µ”½˜Ñ¡”Õ¹¥™½ÉµÌÉ½ÕÀ¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹¹…µ”€ô€œœì(($$¼¨¨($$€¨Q¡”‰Õ™™•ÈÕÍ…”¸($$€¨($$€¨ÑåÁ”ì¡MÑ…Ñ¥É…ÝUÍ…•ñå¹…µ¥É…ÝUÍ…•ñMÑÉ•…µÉ…ÝUÍ…•ñMÑ…Ñ¥I•…‘UÍ…•ñå¹…µ¥I•…‘UÍ…•ñMÑÉ•…µI•…‘UÍ…•ñMÑ…Ñ¥½ÁåUÍ…•ñå¹…µ¥½ÁåUÍ…•ñMÑÉ•…µ½ÁåUÍ…”¥ô($$€¨‘•™…Õ±ÐMÑ…Ñ¥É…ÝUÍ…”($$€¨¼($%Ñ¡¥Ì¹ÕÍ…”€ôMÑ…Ñ¥É…ÝUÍ…”ì(($$¼¨¨($$€¨¸…ÉÉ…ä¡½±‘¥¹œÑ¡”Õ¹¥™½ÉµÌ¸($$€¨($$€¨ÑåÁ”íÉÉ…äñU¹¥™½É´ùô($$€¨¼($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ€ômtì((%ô(($¼¨¨($€¨‘‘ÌÑ¡”¥Ù•¸Õ¹¥™½É´Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨($€¨Á…É…´íU¹¥™½ÉµôÕ¹¥™½É´€´Q¡”Õ¹¥™½É´Ñ¼…‘¸($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%…‘ Õ¹¥™½É´€¤ì(($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÁÕÍ  Õ¹¥™½É´€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•µ½Ù•ÌÑ¡”¥Ù•¸Õ¹¥™½É´™É½´Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨($€¨Á…É…´íU¹¥™½ÉµôÕ¹¥™½É´€´Q¡”Õ¹¥™½É´Ñ¼É•µ½Ù”¸($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%É•µ½Ù” Õ¹¥™½É´€¤ì(($%½¹ÍÐ¥¹‘•à€ôÑ¡¥Ì¹Õ¹¥™½ÉµÌ¹¥¹‘•á=˜ Õ¹¥™½É´€¤ì(($%¥˜€ ¥¹‘•à€„ôô€´Ä€¤Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÍÁ±¥” ¥¹‘•à°€Ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¹…µ”½˜Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”€´Q¡”¹…µ”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%Í•Ñ9…µ” ¹…µ”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ô¹…µ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÕÍ…”½˜Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨($€¨Á…É…´ì¡MÑ…Ñ¥É…ÝUÍ…•ñå¹…µ¥É…ÝUÍ…•ñMÑÉ•…µÉ…ÝUÍ…•ñMÑ…Ñ¥I•…‘UÍ…•ñå¹…µ¥I•…‘UÍ…•ñMÑÉ•…µI•…‘UÍ…•ñMÑ…Ñ¥½ÁåUÍ…•ñå¹…µ¥½ÁåUÍ…•ñMÑÉ•…µ½ÁåUÍ…”¥ôÙ…±Õ”€´Q¡”ÕÍ…”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%Í•ÑUÍ…” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹ÕÍ…”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨($€¨™¥É•ÌQ•áÑÕÉ”‘¥ÍÁ½Í”($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ…Ñ¡Ù•¹Ð ìÑåÁ”è€‘¥ÍÁ½Í”œô€¤ì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸Õ¹¥™½ÉµÌÉ½ÕÀÑ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´íU¹¥™½ÉµÍÉ½ÕÁôÍ½ÕÉ”€´Q¡”Õ¹¥™½ÉµÌÉ½ÕÀÑ¼½Áä¸($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÕ¹¥™½ÉµÌÉ½ÕÀ¸($€¨¼(%½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ôÍ½ÕÉ”¹¹…µ”ì($%Ñ¡¥Ì¹ÕÍ…”€ôÍ½ÕÉ”¹ÕÍ…”ì(($%½¹ÍÐÕ¹¥™½ÉµÍM½ÕÉ”€ôÍ½ÕÉ”¹Õ¹¥™½ÉµÌì(($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹±•¹Ñ €ô€Àì(($%™½È€ ±•Ð¤€ô€À°°€ôÕ¹¥™½ÉµÍM½ÕÉ”¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÕ¹¥™½ÉµÌ€ôÉÉ…ä¹¥ÍÉÉ…ä Õ¹¥™½ÉµÍM½ÕÉ•l¤t€¤€üÕ¹¥™½ÉµÍM½ÕÉ•l¤t€èlÕ¹¥™½ÉµÍM½ÕÉ•l¤ttì(($$%™½È€ ±•Ð¨€ô€Àì¨€ðÕ¹¥™½ÉµÌ¹±•¹Ñ ì¨€¬¬€¤ì(($$$%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÁÕÍ  Õ¹¥™½ÉµÍl¨t¹±½¹” ¤€¤ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•ÜÕ¹¥™½ÉµÌÉ½ÕÀÝ¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸íU¹¥™½ÉµÍÉ½ÕÁô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô((¼¨¨(€¨¸¥¹ÍÑ…¹•Ù•ÉÍ¥½¸½˜…¸¥¹Ñ•É±•…Ù•‰Õ™™•È¸(€¨(€¨…Õµ•¹ÑÌ%¹Ñ•É±•…Ù•‘	Õ™™•È(€¨¼)±…ÍÌ%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È•áÑ•¹‘Ì%¹Ñ•É±•…Ù•‘	Õ™™•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¥¹ÍÑ…¹•¥¹Ñ•É±•…Ù•‰Õ™™•È¸($€¨($€¨Á…É…´íQåÁ•‘ÉÉ…åô…ÉÉ…ä€´ÑåÁ•…ÉÉ…äÝ¥Ñ „Í¡…É•‰Õ™™•ÈÍÑ½É¥¹œ…ÑÑÉ¥‰ÕÑ”‘…Ñ„¸($€¨Á…É…´í¹Õµ‰•ÉôÍÑÉ¥‘”€´Q¡”¹Õµ‰•È½˜ÑåÁ•µ…ÉÉ…ä•±•µ•¹ÑÌÁ•ÈÙ•ÉÑ•à¸($€¨Á…É…´í¹Õµ‰•Éômµ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ôÅt€´•™¥¹•Ì¡½Ü½™Ñ•¸„Ù…±Õ”½˜Ñ¡¥Ì¥¹Ñ•É±•…Ù•‰Õ™™•ÈÍ¡½Õ±‰”É•Á•…Ñ•¸($€¨¼(%½¹ÍÑÉÕÑ½È …ÉÉ…ä°ÍÑÉ¥‘”°µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ô€Ä€¤ì(($%ÍÕÁ•È …ÉÉ…ä°ÍÑÉ¥‘”€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È€ôÑÉÕ”ì(($$¼¨¨($$€¨•™¥¹•Ì¡½Ü½™Ñ•¸„Ù…±Õ”½˜Ñ¡¥Ì‰Õ™™•È…ÑÑÉ¥‰ÕÑ”Í¡½Õ±‰”É•Á•…Ñ•°($$€¨Í•”í±¥¹¬%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”µ•Í¡A•ÉÑÑÉ¥‰ÕÑ•ô¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôµ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÍ½ÕÉ”¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ‘…Ñ„€¤ì(($%½¹ÍÐ¥ˆ€ôÍÕÁ•È¹±½¹” ‘…Ñ„€¤ì(($%¥ˆ¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÑ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸¥ˆì((%ô((%Ñ½)M=8 ‘…Ñ„€¤ì(($%½¹ÍÐ©Í½¸€ôÍÕÁ•È¹Ñ½)M=8 ‘…Ñ„€¤ì(($%©Í½¸¹¥Í%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È€ôÑÉÕ”ì($%©Í½¸¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÑ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸©Í½¸ì((%ô()ô((¼¨¨(€¨¸…±Ñ•É¹…Ñ¥Ù”Ù•ÉÍ¥½¸½˜„‰Õ™™•È…ÑÑÉ¥‰ÕÑ”Ý¥Ñ µ½É”½¹ÑÉ½°½Ù•ÈÑ¡”Y	<¸(€¨(€¨Q¡”É•¹‘•É•È‘½•Ì¹½Ð½¹ÍÑÉÕÐ„Y	<™½ÈÑ¡¥Ì­¥¹½˜…ÑÑÉ¥‰ÕÑ”¸%¹ÍÑ•…°¥ÐÕÍ•Ì(€¨Ý¡…Ñ•Ù•ÈY	<¥ÌÁ…ÍÍ•¥¸½¹ÍÑÉÕÑ½È…¹…¸±…Ñ•È‰”…±Ñ•É•Ù¥„Ñ¡”‰Õ™™•É€ÁÉ½Á•ÉÑä¸(€¨(€¨Q¡”µ½ÍÐ½µµ½¸ÕÍ”…Í”™½ÈÑ¡¥Ì±…ÍÌ¥ÌÝ¡•¸Í½µ”­¥¹½˜AAT…±Õ±…Ñ¥½¸¥¹Ñ•É™•É•Ì(€¨½È•Ù•¸ÁÉ½‘Õ•ÌÑ¡”Y	=Ì¥¸ÅÕ•ÍÑ¥½¸¸(€¨(€¨9½Ñ¥”Ñ¡…ÐÑ¡¥Ì±…ÍÌ…¸½¹±ä‰”ÕÍ•Ý¥Ñ í±¥¹¬]•‰1I•¹‘•É•Éô¸(€¨¼)±…ÍÌ1	Õ™™•ÉÑÑÉ¥‰ÕÑ”ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü0‰Õ™™•È…ÑÑÉ¥‰ÕÑ”¸($€¨($€¨Á…É…´í]•‰1	Õ™™•Éô‰Õ™™•È€´Q¡”¹…Ñ¥Ù”]•‰0‰Õ™™•È¸($€¨Á…É…´í¹Õµ‰•ÉôÑåÁ”€´Q¡”¹…Ñ¥Ù”‘…Ñ„ÑåÁ”€¡”¹œ¸°¹1=Q€¤¸($€¨Á…É…´í¹Õµ‰•Éô¥Ñ•µM¥é”€´Q¡”¥Ñ•´Í¥é”¸($€¨Á…É…´í¹Õµ‰•Éô•±•µ•¹ÑM¥é”€´Q¡”½ÉÉ•ÍÁ½¹‘¥¹œÍ¥é”€¡¥¸‰åÑ•Ì¤™½ÈÑ¡”¥Ù•¸ÑåÁ•€Á…É…µ•Ñ•È¸($€¨Á…É…´í¹Õµ‰•Éô½Õ¹Ð€´Q¡”•áÁ•Ñ•¹Õµ‰•È½˜Ù•ÉÑ¥•Ì¥¸Y	<¸($€¨Á…É…´í‰½½±•…¹ôm¹½Éµ…±¥é•õ™…±Í•t€´]¡•Ñ¡•ÈÑ¡”‘…Ñ„…É”¹½Éµ…±¥é•½È¹½Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ‰Õ™™•È°ÑåÁ”°¥Ñ•µM¥é”°•±•µ•¹ÑM¥é”°½Õ¹Ð°¹½Éµ…±¥é•€ô™…±Í”€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í1	Õ™™•ÉÑÑÉ¥‰ÕÑ”€ôÑÉÕ”ì(($$¼¨¨($$€¨Q¡”¹…µ”½˜Ñ¡”‰Õ™™•È…ÑÑÉ¥‰ÕÑ”¸($$€¨($$€¨ÑåÁ”íÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹¹…µ”€ô€œœì(($$¼¨¨($$€¨Q¡”¹…Ñ¥Ù”]•‰0‰Õ™™•È¸($$€¨($$€¨ÑåÁ”í]•‰1	Õ™™•Éô($$€¨¼($%Ñ¡¥Ì¹‰Õ™™•È€ô‰Õ™™•Èì(($$¼¨¨($$€¨Q¡”¹…Ñ¥Ù”‘…Ñ„ÑåÁ”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹ÑåÁ”€ôÑåÁ”ì(($$¼¨¨($$€¨Q¡”¥Ñ•´Í¥é”°Í•”í±¥¹¬	Õ™™•ÉÑÑÉ¥‰ÕÑ”¥Ñ•µM¥é•ô¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹¥Ñ•µM¥é”€ô¥Ñ•µM¥é”ì(($$¼¨¨($$€¨Q¡”½ÉÉ•ÍÁ½¹‘¥¹œÍ¥é”€¡¥¸‰åÑ•Ì¤™½ÈÑ¡”¥Ù•¸ÑåÁ•€Á…É…µ•Ñ•È¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹•±•µ•¹ÑM¥é”€ô•±•µ•¹ÑM¥é”ì(($$¼¨¨($$€¨Q¡”•áÁ•Ñ•¹Õµ‰•È½˜Ù•ÉÑ¥•Ì¥¸Y	<¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹½Õ¹Ð€ô½Õ¹Ðì(($$¼¨¨($$€¨ÁÁ±¥•ÌÑ¼¥¹Ñ••È‘…Ñ„½¹±ä¸%¹‘¥…Ñ•Ì¡½ÜÑ¡”Õ¹‘•É±å¥¹œ‘…Ñ„¥¸Ñ¡”‰Õ™™•Èµ…ÁÌÑ¼($$€¨Ñ¡”Ù…±Õ•Ì¥¸Ñ¡”1M0½‘”¸½È¥¹ÍÑ…¹”°¥˜‰Õ™™•É€½¹Ñ…¥¹Ì‘…Ñ„½˜°¹U9M%9}M!=IQ€°($$€¨…¹¹½Éµ…±¥é•‘€¥ÌÑÉÕ•€°Ñ¡”Ù…±Õ•Ì€À€´€¬ØÔÔÌÕ€¥¸Ñ¡”‰Õ™™•È‘…Ñ„Ý¥±°‰”µ…ÁÁ•Ñ¼($$€¨€À¸Á˜€´€¬Ä¸Á™€¥¸Ñ¡”1M0…ÑÑÉ¥‰ÕÑ”¸%˜¹½Éµ…±¥é•‘€¥Ì™…±Í•€°Ñ¡”Ù…±Õ•ÌÝ¥±°‰”½¹Ù•ÉÑ•($$€¨Ñ¼™±½…ÑÌÕ¹µ½‘¥™¥•°¤¹”¸€ØÔÔÌÕ€‰•½µ•Ì€ØÔÔÌÔ¸Á™€¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨¼($%Ñ¡¥Ì¹¹½Éµ…±¥é•€ô¹½Éµ…±¥é•ì(($$¼¨¨($$€¨Ù•ÉÍ¥½¸¹Õµ‰•È°¥¹É•µ•¹Ñ••Ù•ÉäÑ¥µ”Ñ¡”¹••‘ÍUÁ‘…Ñ•€¥ÌÍ•ÐÑ¼ÑÉÕ•€¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨¼($%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€ô€Àì((%ô(($¼¨¨($€¨±…œÑ¼¥¹‘¥…Ñ”Ñ¡…ÐÑ¡¥Ì…ÑÑÉ¥‰ÕÑ”¡…Ì¡…¹•…¹Í¡½Õ±‰”É”µÍ•¹ÐÑ¼($€¨Ñ¡”AT¸M•ÐÑ¡¥ÌÑ¼ÑÉÕ•€Ý¡•¸å½Ôµ½‘¥™äÑ¡”Ù…±Õ”½˜Ñ¡”…ÉÉ…ä¸($€¨($€¨ÑåÁ”í¹Õµ‰•Éô($€¨‘•™…Õ±Ð™…±Í”($€¨Á…É…´í‰½½±•…¹ôÙ…±Õ”($€¨¼(%Í•Ð¹••‘ÍUÁ‘…Ñ” Ù…±Õ”€¤ì(($%¥˜€ Ù…±Õ”€ôôôÑÉÕ”€¤Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸¹…Ñ¥Ù”]•‰0‰Õ™™•È¸($€¨($€¨Á…É…´í]•‰1	Õ™™•Éô‰Õ™™•È€´Q¡”‰Õ™™•ÈÑ¼Í•Ð¸($€¨É•ÑÕÉ¸í	Õ™™•ÉÑÑÉ¥‰ÕÑ•ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ	Õ™™•È ‰Õ™™•È€¤ì(($%Ñ¡¥Ì¹‰Õ™™•È€ô‰Õ™™•Èì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸¹…Ñ¥Ù”‘…Ñ„ÑåÁ”…¹•±•µ•¹ÐÍ¥é”¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑåÁ”€´Q¡”¹…Ñ¥Ù”‘…Ñ„ÑåÁ”€¡”¹œ¸°¹1=Q€¤¸($€¨Á…É…´í¹Õµ‰•Éô•±•µ•¹ÑM¥é”€´Q¡”½ÉÉ•ÍÁ½¹‘¥¹œÍ¥é”€¡¥¸‰åÑ•Ì¤™½ÈÑ¡”¥Ù•¸ÑåÁ•€Á…É…µ•Ñ•È¸($€¨É•ÑÕÉ¸í	Õ™™•ÉÑÑÉ¥‰ÕÑ•ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑQåÁ” ÑåÁ”°•±•µ•¹ÑM¥é”€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ôÑåÁ”ì($%Ñ¡¥Ì¹•±•µ•¹ÑM¥é”€ô•±•µ•¹ÑM¥é”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ñ•´Í¥é”¸($€¨($€¨Á…É…´í¹Õµ‰•Éô¥Ñ•µM¥é”€´Q¡”¥Ñ•´Í¥é”¸($€¨É•ÑÕÉ¸í	Õ™™•ÉÑÑÉ¥‰ÕÑ•ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ%Ñ•µM¥é” ¥Ñ•µM¥é”€¤ì(($%Ñ¡¥Ì¹¥Ñ•µM¥é”€ô¥Ñ•µM¥é”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”½Õ¹Ð€¡Ñ¡”•áÁ•Ñ•¹Õµ‰•È½˜Ù•ÉÑ¥•Ì¥¸Y	<¤¸($€¨($€¨Á…É…´í¹Õµ‰•Éô½Õ¹Ð€´Q¡”½Õ¹Ð¸($€¨É•ÑÕÉ¸í	Õ™™•ÉÑÑÉ¥‰ÕÑ•ôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•Ñ½Õ¹Ð ½Õ¹Ð€¤ì(($%Ñ¡¥Ì¹½Õ¹Ð€ô½Õ¹Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}µ…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì((¼¨¨(€¨Q¡¥Ì±…ÍÌ¥Ì‘•Í¥¹•Ñ¼…ÍÍ¥ÍÐÝ¥Ñ É…å…ÍÑ¥¹œ¸I…å…ÍÑ¥¹œ¥ÌÕÍ•™½È(€¨µ½ÕÍ”Á¥­¥¹œ€¡Ý½É­¥¹œ½ÕÐÝ¡…Ð½‰©•ÑÌ¥¸Ñ¡”€ÍÍÁ…”Ñ¡”µ½ÕÍ”¥Ì½Ù•È¤(€¨…µ½¹ÍÐ½Ñ¡•ÈÑ¡¥¹Ì¸(€¨¼)±…ÍÌI…å…ÍÑ•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÉ…å…ÍÑ•È¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô½É¥¥¸€´Q¡”½É¥¥¸Ù•Ñ½ÈÝ¡•É”Ñ¡”É…ä…ÍÑÌ™É½´¸($€¨Á…É…´íY•Ñ½ÈÍô‘¥É•Ñ¥½¸€´Q¡”€¡¹½Éµ…±¥é•¤‘¥É•Ñ¥½¸Ù•Ñ½ÈÑ¡…Ð¥Ù•Ì‘¥É•Ñ¥½¸Ñ¼Ñ¡”É…ä¸($€¨Á…É…´í¹Õµ‰•Éôm¹•…ÈôÁt€´±°É•ÍÕ±ÑÌÉ•ÑÕÉ¹•…É”™ÕÉÑ¡•È…Ý…äÑ¡…¸¹•…È¸9•…È…¸Ð‰”¹•…Ñ¥Ù”¸($€¨Á…É…´í¹Õµ‰•Éôm™…Èõ%¹™¥¹¥Ñåt€´±°É•ÍÕ±ÑÌÉ•ÑÕÉ¹•…É”±½Í•ÈÑ¡…¸™…È¸…È…¸Ð‰”±½Ý•ÈÑ¡…¸¹•…È¸($€¨¼(%½¹ÍÑÉÕÑ½È ½É¥¥¸°‘¥É•Ñ¥½¸°¹•…È€ô€À°™…È€ô%¹™¥¹¥Ñä€¤ì(($$¼¨¨($$€¨Q¡”É…äÕÍ•™½ÈÉ…å…ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”íI…åô($$€¨¼($%Ñ¡¥Ì¹É…ä€ô¹•ÜI…ä ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì(($$¼¨¨($$€¨±°É•ÍÕ±ÑÌÉ•ÑÕÉ¹•…É”™ÕÉÑ¡•È…Ý…äÑ¡…¸¹•…È¸9•…È…¸Ð‰”¹•…Ñ¥Ù”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹¹•…È€ô¹•…Èì(($$¼¨¨($$€¨±°É•ÍÕ±ÑÌÉ•ÑÕÉ¹•…É”™ÕÉÑ¡•È…Ý…äÑ¡…¸¹•…È¸9•…È…¸Ð‰”¹•…Ñ¥Ù”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð%¹™¥¹¥Ñä($$€¨¼($%Ñ¡¥Ì¹™…È€ô™…Èì(($$¼¨¨($$€¨Q¡”…µ•É„Ñ¼ÕÍ”Ý¡•¸É…å…ÍÑ¥¹œ……¥¹ÍÐÙ¥•Üµ‘•Á•¹‘•¹Ð½‰©•ÑÌÍÕ …Ì($$€¨‰¥±±‰½…É‘•½‰©•ÑÌ±¥­”ÍÁÉ¥Ñ•Ì¸Q¡¥Ì™¥•±…¸‰”Í•Ðµ…¹Õ…±±ä½È($$€¨¥ÌÍ•ÐÝ¡•¸…±±¥¹œÍ•ÑÉ½µ…µ•É„ ¥€¸($$€¨($$€¨ÑåÁ”ìý…µ•É…ô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹…µ•É„€ô¹Õ±°ì(($$¼¨¨($$€¨±±½ÝÌÑ¼Í•±•Ñ¥Ù•±ä¥¹½É”€Í½‰©•ÑÌÝ¡•¸Á•É™½Éµ¥¹œ¥¹Ñ•ÉÍ•Ñ¥½¸Ñ•ÍÑÌ¸($$€¨Q¡”™½±±½Ý¥¹œ½‘”•á…µÁ±”•¹ÍÕÉ•ÌÑ¡…Ð½¹±ä€Í½‰©•ÑÌ½¸±…å•È€Å€Ý¥±°‰”($$€¨¡½¹½É•‰äÉ…å…ÍÑ•È¸($$€¨©Ì($$€¨É…å…ÍÑ•È¹±…å•ÉÌ¹Í•Ð €Ä€¤ì($$€¨½‰©•Ð¹±…å•ÉÌ¹•¹…‰±” €Ä€¤ì($$€¨€($$€¨($$€¨ÑåÁ”í1…å•ÉÍô($$€¨¼($%Ñ¡¥Ì¹±…å•ÉÌ€ô¹•Ü1…å•ÉÌ ¤ì((($$¼¨¨($$€¨Á…É…µ•Ñ•È½‰©•ÐÑ¡…Ð½¹™¥ÕÉ•ÌÑ¡”É…å…ÍÑ¥¹œ¸%Ð¡…ÌÑ¡”ÍÑÉÕÑÕÉ”è($$€¨($$€¨€($$€¨ì($$€¨€%5•Í èíô°($$€¨€%1¥¹”èìÑ¡É•Í¡½±è€Äô°($$€¨€%1=èíô°($$€¨€%A½¥¹ÑÌèìÑ¡É•Í¡½±è€Äô°($$€¨€%MÁÉ¥Ñ”èíô($$€¨ô($$€¨€($$€¨]¡•É”Ñ¡É•Í¡½±‘€¥ÌÑ¡”ÁÉ•¥Í¥½¸½˜Ñ¡”É…å…ÍÑ•ÈÝ¡•¸¥¹Ñ•ÉÍ•Ñ¥¹œ½‰©•ÑÌ°¥¸Ý½É±Õ¹¥ÑÌ¸($$€¨($$€¨ÑåÁ”í=‰©•Ñô($$€¨¼($%Ñ¡¥Ì¹Á…É…µÌ€ôì($$%5•Í èíô°($$%1¥¹”èìÑ¡É•Í¡½±è€Äô°($$%1=èíô°($$%A½¥¹ÑÌèìÑ¡É•Í¡½±è€Äô°($$%MÁÉ¥Ñ”èíô($%ôì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”É…äÝ¥Ñ „¹•Ü½É¥¥¸…¹‘¥É•Ñ¥½¸‰ä½Áå¥¹œÑ¡”Ù…±Õ•Ì™É½´Ñ¡”…ÉÕµ•¹ÑÌ¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô½É¥¥¸€´Q¡”½É¥¥¸Ù•Ñ½ÈÝ¡•É”Ñ¡”É…ä…ÍÑÌ™É½´¸($€¨Á…É…´íY•Ñ½ÈÍô‘¥É•Ñ¥½¸€´Q¡”€¡¹½Éµ…±¥é•¤‘¥É•Ñ¥½¸Ù•Ñ½ÈÑ¡…Ð¥Ù•Ì‘¥É•Ñ¥½¸Ñ¼Ñ¡”É…ä¸($€¨¼(%Í•Ð ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì(($$¼¼‘¥É•Ñ¥½¸¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•€¡™½È…ÕÉ…Ñ”‘¥ÍÑ…¹”…±Õ±…Ñ¥½¹Ì¤(($%Ñ¡¥Ì¹É…ä¹Í•Ð ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì((%ô(($¼¨¨($€¨UÍ•ÌÑ¡”¥Ù•¸½½É‘¥¹…Ñ•Ì…¹…µ•É„Ñ¼½µÁÕÑ”„¹•Ü½É¥¥¸…¹‘¥É•Ñ¥½¸™½ÈÑ¡”¥¹Ñ•É¹…°É…ä¸($€¨($€¨Á…É…´íY•Ñ½ÈÉô½½É‘Ì€´€É½½É‘¥¹…Ñ•Ì½˜Ñ¡”µ½ÕÍ”°¥¸¹½Éµ…±¥é•‘•Ù¥”½½É‘¥¹…Ñ•Ì€¡9¤¸($€¨`…¹d½µÁ½¹•¹ÑÌÍ¡½Õ±‰”‰•ÑÝ••¸€´Å€…¹€Å€¸($€¨Á…É…´í…µ•É…ô…µ•É„€´Q¡”…µ•É„™É½´Ý¡¥ Ñ¡”É…äÍ¡½Õ±½É¥¥¹…Ñ”¸($€¨¼(%Í•ÑÉ½µ…µ•É„ ½½É‘Ì°…µ•É„€¤ì(($%¥˜€ …µ•É„¹¥ÍA•ÉÍÁ•Ñ¥Ù•…µ•É„€¤ì(($$%Ñ¡¥Ì¹É…ä¹½É¥¥¸¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ …µ•É„¹µ…ÑÉ¥á]½É±€¤ì($$%Ñ¡¥Ì¹É…ä¹‘¥É•Ñ¥½¸¹Í•Ð ½½É‘Ì¹à°½½É‘Ì¹ä°€À¸Ô€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤¹ÍÕˆ Ñ¡¥Ì¹É…ä¹½É¥¥¸€¤¹¹½Éµ…±¥é” ¤ì($$%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($%ô•±Í”¥˜€ …µ•É„¹¥Í=ÉÑ¡½É…Á¡¥…µ•É„€¤ì(($$%Ñ¡¥Ì¹É…ä¹½É¥¥¸¹Í•Ð ½½É‘Ì¹à°½½É‘Ì¹ä°€ …µ•É„¹¹•…È€¬…µ•É„¹™…È€¤€¼€ …µ•É„¹¹•…È€´…µ•É„¹™…È€¤€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤ì€¼¼Í•Ð½É¥¥¸¥¸Á±…¹”½˜…µ•É„($$%Ñ¡¥Ì¹É…ä¹‘¥É•Ñ¥½¸¹Í•Ð €À°€À°€´Ä€¤¹ÑÉ…¹Í™½Éµ¥É•Ñ¥½¸ …µ•É„¹µ…ÑÉ¥á]½É±€¤ì($$%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($%ô•±Í”ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹I…å…ÍÑ•ÈèU¹ÍÕÁÁ½ÉÑ•…µ•É„ÑåÁ”è€œ€¬…µ•É„¹ÑåÁ”€¤ì(($%ô((%ô(($¼¨¨($€¨UÍ•ÌÑ¡”¥Ù•¸]•‰aH½¹ÑÉ½±±•ÈÑ¼½µÁÕÑ”„¹•Ü½É¥¥¸…¹‘¥É•Ñ¥½¸™½ÈÑ¡”¥¹Ñ•É¹…°É…ä¸($€¨($€¨Á…É…´í]•‰aI½¹ÑÉ½±±•Éô½¹ÑÉ½±±•È€´Q¡”½¹ÑÉ½±±•ÈÑ¼½ÁäÑ¡”Á½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸™É½´¸($€¨É•ÑÕÉ¸íI…å…ÍÑ•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÉ…å…ÍÑ•È¸($€¨¼(%Í•ÑÉ½µaI½¹ÑÉ½±±•È ½¹ÑÉ½±±•È€¤ì(($%}µ…ÑÉ¥à¹¥‘•¹Ñ¥Ñä ¤¹•áÑÉ…ÑI½Ñ…Ñ¥½¸ ½¹ÑÉ½±±•È¹µ…ÑÉ¥á]½É±€¤ì(($%Ñ¡¥Ì¹É…ä¹½É¥¥¸¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ½¹ÑÉ½±±•È¹µ…ÑÉ¥á]½É±€¤ì($%Ñ¡¥Ì¹É…ä¹‘¥É•Ñ¥½¸¹Í•Ð €À°€À°€´Ä€¤¹…ÁÁ±å5…ÑÉ¥àÐ }µ…ÑÉ¥à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨Q¡”¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð½˜„É…å…ÍÑ•È¥¹Ñ•ÉÍ•Ñ¥½¸Ñ•ÍÐ¸($€¨ÑåÁ•‘•˜í=‰©•ÑôI…å…ÍÑ•Éù%¹Ñ•ÉÍ•Ñ¥½¸($€¨ÁÉ½Á•ÉÑäí¹Õµ‰•Éô‘¥ÍÑ…¹”€´Q¡”‘¥ÍÑ…¹”™É½´Ñ¡”É…äÌ½É¥¥¸Ñ¼Ñ¡”¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð¸($€¨ÁÉ½Á•ÉÑäí¹Õµ‰•Éô‘¥ÍÑ…¹•Q½I…ä€´€M½µ”€Í½‰©•ÑÌ”¹œ¸í±¥¹¬A½¥¹ÑÍôÁÉ½Ù¥‘”Ñ¡”‘¥ÍÑ…¹”½˜Ñ¡”($€¨¥¹Ñ•ÉÍ•Ñ¥½¸Ñ¼Ñ¡”¹•…É•ÍÐÁ½¥¹Ð½¸Ñ¡”É…ä¸½È½Ñ¡•È½‰©•ÑÌ¥ÐÝ¥±°‰”Õ¹‘•™¥¹•‘€¸($€¨ÁÉ½Á•ÉÑäíY•Ñ½ÈÍôÁ½¥¹Ð€´Q¡”¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð°¥¸Ý½É±½½É‘¥¹…Ñ•Ì¸($€¨ÁÉ½Á•ÉÑäí=‰©•Ñô™…”€´Q¡”™…”Ñ¡…Ð¡…Ì‰••¸¥¹Ñ•ÉÍ•Ñ•¸($€¨ÁÉ½Á•ÉÑäí¹Õµ‰•Éô™…•%¹‘•à€´Q¡”™…”¥¹‘•à¸($€¨ÁÉ½Á•ÉÑäí=‰©•ÐÍô½‰©•Ð€´Q¡”€Í½‰©•ÐÑ¡…Ð¡…Ì‰••¸¥¹Ñ•ÉÍ•Ñ•¸($€¨ÁÉ½Á•ÉÑäíY•Ñ½ÈÉôÕØ€´T±X½½É‘¥¹…Ñ•Ì…ÐÁ½¥¹Ð½˜¥¹Ñ•ÉÍ•Ñ¥½¸¸($€¨ÁÉ½Á•ÉÑäíY•Ñ½ÈÉôÕØÄ€´M•½¹Í•Ð½˜T±X½½É‘¥¹…Ñ•Ì…ÐÁ½¥¹Ð½˜¥¹Ñ•ÉÍ•Ñ¥½¸¸($€¨ÁÉ½Á•ÉÑäíY•Ñ½ÈÍôÕØÄ€´%¹Ñ•ÉÁ½±…Ñ•¹½Éµ…°Ù•Ñ½È…ÐÁ½¥¹Ð½˜¥¹Ñ•ÉÍ•Ñ¥½¸¸($€¨ÁÉ½Á•ÉÑäí¹Õµ‰•Éô¥¹ÍÑ…¹•%€´Q¡”¥¹‘•à¹Õµ‰•È½˜Ñ¡”¥¹ÍÑ…¹”Ý¡•É”Ñ¡”É…ä($€¨¥¹Ñ•ÉÍ•ÑÌÑ¡”í±¥¹¬%¹ÍÑ…¹•‘5•Í¡ô¸($€¨¼(($¼¨¨($€¨¡•­Ì…±°¥¹Ñ•ÉÍ•Ñ¥½¸‰•ÑÝ••¸Ñ¡”É…ä…¹Ñ¡”½‰©•ÐÝ¥Ñ ½ÈÝ¥Ñ¡½ÕÐÑ¡”($€¨‘•Í•¹‘…¹ÑÌ¸%¹Ñ•ÉÍ•Ñ¥½¹Ì…É”É•ÑÕÉ¹•Í½ÉÑ•‰ä‘¥ÍÑ…¹”°±½Í•ÍÐ™¥ÉÍÐ¸($€¨($€¨I…å…ÍÑ•É€‘•±•…Ñ•ÌÑ¼Ñ¡”É…å…ÍÐ ¥€µ•Ñ¡½½˜Ñ¡”Á…ÍÍ•€Í½‰©•Ð°Ý¡•¸($€¨•Ù…±Õ…Ñ¥¹œÝ¡•Ñ¡•ÈÑ¡”É…ä¥¹Ñ•ÉÍ•ÑÌÑ¡”½‰©•Ð½È¹½Ð¸Q¡¥Ì…±±½ÝÌµ•Í¡•ÌÑ¼É•ÍÁ½¹($€¨‘¥™™•É•¹Ñ±äÑ¼É…ä…ÍÑ¥¹œÑ¡…¸±¥¹•Ì½ÈÁ½¥¹ÑÌ¸($€¨($€¨9½Ñ”Ñ¡…Ð™½Èµ•Í¡•Ì°™…•ÌµÕÍÐ‰”Á½¥¹Ñ•Ñ½Ý…É‘ÌÑ¡”½É¥¥¸½˜Ñ¡”É…ä¥¸½É‘•È($€¨Ñ¼‰”‘•Ñ•Ñ•ì¥¹Ñ•ÉÍ•Ñ¥½¹Ì½˜Ñ¡”É…äÁ…ÍÍ¥¹œÑ¡É½Õ Ñ¡”‰…¬½˜„™…”Ý¥±°¹½Ð($€¨‰”‘•Ñ•Ñ•¸Q¼É…å…ÍÐ……¥¹ÍÐ‰½Ñ ™…•Ì½˜…¸½‰©•Ð°å½Ô±°Ý…¹ÐÑ¼Í•Ð€í±¥¹¬5…Ñ•É¥…°Í¥‘•ô($€¨Ñ¼Q!I¹½Õ‰±•M¥‘•€¸($€¨($€¨Á…É…´í=‰©•ÐÍô½‰©•Ð€´Q¡”€Í½‰©•ÐÑ¼¡•¬™½È¥¹Ñ•ÉÍ•Ñ¥½¸Ý¥Ñ Ñ¡”É…ä¸($€¨Á…É…´í‰½½±•…¹ômÉ•ÕÉÍ¥Ù”õÑÉÕ•t€´%˜Í•ÐÑ¼ÑÉÕ•€°¥Ð…±Í¼¡•­Ì…±°‘•Í•¹‘…¹ÑÌ¸($€¨=Ñ¡•ÉÝ¥Í”¥Ð½¹±ä¡•­Ì¥¹Ñ•ÉÍ•Ñ¥½¸Ý¥Ñ Ñ¡”½‰©•Ð¸($€¨Á…É…´íÉÉ…äñI…å…ÍÑ•Éù%¹Ñ•ÉÍ•Ñ¥½¸ùôm¥¹Ñ•ÉÍ•ÑÌõmutQ¡”Ñ…É•Ð…ÉÉ…äÑ¡…Ð¡½±‘ÌÑ¡”É•ÍÕ±Ð½˜Ñ¡”µ•Ñ¡½¸($€¨É•ÑÕÉ¸íÉÉ…äñI…å…ÍÑ•Éù%¹Ñ•ÉÍ•Ñ¥½¸ùô¸…ÉÉ…ä¡½±‘¥¹œÑ¡”¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹ÑÌ¸($€¨¼(%¥¹Ñ•ÉÍ•Ñ=‰©•Ð ½‰©•Ð°É•ÕÉÍ¥Ù”€ôÑÉÕ”°¥¹Ñ•ÉÍ•ÑÌ€ômt€¤ì(($%¥¹Ñ•ÉÍ•Ð ½‰©•Ð°Ñ¡¥Ì°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì(($%¥¹Ñ•ÉÍ•ÑÌ¹Í½ÉÐ …ÍM½ÉÐ€¤ì(($%É•ÑÕÉ¸¥¹Ñ•ÉÍ•ÑÌì((%ô(($¼¨¨($€¨¡•­Ì…±°¥¹Ñ•ÉÍ•Ñ¥½¸‰•ÑÝ••¸Ñ¡”É…ä…¹Ñ¡”½‰©•ÑÌÝ¥Ñ ½ÈÝ¥Ñ¡½ÕÐ($€¨Ñ¡”‘•Í•¹‘…¹ÑÌ¸%¹Ñ•ÉÍ•Ñ¥½¹Ì…É”É•ÑÕÉ¹•Í½ÉÑ•‰ä‘¥ÍÑ…¹”°±½Í•ÍÐ™¥ÉÍÐ¸($€¨($€¨Á…É…´íÉÉ…äñ=‰©•ÐÍùô½‰©•ÑÌ€´Q¡”€Í½‰©•ÑÌÑ¼¡•¬™½È¥¹Ñ•ÉÍ•Ñ¥½¸Ý¥Ñ Ñ¡”É…ä¸($€¨Á…É…´í‰½½±•…¹ômÉ•ÕÉÍ¥Ù”õÑÉÕ•t€´%˜Í•ÐÑ¼ÑÉÕ•€°¥Ð…±Í¼¡•­Ì…±°‘•Í•¹‘…¹ÑÌ¸($€¨=Ñ¡•ÉÝ¥Í”¥Ð½¹±ä¡•­Ì¥¹Ñ•ÉÍ•Ñ¥½¸Ý¥Ñ Ñ¡”½‰©•Ð¸($€¨Á…É…´íÉÉ…äñI…å…ÍÑ•Éù%¹Ñ•ÉÍ•Ñ¥½¸ùôm¥¹Ñ•ÉÍ•ÑÌõmutQ¡”Ñ…É•Ð…ÉÉ…äÑ¡…Ð¡½±‘ÌÑ¡”É•ÍÕ±Ð½˜Ñ¡”µ•Ñ¡½¸($€¨É•ÑÕÉ¸íÉÉ…äñI…å…ÍÑ•Éù%¹Ñ•ÉÍ•Ñ¥½¸ùô¸…ÉÉ…ä¡½±‘¥¹œÑ¡”¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹ÑÌ¸($€¨¼(%¥¹Ñ•ÉÍ•Ñ=‰©•ÑÌ ½‰©•ÑÌ°É•ÕÉÍ¥Ù”€ôÑÉÕ”°¥¹Ñ•ÉÍ•ÑÌ€ômt€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ô½‰©•ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%¥¹Ñ•ÉÍ•Ð ½‰©•ÑÍl¤t°Ñ¡¥Ì°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì(($%ô(($%¥¹Ñ•ÉÍ•ÑÌ¹Í½ÉÐ …ÍM½ÉÐ€¤ì(($%É•ÑÕÉ¸¥¹Ñ•ÉÍ•ÑÌì((%ô()ô()™Õ¹Ñ¥½¸…ÍM½ÉÐ „°ˆ€¤ì((%É•ÑÕÉ¸„¹‘¥ÍÑ…¹”€´ˆ¹‘¥ÍÑ…¹”ì()ô()™Õ¹Ñ¥½¸¥¹Ñ•ÉÍ•Ð ½‰©•Ð°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì((%±•ÐÁÉ½Á……Ñ”€ôÑÉÕ”ì((%¥˜€ ½‰©•Ð¹±…å•ÉÌ¹Ñ•ÍÐ É…å…ÍÑ•È¹±…å•ÉÌ€¤€¤ì(($%½¹ÍÐÉ•ÍÕ±Ð€ô½‰©•Ð¹É…å…ÍÐ É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ€¤ì(($%¥˜€ É•ÍÕ±Ð€ôôô™…±Í”€¤ÁÉ½Á……Ñ”€ô™…±Í”ì((%ô((%¥˜€ ÁÉ½Á……Ñ”€ôôôÑÉÕ”€˜˜É•ÕÉÍ¥Ù”€ôôôÑÉÕ”€¤ì(($%½¹ÍÐ¡¥±‘É•¸€ô½‰©•Ð¹¡¥±‘É•¸ì(($%™½È€ ±•Ð¤€ô€À°°€ô¡¥±‘É•¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%¥¹Ñ•ÉÍ•Ð ¡¥±‘É•¹l¤t°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°ÑÉÕ”€¤ì(($%ô((%ô()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ¥Ì…¸…±Ñ•É¹…Ñ¥Ù”Ñ¼í±¥¹¬±½­ôÝ¥Ñ „‘¥™™•É•¹ÐA$‘•Í¥¸…¹‰•¡…Ù¥½È¸(€¨Q¡”½…°¥ÌÑ¼…Ù½¥Ñ¡”½¹•ÁÑÕ…°™±…ÝÌÑ¡…Ð‰•…µ”…ÁÁ…É•¹Ð¥¸±½­€½Ù•ÈÑ¥µ”¸(€¨(€¨€´Q¥µ•É€¡…Ì…¸ÕÁ‘…Ñ” ¥€µ•Ñ¡½Ñ¡…ÐÕÁ‘…Ñ•Ì¥ÑÌ¥¹Ñ•É¹…°ÍÑ…Ñ”¸Q¡…Ðµ…­•Ì¥ÐÁ½ÍÍ¥‰±”Ñ¼(€¨…±°•Ñ•±Ñ„ ¥€…¹•Ñ±…ÁÍ• ¥€µÕ±Ñ¥Á±”Ñ¥µ•ÌÁ•ÈÍ¥µÕ±…Ñ¥½¸ÍÑ•ÀÝ¥Ñ¡½ÕÐ•ÑÑ¥¹œ‘¥™™•É•¹ÐÙ…±Õ•Ì¸(€¨€´Q¡”±…ÍÌ…¸µ…­”ÕÍ”½˜Ñ¡”A…”Y¥Í¥‰¥±¥ÑäA$Ñ¼…Ù½¥±…É”Ñ¥µ”‘•±Ñ„Ù…±Õ•ÌÝ¡•¸Ñ¡”…ÁÀ(€¨¥Ì¥¹…Ñ¥Ù”€¡”¹œ¸Ñ…ˆÍÝ¥Ñ¡•½È‰É½ÝÍ•È¡¥‘‘•¸¤¸(€¨(€¨©Ì(€¨½¹ÍÐÑ¥µ•È€ô¹•ÜQ¥µ•È ¤ì(€¨Ñ¥µ•È¹½¹¹•Ð ‘½Õµ•¹Ð€¤ì€¼¼ÕÍ”A…”Y¥Í¥‰¥±¥ÑäA$(€¨€(€¨¼)±…ÍÌQ¥µ•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÑ¥µ•È¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹}ÁÉ•Ù¥½ÕÍQ¥µ”€ô€Àì($%Ñ¡¥Ì¹}ÕÉÉ•¹ÑQ¥µ”€ô€Àì($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(($%Ñ¡¥Ì¹}‘•±Ñ„€ô€Àì($%Ñ¡¥Ì¹}•±…ÁÍ•€ô€Àì(($%Ñ¡¥Ì¹}Ñ¥µ•Í…±”€ô€Äì(($%Ñ¡¥Ì¹}‘½Õµ•¹Ð€ô¹Õ±°ì($%Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€ô¹Õ±°ì((%ô(($¼¨¨($€¨½¹¹•ÐÑ¡”Ñ¥µ•ÈÑ¼Ñ¡”¥Ù•¸‘½Õµ•¹Ð¹…±±¥¹œÑ¡¥Ìµ•Ñ¡½¥Ì¹½Ðµ…¹‘…Ñ½ÉäÑ¼($€¨ÕÍ”Ñ¡”Ñ¥µ•È‰ÕÐ•¹…‰±•ÌÑ¡”ÕÍ…”½˜Ñ¡”A…”Y¥Í¥‰¥±¥ÑäA$Ñ¼…Ù½¥±…É”Ñ¥µ”($€¨‘•±Ñ„Ù…±Õ•Ì¸($€¨($€¨Á…É…´í½Õµ•¹Ñô‘½Õµ•¹Ð€´Q¡”‘½Õµ•¹Ð¸($€¨¼(%½¹¹•Ð ‘½Õµ•¹Ð€¤ì(($%Ñ¡¥Ì¹}‘½Õµ•¹Ð€ô‘½Õµ•¹Ðì(($$¼¼ÕÍ”A…”Y¥Í¥‰¥±¥ÑäA$Ñ¼…Ù½¥±…É”Ñ¥µ”‘•±Ñ„Ù…±Õ•Ì(($%¥˜€ ‘½Õµ•¹Ð¹¡¥‘‘•¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€ô¡…¹‘±•Y¥Í¥‰¥±¥Ñå¡…¹”¹‰¥¹ Ñ¡¥Ì€¤ì(($$%‘½Õµ•¹Ð¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È €Ù¥Í¥‰¥±¥Ñå¡…¹”œ°Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È°™…±Í”€¤ì(($%ô((%ô(($¼¨¨($€¨¥Í½¹¹•ÑÌÑ¡”Ñ¥µ•È™É½´Ñ¡”=4…¹…±Í¼‘¥Í…‰±•ÌÑ¡”ÕÍ…”½˜Ñ¡”A…”Y¥Í¥‰¥±¥ÑäA$¸($€¨¼(%‘¥Í½¹¹•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}‘½Õµ•¹Ð¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È €Ù¥Í¥‰¥±¥Ñå¡…¹”œ°Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€¤ì($$%Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€ô¹Õ±°ì(($%ô(($%Ñ¡¥Ì¹}‘½Õµ•¹Ð€ô¹Õ±°ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”Ñ¥µ”‘•±Ñ„¥¸Í•½¹‘Ì¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Ñ¥µ”‘•±Ñ„¥¸Í•½¹¸($€¨¼(%•Ñ•±Ñ„ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}‘•±Ñ„€¼€ÄÀÀÀì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•±…ÁÍ•Ñ¥µ”¥¸Í•½¹‘Ì¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”•±…ÁÍ•Ñ¥µ”¥¸Í•½¹¸($€¨¼(%•Ñ±…ÁÍ• ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}•±…ÁÍ•€¼€ÄÀÀÀì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”Ñ¥µ•Í…±”¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Ñ¥µ•Í…±”¸($€¨¼(%•ÑQ¥µ•Í…±” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Ñ¥µ•Í…±”ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”¥Ù•¸Ñ¥µ•Í…±”Ý¡¥ Í…±”Ñ¡”Ñ¥µ”‘•±Ñ„½µÁÕÑ…Ñ¥½¸($€¨¥¸ÕÁ‘…Ñ” ¥€¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑ¥µ•Í…±”€´Q¡”Ñ¥µ•Í…±”Ñ¼Í•Ð¸($€¨É•ÑÕÉ¸íQ¥µ•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÑ¥µ•È¸($€¨¼(%Í•ÑQ¥µ•Í…±” Ñ¥µ•Í…±”€¤ì(($%Ñ¡¥Ì¹}Ñ¥µ•Í…±”€ôÑ¥µ•Í…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•Í•ÑÌÑ¡”Ñ¥µ”½µÁÕÑ…Ñ¥½¸™½ÈÑ¡”ÕÉÉ•¹ÐÍ¥µÕ±…Ñ¥½¸ÍÑ•À¸($€¨($€¨É•ÑÕÉ¸íQ¥µ•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÑ¥µ•È¸($€¨¼(%É•Í•Ð ¤ì(($%Ñ¡¥Ì¹}ÕÉÉ•¹ÑQ¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤€´Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨…¸‰”ÕÍ•Ñ¼™É•”…±°¥¹Ñ•É¹…°É•Í½ÕÉ•Ì¸UÍÕ…±±ä…±±•Ý¡•¸($€¨Ñ¡”Ñ¥µ•È¥¹ÍÑ…¹”¥Í¸ÐÉ•ÅÕ¥É•…¹åµ½É”¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹‘¥Í½¹¹•Ð ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¥¹Ñ•É¹…°ÍÑ…Ñ”½˜Ñ¡”Ñ¥µ•È¸Q¡¥Ìµ•Ñ¡½Í¡½Õ±‰”…±±•($€¨½¹”Á•ÈÍ¥µÕ±…Ñ¥½¸ÍÑ•À…¹‰•™½É”å½ÔÁ•É™½É´ÅÕ•É¥•Ì……¥¹ÍÐÑ¡”Ñ¥µ•È($€¨€¡”¹œ¸Ù¥„•Ñ•±Ñ„ ¥€¤¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÑ¥µ•ÍÑ…µÀ€´Q¡”ÕÉÉ•¹ÐÑ¥µ”¥¸µ¥±±¥Í•½¹‘Ì¸…¸‰”½‰Ñ…¥¹•($€¨™É½´Ñ¡”É•ÅÕ•ÍÑ¹¥µ…Ñ¥½¹É…µ•€…±±‰…¬…ÉÕµ•¹Ð¸%˜¹½ÐÁÉ½Ù¥‘•°Ñ¡”ÕÉÉ•¹Ð($€¨Ñ¥µ”Ý¥±°‰”‘•Ñ•Éµ¥¹•Ý¥Ñ Á•É™½Éµ…¹”¹¹½Ý€¸($€¨É•ÑÕÉ¸íQ¥µ•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÑ¥µ•È¸($€¨¼(%ÕÁ‘…Ñ” Ñ¥µ•ÍÑ…µÀ€¤ì(($%¥˜€ Ñ¡¥Ì¹}Á…•Y¥Í¥‰¥±¥Ñå!…¹‘±•È€„ôô¹Õ±°€˜˜Ñ¡¥Ì¹}‘½Õµ•¹Ð¹¡¥‘‘•¸€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹}‘•±Ñ„€ô€Àì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹}ÁÉ•Ù¥½ÕÍQ¥µ”€ôÑ¡¥Ì¹}ÕÉÉ•¹ÑQ¥µ”ì($$%Ñ¡¥Ì¹}ÕÉÉ•¹ÑQ¥µ”€ô€ Ñ¥µ•ÍÑ…µÀ€„ôôÕ¹‘•™¥¹•€üÑ¥µ•ÍÑ…µÀ€èÁ•É™½Éµ…¹”¹¹½Ü ¤€¤€´Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”ì(($$%Ñ¡¥Ì¹}‘•±Ñ„€ô€ Ñ¡¥Ì¹}ÕÉÉ•¹ÑQ¥µ”€´Ñ¡¥Ì¹}ÁÉ•Ù¥½ÕÍQ¥µ”€¤€¨Ñ¡¥Ì¹}Ñ¥µ•Í…±”ì($$%Ñ¡¥Ì¹}•±…ÁÍ•€¬ôÑ¡¥Ì¹}‘•±Ñ„ì€¼¼}•±…ÁÍ•¥ÌÑ¡”…ÕµÕ±…Ñ¥½¸½˜…±°ÁÉ•Ù¥½ÕÌ‘•±Ñ…Ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()™Õ¹Ñ¥½¸¡…¹‘±•Y¥Í¥‰¥±¥Ñå¡…¹” ¤ì((%¥˜€ Ñ¡¥Ì¹}‘½Õµ•¹Ð¹¡¥‘‘•¸€ôôô™…±Í”€¤Ñ¡¥Ì¹É•Í•Ð ¤ì()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ…¸‰”ÕÍ•Ñ¼É•ÁÉ•Í•¹ÐÁ½¥¹ÑÌ¥¸€ÍÍÁ…”…Ì(€¨mMÁ¡•É¥…°½½É‘¥¹…Ñ•Íuí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½MÁ¡•É¥…±}½½É‘¥¹…Ñ•}ÍåÍÑ•µô¸(€¨¼)±…ÍÌMÁ¡•É¥…°ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÁ¡•É¥…°¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÉ…‘¥ÕÌôÅt€´Q¡”É…‘¥ÕÌ°½ÈÑ¡”Õ±¥‘•…¸‘¥ÍÑ…¹”€¡ÍÑÉ…¥¡Ðµ±¥¹”‘¥ÍÑ…¹”¤™É½´Ñ¡”Á½¥¹ÐÑ¼Ñ¡”½É¥¥¸¸($€¨Á…É…´í¹Õµ‰•ÉômÁ¡¤ôÁt€´Q¡”Á½±…È…¹±”¥¸É…‘¥…¹Ì™É½´Ñ¡”ä€¡ÕÀ¤…á¥Ì¸($€¨Á…É…´í¹Õµ‰•ÉômÑ¡•Ñ„ôÁt€´Q¡”•ÅÕ…Ñ½È½…é¥µÕÑ¡…°…¹±”¥¸É…‘¥…¹Ì…É½Õ¹Ñ¡”ä€¡ÕÀ¤…á¥Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Á¡¤€ô€À°Ñ¡•Ñ„€ô€À€¤ì(($$¼¨¨($$€¨Q¡”É…‘¥ÕÌ°½ÈÑ¡”Õ±¥‘•…¸‘¥ÍÑ…¹”€¡ÍÑÉ…¥¡Ðµ±¥¹”‘¥ÍÑ…¹”¤™É½´Ñ¡”Á½¥¹ÐÑ¼Ñ¡”½É¥¥¸¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì(($$¼¨¨($$€¨Q¡”Á½±…È…¹±”¥¸É…‘¥…¹Ì™É½´Ñ¡”ä€¡ÕÀ¤…á¥Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹Á¡¤€ôÁ¡¤ì(($$¼¨¨($$€¨Q¡”•ÅÕ…Ñ½È½…é¥µÕÑ¡…°…¹±”¥¸É…‘¥…¹Ì…É½Õ¹Ñ¡”ä€¡ÕÀ¤…á¥Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÍÁ¡•É¥…°½µÁ½¹•¹ÑÌ‰ä½Áå¥¹œÑ¡”¥Ù•¸Ù…±Õ•Ì¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÉ…‘¥ÕÌ€´Q¡”É…‘¥ÕÌ¸($€¨Á…É…´í¹Õµ‰•ÉôÁ¡¤€´Q¡”Á½±…È…¹±”¸($€¨Á…É…´í¹Õµ‰•ÉôÑ¡•Ñ„€´Q¡”…é¥µÕÑ¡…°…¹±”¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¸($€¨¼(%Í•Ð É…‘¥ÕÌ°Á¡¤°Ñ¡•Ñ„€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì($%Ñ¡¥Ì¹Á¡¤€ôÁ¡¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸ÍÁ¡•É¥…°Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´íMÁ¡•É¥…±ô½Ñ¡•È€´Q¡”ÍÁ¡•É¥…°Ñ¼½Áä¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¸($€¨¼(%½Áä ½Ñ¡•È€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô½Ñ¡•È¹É…‘¥ÕÌì($%Ñ¡¥Ì¹Á¡¤€ô½Ñ¡•È¹Á¡¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô½Ñ¡•È¹Ñ¡•Ñ„ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÍÑÉ¥ÑÌÑ¡”Á½±…È…¹±”mÁ…”è¹Á¡¤Á¡¥tÑ¼‰”‰•ÑÝ••¸€À¸ÀÀÀÀÀÅ€…¹Á¤€´($€¨€À¸ÀÀÀÀÀÅ€¸($€¨($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¸($€¨¼(%µ…­•M…™” ¤ì(($%½¹ÍÐAL€ô€À¸ÀÀÀÀÀÄì($%Ñ¡¥Ì¹Á¡¤€ô±…µÀ Ñ¡¥Ì¹Á¡¤°AL°5…Ñ ¹A$€´AL€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÍÁ¡•É¥…°½µÁ½¹•¹ÑÌ™É½´Ñ¡”¥Ù•¸Ù•Ñ½ÈÝ¡¥ ¥Ì…ÍÍÕµ•Ñ¼¡½±($€¨…ÉÑ•Í¥…¸½½É‘¥¹…Ñ•Ì¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôØ€´Q¡”Ù•Ñ½ÈÑ¼Í•Ð¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¸($€¨¼(%Í•ÑÉ½µY•Ñ½ÈÌ Ø€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì Ø¹à°Ø¹ä°Ø¹è€¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÍÁ¡•É¥…°½µÁ½¹•¹ÑÌ™É½´Ñ¡”¥Ù•¸…ÉÑ•Í¥…¸½½É‘¥¹…Ñ•Ì¸($€¨($€¨Á…É…´í¹Õµ‰•Éôà€´Q¡”àÙ…±Õ”¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”äÙ…±Õ”¸($€¨Á…É…´í¹Õµ‰•Éôè€´Q¡”èÙ…±Õ”¸($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍÁ¡•É¥…°¸($€¨¼(%Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì à°ä°è€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô5…Ñ ¹ÍÅÉÐ à€¨à€¬ä€¨ä€¬è€¨è€¤ì(($%¥˜€ Ñ¡¥Ì¹É…‘¥ÕÌ€ôôô€À€¤ì(($$%Ñ¡¥Ì¹Ñ¡•Ñ„€ô€Àì($$%Ñ¡¥Ì¹Á¡¤€ô€Àì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Ñ¡•Ñ„€ô5…Ñ ¹…Ñ…¸È à°è€¤ì($$%Ñ¡¥Ì¹Á¡¤€ô5…Ñ ¹…½Ì ±…µÀ ä€¼Ñ¡¥Ì¹É…‘¥ÕÌ°€´Ä°€Ä€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•ÜÍÁ¡•É¥…°Ý¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸íMÁ¡•É¥…±ô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ…¸‰”ÕÍ•Ñ¼É•ÁÉ•Í•¹ÐÁ½¥¹ÑÌ¥¸€ÍÍÁ…”…Ì(€¨må±¥¹‘É¥…°½½É‘¥¹…Ñ•Íuí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½å±¥¹‘É¥…±}½½É‘¥¹…Ñ•}ÍåÍÑ•µô¸(€¨¼)±…ÍÌå±¥¹‘É¥…°ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Üå±¥¹‘É¥…°¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÉ…‘¥ÕÌôÅt€´Q¡”‘¥ÍÑ…¹”™É½´Ñ¡”½É¥¥¸Ñ¼„Á½¥¹Ð¥¸Ñ¡”àµèÁ±…¹”¸($€¨Á…É…´í¹Õµ‰•ÉômÑ¡•Ñ„ôÁt€´½Õ¹Ñ•É±½­Ý¥Í”…¹±”¥¸Ñ¡”àµèÁ±…¹”µ•…ÍÕÉ•¥¸É…‘¥…¹Ì™É½´Ñ¡”Á½Í¥Ñ¥Ù”èµ…á¥Ì¸($€¨Á…É…´í¹Õµ‰•ÉômäôÁt€´Q¡”¡•¥¡Ð…‰½Ù”Ñ¡”àµèÁ±…¹”¸($€¨¼(%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Ñ¡•Ñ„€ô€À°ä€ô€À€¤ì(($$¼¨¨($$€¨Q¡”‘¥ÍÑ…¹”™É½´Ñ¡”½É¥¥¸Ñ¼„Á½¥¹Ð¥¸Ñ¡”àµèÁ±…¹”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì(($$¼¨¨($$€¨½Õ¹Ñ•É±½­Ý¥Í”…¹±”¥¸Ñ¡”àµèÁ±…¹”µ•…ÍÕÉ•¥¸É…‘¥…¹Ì™É½´Ñ¡”Á½Í¥Ñ¥Ù”èµ…á¥Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì(($$¼¨¨($$€¨Q¡”¡•¥¡Ð…‰½Ù”Ñ¡”àµèÁ±…¹”¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€À($$€¨¼($%Ñ¡¥Ì¹ä€ôäì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”å±¥¹‘É¥…°½µÁ½¹•¹ÑÌ‰ä½Áå¥¹œÑ¡”¥Ù•¸Ù…±Õ•Ì¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÉ…‘¥ÕÌ€´Q¡”É…‘¥ÕÌ¸($€¨Á…É…´í¹Õµ‰•ÉôÑ¡•Ñ„€´Q¡”Ñ¡•Ñ„…¹±”¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”¡•¥¡ÐÙ…±Õ”¸($€¨É•ÑÕÉ¸íå±¥¹‘É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥Ìå±¥¹‘É¥…°¸($€¨¼(%Í•Ð É…‘¥ÕÌ°Ñ¡•Ñ„°ä€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì($%Ñ¡¥Ì¹ä€ôäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸å±¥¹‘É¥…°Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´íå±¥¹‘É¥…±ô½Ñ¡•È€´Q¡”å±¥¹‘É¥…°Ñ¼½Áä¸($€¨É•ÑÕÉ¸íå±¥¹‘É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥Ìå±¥¹‘É¥…°¸($€¨¼(%½Áä ½Ñ¡•È€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô½Ñ¡•È¹É…‘¥ÕÌì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô½Ñ¡•È¹Ñ¡•Ñ„ì($%Ñ¡¥Ì¹ä€ô½Ñ¡•È¹äì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”å±¥¹‘É¥…°½µÁ½¹•¹ÑÌ™É½´Ñ¡”¥Ù•¸Ù•Ñ½ÈÝ¡¥ ¥Ì…ÍÍÕµ•Ñ¼¡½±($€¨…ÉÑ•Í¥…¸½½É‘¥¹…Ñ•Ì¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôØ€´Q¡”Ù•Ñ½ÈÑ¼Í•Ð¸($€¨É•ÑÕÉ¸íå±¥¹‘É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥Ìå±¥¹‘É¥…°¸($€¨¼(%Í•ÑÉ½µY•Ñ½ÈÌ Ø€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì Ø¹à°Ø¹ä°Ø¹è€¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”å±¥¹‘É¥…°½µÁ½¹•¹ÑÌ™É½´Ñ¡”¥Ù•¸…ÉÑ•Í¥…¸½½É‘¥¹…Ñ•Ì¸($€¨($€¨Á…É…´í¹Õµ‰•Éôà€´Q¡”àÙ…±Õ”¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”àÙ…±Õ”¸($€¨Á…É…´í¹Õµ‰•Éôè€´Q¡”àÙ…±Õ”¸($€¨É•ÑÕÉ¸íå±¥¹‘É¥…±ôÉ•™•É•¹”Ñ¼Ñ¡¥Ìå±¥¹‘É¥…°¸($€¨¼(%Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì à°ä°è€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô5…Ñ ¹ÍÅÉÐ à€¨à€¬è€¨è€¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô5…Ñ ¹…Ñ…¸È à°è€¤ì($%Ñ¡¥Ì¹ä€ôäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Üå±¥¹‘É¥…°Ý¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸íå±¥¹‘É¥…±ô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ„€ÉàÈµ…ÑÉ¥à¸(€¨(€¨9½Ñ”½¸I½Üµ5…©½È…¹½±Õµ¸µ5…©½È=É‘•É¥¹œè(€¨(€¨Q¡”½¹ÍÑÉÕÑ½È…¹í±¥¹¬5…ÑÉ¥àÈÍ•Ñôµ•Ñ¡½Ñ…­”…ÉÕµ•¹ÑÌ¥¸(€¨mÉ½Üµµ…©½Éuí±¥¹¬¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½I½Üµ}…¹‘}½±Õµ¸µµ…©½É}½É‘•È½±Õµ¸µµ…©½É}½É‘•Éô(€¨½É‘•È°Ý¡¥±”¥¹Ñ•É¹…±±äÑ¡•ä…É”ÍÑ½É•¥¸Ñ¡”í±¥¹¬5…ÑÉ¥àÈ•±•µ•¹ÑÍô…ÉÉ…ä¥¸½±Õµ¸µµ…©½È½É‘•È¸(€¨Q¡¥Ìµ•…¹ÌÑ¡…Ð…±±¥¹œè(€¨©Ì(€¨½¹ÍÐ´€ô¹•ÜQ!I¹5…ÑÉ¥àÈ ¤ì(€¨´¹Í•Ð €ÄÄ°€ÄÈ°(€¨€€€€€€€€ÈÄ°€ÈÈ€¤ì(€¨€(€¨Ý¥±°É•ÍÕ±Ð¥¸Ñ¡”•±•µ•¹ÑÌ…ÉÉ…ä½¹Ñ…¥¹¥¹œè(€¨©Ì(€¨´¹•±•µ•¹ÑÌ€ôl€ÄÄ°€ÈÄ°(€¨€€€€€€€€€€€€€€€€ÄÈ°€ÈÈtì(€¨€(€¨…¹¥¹Ñ•É¹…±±ä…±°…±Õ±…Ñ¥½¹Ì…É”Á•É™½Éµ•ÕÍ¥¹œ½±Õµ¸µµ…©½È½É‘•É¥¹œ¸(€¨!½Ý•Ù•È°…ÌÑ¡”…ÑÕ…°½É‘•É¥¹œµ…­•Ì¹¼‘¥™™•É•¹”µ…Ñ¡•µ…Ñ¥…±±ä…¹(€¨µ½ÍÐÁ•½Á±”…É”ÕÍ•Ñ¼Ñ¡¥¹­¥¹œ…‰½ÕÐµ…ÑÉ¥•Ì¥¸É½Üµµ…©½È½É‘•È°Ñ¡”(€¨Ñ¡É•”¹©Ì‘½Õµ•¹Ñ…Ñ¥½¸Í¡½ÝÌµ…ÑÉ¥•Ì¥¸É½Üµµ…©½È½É‘•È¸)ÕÍÐ‰•…È¥¸(€¨µ¥¹Ñ¡…Ð¥˜å½Ô…É”É•…‘¥¹œÑ¡”Í½ÕÉ”½‘”°å½Ô±°¡…Ù”Ñ¼Ñ…­”Ñ¡”(€¨ÑÉ…¹ÍÁ½Í”½˜…¹äµ…ÑÉ¥•Ì½ÕÑ±¥¹•¡•É”Ñ¼µ…­”Í•¹Í”½˜Ñ¡”…±Õ±…Ñ¥½¹Ì¸(€¨¼)±…ÍÌ5…ÑÉ¥àÈì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü€ÉàÈµ…ÑÉ¥à¸Q¡”…ÉÕµ•¹ÑÌ…É”ÍÕÁÁ½Í•Ñ¼‰”($€¨¥¸É½Üµµ…©½È½É‘•È¸%˜¹¼…ÉÕµ•¹ÑÌ…É”ÁÉ½Ù¥‘•°Ñ¡”½¹ÍÑÉÕÑ½È($€¨¥¹¥Ñ¥…±¥é•ÌÑ¡”µ…ÑÉ¥à…Ì…¸¥‘•¹Ñ¥Ñäµ…ÑÉ¥à¸($€¨($€¨Á…É…´í¹Õµ‰•Éôm¸ÄÅt€´€Ä´Äµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éôm¸ÄÉt€´€Ä´Èµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éôm¸ÈÅt€´€È´Äµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éôm¸ÈÉt€´€È´Èµ…ÑÉ¥à•±•µ•¹Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ¸ÄÄ°¸ÄÈ°¸ÈÄ°¸ÈÈ€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%5…ÑÉ¥àÈ¹ÁÉ½Ñ½ÑåÁ”¹¥Í5…ÑÉ¥àÈ€ôÑÉÕ”ì(($$¼¨¨($$€¨½±Õµ¸µµ…©½È±¥ÍÐ½˜µ…ÑÉ¥àÙ…±Õ•Ì¸($$€¨($$€¨ÑåÁ”íÉÉ…äñ¹Õµ‰•Èùô($$€¨¼($%Ñ¡¥Ì¹•±•µ•¹ÑÌ€ôl($$$Ä°€À°($$$À°€Ä°($%tì(($%¥˜€ ¸ÄÄ€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹Í•Ð ¸ÄÄ°¸ÄÈ°¸ÈÄ°¸ÈÈ€¤ì(($%ô((%ô(($¼¨¨($€¨M•ÑÌÑ¡¥Ìµ…ÑÉ¥àÑ¼Ñ¡”€ÉàÈ¥‘•¹Ñ¥Ñäµ…ÑÉ¥à¸($€¨($€¨É•ÑÕÉ¸í5…ÑÉ¥àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ìµ…ÑÉ¥à¸($€¨¼(%¥‘•¹Ñ¥Ñä ¤ì(($%Ñ¡¥Ì¹Í•Ð ($$$Ä°€À°($$$À°€Ä°($$¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•±•µ•¹ÑÌ½˜Ñ¡”µ…ÑÉ¥à™É½´Ñ¡”¥Ù•¸…ÉÉ…ä¸($€¨($€¨Á…É…´íÉÉ…äñ¹Õµ‰•Èùô…ÉÉ…ä€´Q¡”µ…ÑÉ¥à•±•µ•¹ÑÌ¥¸½±Õµ¸µµ…©½È½É‘•È¸($€¨Á…É…´í¹Õµ‰•Éôm½™™Í•ÐôÁt€´%¹‘•à½˜Ñ¡”™¥ÉÍÐ•±•µ•¹Ð¥¸Ñ¡”…ÉÉ…ä¸($€¨É•ÑÕÉ¸í5…ÑÉ¥àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ìµ…ÑÉ¥à¸($€¨¼(%™É½µÉÉ…ä …ÉÉ…ä°½™™Í•Ð€ô€À€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€Ðì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹•±•µ•¹ÑÍl¤t€ô…ÉÉ…ål¤€¬½™™Í•Ðtì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”•±•µ•¹ÑÌ½˜Ñ¡”µ…ÑÉ¥à¹Q¡”…ÉÕµ•¹ÑÌ…É”ÍÕÁÁ½Í•Ñ¼‰”($€¨¥¸É½Üµµ…©½È½É‘•È¸($€¨($€¨Á…É…´í¹Õµ‰•Éô¸ÄÄ€´€Ä´Äµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô¸ÄÈ€´€Ä´Èµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô¸ÈÄ€´€È´Äµ…ÑÉ¥à•±•µ•¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô¸ÈÈ€´€È´Èµ…ÑÉ¥à•±•µ•¹Ð¸($€¨É•ÑÕÉ¸í5…ÑÉ¥àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ìµ…ÑÉ¥à¸($€¨¼(%Í•Ð ¸ÄÄ°¸ÄÈ°¸ÈÄ°¸ÈÈ€¤ì(($%½¹ÍÐÑ”€ôÑ¡¥Ì¹•±•µ•¹ÑÌì(($%Ñ•l€Àt€ô¸ÄÄìÑ•l€Èt€ô¸ÄÈì($%Ñ•l€Ät€ô¸ÈÄìÑ•l€Ìt€ô¸ÈÈì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÐ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÈ ¤ì((¼¨¨(€¨I•ÁÉ•Í•¹ÑÌ…¸…á¥Ìµ…±¥¹•‰½Õ¹‘¥¹œ‰½à€¡	¤¥¸€ÉÍÁ…”¸(€¨¼)±…ÍÌ	½àÈì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‰½Õ¹‘¥¹œ‰½à¸($€¨($€¨Á…É…´íY•Ñ½ÈÉômµ¥¸ô¡%¹™¥¹¥Ñä±%¹™¥¹¥Ñä¥t€´Ù•Ñ½ÈÉ•ÁÉ•Í•¹Ñ¥¹œÑ¡”±½Ý•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($€¨Á…É…´íY•Ñ½ÈÉômµ…àô µ%¹™¥¹¥Ñä°µ%¹™¥¹¥Ñä¥t€´Ù•Ñ½ÈÉ•ÁÉ•Í•¹Ñ¥¹œÑ¡”ÕÁÁ•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($€¨¼(%½¹ÍÑÉÕÑ½È µ¥¸€ô¹•ÜY•Ñ½ÈÈ €¬%¹™¥¹¥Ñä°€¬%¹™¥¹¥Ñä€¤°µ…à€ô¹•ÜY•Ñ½ÈÈ €´%¹™¥¹¥Ñä°€´%¹™¥¹¥Ñä€¤€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥Í	½àÈ€ôÑÉÕ”ì(($$¼¨¨($$€¨Q¡”±½Ý•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($$€¨($$€¨ÑåÁ”íY•Ñ½ÈÉô($$€¨¼($%Ñ¡¥Ì¹µ¥¸€ôµ¥¸ì(($$¼¨¨($$€¨Q¡”ÕÁÁ•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($$€¨($$€¨ÑåÁ”íY•Ñ½ÈÉô($$€¨¼($%Ñ¡¥Ì¹µ…à€ôµ…àì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±½Ý•È…¹ÕÁÁ•È‰½Õ¹‘…É¥•Ì½˜Ñ¡¥Ì‰½à¸($€¨A±•…Í”¹½Ñ”Ñ¡…ÐÑ¡¥Ìµ•Ñ¡½½¹±ä½Á¥•ÌÑ¡”Ù…±Õ•Ì™É½´Ñ¡”¥Ù•¸½‰©•ÑÌ¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôµ¥¸€´Q¡”±½Ý•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($€¨Á…É…´íY•Ñ½ÈÉôµ…à€´Q¡”ÕÁÁ•È‰½Õ¹‘…Éä½˜Ñ¡”‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%Í•Ð µ¥¸°µ…à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹½Áä µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÕÁÁ•È…¹±½Ý•È‰½Õ¹‘Ì½˜Ñ¡¥Ì‰½àÍ¼¥Ð•¹±½Í•ÌÑ¡”Á½Í¥Ñ¥½¸‘…Ñ„($€¨¥¸Ñ¡”¥Ù•¸…ÉÉ…ä¸($€¨($€¨Á…É…´íÉÉ…äñY•Ñ½ÈÈùôÁ½¥¹ÑÌ€´¸…ÉÉ…ä¡½±‘¥¹œ€ÉÁ½Í¥Ñ¥½¸‘…Ñ„…Ì¥¹ÍÑ…¹•Ì½˜í±¥¹¬Y•Ñ½ÈÉô¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%Í•ÑÉ½µA½¥¹ÑÌ Á½¥¹ÑÌ€¤ì(($%Ñ¡¥Ì¹µ…­•µÁÑä ¤ì(($%™½È€ ±•Ð¤€ô€À°¥°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹•áÁ…¹‘	åA½¥¹Ð Á½¥¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨•¹Ñ•ÉÌÑ¡¥Ì‰½à½¸Ñ¡”¥Ù•¸•¹Ñ•ÈÙ•Ñ½È…¹Í•ÑÌÑ¡¥Ì‰½àÌÝ¥‘Ñ °¡•¥¡Ð…¹($€¨‘•ÁÑ Ñ¼Ñ¡”¥Ù•¸Í¥é”Ù…±Õ•Ì¸($€¨($€¨Á…É…´íY•Ñ½ÈÉô•¹Ñ•È€´Q¡”•¹Ñ•È½˜Ñ¡”‰½à¸($€¨Á…É…´íY•Ñ½ÈÉôÍ¥é”€´Q¡”à…¹ä‘¥µ•¹Í¥½¹Ì½˜Ñ¡”‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%Í•ÑÉ½µ•¹Ñ•É¹‘M¥é” •¹Ñ•È°Í¥é”€¤ì(($%½¹ÍÐ¡…±™M¥é”€ô}Ù•Ñ½ÈÐ¹½Áä Í¥é”€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì($%Ñ¡¥Ì¹µ¥¸¹½Áä •¹Ñ•È€¤¹ÍÕˆ ¡…±™M¥é”€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä •¹Ñ•È€¤¹…‘ ¡…±™M¥é”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü‰½àÝ¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í	½àÉô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸‰½àÑ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½àÑ¼½Áä¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%½Áä ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹½Áä ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä ‰½à¹µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨5…­•ÌÑ¡¥Ì‰½à•µÁÑäÝ¡¥ µ•…¹Ì¥¸•¹±½Í•Ì„é•É¼ÍÁ…”¥¸€É¸($€¨($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%µ…­•µÁÑä ¤ì(($%Ñ¡¥Ì¹µ¥¸¹à€ôÑ¡¥Ì¹µ¥¸¹ä€ô€¬%¹™¥¹¥Ñäì($%Ñ¡¥Ì¹µ…à¹à€ôÑ¡¥Ì¹µ…à¹ä€ô€´%¹™¥¹¥Ñäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ”¥˜Ñ¡¥Ì‰½à¥¹±Õ‘•Ìé•É¼Á½¥¹ÑÌÝ¥Ñ¡¥¸¥ÑÌ‰½Õ¹‘Ì¸($€¨9½Ñ”Ñ¡…Ð„‰½àÝ¥Ñ •ÅÕ…°±½Ý•È…¹ÕÁÁ•È‰½Õ¹‘ÌÍÑ¥±°¥¹±Õ‘•Ì½¹”($€¨Á½¥¹Ð°Ñ¡”½¹”‰½Ñ ‰½Õ¹‘ÌÍ¡…É”¸($€¨($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡¥Ì‰½à¥Ì•µÁÑä½È¹½Ð¸($€¨¼(%¥ÍµÁÑä ¤ì(($$¼¼Ñ¡¥Ì¥Ì„µ½É”É½‰ÕÍÐ¡•¬™½È•µÁÑäÑ¡…¸€ Ù½±Õµ”€ðô€À€¤‰•…ÕÍ”Ù½±Õµ”…¸•ÐÁ½Í¥Ñ¥Ù”Ý¥Ñ ÑÝ¼¹•…Ñ¥Ù”…á•Ì(($%É•ÑÕÉ¸€ Ñ¡¥Ì¹µ…à¹à€ðÑ¡¥Ì¹µ¥¸¹à€¤ñð€ Ñ¡¥Ì¹µ…à¹ä€ðÑ¡¥Ì¹µ¥¸¹ä€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•¹Ñ•ÈÁ½¥¹Ð½˜Ñ¡¥Ì‰½à¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÉôQ¡”•¹Ñ•ÈÁ½¥¹Ð¸($€¨¼(%•Ñ•¹Ñ•È Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹¥ÍµÁÑä ¤€üÑ…É•Ð¹Í•Ð €À°€À€¤€èÑ…É•Ð¹…‘‘Y•Ñ½ÉÌ Ñ¡¥Ì¹µ¥¸°Ñ¡¥Ì¹µ…à€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”‘¥µ•¹Í¥½¹Ì½˜Ñ¡¥Ì‰½à¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÉôQ¡”Í¥é”¸($€¨¼(%•ÑM¥é” Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹¥ÍµÁÑä ¤€üÑ…É•Ð¹Í•Ð €À°€À€¤€èÑ…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹µ…à°Ñ¡¥Ì¹µ¥¸€¤ì((%ô(($¼¨¨($€¨áÁ…¹‘ÌÑ¡”‰½Õ¹‘…É¥•Ì½˜Ñ¡¥Ì‰½àÑ¼¥¹±Õ‘”Ñ¡”¥Ù•¸Á½¥¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÁ½¥¹Ð€´Q¡”Á½¥¹ÐÑ¡…ÐÍ¡½Õ±‰”¥¹±Õ‘•‰äÑ¡”‰½Õ¹‘¥¹œ‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%•áÁ…¹‘	åA½¥¹Ð Á½¥¹Ð€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ¥¸ Á½¥¹Ð€¤ì($%Ñ¡¥Ì¹µ…à¹µ…à Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨áÁ…¹‘ÌÑ¡¥Ì‰½à•ÅÕ¥±…Ñ•É…±±ä‰äÑ¡”¥Ù•¸Ù•Ñ½È¸Q¡”Ý¥‘Ñ ½˜Ñ¡¥Ì($€¨‰½àÝ¥±°‰”•áÁ…¹‘•‰äÑ¡”à½µÁ½¹•¹Ð½˜Ñ¡”Ù•Ñ½È¥¸‰½Ñ ($€¨‘¥É•Ñ¥½¹Ì¸Q¡”¡•¥¡Ð½˜Ñ¡¥Ì‰½àÝ¥±°‰”•áÁ…¹‘•‰äÑ¡”ä½µÁ½¹•¹Ð½˜($€¨Ñ¡”Ù•Ñ½È¥¸‰½Ñ ‘¥É•Ñ¥½¹Ì¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÙ•Ñ½È€´Q¡”Ù•Ñ½ÈÑ¡…ÐÍ¡½Õ±•áÁ…¹Ñ¡”‰½Õ¹‘¥¹œ‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%•áÁ…¹‘	åY•Ñ½È Ù•Ñ½È€¤ì(($%Ñ¡¥Ì¹µ¥¸¹ÍÕˆ Ù•Ñ½È€¤ì($%Ñ¡¥Ì¹µ…à¹…‘ Ù•Ñ½È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨áÁ…¹‘Ì•… ‘¥µ•¹Í¥½¸½˜Ñ¡”‰½à‰äÑ¡”¥Ù•¸Í…±…È¸%˜¹•…Ñ¥Ù”°Ñ¡”($€¨‘¥µ•¹Í¥½¹Ì½˜Ñ¡”‰½àÝ¥±°‰”½¹ÑÉ…Ñ•¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÍ…±…È€´Q¡”Í…±…ÈÙ…±Õ”Ñ¡…ÐÍ¡½Õ±•áÁ…¹Ñ¡”‰½Õ¹‘¥¹œ‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%•áÁ…¹‘	åM…±…È Í…±…È€¤ì(($%Ñ¡¥Ì¹µ¥¸¹…‘‘M…±…È €´Í…±…È€¤ì($%Ñ¡¥Ì¹µ…à¹…‘‘M…±…È Í…±…È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡”¥Ù•¸Á½¥¹Ð±¥•ÌÝ¥Ñ¡¥¸½È½¸Ñ¡”‰½Õ¹‘…É¥•Ì½˜Ñ¡¥Ì‰½à¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÁ½¥¹Ð€´Q¡”Á½¥¹ÐÑ¼Ñ•ÍÐ¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”‰½Õ¹‘¥¹œ‰½à½¹Ñ…¥¹ÌÑ¡”¥Ù•¸Á½¥¹Ð½È¹½Ð¸($€¨¼(%½¹Ñ…¥¹ÍA½¥¹Ð Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Á½¥¹Ð¹à€øôÑ¡¥Ì¹µ¥¸¹à€˜˜Á½¥¹Ð¹à€ðôÑ¡¥Ì¹µ…à¹à€˜˜($$%Á½¥¹Ð¹ä€øôÑ¡¥Ì¹µ¥¸¹ä€˜˜Á½¥¹Ð¹ä€ðôÑ¡¥Ì¹µ…à¹äì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¥¹±Õ‘•ÌÑ¡”•¹Ñ¥É•Ñä½˜Ñ¡”¥Ù•¸‰½Õ¹‘¥¹œ‰½à¸($€¨%˜Ñ¡¥Ì‰½à…¹Ñ¡”¥Ù•¸½¹”…É”¥‘•¹Ñ¥…°°Ñ¡¥Ì™Õ¹Ñ¥½¸…±Í¼É•ÑÕÉ¹ÌÑÉÕ•€¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½Õ¹‘¥¹œ‰½àÑ¼Ñ•ÍÐ¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”‰½Õ¹‘¥¹œ‰½à½¹Ñ…¥¹ÌÑ¡”¥Ù•¸‰½Õ¹‘¥¹œ‰½à½È¹½Ð¸($€¨¼(%½¹Ñ…¥¹Í	½à ‰½à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹µ¥¸¹à€ðô‰½à¹µ¥¸¹à€˜˜‰½à¹µ…à¹à€ðôÑ¡¥Ì¹µ…à¹à€˜˜($$%Ñ¡¥Ì¹µ¥¸¹ä€ðô‰½à¹µ¥¸¹ä€˜˜‰½à¹µ…à¹ä€ðôÑ¡¥Ì¹µ…à¹äì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„Á½¥¹Ð…Ì„ÁÉ½Á½ÉÑ¥½¸½˜Ñ¡¥Ì‰½àÌÝ¥‘Ñ …¹¡•¥¡Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÁ½¥¹Ð€´Á½¥¹Ð¥¸€ÉÍÁ…”¸($€¨Á…É…´íY•Ñ½ÈÉôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÉôÁ½¥¹Ð…Ì„ÁÉ½Á½ÉÑ¥½¸½˜Ñ¡¥Ì‰½àÌÝ¥‘Ñ …¹¡•¥¡Ð¸($€¨¼(%•ÑA…É…µ•Ñ•È Á½¥¹Ð°Ñ…É•Ð€¤ì(($$¼¼Q¡¥Ì…¸Á½Ñ•¹Ñ¥…±±ä¡…Ù”„‘¥Ù¥‘”‰äé•É¼¥˜Ñ¡”‰½à($$¼¼¡…Ì„Í¥é”‘¥µ•¹Í¥½¸½˜€À¸(($%É•ÑÕÉ¸Ñ…É•Ð¹Í•Ð ($$$ Á½¥¹Ð¹à€´Ñ¡¥Ì¹µ¥¸¹à€¤€¼€ Ñ¡¥Ì¹µ…à¹à€´Ñ¡¥Ì¹µ¥¸¹à€¤°($$$ Á½¥¹Ð¹ä€´Ñ¡¥Ì¹µ¥¸¹ä€¤€¼€ Ñ¡¥Ì¹µ…à¹ä€´Ñ¡¥Ì¹µ¥¸¹ä€¤($$¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡”¥Ù•¸‰½Õ¹‘¥¹œ‰½à¥¹Ñ•ÉÍ•ÑÌÝ¥Ñ Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½Õ¹‘¥¹œ‰½àÑ¼Ñ•ÍÐ¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡”¥Ù•¸‰½Õ¹‘¥¹œ‰½à¥¹Ñ•ÉÍ•ÑÌÝ¥Ñ Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%¥¹Ñ•ÉÍ•ÑÍ	½à ‰½à€¤ì(($$¼¼ÕÍ¥¹œ€ÐÍÁ±¥ÑÑ¥¹œÁ±…¹•ÌÑ¼ÉÕ±”½ÕÐ¥¹Ñ•ÉÍ•Ñ¥½¹Ì(($%É•ÑÕÉ¸‰½à¹µ…à¹à€øôÑ¡¥Ì¹µ¥¸¹à€˜˜‰½à¹µ¥¸¹à€ðôÑ¡¥Ì¹µ…à¹à€˜˜($$%‰½à¹µ…à¹ä€øôÑ¡¥Ì¹µ¥¸¹ä€˜˜‰½à¹µ¥¸¹ä€ðôÑ¡¥Ì¹µ…à¹äì((%ô(($¼¨¨($€¨±…µÁÌÑ¡”¥Ù•¸Á½¥¹ÐÝ¥Ñ¡¥¸Ñ¡”‰½Õ¹‘Ì½˜Ñ¡¥Ì‰½à¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÁ½¥¹Ð€´Q¡”Á½¥¹ÐÑ¼±…µÀ¸($€¨Á…É…´íY•Ñ½ÈÉôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÉôQ¡”±…µÁ•Á½¥¹Ð¸($€¨¼(%±…µÁA½¥¹Ð Á½¥¹Ð°Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹½Áä Á½¥¹Ð€¤¹±…µÀ Ñ¡¥Ì¹µ¥¸°Ñ¡¥Ì¹µ…à€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•Õ±¥‘•…¸‘¥ÍÑ…¹”™É½´…¹ä•‘”½˜Ñ¡¥Ì‰½àÑ¼Ñ¡”ÍÁ•¥™¥•Á½¥¹Ð¸%˜($€¨Ñ¡”¥Ù•¸Á½¥¹Ð±¥•Ì¥¹Í¥‘”½˜Ñ¡¥Ì‰½à°Ñ¡”‘¥ÍÑ…¹”Ý¥±°‰”€Á€¸($€¨($€¨Á…É…´íY•Ñ½ÈÉôÁ½¥¹Ð€´Q¡”Á½¥¹ÐÑ¼½µÁÕÑ”Ñ¡”‘¥ÍÑ…¹”Ñ¼¸($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”•Õ±¥‘•…¸‘¥ÍÑ…¹”¸($€¨¼(%‘¥ÍÑ…¹•Q½A½¥¹Ð Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹±…µÁA½¥¹Ð Á½¥¹Ð°}Ù•Ñ½ÈÐ€¤¹‘¥ÍÑ…¹•Q¼ Á½¥¹Ð€¤ì((%ô(($¼¨¨($€¨½µÁÕÑ•ÌÑ¡”¥¹Ñ•ÉÍ•Ñ¥½¸½˜Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à…¹Ñ¡”¥Ù•¸½¹”°Í•ÑÑ¥¹œÑ¡”ÕÁÁ•È($€¨‰½Õ¹½˜Ñ¡¥Ì‰½àÑ¼Ñ¡”±•ÍÍ•È½˜Ñ¡”ÑÝ¼‰½á•ÌœÕÁÁ•È‰½Õ¹‘Ì…¹Ñ¡”($€¨±½Ý•È‰½Õ¹½˜Ñ¡¥Ì‰½àÑ¼Ñ¡”É•…Ñ•È½˜Ñ¡”ÑÝ¼‰½á•Ìœ±½Ý•È‰½Õ¹‘Ì¸%˜($€¨Ñ¡•É”Ì¹¼½Ù•É±…À°µ…­•ÌÑ¡¥Ì‰½à•µÁÑä¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½Õ¹‘¥¹œ‰½àÑ¼¥¹Ñ•ÉÍ•ÐÝ¥Ñ ¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%¥¹Ñ•ÉÍ•Ð ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ…à ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹µ¥¸ ‰½à¹µ…à€¤ì(($%¥˜€ Ñ¡¥Ì¹¥ÍµÁÑä ¤€¤Ñ¡¥Ì¹µ…­•µÁÑä ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½µÁÕÑ•ÌÑ¡”Õ¹¥½¸½˜Ñ¡¥Ì‰½à…¹…¹½Ñ¡•È…¹Ñ¡”¥Ù•¸½¹”°Í•ÑÑ¥¹œÑ¡”ÕÁÁ•È($€¨‰½Õ¹½˜Ñ¡¥Ì‰½àÑ¼Ñ¡”É•…Ñ•È½˜Ñ¡”ÑÝ¼‰½á•ÌœÕÁÁ•È‰½Õ¹‘Ì…¹Ñ¡”($€¨±½Ý•È‰½Õ¹½˜Ñ¡¥Ì‰½àÑ¼Ñ¡”±•ÍÍ•È½˜Ñ¡”ÑÝ¼‰½á•Ìœ±½Ý•È‰½Õ¹‘Ì¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½Õ¹‘¥¹œ‰½àÑ¡…ÐÝ¥±°‰”Õ¹¥½¹•Ý¥Ñ Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%Õ¹¥½¸ ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ¥¸ ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹µ…à ‰½à¹µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘‘ÌÑ¡”¥Ù•¸½™™Í•ÐÑ¼‰½Ñ Ñ¡”ÕÁÁ•È…¹±½Ý•È‰½Õ¹‘Ì½˜Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à°($€¨•™™•Ñ¥Ù•±äµ½Ù¥¹œ¥Ð¥¸€ÉÍÁ…”¸($€¨($€¨Á…É…´íY•Ñ½ÈÉô½™™Í•Ð€´Q¡”½™™Í•ÐÑ¡…ÐÍ¡½Õ±‰”ÕÍ•Ñ¼ÑÉ…¹Í±…Ñ”Ñ¡”‰½Õ¹‘¥¹œ‰½à¸($€¨É•ÑÕÉ¸í	½àÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¸($€¨¼(%ÑÉ…¹Í±…Ñ” ½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹µ¥¸¹…‘ ½™™Í•Ð€¤ì($%Ñ¡¥Ì¹µ…à¹…‘ ½™™Í•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡¥Ì‰½Õ¹‘¥¹œ‰½à¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í	½àÉô‰½à€´Q¡”‰½àÑ¼Ñ•ÍÐ™½È•ÅÕ…±¥Ñä¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡¥Ì‰½Õ¹‘¥¹œ‰½à¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨¼(%•ÅÕ…±Ì ‰½à€¤ì(($%É•ÑÕÉ¸‰½à¹µ¥¸¹•ÅÕ…±Ì Ñ¡¥Ì¹µ¥¸€¤€˜˜‰½à¹µ…à¹•ÅÕ…±Ì Ñ¡¥Ì¹µ…à€¤ì((%ô()ô()½¹ÍÐ}ÍÑ…ÉÑ@€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÍÑ…ÉÑ¹€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()½¹ÍÐ}Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}È€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}È€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ŒÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ŒÈ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨¸…¹…±åÑ¥…°±¥¹”Í•µ•¹Ð¥¸€ÍÍÁ…”É•ÁÉ•Í•¹Ñ•‰ä„ÍÑ…ÉÐ…¹•¹Á½¥¹Ð¸(€¨¼)±…ÍÌ1¥¹”Ìì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü±¥¹”Í•µ•¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÍômÍÑ…ÉÐô À°À°À¥t€´MÑ…ÉÐ½˜Ñ¡”±¥¹”Í•µ•¹Ð¸($€¨Á…É…´íY•Ñ½ÈÍôm•¹ô À°À°À¥t€´¹½˜Ñ¡”±¥¹”Í•µ•¹Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ÍÑ…ÉÐ€ô¹•ÜY•Ñ½ÈÌ ¤°•¹€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($$¼¨¨($$€¨MÑ…ÉÐ½˜Ñ¡”±¥¹”Í•µ•¹Ð¸($$€¨($$€¨ÑåÁ”íY•Ñ½ÈÍô($$€¨¼($%Ñ¡¥Ì¹ÍÑ…ÉÐ€ôÍÑ…ÉÐì(($$¼¨¨($$€¨¹½˜Ñ¡”±¥¹”Í•µ•¹Ð¸($$€¨($$€¨ÑåÁ”íY•Ñ½ÈÍô($$€¨¼($%Ñ¡¥Ì¹•¹€ô•¹ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”ÍÑ…ÉÐ…¹•¹Ù…±Õ•Ì‰ä½Áå¥¹œÑ¡”¥Ù•¸Ù•Ñ½ÉÌ¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôÍÑ…ÉÐ€´Q¡”ÍÑ…ÉÐÁ½¥¹Ð¸($€¨Á…É…´íY•Ñ½ÈÍô•¹€´Q¡”•¹Á½¥¹Ð¸($€¨É•ÑÕÉ¸í1¥¹”ÍôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥¹”Í•µ•¹Ð¸($€¨¼(%Í•Ð ÍÑ…ÉÐ°•¹€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹½Áä ÍÑ…ÉÐ€¤ì($%Ñ¡¥Ì¹•¹¹½Áä •¹€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½Á¥•ÌÑ¡”Ù…±Õ•Ì½˜Ñ¡”¥Ù•¸±¥¹”Í•µ•¹ÐÑ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´í1¥¹”Íô±¥¹”€´Q¡”±¥¹”Í•µ•¹ÐÑ¼½Áä¸($€¨É•ÑÕÉ¸í1¥¹”ÍôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥¹”Í•µ•¹Ð¸($€¨¼(%½Áä ±¥¹”€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹½Áä ±¥¹”¹ÍÑ…ÉÐ€¤ì($%Ñ¡¥Ì¹•¹¹½Áä ±¥¹”¹•¹€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”•¹Ñ•È½˜Ñ¡”±¥¹”Í•µ•¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”•¹Ñ•ÈÁ½¥¹Ð¸($€¨¼(%•Ñ•¹Ñ•È Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹…‘‘Y•Ñ½ÉÌ Ñ¡¥Ì¹ÍÑ…ÉÐ°Ñ¡¥Ì¹•¹€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”‘•±Ñ„Ù•Ñ½È½˜Ñ¡”±¥¹”Í•µ•¹ÐÌÍÑ…ÉÐ…¹•¹Á½¥¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”‘•±Ñ„Ù•Ñ½È¸($€¨¼(%‘•±Ñ„ Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹•¹°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”ÍÅÕ…É•Õ±¥‘•…¸‘¥ÍÑ…¹”‰•ÑÝ••¸Ñ¡”±¥¹”œÍÑ…ÉÐ…¹•¹Á½¥¹Ð¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”ÍÅÕ…É•Õ±¥‘•…¸‘¥ÍÑ…¹”¸($€¨¼(%‘¥ÍÑ…¹•MÄ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ…ÉÐ¹‘¥ÍÑ…¹•Q½MÅÕ…É• Ñ¡¥Ì¹•¹€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”Õ±¥‘•…¸‘¥ÍÑ…¹”‰•ÑÝ••¸Ñ¡”±¥¹”œÍÑ…ÉÐ…¹•¹Á½¥¹Ð¸($€¨($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Õ±¥‘•…¸‘¥ÍÑ…¹”¸($€¨¼(%‘¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ…ÉÐ¹‘¥ÍÑ…¹•Q¼ Ñ¡¥Ì¹•¹€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„Ù•Ñ½È…Ð„•ÉÑ…¥¸Á½Í¥Ñ¥½¸…±½¹œÑ¡”±¥¹”Í•µ•¹Ð¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÐ€´Ù…±Õ”‰•ÑÝ••¸lÀ°Åu€Ñ¼É•ÁÉ•Í•¹Ð„Á½Í¥Ñ¥½¸…±½¹œÑ¡”±¥¹”Í•µ•¹Ð¸($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”‘•±Ñ„Ù•Ñ½È¸($€¨¼(%…Ð Ð°Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•±Ñ„ Ñ…É•Ð€¤¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„Á½¥¹ÐÁ…É…µ•Ñ•È‰…Í•½¸Ñ¡”±½Í•ÍÐÁ½¥¹Ð…ÌÁÉ½©•Ñ•½¸Ñ¡”±¥¹”Í•µ•¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôÁ½¥¹Ð€´Q¡”Á½¥¹Ð™½ÈÝ¡¥ Ñ¼É•ÑÕÉ¸„Á½¥¹ÐÁ…É…µ•Ñ•È¸($€¨Á…É…´í‰½½±•…¹ô±…µÁQ½1¥¹”€´]¡•Ñ¡•ÈÑ¼±…µÀÑ¡”É•ÍÕ±ÐÑ¼Ñ¡”É…¹”lÀ°Åu€½È¹½Ð¸($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”Á½¥¹ÐÁ…É…µ•Ñ•È¸($€¨¼(%±½Í•ÍÑA½¥¹ÑQ½A½¥¹ÑA…É…µ•Ñ•È Á½¥¹Ð°±…µÁQ½1¥¹”€¤ì(($%}ÍÑ…ÉÑ@¹ÍÕ‰Y•Ñ½ÉÌ Á½¥¹Ð°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì($%}ÍÑ…ÉÑ¹¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹•¹°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì(($%½¹ÍÐÍÑ…ÉÑ¹È€ô}ÍÑ…ÉÑ¹¹‘½Ð }ÍÑ…ÉÑ¹€¤ì($%½¹ÍÐÍÑ…ÉÑ¹‘}ÍÑ…ÉÑ@€ô}ÍÑ…ÉÑ¹¹‘½Ð }ÍÑ…ÉÑ@€¤ì(($%±•ÐÐ€ôÍÑ…ÉÑ¹‘}ÍÑ…ÉÑ@€¼ÍÑ…ÉÑ¹Èì(($%¥˜€ ±…µÁQ½1¥¹”€¤ì(($$%Ð€ô±…µÀ Ð°€À°€Ä€¤ì(($%ô(($%É•ÑÕÉ¸Ðì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”±½Í•ÍÐÁ½¥¹Ð½¸Ñ¡”±¥¹”™½È„¥Ù•¸Á½¥¹Ð¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôÁ½¥¹Ð€´Q¡”Á½¥¹ÐÑ¼½µÁÕÑ”Ñ¡”±½Í•ÍÐÁ½¥¹Ð½¸Ñ¡”±¥¹”™½È¸($€¨Á…É…´í‰½½±•…¹ô±…µÁQ½1¥¹”€´]¡•Ñ¡•ÈÑ¼±…µÀÑ¡”É•ÍÕ±ÐÑ¼Ñ¡”É…¹”lÀ°Åu€½È¹½Ð¸($€¨Á…É…´íY•Ñ½ÈÍôÑ…É•Ð€´Q¡”Ñ…É•ÐÙ•Ñ½ÈÑ¡…Ð¥ÌÕÍ•Ñ¼ÍÑ½É”Ñ¡”µ•Ñ¡½ÌÉ•ÍÕ±Ð¸($€¨É•ÑÕÉ¸íY•Ñ½ÈÍôQ¡”±½Í•ÍÐÁ½¥¹Ð½¸Ñ¡”±¥¹”¸($€¨¼(%±½Í•ÍÑA½¥¹ÑQ½A½¥¹Ð Á½¥¹Ð°±…µÁQ½1¥¹”°Ñ…É•Ð€¤ì(($%½¹ÍÐÐ€ôÑ¡¥Ì¹±½Í•ÍÑA½¥¹ÑQ½A½¥¹ÑA…É…µ•Ñ•È Á½¥¹Ð°±…µÁQ½1¥¹”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•±Ñ„ Ñ…É•Ð€¤¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑ¡”±½Í•ÍÐÍÅÕ…É•‘¥ÍÑ…¹”‰•ÑÝ••¸Ñ¡¥Ì±¥¹”Í•µ•¹Ð…¹Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í1¥¹”Íô±¥¹”€´Q¡”±¥¹”Í•µ•¹ÐÑ¼½µÁÕÑ”Ñ¡”±½Í•ÍÐÍÅÕ…É•‘¥ÍÑ…¹”Ñ¼¸($€¨Á…É…´íY•Ñ½ÈÍômŒÅt€´Q¡”±½Í•ÍÐÁ½¥¹Ð½¸Ñ¡¥Ì±¥¹”Í•µ•¹Ð¸($€¨Á…É…´íY•Ñ½ÈÍômŒÉt€´Q¡”±½Í•ÍÐÁ½¥¹Ð½¸Ñ¡”¥Ù•¸±¥¹”Í•µ•¹Ð¸($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”ÍÅÕ…É•‘¥ÍÑ…¹”‰•ÑÝ••¸Ñ¡¥Ì±¥¹”Í•µ•¹Ð…¹Ñ¡”¥Ù•¸½¹”¸($€¨¼(%‘¥ÍÑ…¹•MÅQ½1¥¹”Ì ±¥¹”°ŒÄ€ô}ŒÄ°ŒÈ€ô}ŒÈ€¤ì(($$¼¼™É½´I•…°µQ¥µ”½±±¥Í¥½¸•Ñ•Ñ¥½¸‰ä¡É¥ÍÑ•ÈÉ¥Í½¸°¡…ÁÑ•È€Ô¸Ä¸ä(($$¼¼½µÁÕÑ•Ì±½Í•ÍÐÁ½¥¹ÑÌÄ…¹È½˜LÄ¡Ì¤õ@Ä­Ì¨¡DÄµ@Ä¤…¹($$¼¼LÈ¡Ð¤õ@È­Ð¨¡DÈµ@È¤°É•ÑÕÉ¹¥¹œÌ…¹Ð¸Õ¹Ñ¥½¸É•ÍÕ±Ð¥ÌÍÅÕ…É•($$¼¼‘¥ÍÑ…¹”‰•ÑÝ••¸‰•ÑÝ••¸LÄ¡Ì¤…¹LÈ¡Ð¤(($%½¹ÍÐAM%1=8€ô€Å”´à€¨€Å”´àì€¼¼µÕÍÐ‰”ÍÅÕ…É•Í¥¹”Ý”½µÁ…É”ÍÅÕ…É•±•¹Ñ ($%±•ÐÌ°Ðì(($%½¹ÍÐÀÄ€ôÑ¡¥Ì¹ÍÑ…ÉÐì($%½¹ÍÐÀÈ€ô±¥¹”¹ÍÑ…ÉÐì($%½¹ÍÐÄÄ€ôÑ¡¥Ì¹•¹ì($%½¹ÍÐÄÈ€ô±¥¹”¹•¹ì(($%}Ä¹ÍÕ‰Y•Ñ½ÉÌ ÄÄ°ÀÄ€¤ì€¼¼¥É•Ñ¥½¸Ù•Ñ½È½˜Í•µ•¹ÐLÄ($%}È¹ÍÕ‰Y•Ñ½ÉÌ ÄÈ°ÀÈ€¤ì€¼¼¥É•Ñ¥½¸Ù•Ñ½È½˜Í•µ•¹ÐLÈ($%}È¹ÍÕ‰Y•Ñ½ÉÌ ÀÄ°ÀÈ€¤ì(($%½¹ÍÐ„€ô}Ä¹‘½Ð }Ä€¤ì€¼¼MÅÕ…É•±•¹Ñ ½˜Í•µ•¹ÐLÄ°…±Ý…åÌ¹½¹¹•…Ñ¥Ù”($%½¹ÍÐ”€ô}È¹‘½Ð }È€¤ì€¼¼MÅÕ…É•±•¹Ñ ½˜Í•µ•¹ÐLÈ°…±Ý…åÌ¹½¹¹•…Ñ¥Ù”($%½¹ÍÐ˜€ô}È¹‘½Ð }È€¤ì(($$¼¼¡•¬¥˜•¥Ñ¡•È½È‰½Ñ Í•µ•¹ÑÌ‘••¹•É…Ñ”¥¹Ñ¼Á½¥¹ÑÌ(($%¥˜€ „€ðôAM%1=8€˜˜”€ðôAM%1=8€¤ì(($$$¼¼	½Ñ Í•µ•¹ÑÌ‘••¹•É…Ñ”¥¹Ñ¼Á½¥¹ÑÌ(($$%ŒÄ¹½Áä ÀÄ€¤ì($$%ŒÈ¹½Áä ÀÈ€¤ì(($$%ŒÄ¹ÍÕˆ ŒÈ€¤ì(($$%É•ÑÕÉ¸ŒÄ¹‘½Ð ŒÄ€¤ì(($%ô(($%¥˜€ „€ðôAM%1=8€¤ì(($$$¼¼¥ÉÍÐÍ•µ•¹Ð‘••¹•É…Ñ•Ì¥¹Ñ¼„Á½¥¹Ð(($$%Ì€ô€Àì($$%Ð€ô˜€¼”ì€¼¼Ì€ô€À€ôøÐ€ô€¡ˆ©Ì€¬˜¤€¼”€ô˜€¼”($$%Ð€ô±…µÀ Ð°€À°€Ä€¤ì((($%ô•±Í”ì(($$%½¹ÍÐŒ€ô}Ä¹‘½Ð }È€¤ì(($$%¥˜€ ”€ðôAM%1=8€¤ì(($$$$¼¼M•½¹Í•µ•¹Ð‘••¹•É…Ñ•Ì¥¹Ñ¼„Á½¥¹Ð(($$$%Ð€ô€Àì($$$%Ì€ô±…µÀ €´Œ€¼„°€À°€Ä€¤ì€¼¼Ð€ô€À€ôøÌ€ô€¡ˆ©Ð€´Œ¤€¼„€ô€µŒ€¼„(($$%ô•±Í”ì(($$$$¼¼Q¡”•¹•É…°¹½¹‘••¹•É…Ñ”…Í”ÍÑ…ÉÑÌ¡•É”(($$$%½¹ÍÐˆ€ô}Ä¹‘½Ð }È€¤ì($$$%½¹ÍÐ‘•¹½´€ô„€¨”€´ˆ€¨ˆì€¼¼±Ý…åÌ¹½¹¹•…Ñ¥Ù”(($$$$¼¼%˜Í•µ•¹ÑÌ¹½ÐÁ…É…±±•°°½µÁÕÑ”±½Í•ÍÐÁ½¥¹Ð½¸0ÄÑ¼0È…¹($$$$¼¼±…µÀÑ¼Í•µ•¹ÐLÄ¸±Í”Á¥¬…É‰¥ÑÉ…ÉäÌ€¡¡•É”€À¤(($$$%¥˜€ ‘•¹½´€„ôô€À€¤ì(($$$$%Ì€ô±…µÀ € ˆ€¨˜€´Œ€¨”€¤€¼‘•¹½´°€À°€Ä€¤ì(($$$%ô•±Í”ì(($$$$%Ì€ô€Àì(($$$%ô(($$$$¼¼½µÁÕÑ”Á½¥¹Ð½¸0È±½Í•ÍÐÑ¼LÄ¡Ì¤ÕÍ¥¹œ($$$$¼¼Ð€ô½Ð ¡@Ä€¬Ä©Ì¤€´@È±È¤€¼½Ð¡È±È¤€ô€¡ˆ©Ì€¬˜¤€¼”(($$$%Ð€ô€ ˆ€¨Ì€¬˜€¤€¼”ì(($$$$¼¼%˜Ð¥¸lÀ°Åt‘½¹”¸±Í”±…µÀÐ°É•½µÁÕÑ”Ì™½ÈÑ¡”¹•ÜÙ…±Õ”($$$$¼¼½˜ÐÕÍ¥¹œÌ€ô½Ð ¡@È€¬È©Ð¤€´@Ä±Ä¤€¼½Ð¡Ä±Ä¤ô€¡Ð©ˆ€´Œ¤€¼„($$$$¼¼…¹±…µÀÌÑ¼lÀ°€Åt(($$$%¥˜€ Ð€ð€À€¤ì(($$$$%Ð€ô€À¸ì($$$$%Ì€ô±…µÀ €´Œ€¼„°€À°€Ä€¤ì(($$$%ô•±Í”¥˜€ Ð€ø€Ä€¤ì(($$$$%Ð€ô€Äì($$$$%Ì€ô±…µÀ € ˆ€´Œ€¤€¼„°€À°€Ä€¤ì(($$$%ô(($$%ô(($%ô(($%ŒÄ¹½Áä ÀÄ€¤¹…‘ }Ä¹µÕ±Ñ¥Á±åM…±…È Ì€¤€¤ì($%ŒÈ¹½Áä ÀÈ€¤¹…‘ }È¹µÕ±Ñ¥Á±åM…±…È Ð€¤€¤ì(($%ŒÄ¹ÍÕˆ ŒÈ€¤ì(($%É•ÑÕÉ¸ŒÄ¹‘½Ð ŒÄ€¤ì((%ô(($¼¨¨($€¨ÁÁ±¥•Ì„€ÑàÐÑÉ…¹Í™½Éµ…Ñ¥½¸µ…ÑÉ¥àÑ¼Ñ¡¥Ì±¥¹”Í•µ•¹Ð¸($€¨($€¨Á…É…´í5…ÑÉ¥àÑôµ…ÑÉ¥à€´Q¡”ÑÉ…¹Í™½Éµ…Ñ¥½¸µ…ÑÉ¥à¸($€¨É•ÑÕÉ¸í1¥¹”ÍôÉ•™•É•¹”Ñ¼Ñ¡¥Ì±¥¹”Í•µ•¹Ð¸($€¨¼(%…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì($%Ñ¡¥Ì¹•¹¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨I•ÑÕÉ¹ÌÑÉÕ•€¥˜Ñ¡¥Ì±¥¹”Í•µ•¹Ð¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í1¥¹”Íô±¥¹”€´Q¡”±¥¹”Í•µ•¹ÐÑ¼Ñ•ÍÐ™½È•ÅÕ…±¥Ñä¸($€¨É•ÑÕÉ¸í‰½½±•…¹ô]¡•Ñ¡•ÈÑ¡¥Ì±¥¹”Í•µ•¹Ð¥Ì•ÅÕ…°Ý¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨¼(%•ÅÕ…±Ì ±¥¹”€¤ì(($%É•ÑÕÉ¸±¥¹”¹ÍÑ…ÉÐ¹•ÅÕ…±Ì Ñ¡¥Ì¹ÍÑ…ÉÐ€¤€˜˜±¥¹”¹•¹¹•ÅÕ…±Ì Ñ¡¥Ì¹•¹€¤ì((%ô(($¼¨¨($€¨I•ÑÕÉ¹Ì„¹•Ü±¥¹”Í•µ•¹ÐÝ¥Ñ ½Á¥•Ù…±Õ•Ì™É½´Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨($€¨É•ÑÕÉ¸í1¥¹”Íô±½¹”½˜Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÌ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨Q¡¥Ì‘¥ÍÁ±…åÌ„½¹”Í¡…Á•¡•±Á•È½‰©•Ð™½È„í±¥¹¬MÁ½Ñ1¥¡Ñô¸(€¨(€¨©Ì(€¨½¹ÍÐÍÁ½Ñ1¥¡Ð€ô¹•ÜQ!I¹MÁ½Ñ1¥¡Ð €Áá™™™™™˜€¤ì(€¨ÍÁ½Ñ1¥¡Ð¹Á½Í¥Ñ¥½¸¹Í•Ð €ÄÀ°€ÄÀ°€ÄÀ€¤ì(€¨Í•¹”¹…‘ ÍÁ½Ñ1¥¡Ð€¤ì(€¨(€¨½¹ÍÐÍÁ½Ñ1¥¡Ñ!•±Á•È€ô¹•ÜQ!I¹MÁ½Ñ1¥¡Ñ!•±Á•È ÍÁ½Ñ1¥¡Ð€¤ì(€¨Í•¹”¹…‘ ÍÁ½Ñ1¥¡Ñ!•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌMÁ½Ñ1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍÁ½Ð±¥¡Ð¡•±Á•È¸($€¨($€¨Á…É…´í!•µ¥ÍÁ¡•É•1¥¡Ñô±¥¡Ð€´Q¡”±¥¡ÐÑ¼‰”Ù¥ÍÕ…±¥é•¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½Ét€´Q¡”¡•±Á•ÈÌ½±½È¸%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”($€¨Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥¡Ð°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡”±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”íMÁ½Ñ1¥¡Ñô($$€¨¼($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¨¨($$€¨Q¡”½±½ÈÁ…É…µ•Ñ•ÈÁ…ÍÍ•¥¸Ñ¡”½¹ÍÑÉÕÑ½È¸($$€¨%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ½Ñ1¥¡Ñ!•±Á•Èœì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl($$$À°€À°€À°€$À°€À°€Ä°($$$À°€À°€À°€$Ä°€À°€Ä°($$$À°€À°€À°$´Ä°€À°€Ä°($$$À°€À°€À°€$À°€Ä°€Ä°($$$À°€À°€À°€$À°€´Ä°€Ä($%tì(($%™½È€ ±•Ð¤€ô€À°¨€ô€Ä°°€ô€ÌÈì¤€ð°ì¤€¬¬°¨€¬¬€¤ì(($$%½¹ÍÐÀÄ€ô€ ¤€¼°€¤€¨5…Ñ ¹A$€¨€Èì($$%½¹ÍÐÀÈ€ô€ ¨€¼°€¤€¨5…Ñ ¹A$€¨€Èì(($$%Á½Í¥Ñ¥½¹Ì¹ÁÕÍ  ($$$%5…Ñ ¹½Ì ÀÄ€¤°5…Ñ ¹Í¥¸ ÀÄ€¤°€Ä°($$$%5…Ñ ¹½Ì ÀÈ€¤°5…Ñ ¹Í¥¸ ÀÈ€¤°€Ä($$$¤ì(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%Ñ¡¥Ì¹½¹”€ô¹•Ü1¥¹•M•µ•¹ÑÌ •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹½¹”€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹½¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÑ¼µ…Ñ Ñ¡”Á½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸½˜Ñ¡”($€¨±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì($%Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($$¼¼ÕÁ‘…Ñ”Ñ¡”±½…°µ…ÑÉ¥à‰…Í•½¸Ñ¡”Á…É•¹Ð…¹±¥¡ÐÑ…É•ÐÑÉ…¹Í™½ÉµÌ($%¥˜€ Ñ¡¥Ì¹Á…É•¹Ð€¤ì(($$%Ñ¡¥Ì¹Á…É•¹Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹µ…ÑÉ¥à($$$$¹½Áä Ñ¡¥Ì¹Á…É•¹Ð¹µ…ÑÉ¥á]½É±€¤($$$$¹¥¹Ù•ÉÐ ¤($$$$¹µÕ±Ñ¥Á±ä Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹µ…ÑÉ¥à¹½Áä Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì(($%ô(($%Ñ¡¥Ì¹µ…ÑÉ¥á]½É±¹½Áä Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì(($%½¹ÍÐ½¹•1•¹Ñ €ôÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”€üÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”€è€ÄÀÀÀì($%½¹ÍÐ½¹•]¥‘Ñ €ô½¹•1•¹Ñ €¨5…Ñ ¹Ñ…¸ Ñ¡¥Ì¹±¥¡Ð¹…¹±”€¤ì(($%Ñ¡¥Ì¹½¹”¹Í…±”¹Í•Ð ½¹•]¥‘Ñ °½¹•]¥‘Ñ °½¹•1•¹Ñ €¤ì(($%}Ù•Ñ½ÈÌ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì(($%Ñ¡¥Ì¹½¹”¹±½½­Ð }Ù•Ñ½ÈÌ€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÈ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}‰½¹•5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}µ…ÑÉ¥á]½É±‘%¹Ø€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì((¼¨¨(€¨¡•±Á•È½‰©•ÐÑ¼…ÍÍ¥ÍÐÝ¥Ñ Ù¥ÍÕ…±¥é¥¹œ„í±¥¹¬M­•±•Ñ½¹ô¸(€¨(€¨©Ì(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹M­•±•Ñ½¹!•±Á•È Í­¥¹¹•‘5•Í €¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌM­•±•Ñ½¹!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍ­•±•Ñ½¸¡•±Á•È¸($€¨($€¨Á…É…´í=‰©•ÐÍô½‰©•Ð€´€UÍÕ…±±ä…¸¥¹ÍÑ…¹”½˜í±¥¹¬M­¥¹¹•‘5•Í¡ô¸!½Ý•Ù•È°…¹ä€Í½‰©•Ð($€¨…¸‰”ÕÍ•¥˜¥ÐÉ•ÁÉ•Í•¹ÑÌ„¡¥•É…É¡ä½˜‰½¹•Ì€¡Í•”í±¥¹¬	½¹•ô¤¸($€¨¼(%½¹ÍÑÉÕÑ½È ½‰©•Ð€¤ì(($%½¹ÍÐ‰½¹•Ì€ô•Ñ	½¹•1¥ÍÐ ½‰©•Ð€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð‰½¹•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ‰½¹”€ô‰½¹•Íl¤tì(($$%¥˜€ ‰½¹”¹Á…É•¹Ð€˜˜‰½¹”¹Á…É•¹Ð¹¥Í	½¹”€¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%½±½ÉÌ¹ÁÕÍ  €À°€À°€À€¤ì($$$%½±½ÉÌ¹ÁÕÍ  €À°€À°€À€¤ì(($$%ô(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°‘•ÁÑ¡Q•ÍÐè™…±Í”°‘•ÁÑ¡]É¥Ñ”è™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$¼¨¨($$€¨Q¡¥Ì™±…œ…¸‰”ÕÍ•™½ÈÑåÁ”Ñ•ÍÑ¥¹œ¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨É•…‘½¹±ä($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹¥ÍM­•±•Ñ½¹!•±Á•È€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M­•±•Ñ½¹!•±Á•Èœì(($$¼¨¨($$€¨Q¡”½‰©•Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍô($$€¨¼($%Ñ¡¥Ì¹É½½Ð€ô½‰©•Ðì(($$¼¨¨($$€¨Q¡”±¥ÍÐ½˜‰½¹•ÌÑ¡…ÐÑ¡”¡•±Á•ÈÙ¥ÍÕ…±¥é•Ì¸($$€¨($$€¨ÑåÁ”íÉÉ…äñ	½¹”ùô($$€¨¼($%Ñ¡¥Ì¹‰½¹•Ì€ô‰½¹•Ìì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô½‰©•Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¼½±½ÉÌ(($%½¹ÍÐ½±½ÈÄ€ô¹•Ü½±½È €ÁàÀÀÀÁ™˜€¤ì($%½¹ÍÐ½±½ÈÈ€ô¹•Ü½±½È €ÁàÀÁ™˜ÀÀ€¤ì(($%Ñ¡¥Ì¹Í•Ñ½±½ÉÌ ½±½ÈÄ°½±½ÈÈ€¤ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ‰½¹•Ì€ôÑ¡¥Ì¹‰½¹•Ìì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì(($%}µ…ÑÉ¥á]½É±‘%¹Ø¹½Áä Ñ¡¥Ì¹É½½Ð¹µ…ÑÉ¥á]½É±€¤¹¥¹Ù•ÉÐ ¤ì(($%™½È€ ±•Ð¤€ô€À°¨€ô€Àì¤€ð‰½¹•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ‰½¹”€ô‰½¹•Íl¤tì(($$%¥˜€ ‰½¹”¹Á…É•¹Ð€˜˜‰½¹”¹Á…É•¹Ð¹¥Í	½¹”€¤ì(($$$%}‰½¹•5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì }µ…ÑÉ¥á]½É±‘%¹Ø°‰½¹”¹µ…ÑÉ¥á]½É±€¤ì($$$%}Ù•Ñ½ÈÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ }‰½¹•5…ÑÉ¥à€¤ì($$$%Á½Í¥Ñ¥½¸¹Í•Ñaeh ¨°}Ù•Ñ½ÈÈ¹à°}Ù•Ñ½ÈÈ¹ä°}Ù•Ñ½ÈÈ¹è€¤ì(($$$%}‰½¹•5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì }µ…ÑÉ¥á]½É±‘%¹Ø°‰½¹”¹Á…É•¹Ð¹µ…ÑÉ¥á]½É±€¤ì($$$%}Ù•Ñ½ÈÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ }‰½¹•5…ÑÉ¥à€¤ì($$$%Á½Í¥Ñ¥½¸¹Í•Ñaeh ¨€¬€Ä°}Ù•Ñ½ÈÈ¹à°}Ù•Ñ½ÈÈ¹ä°}Ù•Ñ½ÈÈ¹è€¤ì(($$$%¨€¬ô€Èì(($$%ô(($%ô(($%•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”½±½ÉÌ½˜Ñ¡”¡•±Á•È¸($€¨($€¨Á…É…´í½±½Éô½±½ÈÄ€´Q¡”™¥ÉÍÐ±¥¹”½±½È™½È•… ‰½¹”¸($€¨Á…É…´í½±½Éô½±½ÈÈ€´Q¡”Í•½¹±¥¹”½±½È™½È•… ‰½¹”¸($€¨É•ÑÕÉ¸íM­•±•Ñ½¹!•±Á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¡•±Á•È¸($€¨¼(%Í•Ñ½±½ÉÌ ½±½ÈÄ°½±½ÈÈ€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐ½±½ÉÑÑÉ¥‰ÕÑ”€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð½±½ÉÑÑÉ¥‰ÕÑ”¹½Õ¹Ðì¤€¬ô€È€¤ì(($$%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh ¤°½±½ÈÄ¹È°½±½ÈÄ¹œ°½±½ÈÄ¹ˆ€¤ì($$%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh ¤€¬€Ä°½±½ÈÈ¹È°½±½ÈÈ¹œ°½±½ÈÈ¹ˆ€¤ì(($%ô(($%½±½ÉÑÑÉ¥‰ÕÑ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô(()™Õ¹Ñ¥½¸•Ñ	½¹•1¥ÍÐ ½‰©•Ð€¤ì((%½¹ÍÐ‰½¹•1¥ÍÐ€ômtì((%¥˜€ ½‰©•Ð¹¥Í	½¹”€ôôôÑÉÕ”€¤ì(($%‰½¹•1¥ÍÐ¹ÁÕÍ  ½‰©•Ð€¤ì((%ô((%™½È€ ±•Ð¤€ô€Àì¤€ð½‰©•Ð¹¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($%‰½¹•1¥ÍÐ¹ÁÕÍ  €¸¸¹•Ñ	½¹•1¥ÍÐ ½‰©•Ð¹¡¥±‘É•¹l¤t€¤€¤ì((%ô((%É•ÑÕÉ¸‰½¹•1¥ÍÐì()ô((¼¨¨(€¨Q¡¥Ì‘¥ÍÁ±…åÌ„¡•±Á•È½‰©•Ð½¹Í¥ÍÑ¥¹œ½˜„ÍÁ¡•É¥…°µ•Í ™½È(€¨Ù¥ÍÕ…±¥é¥¹œ…¸¥¹ÍÑ…¹”½˜í±¥¹¬A½¥¹Ñ1¥¡Ñô¸(€¨(€¨©Ì(€¨½¹ÍÐÁ½¥¹Ñ1¥¡Ð€ô¹•ÜQ!I¹A½¥¹Ñ1¥¡Ð €Áá™˜ÀÀÀÀ°€Ä°€ÄÀÀ€¤ì(€¨Á½¥¹Ñ1¥¡Ð¹Á½Í¥Ñ¥½¸¹Í•Ð €ÄÀ°€ÄÀ°€ÄÀ€¤ì(€¨Í•¹”¹…‘ Á½¥¹Ñ1¥¡Ð€¤ì(€¨(€¨½¹ÍÐÍÁ¡•É•M¥é”€ô€Äì(€¨½¹ÍÐÁ½¥¹Ñ1¥¡Ñ!•±Á•È€ô¹•ÜQ!I¹A½¥¹Ñ1¥¡Ñ!•±Á•È Á½¥¹Ñ1¥¡Ð°ÍÁ¡•É•M¥é”€¤ì(€¨Í•¹”¹…‘ Á½¥¹Ñ1¥¡Ñ!•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ5•Í (€¨¼)±…ÍÌA½¥¹Ñ1¥¡Ñ!•±Á•È•áÑ•¹‘Ì5•Í ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁ½¥¹Ð±¥¡Ð¡•±Á•È¸($€¨($€¨Á…É…´íA½¥¹Ñ1¥¡Ñô±¥¡Ð€´Q¡”±¥¡ÐÑ¼‰”Ù¥ÍÕ…±¥é•¸($€¨Á…É…´í¹Õµ‰•ÉômÍÁ¡•É•M¥é”ôÅt€´Q¡”Í¥é”½˜Ñ¡”ÍÁ¡•É”¡•±Á•È¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½Ét€´Q¡”¡•±Á•ÈÌ½±½È¸%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”($€¨Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥¡Ð°ÍÁ¡•É•M¥é”°½±½È€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•ÜMÁ¡•É••½µ•ÑÉä ÍÁ¡•É•M¥é”°€Ð°€È€¤ì($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ìÝ¥É•™É…µ”èÑÉÕ”°™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$¼¨¨($$€¨Q¡”±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í!•µ¥ÍÁ¡•É•1¥¡Ñô($$€¨¼($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($$¼¨¨($$€¨Q¡”½±½ÈÁ…É…µ•Ñ•ÈÁ…ÍÍ•¥¸Ñ¡”½¹ÍÑÉÕÑ½È¸($$€¨%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹Ñ1¥¡Ñ!•±Á•Èœì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ôÑ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((($$¼¨($¼¼Q=<è‘•±•Ñ”Ñ¡¥Ì½µµ•¹Ðü(%½¹ÍÐ‘¥ÍÑ…¹••½µ•ÑÉä€ô¹•ÜQ!I¹%½Í…¡•‘É½¹•½µ•ÑÉä €Ä°€È€¤ì(%½¹ÍÐ‘¥ÍÑ…¹•5…Ñ•É¥…°€ô¹•ÜQ!I¹5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè¡•á½±½È°™½œè™…±Í”°Ý¥É•™É…µ”èÑÉÕ”°½Á…¥Ñäè€À¸Ä°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”ô€¤ì((%Ñ¡¥Ì¹±¥¡ÑMÁ¡•É”€ô¹•ÜQ!I¹5•Í  ‰Õ±‰•½µ•ÑÉä°‰Õ±‰5…Ñ•É¥…°€¤ì(%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”€ô¹•ÜQ!I¹5•Í  ‘¥ÍÑ…¹••½µ•ÑÉä°‘¥ÍÑ…¹•5…Ñ•É¥…°€¤ì((%½¹ÍÐ€ô±¥¡Ð¹‘¥ÍÑ…¹”ì((%¥˜€ €ôôô€À¸À€¤ì(($%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ô™…±Í”ì((%ô•±Í”ì(($%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Í…±”¹Í•Ð °°€¤ì((%ô((%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”€¤ì($¨¼((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÑ¼µ…Ñ Ñ¡”Á½Í¥Ñ¥½¸½˜Ñ¡”($€¨±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô(($$¼¨($%½¹ÍÐ€ôÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”ì(($%¥˜€ €ôôô€À¸À€¤ì(($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ô™…±Í”ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ôÑÉÕ”ì($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Í…±”¹Í•Ð °°€¤ì(($%ô($$¨¼((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}½±½ÈÄ€ô€¼©}}AUI}|¨¼¹•Ü½±½È ¤ì)½¹ÍÐ}½±½ÈÈ€ô€¼©}}AUI}|¨¼¹•Ü½±½È ¤ì((¼¨¨(€¨É•…Ñ•Ì„Ù¥ÍÕ…°…¥½¹Í¥ÍÑ¥¹œ½˜„ÍÁ¡•É¥…°µ•Í ™½È„(€¨¥Ù•¸í±¥¹¬!•µ¥ÍÁ¡•É•1¥¡Ñô¸(€¨(€¨©Ì(€¨½¹ÍÐ±¥¡Ð€ô¹•ÜQ!I¹!•µ¥ÍÁ¡•É•1¥¡Ð €Áá™™™™‰ˆ°€ÁàÀàÀàÈÀ°€Ä€¤ì(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•È ±¥¡Ð°€Ô€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌ!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü¡•µ¥ÍÁ¡•É”±¥¡Ð¡•±Á•È¸($€¨($€¨Á…É…´í!•µ¥ÍÁ¡•É•1¥¡Ñô±¥¡Ð€´Q¡”±¥¡ÐÑ¼‰”Ù¥ÍÕ…±¥é•¸($€¨Á…É…´í¹Õµ‰•ÉômÍ¥é”ôÅt€´Q¡”Í¥é”½˜Ñ¡”µ•Í ÕÍ•Ñ¼Ù¥ÍÕ…±¥é”Ñ¡”±¥¡Ð¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½Ét€´Q¡”¡•±Á•ÈÌ½±½È¸%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”($€¨Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥¡Ð°Í¥é”°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡”±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í!•µ¥ÍÁ¡•É•1¥¡Ñô($$€¨¼($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¨¨($$€¨Q¡”½±½ÈÁ…É…µ•Ñ•ÈÁ…ÍÍ•¥¸Ñ¡”½¹ÍÑÉÕÑ½È¸($$€¨%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•Èœì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü=Ñ…¡•‘É½¹•½µ•ÑÉä Í¥é”€¤ì($%•½µ•ÑÉä¹É½Ñ…Ñ•d 5…Ñ ¹A$€¨€À¸Ô€¤ì(($%Ñ¡¥Ì¹µ…Ñ•É¥…°€ô¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ìÝ¥É•™É…µ”èÑÉÕ”°™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì($%¥˜€ Ñ¡¥Ì¹½±½È€ôôôÕ¹‘•™¥¹•€¤Ñ¡¥Ì¹µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ôÑÉÕ”ì(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì($%½¹ÍÐ½±½ÉÌ€ô¹•Ü±½…ÐÌÉÉÉ…ä Á½Í¥Ñ¥½¸¹½Õ¹Ð€¨€Ì€¤ì(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%Ñ¡¥Ì¹…‘ ¹•Ü5•Í  •½µ•ÑÉä°Ñ¡¥Ì¹µ…Ñ•É¥…°€¤€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÑ¼µ…Ñ Ñ¡”Á½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸½˜Ñ¡”($€¨±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%½¹ÍÐµ•Í €ôÑ¡¥Ì¹¡¥±‘É•¹l€Àtì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%½¹ÍÐ½±½ÉÌ€ôµ•Í ¹•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ€¤ì(($$%}½±½ÈÄ¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì($$%}½±½ÈÈ¹½Áä Ñ¡¥Ì¹±¥¡Ð¹É½Õ¹‘½±½È€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô½±½ÉÌ¹½Õ¹Ðì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ½±½È€ô€ ¤€ð€ °€¼€È€¤€¤€ü}½±½ÈÄ€è}½±½ÈÈì(($$$%½±½ÉÌ¹Í•Ñaeh ¤°½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($$%½±½ÉÌ¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%ô(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%µ•Í ¹±½½­Ð }Ù•Ñ½ÈÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤¹¹•…Ñ” ¤€¤ì((%ô()ô((¼¨¨(€¨Q¡”¡•±Á•È¥Ì…¸½‰©•ÐÑ¼‘•™¥¹”É¥‘Ì¸É¥‘Ì…É”ÑÝ¼µ‘¥µ•¹Í¥½¹…°(€¨…ÉÉ…åÌ½˜±¥¹•Ì¸(€¨(€¨©Ì(€¨½¹ÍÐÍ¥é”€ô€ÄÀì(€¨½¹ÍÐ‘¥Ù¥Í¥½¹Ì€ô€ÄÀì(€¨(€¨½¹ÍÐÉ¥‘!•±Á•È€ô¹•ÜQ!I¹É¥‘!•±Á•È Í¥é”°‘¥Ù¥Í¥½¹Ì€¤ì(€¨Í•¹”¹…‘ É¥‘!•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌÉ¥‘!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÉ¥¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÍ¥é”ôÄÁt€´Q¡”Í¥é”½˜Ñ¡”É¥¸($€¨Á…É…´í¹Õµ‰•Éôm‘¥Ù¥Í¥½¹ÌôÄÁt€´Q¡”¹Õµ‰•È½˜‘¥Ù¥Í¥½¹Ì…É½ÍÌÑ¡”É¥¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈÄôÁàÐÐÐÐÐÑt€´Q¡”½±½È½˜Ñ¡”•¹Ñ•È±¥¹”¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈÈôÁààààààát€´Q¡”½±½È½˜Ñ¡”±¥¹•Ì½˜Ñ¡”É¥¸($€¨¼(%½¹ÍÑÉÕÑ½È Í¥é”€ô€ÄÀ°‘¥Ù¥Í¥½¹Ì€ô€ÄÀ°½±½ÈÄ€ô€ÁàÐÐÐÐÐÐ°½±½ÈÈ€ô€Áààààààà€¤ì(($%½±½ÈÄ€ô¹•Ü½±½È ½±½ÈÄ€¤ì($%½±½ÈÈ€ô¹•Ü½±½È ½±½ÈÈ€¤ì(($%½¹ÍÐ•¹Ñ•È€ô‘¥Ù¥Í¥½¹Ì€¼€Èì($%½¹ÍÐÍÑ•À€ôÍ¥é”€¼‘¥Ù¥Í¥½¹Ìì($%½¹ÍÐ¡…±™M¥é”€ôÍ¥é”€¼€Èì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômt°½±½ÉÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°¨€ô€À°¬€ô€´¡…±™M¥é”ì¤€ðô‘¥Ù¥Í¥½¹Ìì¤€¬¬°¬€¬ôÍÑ•À€¤ì(($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €´¡…±™M¥é”°€À°¬°¡…±™M¥é”°€À°¬€¤ì($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ¬°€À°€´¡…±™M¥é”°¬°€À°¡…±™M¥é”€¤ì(($$%½¹ÍÐ½±½È€ô¤€ôôô•¹Ñ•È€ü½±½ÈÄ€è½±½ÈÈì(($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€É¥‘!•±Á•Èœì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô((¼¨¨(€¨Q¡¥Ì¡•±Á•È¥Ì…¸½‰©•ÐÑ¼‘•™¥¹”Á½±…ÈÉ¥‘Ì¸É¥‘Ì…É”(€¨ÑÝ¼µ‘¥µ•¹Í¥½¹…°…ÉÉ…åÌ½˜±¥¹•Ì¸(€¨(€¨©Ì(€¨½¹ÍÐÉ…‘¥ÕÌ€ô€ÄÀì(€¨½¹ÍÐÍ•Ñ½ÉÌ€ô€ÄØì(€¨½¹ÍÐÉ¥¹Ì€ô€àì(€¨½¹ÍÐ‘¥Ù¥Í¥½¹Ì€ô€ØÐì(€¨(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹A½±…ÉÉ¥‘!•±Á•È É…‘¥ÕÌ°Í•Ñ½ÉÌ°É¥¹Ì°‘¥Ù¥Í¥½¹Ì€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌA½±…ÉÉ¥‘!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁ½±…ÈÉ¥¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÉ…‘¥ÕÌôÄÁt€´Q¡”É…‘¥ÕÌ½˜Ñ¡”Á½±…ÈÉ¥¸Q¡¥Ì…¸‰”…¹äÁ½Í¥Ñ¥Ù”¹Õµ‰•È¸($€¨Á…É…´í¹Õµ‰•ÉômÍ•Ñ½ÉÌôÄÙt€´Q¡”¹Õµ‰•È½˜Í•Ñ½ÉÌÑ¡”É¥Ý¥±°‰”‘¥Ù¥‘•¥¹Ñ¼¸Q¡¥Ì…¸‰”…¹äÁ½Í¥Ñ¥Ù”¥¹Ñ••È¸($€¨Á…É…´í¹Õµ‰•ÉômÉ¥¹ÌôÄÙt€´Q¡”¹Õµ‰•È½˜É¥¹Ì¸Q¡¥Ì…¸‰”…¹äÁ½Í¥Ñ¥Ù”¥¹Ñ••È¸($€¨Á…É…´í¹Õµ‰•Éôm‘¥Ù¥Í¥½¹ÌôØÑt€´Q¡”¹Õµ‰•È½˜±¥¹”Í•µ•¹ÑÌÕÍ•™½È•… ¥É±”¸Q¡¥Ì…¸‰”…¹äÁ½Í¥Ñ¥Ù”¥¹Ñ••È¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈÄôÁàÐÐÐÐÐÑt€´Q¡”™¥ÉÍÐ½±½ÈÕÍ•™½ÈÉ¥•±•µ•¹ÑÌ¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈÈôÁààààààát€´€Q¡”Í•½¹½±½ÈÕÍ•™½ÈÉ¥•±•µ•¹ÑÌ¸($€¨¼(%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€ÄÀ°Í•Ñ½ÉÌ€ô€ÄØ°É¥¹Ì€ô€à°‘¥Ù¥Í¥½¹Ì€ô€ØÐ°½±½ÈÄ€ô€ÁàÐÐÐÐÐÐ°½±½ÈÈ€ô€Áààààààà€¤ì(($%½±½ÈÄ€ô¹•Ü½±½È ½±½ÈÄ€¤ì($%½±½ÈÈ€ô¹•Ü½±½È ½±½ÈÈ€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($$¼¼É•…Ñ”Ñ¡”Í•Ñ½ÉÌ(($%¥˜€ Í•Ñ½ÉÌ€ø€Ä€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÍ•Ñ½ÉÌì¤€¬¬€¤ì(($$$%½¹ÍÐØ€ô€ ¤€¼Í•Ñ½ÉÌ€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%½¹ÍÐà€ô5…Ñ ¹Í¥¸ Ø€¤€¨É…‘¥ÕÌì($$$%½¹ÍÐè€ô5…Ñ ¹½Ì Ø€¤€¨É…‘¥ÕÌì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì(($$$%½¹ÍÐ½±½È€ô€ ¤€˜€Ä€¤€ü½±½ÈÄ€è½±½ÈÈì(($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($%ô(($$¼¼É•…Ñ”Ñ¡”É¥¹Ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÉ¥¹Ìì¤€¬¬€¤ì(($$%½¹ÍÐ½±½È€ô€ ¤€˜€Ä€¤€ü½±½ÈÄ€è½±½ÈÈì(($$%½¹ÍÐÈ€ôÉ…‘¥ÕÌ€´€ É…‘¥ÕÌ€¼É¥¹Ì€¨¤€¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ð‘¥Ù¥Í¥½¹Ìì¨€¬¬€¤ì(($$$$¼¼™¥ÉÍÐÙ•ÉÑ•à(($$$%±•ÐØ€ô€ ¨€¼‘¥Ù¥Í¥½¹Ì€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%±•Ðà€ô5…Ñ ¹Í¥¸ Ø€¤€¨Èì($$$%±•Ðè€ô5…Ñ ¹½Ì Ø€¤€¨Èì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$$$¼¼Í•½¹Ù•ÉÑ•à(($$$%Ø€ô€ € ¨€¬€Ä€¤€¼‘¥Ù¥Í¥½¹Ì€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%à€ô5…Ñ ¹Í¥¸ Ø€¤€¨Èì($$$%è€ô5…Ñ ¹½Ì Ø€¤€¨Èì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½±…ÉÉ¥‘!•±Á•Èœì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()½¹ÍÐ}ØÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ØÈ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ØÌ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì((¼¨¨(€¨!•±Á•È½‰©•ÐÑ¼…ÍÍ¥ÍÐÝ¥Ñ Ù¥ÍÕ…±¥é¥¹œ„í±¥¹¬¥É•Ñ¥½¹…±1¥¡ÑôÌ(€¨•™™•Ð½¸Ñ¡”Í•¹”¸Q¡¥Ì½¹Í¥ÍÑÌ½˜Á±…¹”…¹„±¥¹”É•ÁÉ•Í•¹Ñ¥¹œÑ¡”(€¨±¥¡ÐÌÁ½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸¸(€¨(€¨©Ì(€¨½¹ÍÐ±¥¡Ð€ô¹•ÜQ!I¹¥É•Ñ¥½¹…±1¥¡Ð €Áá€¤ì(€¨Í•¹”¹…‘ ±¥¡Ð€¤ì(€¨(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•È ±¥¡Ð°€Ô€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌ¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‘¥É•Ñ¥½¹…°±¥¡Ð¡•±Á•È¸($€¨($€¨Á…É…´í¥É•Ñ¥½¹…±1¥¡Ñô±¥¡Ð€´Q¡”±¥¡ÐÑ¼‰”Ù¥ÍÕ…±¥é•¸($€¨Á…É…´í¹Õµ‰•ÉômÍ¥é”ôÅt€´Q¡”‘¥µ•¹Í¥½¹Ì½˜Ñ¡”Á±…¹”¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½Ét€´Q¡”¡•±Á•ÈÌ½±½È¸%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”($€¨Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($€¨¼(%½¹ÍÑÉÕÑ½È ±¥¡Ð°Í¥é”°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡”±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í¥É•Ñ¥½¹…±1¥¡Ñô($$€¨¼($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¨¨($$€¨Q¡”½±½ÈÁ…É…µ•Ñ•ÈÁ…ÍÍ•¥¸Ñ¡”½¹ÍÑÉÕÑ½È¸($$€¨%˜¹½ÐÍ•Ð°Ñ¡”¡•±Á•ÈÝ¥±°Ñ…­”Ñ¡”½±½È½˜Ñ¡”±¥¡Ð¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•Èœì(($%¥˜€ Í¥é”€ôôôÕ¹‘•™¥¹•€¤Í¥é”€ô€Äì(($%±•Ð•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l($$$´Í¥é”°Í¥é”°€À°($$%Í¥é”°Í¥é”°€À°($$%Í¥é”°€´Í¥é”°€À°($$$´Í¥é”°€´Í¥é”°€À°($$$´Í¥é”°Í¥é”°€À($%t°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($$¼¨¨($$€¨½¹Ñ…¥¹ÌÑ¡”±¥¹”Í¡½Ý¥¹œÑ¡”±½…Ñ¥½¸½˜Ñ¡”‘¥É•Ñ¥½¹…°±¥¡Ð¸($$€¨($$€¨ÑåÁ”í1¥¹•ô($$€¨¼($%Ñ¡¥Ì¹±¥¡ÑA±…¹”€ô¹•Ü1¥¹” •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¡ÑA±…¹”€¤ì(($%•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l€À°€À°€À°€À°€À°€Ät°€Ì€¤€¤ì(($$¼¨¨($$€¨I•ÁÉ•Í•¹ÑÌÑ¡”Ñ…É•Ð±¥¹”½˜Ñ¡”‘¥É•Ñ¥½¹…°±¥¡Ð¸($$€¨($$€¨ÑåÁ”í1¥¹•ô($$€¨¼($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”€ô¹•Ü1¥¹” •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÑ¼µ…Ñ Ñ¡”Á½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸½˜Ñ¡”($€¨±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì($%Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%}ØÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%}ØÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì($%}ØÌ¹ÍÕ‰Y•Ñ½ÉÌ }ØÈ°}ØÄ€¤ì(($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹±½½­Ð }ØÈ€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì($$%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì($$%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹±½½­Ð }ØÈ€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹Í…±”¹è€ô}ØÌ¹±•¹Ñ  ¤ì((%ô()ô()½¹ÍÐ}Ù•Ñ½È€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}…µ•É„€ô€¼©}}AUI}|¨¼¹•Ü…µ•É„ ¤ì((¼¨¨(€¨Q¡¥Ì¡•±ÁÌÝ¥Ñ Ù¥ÍÕ…±¥é¥¹œÝ¡…Ð„…µ•É„½¹Ñ…¥¹Ì¥¸¥ÑÌ™ÉÕÍÑÕ´¸%Ð(€¨Ù¥ÍÕ…±¥é•ÌÑ¡”™ÉÕÍÑÕ´½˜„…µ•É„ÕÍ¥¹œ„±¥¹”Í•µ•¹ÑÌ¸(€¨(€¨	…Í•½¸™ÉÕÍÑÕ´Ù¥ÍÕ…±¥é…Ñ¥½¸¥¸m±¥¡Ñ°¹©ÌÍ¡…‘½Ýµ…À•á…µÁ±•uí±¥¹¬¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½•Ù…¹Ü½±¥¡Ñ°¹©Ì½‰±½ˆ½µ…ÍÑ•È½Ñ•ÍÑÌ½Í¡…‘½Ýµ…À¹¡Ñµ±ô¸(€¨(€¨…µ•É…!•±Á•É€µÕÍÐ‰”„¡¥±½˜Ñ¡”Í•¹”¸(€¨(€¨©Ì(€¨½¹ÍÐ…µ•É„€ô¹•ÜQ!I¹A•ÉÍÁ•Ñ¥Ù•…µ•É„ €ÜÔ°Ý¥¹‘½Ü¹¥¹¹•É]¥‘Ñ €¼Ý¥¹‘½Ü¹¥¹¹•É!•¥¡Ð°€À¸Ä°€ÄÀÀÀ€¤ì(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹…µ•É…!•±Á•È …µ•É„€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌ…µ•É…!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…ÉÉ½Ü¡•±Á•È¸($€¨($€¨Á…É…´í…µ•É…ô…µ•É„€´Q¡”…µ•É„Ñ¼Ù¥ÍÕ…±¥é”¸($€¨¼(%½¹ÍÑÉÕÑ½È …µ•É„€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè€Áá™™™™™˜°Ù•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($%½¹ÍÐÁ½¥¹Ñ5…À€ôíôì(($$¼¼¹•…È(($%…‘‘1¥¹” €¸Äœ°€¸Èœ€¤ì($%…‘‘1¥¹” €¸Èœ°€¸Ðœ€¤ì($%…‘‘1¥¹” €¸Ðœ°€¸Ìœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€¸Äœ€¤ì(($$¼¼™…È(($%…‘‘1¥¹” €˜Äœ°€˜Èœ€¤ì($%…‘‘1¥¹” €˜Èœ°€˜Ðœ€¤ì($%…‘‘1¥¹” €˜Ðœ°€˜Ìœ€¤ì($%…‘‘1¥¹” €˜Ìœ°€˜Äœ€¤ì(($$¼¼Í¥‘•Ì(($%…‘‘1¥¹” €¸Äœ°€˜Äœ€¤ì($%…‘‘1¥¹” €¸Èœ°€˜Èœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€˜Ìœ€¤ì($%…‘‘1¥¹” €¸Ðœ°€˜Ðœ€¤ì(($$¼¼½¹”(($%…‘‘1¥¹” €Àœ°€¸Äœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Èœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Ìœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Ðœ€¤ì(($$¼¼ÕÀ(($%…‘‘1¥¹” €ÔÄœ°€ÔÈœ€¤ì($%…‘‘1¥¹” €ÔÈœ°€ÔÌœ€¤ì($%…‘‘1¥¹” €ÔÌœ°€ÔÄœ€¤ì(($$¼¼Ñ…É•Ð(($%…‘‘1¥¹” €Œœ°€Ðœ€¤ì($%…‘‘1¥¹” €Àœ°€Œœ€¤ì(($$¼¼É½ÍÌ(($%…‘‘1¥¹” €¸Äœ°€¸Èœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€¸Ðœ€¤ì(($%…‘‘1¥¹” €˜Äœ°€˜Èœ€¤ì($%…‘‘1¥¹” €˜Ìœ°€˜Ðœ€¤ì(($%™Õ¹Ñ¥½¸…‘‘1¥¹” „°ˆ€¤ì(($$%…‘‘A½¥¹Ð „€¤ì($$%…‘‘A½¥¹Ð ˆ€¤ì(($%ô(($%™Õ¹Ñ¥½¸…‘‘A½¥¹Ð ¥€¤ì(($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$%½±½ÉÌ¹ÁÕÍ  €À°€À°€À€¤ì(($$%¥˜€ Á½¥¹Ñ5…Ál¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%Á½¥¹Ñ5…Ál¥t€ômtì(($$%ô(($$%Á½¥¹Ñ5…Ál¥t¹ÁÕÍ  € Ù•ÉÑ¥•Ì¹±•¹Ñ €¼€Ì€¤€´€Ä€¤ì(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€…µ•É…!•±Á•Èœì(($$¼¨¨($$€¨Q¡”…µ•É„‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í…µ•É…ô($$€¨¼($%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì($%¥˜€ Ñ¡¥Ì¹…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à€¤Ñ¡¥Ì¹…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô…µ•É„¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($$¼¨¨($$€¨Q¡¥Ì½¹Ñ…¥¹ÌÑ¡”Á½¥¹ÑÌÕÍ•Ñ¼Ù¥ÍÕ…±¥é”Ñ¡”…µ•É„¸($$€¨($$€¨ÑåÁ”í=‰©•ÐñÍÑÉ¥¹œ±ÉÉ…äñ¹Õµ‰•Èøùô($$€¨¼($%Ñ¡¥Ì¹Á½¥¹Ñ5…À€ôÁ½¥¹Ñ5…Àì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì(($$¼¼½±½ÉÌ(($%½¹ÍÐ½±½ÉÉÕÍÑÕ´€ô¹•Ü½±½È €Áá™™…„ÀÀ€¤ì($%½¹ÍÐ½±½É½¹”€ô¹•Ü½±½È €Áá™˜ÀÀÀÀ€¤ì($%½¹ÍÐ½±½ÉUÀ€ô¹•Ü½±½È €ÁàÀÁ……™˜€¤ì($%½¹ÍÐ½±½ÉQ…É•Ð€ô¹•Ü½±½È €Áá™™™™™˜€¤ì($%½¹ÍÐ½±½ÉÉ½ÍÌ€ô¹•Ü½±½È €ÁàÌÌÌÌÌÌ€¤ì(($%Ñ¡¥Ì¹Í•Ñ½±½ÉÌ ½±½ÉÉÕÍÑÕ´°½±½É½¹”°½±½ÉUÀ°½±½ÉQ…É•Ð°½±½ÉÉ½ÍÌ€¤ì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”½±½ÉÌ½˜Ñ¡”¡•±Á•È¸($€¨($€¨Á…É…´í½±½Éô™ÉÕÍÑÕ´€´Q¡”™ÉÕÍÑÕ´±¥¹”½±½È¸($€¨Á…É…´í½±½Éô½¹”€´Q¡”½¹”±¥¹”½±½È¸($€¨Á…É…´í½±½ÉôÕÀ€´Q¡”ÕÀ±¥¹”½±½È¸($€¨Á…É…´í½±½ÉôÑ…É•Ð€´Q¡”Ñ…É•Ð±¥¹”½±½È¸($€¨Á…É…´í½±½ÉôÉ½ÍÌ€´Q¡”É½ÍÌ±¥¹”½±½È¸($€¨É•ÑÕÉ¸í…µ•É…!•±Á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¡•±Á•È¸($€¨¼(%Í•Ñ½±½ÉÌ ™ÉÕÍÑÕ´°½¹”°ÕÀ°Ñ…É•Ð°É½ÍÌ€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì(($%½¹ÍÐ½±½ÉÑÑÉ¥‰ÕÑ”€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ€¤ì(($$¼¼¹•…È(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €À°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ä°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ä°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €È°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ì°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸È°¸Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ð°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ô°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ð°¸Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ø°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ü°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ì°¸Ä(($$¼¼™…È(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €à°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ä°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ä°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÀ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÄ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜È°˜Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÈ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÌ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ð°˜Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÐ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÔ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ì°˜Ä(($$¼¼Í¥‘•Ì(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄØ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÜ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ä°˜Ä($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Äà°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ää°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸È°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÀ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÄ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ì°˜Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÈ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÌ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ð°˜Ð(($$¼¼½¹”(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÐ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÔ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ä($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈØ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÜ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Èà°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Èä°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÀ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÄ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ð(($$¼¼ÕÀ(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÈ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÌ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÄ°ÔÈ($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÐ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÔ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÈ°ÔÌ($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌØ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÜ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÌ°ÔÄ(($$¼¼Ñ…É•Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ìà°Ñ…É•Ð¹È°Ñ…É•Ð¹œ°Ñ…É•Ð¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ìä°Ñ…É•Ð¹È°Ñ…É•Ð¹œ°Ñ…É•Ð¹ˆ€¤ì€¼¼Œ°Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÀ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÄ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼À°Œ(($$¼¼É½ÍÌ(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÈ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÌ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼¸Ä°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÐ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÔ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼¸Ì°¸Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐØ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÜ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼˜Ä°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ðà°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ðä°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼˜Ì°˜Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•È‰…Í•½¸Ñ¡”ÁÉ½©•Ñ¥½¸µ…ÑÉ¥à½˜Ñ¡”…µ•É„¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐÁ½¥¹Ñ5…À€ôÑ¡¥Ì¹Á½¥¹Ñ5…Àì(($%½¹ÍÐÜ€ô€Ä° €ô€Äì(($%±•Ð¹•…Éh°™…Éhì(($$¼¼Ý”¹••©ÕÍÐ…µ•É„ÁÉ½©•Ñ¥½¸µ…ÑÉ¥à¥¹Ù•ÉÍ”($$¼¼Ý½É±µ…ÑÉ¥àµÕÍÐ‰”¥‘•¹Ñ¥Ñä(($%}…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥á%¹Ù•ÉÍ”¹½Áä Ñ¡¥Ì¹…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥á%¹Ù•ÉÍ”€¤ì(($$¼¼‘©ÕÍÐèÙ…±Õ•Ì‰…Í•½¸½½É‘¥¹…Ñ”ÍåÍÑ•´(($%¥˜€ Ñ¡¥Ì¹…µ•É„¹É•Ù•ÉÍ•‘•ÁÑ €ôôôÑÉÕ”€¤ì(($$%¹•…Éh€ô€Äì($$%™…Éh€ô€Àì(($%ô•±Í”ì(($$%¥˜€ Ñ¡¥Ì¹…µ•É„¹½½É‘¥¹…Ñ•MåÍÑ•´€ôôô]•‰1½½É‘¥¹…Ñ•MåÍÑ•´€¤ì(($$$%¹•…Éh€ô€´Äì($$$%™…Éh€ô€Äì(($$%ô•±Í”¥˜€ Ñ¡¥Ì¹…µ•É„¹½½É‘¥¹…Ñ•MåÍÑ•´€ôôô]•‰AU½½É‘¥¹…Ñ•MåÍÑ•´€¤ì(($$$%¹•…Éh€ô€Àì($$$%™…Éh€ô€Äì(($$%ô•±Í”ì(($$$%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹…µ•É…!•±Á•È¹ÕÁ‘…Ñ” ¤è%¹Ù…±¥½½É‘¥¹…Ñ”ÍåÍÑ•´è€œ€¬Ñ¡¥Ì¹…µ•É„¹½½É‘¥¹…Ñ•MåÍÑ•´€¤ì(($$%ô(($%ô((($$¼¼•¹Ñ•È€¼Ñ…É•Ð($%Í•ÑA½¥¹Ð €Œœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€À°¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€À°™…Éh€¤ì(($$¼¼¹•…È(($%Í•ÑA½¥¹Ð €¸Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€´ °¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€´ °¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü° °¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü° °¹•…Éh€¤ì(($$¼¼™…È(($%Í•ÑA½¥¹Ð €˜Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€´ °™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€´ °™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü° °™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü° °™…Éh€¤ì(($$¼¼ÕÀ(($%Í•ÑA½¥¹Ð €ÔÄœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü€¨€À¸Ü° €¨€Ä¸Ä°¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €ÔÈœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü€¨€À¸Ü° €¨€Ä¸Ä°¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €ÔÌœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° €¨€È°¹•…Éh€¤ì(($$¼¼É½ÍÌ(($%Í•ÑA½¥¹Ð €˜Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€À°™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€À°™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€´ °™…Éh€¤ì($%Í•ÑA½¥¹Ð €˜Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° °™…Éh€¤ì(($%Í•ÑA½¥¹Ð €¸Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€À°¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€À°¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€´ °¹•…Éh€¤ì($%Í•ÑA½¥¹Ð €¸Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° °¹•…Éh€¤ì(($%•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô(()™Õ¹Ñ¥½¸Í•ÑA½¥¹Ð Á½¥¹Ð°Á½¥¹Ñ5…À°•½µ•ÑÉä°…µ•É„°à°ä°è€¤ì((%}Ù•Ñ½È¹Í•Ð à°ä°è€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤ì((%½¹ÍÐÁ½¥¹ÑÌ€ôÁ½¥¹Ñ5…ÁlÁ½¥¹Ðtì((%¥˜€ Á½¥¹ÑÌ€„ôôÕ¹‘•™¥¹•€¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%Á½Í¥Ñ¥½¸¹Í•Ñaeh Á½¥¹ÑÍl¤t°}Ù•Ñ½È¹à°}Ù•Ñ½È¹ä°}Ù•Ñ½È¹è€¤ì(($%ô((%ô()ô()½¹ÍÐ}‰½à€ô€¼©}}AUI}|¨¼¹•Ü	½àÌ ¤ì((¼¨¨(€¨!•±Á•È½‰©•ÐÑ¼É…Á¡¥…±±äÍ¡½ÜÑ¡”Ý½É±µ…á¥Ìµ…±¥¹•‰½Õ¹‘¥¹œ‰½à(€¨…É½Õ¹…¸½‰©•Ð¸Q¡”…ÑÕ…°‰½Õ¹‘¥¹œ‰½à¥Ì¡…¹‘±•Ý¥Ñ í±¥¹¬	½àÍô°(€¨Ñ¡¥Ì¥Ì©ÕÍÐ„Ù¥ÍÕ…°¡•±Á•È™½È‘•‰Õ¥¹œ¸%Ð…¸‰”…ÕÑ½µ…Ñ¥…±±ä(€¨É•Í¥é•Ý¥Ñ í±¥¹¬	½á!•±Á•ÈÕÁ‘…Ñ•ôÝ¡•¸Ñ¡”½‰©•Ð¥ÐÌÉ•…Ñ•™É½´(€¨¥ÌÑÉ…¹Í™½Éµ•¸9½Ñ”Ñ¡…ÐÑ¡”½‰©•ÐµÕÍÐ¡…Ù”„•½µ•ÑÉä™½ÈÑ¡¥ÌÑ¼Ý½É¬°(€¨Í¼¥ÐÝ½¸ÐÝ½É¬Ý¥Ñ ÍÁÉ¥Ñ•Ì¸(€¨(€¨©Ì(€¨½¹ÍÐÍÁ¡•É”€ô¹•ÜQ!I¹MÁ¡•É••½µ•ÑÉä ¤ì(€¨½¹ÍÐ½‰©•Ð€ô¹•ÜQ!I¹5•Í  ÍÁ¡•É”°¹•ÜQ!I¹5•Í¡	…Í¥5…Ñ•É¥…° €Áá™˜ÀÀÀÀ€¤€¤ì(€¨½¹ÍÐ‰½à€ô¹•ÜQ!I¹	½á!•±Á•È ½‰©•Ð°€Áá™™™˜ÀÀ€¤ì(€¨Í•¹”¹…‘ ‰½à€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌ	½á!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‰½à¡•±Á•È¸($€¨($€¨Á…É…´í=‰©•ÐÍôm½‰©•Ñt€´Q¡”€Í½‰©•ÐÑ¼Í¡½ÜÑ¡”Ý½É±µ…á¥Ìµ…±¥¹•‰½Õ¹‘¥¹œ‰½à¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈôÁá™™™˜ÀÁt€´Q¡”‰½àÌ½±½È¸($€¨¼(%½¹ÍÑÉÕÑ½È ½‰©•Ð°½±½È€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ¥¹‘¥•Ì€ô¹•ÜU¥¹ÐÄÙÉÉ…ä l€À°€Ä°€Ä°€È°€È°€Ì°€Ì°€À°€Ð°€Ô°€Ô°€Ø°€Ø°€Ü°€Ü°€Ð°€À°€Ð°€Ä°€Ô°€È°€Ø°€Ì°€Üt€¤ì($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ô¹•Ü±½…ÐÌÉÉÉ…ä €à€¨€Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹‘¥•Ì°€Ä€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($$¼¨¨($$€¨Q¡”€Í½‰©•Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍô($$€¨¼($%Ñ¡¥Ì¹½‰©•Ð€ô½‰©•Ðì($%Ñ¡¥Ì¹ÑåÁ”€ô€	½á!•±Á•Èœì(($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÌ•½µ•ÑÉäÑ¼µ…Ñ Ñ¡”‘¥µ•¹Í¥½¹Ì½˜Ñ¡”½‰©•Ð°($€¨¥¹±Õ‘¥¹œ…¹ä¡¥±‘É•¸¸($€¨¼(%ÕÁ‘…Ñ” ¤ì(($%¥˜€ Ñ¡¥Ì¹½‰©•Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$%}‰½à¹Í•ÑÉ½µ=‰©•Ð Ñ¡¥Ì¹½‰©•Ð€¤ì(($%ô(($%¥˜€ }‰½à¹¥ÍµÁÑä ¤€¤É•ÑÕÉ¸ì(($%½¹ÍÐµ¥¸€ô}‰½à¹µ¥¸ì($%½¹ÍÐµ…à€ô}‰½à¹µ…àì(($$¼¨($$$Õ}}}|Ð($$Ä½}}|À½ð($%ð€Ù}}ñ|Ü($$È½}}|Ì¼(($$Àèµ…à¹à°µ…à¹ä°µ…à¹è($$Äèµ¥¸¹à°µ…à¹ä°µ…à¹è($$Èèµ¥¸¹à°µ¥¸¹ä°µ…à¹è($$Ìèµ…à¹à°µ¥¸¹ä°µ…à¹è($$Ðèµ…à¹à°µ…à¹ä°µ¥¸¹è($$Ôèµ¥¸¹à°µ…à¹ä°µ¥¸¹è($$Øèµ¥¸¹à°µ¥¸¹ä°µ¥¸¹è($$Üèµ…à¹à°µ¥¸¹ä°µ¥¸¹è($$¨¼(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ôÑ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì($%½¹ÍÐ…ÉÉ…ä€ôÁ½Í¥Ñ¥½¸¹…ÉÉ…äì(($%…ÉÉ…ål€Àt€ôµ…à¹àì…ÉÉ…ål€Ät€ôµ…à¹äì…ÉÉ…ål€Èt€ôµ…à¹èì($%…ÉÉ…ål€Ìt€ôµ¥¸¹àì…ÉÉ…ål€Ðt€ôµ…à¹äì…ÉÉ…ål€Ôt€ôµ…à¹èì($%…ÉÉ…ål€Øt€ôµ¥¸¹àì…ÉÉ…ål€Üt€ôµ¥¸¹äì…ÉÉ…ål€àt€ôµ…à¹èì($%…ÉÉ…ål€ät€ôµ…à¹àì…ÉÉ…ål€ÄÀt€ôµ¥¸¹äì…ÉÉ…ål€ÄÄt€ôµ…à¹èì($%…ÉÉ…ål€ÄÈt€ôµ…à¹àì…ÉÉ…ål€ÄÌt€ôµ…à¹äì…ÉÉ…ål€ÄÐt€ôµ¥¸¹èì($%…ÉÉ…ål€ÄÔt€ôµ¥¸¹àì…ÉÉ…ål€ÄØt€ôµ…à¹äì…ÉÉ…ål€ÄÜt€ôµ¥¸¹èì($%…ÉÉ…ål€Äàt€ôµ¥¸¹àì…ÉÉ…ål€Äät€ôµ¥¸¹äì…ÉÉ…ål€ÈÀt€ôµ¥¸¹èì($%…ÉÉ…ål€ÈÄt€ôµ…à¹àì…ÉÉ…ål€ÈÈt€ôµ¥¸¹äì…ÉÉ…ål€ÈÌt€ôµ¥¸¹èì(($%Á½Í¥Ñ¥½¸¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”Ý¥É•™É…µ”‰½à™½ÈÑ¡”Á…ÍÍ•½‰©•Ð¸($€¨($€¨Á…É…´í=‰©•ÐÍô½‰©•Ð€´Q¡”€Í½‰©•ÐÑ¼É•…Ñ”Ñ¡”¡•±Á•È™½È¸($€¨É•ÑÕÉ¸í	½á!•±Á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì¥¹ÍÑ…¹”¸($€¨¼(%Í•ÑÉ½µ=‰©•Ð ½‰©•Ð€¤ì(($%Ñ¡¥Ì¹½‰©•Ð€ô½‰©•Ðì($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹½‰©•Ð€ôÍ½ÕÉ”¹½‰©•Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô((¼¨¨(€¨¡•±Á•È½‰©•ÐÑ¼Ù¥ÍÕ…±¥é”…¸¥¹ÍÑ…¹”½˜í±¥¹¬	½àÍô¸(€¨(€¨©Ì(€¨½¹ÍÐ‰½à€ô¹•ÜQ!I¹	½àÌ ¤ì(€¨‰½à¹Í•ÑÉ½µ•¹Ñ•É¹‘M¥é” ¹•ÜQ!I¹Y•Ñ½ÈÌ €Ä°€Ä°€Ä€¤°¹•ÜQ!I¹Y•Ñ½ÈÌ €È°€Ä°€Ì€¤€¤ì(€¨(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹	½àÍ!•±Á•È ‰½à°€Áá™™™˜ÀÀ€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌ	½àÍ!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü‰½àÌ¡•±Á•È¸($€¨($€¨Á…É…´í	½àÍô‰½à€´Q¡”‰½àÑ¼Ù¥ÍÕ…±¥é”¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm½±½ÈôÁá™™™˜ÀÁt€´Q¡”‰½àÌ½±½È¸($€¨¼(%½¹ÍÑÉÕÑ½È ‰½à°½±½È€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ¥¹‘¥•Ì€ô¹•ÜU¥¹ÐÄÙÉÉ…ä l€À°€Ä°€Ä°€È°€È°€Ì°€Ì°€À°€Ð°€Ô°€Ô°€Ø°€Ø°€Ü°€Ü°€Ð°€À°€Ð°€Ä°€Ô°€È°€Ø°€Ì°€Üt€¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl€Ä°€Ä°€Ä°€´Ä°€Ä°€Ä°€´Ä°€´Ä°€Ä°€Ä°€´Ä°€Ä°€Ä°€Ä°€´Ä°€´Ä°€Ä°€´Ä°€´Ä°€´Ä°€´Ä°€Ä°€´Ä°€´Ätì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹‘¥•Ì°€Ä€¤€¤ì(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($$¼¨¨($$€¨Q¡”‰½à‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”í	½àÍô($$€¨¼($%Ñ¡¥Ì¹‰½à€ô‰½àì(($%Ñ¡¥Ì¹ÑåÁ”€ô€	½àÍ!•±Á•Èœì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ‰½à€ôÑ¡¥Ì¹‰½àì(($%¥˜€ ‰½à¹¥ÍµÁÑä ¤€¤É•ÑÕÉ¸ì(($%‰½à¹•Ñ•¹Ñ•È Ñ¡¥Ì¹Á½Í¥Ñ¥½¸€¤ì(($%‰½à¹•ÑM¥é” Ñ¡¥Ì¹Í…±”€¤ì(($%Ñ¡¥Ì¹Í…±”¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô((¼¨¨(€¨¡•±Á•È½‰©•ÐÑ¼Ù¥ÍÕ…±¥é”…¸¥¹ÍÑ…¹”½˜í±¥¹¬A±…¹•ô¸(€¨(€¨©Ì(€¨½¹ÍÐÁ±…¹”€ô¹•ÜQ!I¹A±…¹” ¹•ÜQ!I¹Y•Ñ½ÈÌ €Ä°€Ä°€À¸È€¤°€Ì€¤ì(€¨½¹ÍÐ¡•±Á•È€ô¹•ÜQ!I¹A±…¹•!•±Á•È Á±…¹”°€Ä°€Áá™™™˜ÀÀ€¤ì(€¨Í•¹”¹…‘ ¡•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹”(€¨¼)±…ÍÌA±…¹•!•±Á•È•áÑ•¹‘Ì1¥¹”ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÁ±…¹”¡•±Á•È¸($€¨($€¨Á…É…´íA±…¹•ôÁ±…¹”€´Q¡”Á±…¹”Ñ¼‰”Ù¥ÍÕ…±¥é•¸($€¨Á…É…´í¹Õµ‰•ÉômÍ¥é”ôÅt€´Q¡”Í¥‘”±•¹Ñ ½˜Á±…¹”¡•±Á•È¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôm¡•àôÁá™™™˜ÀÁt€´Q¡”¡•±Á•ÈÌ½±½È¸($€¨¼(%½¹ÍÑÉÕÑ½È Á±…¹”°Í¥é”€ô€Ä°¡•à€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ½±½È€ô¡•àì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl€Ä°€´Ä°€À°€´Ä°€Ä°€À°€´Ä°€´Ä°€À°€Ä°€Ä°€À°€´Ä°€Ä°€À°€´Ä°€´Ä°€À°€Ä°€´Ä°€À°€Ä°€Ä°€Àtì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A±…¹•!•±Á•Èœì(($$¼¨¨($$€¨Q¡”Á±…¹”‰•¥¹œÙ¥ÍÕ…±¥é•¸($$€¨($$€¨ÑåÁ”íA±…¹•ô($$€¨¼($%Ñ¡¥Ì¹Á±…¹”€ôÁ±…¹”ì(($$¼¨¨($$€¨Q¡”Í¥‘”±•¹Ñ ½˜Á±…¹”¡•±Á•È¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€Ä($$€¨¼($%Ñ¡¥Ì¹Í¥é”€ôÍ¥é”ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹ÌÈ€ôl€Ä°€Ä°€À°€´Ä°€Ä°€À°€´Ä°€´Ä°€À°€Ä°€Ä°€À°€´Ä°€´Ä°€À°€Ä°€´Ä°€Àtì(($%½¹ÍÐ•½µ•ÑÉäÈ€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉäÈ¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÌÈ°€Ì€¤€¤ì($%•½µ•ÑÉäÈ¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì(($%Ñ¡¥Ì¹…‘ ¹•Ü5•Í  •½µ•ÑÉäÈ°¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°½Á…¥Ñäè€À¸È°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”°‘•ÁÑ¡]É¥Ñ”è™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤€¤ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹Í•Ð €À°€À°€À€¤ì(($%Ñ¡¥Ì¹Í…±”¹Í•Ð €À¸Ô€¨Ñ¡¥Ì¹Í¥é”°€À¸Ô€¨Ñ¡¥Ì¹Í¥é”°€Ä€¤ì(($%Ñ¡¥Ì¹±½½­Ð Ñ¡¥Ì¹Á±…¹”¹¹½Éµ…°€¤ì(($%Ñ¡¥Ì¹ÑÉ…¹Í±…Ñ•h €´Ñ¡¥Ì¹Á±…¹”¹½¹ÍÑ…¹Ð€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô(($¼¨¨($€¨UÁ‘…Ñ•ÌÑ¡”¡•±Á•ÈÑ¼µ…Ñ Ñ¡”Á½Í¥Ñ¥½¸…¹‘¥É•Ñ¥½¸½˜Ñ¡”($€¨±¥¡Ð‰•¥¹œÙ¥ÍÕ…±¥é•¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()½¹ÍÐ}…á¥Ì€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)±•Ð}±¥¹••½µ•ÑÉä°}½¹••½µ•ÑÉäì((¼¨¨(€¨¸€Í…ÉÉ½Ü½‰©•Ð™½ÈÙ¥ÍÕ…±¥é¥¹œ‘¥É•Ñ¥½¹Ì¸(€¨(€¨©Ì(€¨½¹ÍÐ‘¥È€ô¹•ÜQ!I¹Y•Ñ½ÈÌ €Ä°€È°€À€¤ì(€¨(€¨€¼½¹½Éµ…±¥é”Ñ¡”‘¥É•Ñ¥½¸Ù•Ñ½È€¡½¹Ù•ÉÐÑ¼Ù•Ñ½È½˜±•¹Ñ €Ä¤(€¨‘¥È¹¹½Éµ…±¥é” ¤ì(€¨(€¨½¹ÍÐ½É¥¥¸€ô¹•ÜQ!I¹Y•Ñ½ÈÌ €À°€À°€À€¤ì(€¨½¹ÍÐ±•¹Ñ €ô€Äì(€¨½¹ÍÐ¡•à€ô€Áá™™™˜ÀÀì(€¨(€¨½¹ÍÐ…ÉÉ½Ý!•±Á•È€ô¹•ÜQ!I¹ÉÉ½Ý!•±Á•È ‘¥È°½É¥¥¸°±•¹Ñ °¡•à€¤ì(€¨Í•¹”¹…‘ …ÉÉ½Ý!•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ=‰©•ÐÍ(€¨¼)±…ÍÌÉÉ½Ý!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…ÉÉ½Ü¡•±Á•È¸($€¨($€¨Á…É…´íY•Ñ½ÈÍôm‘¥Èô À°€À°€Ä¥t€´Q¡”€¡¹½Éµ…±¥é•¤‘¥É•Ñ¥½¸Ù•Ñ½È¸($€¨Á…É…´íY•Ñ½ÈÍôm½É¥¥¸ô À°€À°€À¥t€´A½¥¹Ð…ÐÝ¡¥ Ñ¡”…ÉÉ½ÜÍÑ…ÉÑÌ¸($€¨Á…É…´í¹Õµ‰•Éôm±•¹Ñ ôÅt€´1•¹Ñ ½˜Ñ¡”…ÉÉ½Ü¥¸Ý½É±Õ¹¥ÑÌ¸($€¨Á…É…´ì¡¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹œ¥ôm½±½ÈôÁá™™™˜ÀÁt€´½±½È½˜Ñ¡”…ÉÉ½Ü¸($€¨Á…É…´í¹Õµ‰•Éôm¡•…‘1•¹Ñ õ±•¹Ñ ¨À¸Ét€´Q¡”±•¹Ñ ½˜Ñ¡”¡•…½˜Ñ¡”…ÉÉ½Ü¸($€¨Á…É…´í¹Õµ‰•Éôm¡•…‘]¥‘Ñ õ¡•…‘1•¹Ñ ¨À¸Ét€´Q¡”Ý¥‘Ñ ½˜Ñ¡”¡•…½˜Ñ¡”…ÉÉ½Ü¸($€¨¼(%½¹ÍÑÉÕÑ½È ‘¥È€ô¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°½É¥¥¸€ô¹•ÜY•Ñ½ÈÌ €À°€À°€À€¤°±•¹Ñ €ô€Ä°½±½È€ô€Áá™™™˜ÀÀ°¡•…‘1•¹Ñ €ô±•¹Ñ €¨€À¸È°¡•…‘]¥‘Ñ €ô¡•…‘1•¹Ñ €¨€À¸È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€ÉÉ½Ý!•±Á•Èœì(($%¥˜€ }±¥¹••½µ•ÑÉä€ôôôÕ¹‘•™¥¹•€¤ì(($$%}±¥¹••½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($$%}±¥¹••½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l€À°€À°€À°€À°€Ä°€Àt°€Ì€¤€¤ì(($$%}½¹••½µ•ÑÉä€ô¹•Ü½¹••½µ•ÑÉä €À¸Ô°€Ä°€Ô°€Ä€¤ì($$%}½¹••½µ•ÑÉä¹ÑÉ…¹Í±…Ñ” €À°€´À¸Ô°€À€¤ì(($%ô(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä ½É¥¥¸€¤ì(($$¼¨¨($$€¨Q¡”±¥¹”Á…ÉÐ½˜Ñ¡”…ÉÉ½Ü¡•±Á•È¸($$€¨($$€¨ÑåÁ”í1¥¹•ô($$€¨¼($%Ñ¡¥Ì¹±¥¹”€ô¹•Ü1¥¹” }±¥¹••½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì($%Ñ¡¥Ì¹±¥¹”¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¹”€¤ì(($$¼¨¨($$€¨Q¡”½¹”Á…ÉÐ½˜Ñ¡”…ÉÉ½Ü¡•±Á•È¸($$€¨($$€¨ÑåÁ”í5•Í¡ô($$€¨¼($%Ñ¡¥Ì¹½¹”€ô¹•Ü5•Í  }½¹••½µ•ÑÉä°¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì($%Ñ¡¥Ì¹½¹”¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹½¹”€¤ì(($%Ñ¡¥Ì¹Í•Ñ¥É•Ñ¥½¸ ‘¥È€¤ì($%Ñ¡¥Ì¹Í•Ñ1•¹Ñ  ±•¹Ñ °¡•…‘1•¹Ñ °¡•…‘]¥‘Ñ €¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”‘¥É•Ñ¥½¸½˜Ñ¡”¡•±Á•È¸($€¨($€¨Á…É…´íY•Ñ½ÈÍô‘¥È€´Q¡”¹½Éµ…±¥é•‘¥É•Ñ¥½¸Ù•Ñ½È¸($€¨¼(%Í•Ñ¥É•Ñ¥½¸ ‘¥È€¤ì(($$¼¼‘¥È¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•(($%¥˜€ ‘¥È¹ä€ø€À¸äääää€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•Ð €À°€À°€À°€Ä€¤ì(($%ô•±Í”¥˜€ ‘¥È¹ä€ð€´À¸äääää€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•Ð €Ä°€À°€À°€À€¤ì(($%ô•±Í”ì(($$%}…á¥Ì¹Í•Ð ‘¥È¹è°€À°€´‘¥È¹à€¤¹¹½Éµ…±¥é” ¤ì(($$%½¹ÍÐÉ…‘¥…¹Ì€ô5…Ñ ¹…½Ì ‘¥È¹ä€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•ÑÉ½µá¥Í¹±” }…á¥Ì°É…‘¥…¹Ì€¤ì(($%ô((%ô(($¼¨¨($€¨M•ÑÌÑ¡”±•¹Ñ ½˜Ñ¡”¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•Éô±•¹Ñ €´1•¹Ñ ½˜Ñ¡”…ÉÉ½Ü¥¸Ý½É±Õ¹¥ÑÌ¸($€¨Á…É…´í¹Õµ‰•Éôm¡•…‘1•¹Ñ õ±•¹Ñ ¨À¸Ét€´Q¡”±•¹Ñ ½˜Ñ¡”¡•…½˜Ñ¡”…ÉÉ½Ü¸($€¨Á…É…´í¹Õµ‰•Éôm¡•…‘]¥‘Ñ õ¡•…‘1•¹Ñ ¨À¸Ét€´Q¡”Ý¥‘Ñ ½˜Ñ¡”¡•…½˜Ñ¡”…ÉÉ½Ü¸($€¨¼(%Í•Ñ1•¹Ñ  ±•¹Ñ °¡•…‘1•¹Ñ €ô±•¹Ñ €¨€À¸È°¡•…‘]¥‘Ñ €ô¡•…‘1•¹Ñ €¨€À¸È€¤ì(($%Ñ¡¥Ì¹±¥¹”¹Í…±”¹Í•Ð €Ä°5…Ñ ¹µ…à €À¸ÀÀÀÄ°±•¹Ñ €´¡•…‘1•¹Ñ €¤°€Ä€¤ì€¼¼Í•”€ŒÄÜÐÔà($%Ñ¡¥Ì¹±¥¹”¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹½¹”¹Í…±”¹Í•Ð ¡•…‘]¥‘Ñ °¡•…‘1•¹Ñ °¡•…‘]¥‘Ñ €¤ì($%Ñ¡¥Ì¹½¹”¹Á½Í¥Ñ¥½¸¹ä€ô±•¹Ñ ì($%Ñ¡¥Ì¹½¹”¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì((%ô(($¼¨¨($€¨M•ÑÌÑ¡”½±½È½˜Ñ¡”¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ô½±½È€´Q¡”½±½ÈÑ¼Í•Ð¸($€¨¼(%Í•Ñ½±½È ½±½È€¤ì(($%Ñ¡¥Ì¹±¥¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð ½±½È€¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð ½±½È€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°™…±Í”€¤ì(($%Ñ¡¥Ì¹±¥¹”¹½Áä Í½ÕÉ”¹±¥¹”€¤ì($%Ñ¡¥Ì¹½¹”¹½Áä Í½ÕÉ”¹½¹”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹±¥¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹±¥¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô((¼¨¨(€¨¸…á¥Ì½‰©•ÐÑ¼Ù¥ÍÕ…±¥é”Ñ¡”€Ì…á•Ì¥¸„Í¥µÁ±”Ý…ä¸(€¨Q¡”`…á¥Ì¥ÌÉ•¸Q¡”d…á¥Ì¥ÌÉ••¸¸Q¡”h…á¥Ì¥Ì‰±Õ”¸(€¨(€¨©Ì(€¨½¹ÍÐ…á•Í!•±Á•È€ô¹•ÜQ!I¹á•Í!•±Á•È €Ô€¤ì(€¨Í•¹”¹…‘ …á•Í!•±Á•È€¤ì(€¨€(€¨(€¨…Õµ•¹ÑÌ1¥¹•M•µ•¹ÑÌ(€¨¼)±…ÍÌá•Í!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü…á•Ì¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•ÉômÍ¥é”ôÅt€´M¥é”½˜Ñ¡”±¥¹•ÌÉ•ÁÉ•Í•¹Ñ¥¹œÑ¡”…á•Ì¸($€¨¼(%½¹ÍÑÉÕÑ½È Í¥é”€ô€Ä€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl($$$À°€À°€À°%Í¥é”°€À°€À°($$$À°€À°€À°$À°Í¥é”°€À°($$$À°€À°€À°$À°€À°Í¥é”($%tì(($%½¹ÍÐ½±½ÉÌ€ôl($$$Ä°€À°€À°$Ä°€À¸Ø°€À°($$$À°€Ä°€À°$À¸Ø°€Ä°€À°($$$À°€À°€Ä°$À°€À¸Ø°€Ä($%tì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€á•Í!•±Á•Èœì((%ô(($¼¨¨($€¨•™¥¹•ÌÑ¡”½±½ÉÌ½˜Ñ¡”…á•Ì¡•±Á•È¸($€¨($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôáá¥Í½±½È€´Q¡”½±½È™½ÈÑ¡”à…á¥Ì¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôåá¥Í½±½È€´Q¡”½±½È™½ÈÑ¡”ä…á¥Ì¸($€¨Á…É…´í¹Õµ‰•Éñ½±½ÉñÍÑÉ¥¹ôéá¥Í½±½È€´Q¡”½±½È™½ÈÑ¡”è…á¥Ì¸($€¨É•ÑÕÉ¸íá•Í!•±Á•ÉôÉ•™•É•¹”Ñ¼Ñ¡¥Ì…á•Ì¡•±Á•È¸($€¨¼(%Í•Ñ½±½ÉÌ áá¥Í½±½È°åá¥Í½±½È°éá¥Í½±½È€¤ì(($%½¹ÍÐ½±½È€ô¹•Ü½±½È ¤ì($%½¹ÍÐ…ÉÉ…ä€ôÑ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹½±½È¹…ÉÉ…äì(($%½±½È¹Í•Ð áá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€À€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€Ì€¤ì(($%½±½È¹Í•Ð åá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€Ø€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ä€¤ì(($%½±½È¹Í•Ð éá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ÄÈ€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ÄÔ€¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹½±½È¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨É••ÌÑ¡”ATµÉ•±…Ñ•É•Í½ÕÉ•Ì…±±½…Ñ•‰äÑ¡¥Ì¥¹ÍÑ…¹”¸…±°Ñ¡¥Ì($€¨µ•Ñ¡½Ý¡•¹•Ù•ÈÑ¡¥Ì¥¹ÍÑ…¹”¥Ì¹¼±½¹•ÈÕÍ•¥¸å½ÕÈ…ÁÀ¸($€¨¼(%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô((¼¨¨(€¨Q¡¥Ì±…ÍÌ¥ÌÕÍ•Ñ¼½¹Ù•ÉÐ„Í•É¥•Ì½˜Á…Ñ¡ÌÑ¼…¸…ÉÉ…ä½˜(€¨Í¡…Á•Ì¸%Ð¥ÌÍÁ•¥™¥…±±äÕÍ•¥¸½¹Ñ•áÐ½˜™½¹ÑÌ…¹MY¸(€¨¼)±…ÍÌM¡…Á•A…Ñ ì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•ÜÍ¡…Á”Á…Ñ ¸($€¨¼(%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M¡…Á•A…Ñ œì(($$¼¨¨($$€¨Q¡”½±½È½˜Ñ¡”Í¡…Á”¸($$€¨($$€¨ÑåÁ”í½±½Éô($$€¨¼($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È ¤ì(($$¼¨¨($$€¨Q¡”Á…Ñ¡ÌÑ¡…Ð¡…Ù”‰••¸•¹•É…Ñ•™½ÈÑ¡¥ÌÍ¡…Á”¸($$€¨($$€¨ÑåÁ”íÉÉ…äñA…Ñ ùô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹ÍÕ‰A…Ñ¡Ì€ômtì(($$¼¨¨($$€¨Q¡”ÕÉÉ•¹ÐÁ…Ñ Ñ¡…Ð¥Ì‰•¥¹œ•¹•É…Ñ•¸($$€¨($$€¨ÑåÁ”ìýA…Ñ¡ô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €ô¹Õ±°ì((%ô(($¼¨¨($€¨É•…Ñ•Ì„¹•ÜÁ…Ñ …¹µ½Ù•Ì¥ÐÕÉÉ•¹ÐÁ½¥¹ÐÑ¼Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í¹Õµ‰•Éôà€´Q¡”à½½É‘¥¹…Ñ”¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”ä½½É‘¥¹…Ñ”¸($€¨É•ÑÕÉ¸íM¡…Á•A…Ñ¡ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍ¡…Á”Á…Ñ ¸($€¨¼(%µ½Ù•Q¼ à°ä€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €ô¹•ÜA…Ñ  ¤ì($%Ñ¡¥Ì¹ÍÕ‰A…Ñ¡Ì¹ÁÕÍ  Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €¤ì($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹µ½Ù•Q¼ à°ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘‘Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬1¥¹•ÕÉÙ•ôÑ¼Ñ¡”Á…Ñ ‰ä½¹¹•Ñ¥¹œ($€¨Ñ¡”ÕÉÉ•¹ÐÁ½¥¹ÐÝ¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í¹Õµ‰•Éôà€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éôä€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨É•ÑÕÉ¸íM¡…Á•A…Ñ¡ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍ¡…Á”Á…Ñ ¸($€¨¼(%±¥¹•Q¼ à°ä€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹±¥¹•Q¼ à°ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘‘Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ•ôÑ¼Ñ¡”Á…Ñ ‰ä½¹¹•Ñ¥¹œ($€¨Ñ¡”ÕÉÉ•¹ÐÁ½¥¹ÐÝ¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í¹Õµ‰•Éô…Aà€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…Aä€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…`€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…d€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨É•ÑÕÉ¸íM¡…Á•A…Ñ¡ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍ¡…Á”Á…Ñ ¸($€¨¼(%ÅÕ…‘É…Ñ¥ÕÉÙ•Q¼ …Aà°…Aä°…`°…d€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹ÅÕ…‘É…Ñ¥ÕÉÙ•Q¼ …Aà°…Aä°…`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘‘Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬Õ‰¥	•é¥•ÉÕÉÙ•ôÑ¼Ñ¡”Á…Ñ ‰ä½¹¹•Ñ¥¹œ($€¨Ñ¡”ÕÉÉ•¹ÐÁ½¥¹ÐÝ¥Ñ Ñ¡”¥Ù•¸½¹”¸($€¨($€¨Á…É…´í¹Õµ‰•Éô…@Åà€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”™¥ÉÍÐ½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…@Åä€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”™¥ÉÍÐ½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…@Éà€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”Í•½¹½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…@Éä€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”Í•½¹½¹ÑÉ½°Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…`€´Q¡”à½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨Á…É…´í¹Õµ‰•Éô…d€´Q¡”ä½½É‘¥¹…Ñ”½˜Ñ¡”•¹Á½¥¹Ð¸($€¨É•ÑÕÉ¸íM¡…Á•A…Ñ¡ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍ¡…Á”Á…Ñ ¸($€¨¼(%‰•é¥•ÉÕÉÙ•Q¼ …@Åà°…@Åä°…@Éà°…@Éä°…`°…d€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹‰•é¥•ÉÕÉÙ•Q¼ …@Åà°…@Åä°…@Éà°…@Éä°…`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨‘‘Ì…¸¥¹ÍÑ…¹”½˜í±¥¹¬MÁ±¥¹•ÕÉÙ•ôÑ¼Ñ¡”Á…Ñ ‰ä½¹¹•Ñ¥¹œ($€¨Ñ¡”ÕÉÉ•¹ÐÁ½¥¹ÐÝ¥Ñ Ñ¡”¥Ù•¸±¥ÍÐ½˜Á½¥¹ÑÌ¸($€¨($€¨Á…É…´íÉÉ…äñY•Ñ½ÈÈùôÁÑÌ€´¸…ÉÉ…ä½˜Á½¥¹ÑÌ¥¸€ÉÍÁ…”¸($€¨É•ÑÕÉ¸íM¡…Á•A…Ñ¡ôÉ•™•É•¹”Ñ¼Ñ¡¥ÌÍ¡…Á”Á…Ñ ¸($€¨¼(%ÍÁ±¥¹•Q¡ÉÔ ÁÑÌ€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹ÍÁ±¥¹•Q¡ÉÔ ÁÑÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¨¨($€¨½¹Ù•ÉÑÌÑ¡”Á…Ñ¡Ì¥¹Ñ¼…¸…ÉÉ…ä½˜Í¡…Á•Ì¸($€¨($€¨Á…É…´í‰½½±•…¹ô¥Í\€´	ä‘•™…Õ±ÐÍ½±¥Í¡…Á•Ì…É”€‘•™¥¹•±½­Ý¥Í”€¡\¤…¹¡½±•Ì…É”‘•™¥¹•½Õ¹Ñ•É±½­Ý¥Í”€¡\¤¸($€¨%˜Ñ¡¥Ì™±…œ¥ÌÍ•ÐÑ¼ÑÉÕ•€°Ñ¡•¸Ñ¡½Í”…É”™±¥ÁÁ•¸($€¨É•ÑÕÉ¸íÉÉ…äñM¡…Á”ùô¸…ÉÉ…ä½˜Í¡…Á•Ì¸($€¨¼(%Ñ½M¡…Á•Ì ¥Í\€¤ì(($%™Õ¹Ñ¥½¸Ñ½M¡…Á•Í9½!½±•Ì ¥¹MÕ‰Á…Ñ¡Ì€¤ì(($$%½¹ÍÐÍ¡…Á•Ì€ômtì(($$%™½È€ ±•Ð¤€ô€À°°€ô¥¹MÕ‰Á…Ñ¡Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÑµÁA…Ñ €ô¥¹MÕ‰Á…Ñ¡Íl¤tì(($$$%½¹ÍÐÑµÁM¡…Á”€ô¹•ÜM¡…Á” ¤ì($$$%ÑµÁM¡…Á”¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì(($$$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì(($$%ô(($$%É•ÑÕÉ¸Í¡…Á•Ìì(($%ô(($%™Õ¹Ñ¥½¸¥ÍA½¥¹Ñ%¹Í¥‘•A½±å½¸ ¥¹AÐ°¥¹A½±å½¸€¤ì(($$%½¹ÍÐÁ½±å1•¸€ô¥¹A½±å½¸¹±•¹Ñ ì(($$$¼¼¥¹AÐ½¸Á½±å½¸½¹Ñ½ÕÈ€ôø¥µµ•‘¥…Ñ”ÍÕ•ÍÌ€€€½È($$$¼¼Ñ½±¥¹œ½˜¥¹Í¥‘”½½ÕÑÍ¥‘”…Ð•Ù•ÉäÍ¥¹±”„¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð½˜…¸•‘”($$$¼¼€Ý¥Ñ Ñ¡”¡½É¥é½¹Ñ…°±¥¹”Ñ¡É½Õ ¥¹AÐ°±•™Ð½˜¥¹AÐ($$$¼¼€¹½Ð½Õ¹Ñ¥¹œ±½Ý•Éd•¹‘Á½¥¹ÑÌ½˜•‘•Ì…¹Ý¡½±”•‘•Ì½¸Ñ¡…Ð±¥¹”($$%±•Ð¥¹Í¥‘”€ô™…±Í”ì($$%™½È€ ±•ÐÀ€ôÁ½±å1•¸€´€Ä°Ä€ô€ÀìÄ€ðÁ½±å1•¸ìÀ€ôÄ€¬¬€¤ì(($$$%±•Ð•‘•1½ÝAÐ€ô¥¹A½±å½¹lÀtì($$$%±•Ð•‘•!¥¡AÐ€ô¥¹A½±å½¹lÄtì(($$$%±•Ð•‘•à€ô•‘•!¥¡AÐ¹à€´•‘•1½ÝAÐ¹àì($$$%±•Ð•‘•ä€ô•‘•!¥¡AÐ¹ä€´•‘•1½ÝAÐ¹äì(($$$%¥˜€ 5…Ñ ¹…‰Ì •‘•ä€¤€ø9Õµ‰•È¹AM%1=8€¤ì(($$$$$¼¼¹½ÐÁ…É…±±•°($$$$%¥˜€ •‘•ä€ð€À€¤ì(($$$$$%•‘•1½ÝAÐ€ô¥¹A½±å½¹lÄtì•‘•à€ô€´•‘•àì($$$$$%•‘•!¥¡AÐ€ô¥¹A½±å½¹lÀtì•‘•ä€ô€´•‘•äì(($$$$%ô(($$$$%¥˜€ € ¥¹AÐ¹ä€ð•‘•1½ÝAÐ¹ä€¤ñð€ ¥¹AÐ¹ä€ø•‘•!¥¡AÐ¹ä€¤€¤€$%½¹Ñ¥¹Õ”ì(($$$$%¥˜€ ¥¹AÐ¹ä€ôôô•‘•1½ÝAÐ¹ä€¤ì(($$$$$%¥˜€ ¥¹AÐ¹à€ôôô•‘•1½ÝAÐ¹à€¤$%É•ÑÕÉ¸%ÑÉÕ”ì$$¼¼¥¹AÐ¥Ì½¸½¹Ñ½ÕÈ€ü($$$$$$¼¼½¹Ñ¥¹Õ”ì$$$$¼¼¹¼¥¹Ñ•ÉÍ•Ñ¥½¸½È•‘•1½ÝAÐ€ôø‘½•Í¸Ð½Õ¹Ð€„„„(($$$$%ô•±Í”ì(($$$$$%½¹ÍÐÁ•ÉÁ‘”€ô•‘•ä€¨€ ¥¹AÐ¹à€´•‘•1½ÝAÐ¹à€¤€´•‘•à€¨€ ¥¹AÐ¹ä€´•‘•1½ÝAÐ¹ä€¤ì($$$$$%¥˜€ Á•ÉÁ‘”€ôôô€À€¤$$$%É•ÑÕÉ¸%ÑÉÕ”ì$$¼¼¥¹AÐ¥Ì½¸½¹Ñ½ÕÈ€ü($$$$$%¥˜€ Á•ÉÁ‘”€ð€À€¤€$$$%½¹Ñ¥¹Õ”ì($$$$$%¥¹Í¥‘”€ô€„¥¹Í¥‘”ì$$¼¼ÑÉÕ”¥¹Ñ•ÉÍ•Ñ¥½¸±•™Ð½˜¥¹AÐ(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼Á…É…±±•°½È½±±¥¹•…È($$$$%¥˜€ ¥¹AÐ¹ä€„ôô•‘•1½ÝAÐ¹ä€¤€$%½¹Ñ¥¹Õ”ì$$$¼¼Á…É…±±•°($$$$$¼¼•‘”±¥•Ì½¸Ñ¡”Í…µ”¡½É¥é½¹Ñ…°±¥¹”…Ì¥¹AÐ($$$$%¥˜€ € € •‘•!¥¡AÐ¹à€ðô¥¹AÐ¹à€¤€˜˜€ ¥¹AÐ¹à€ðô•‘•1½ÝAÐ¹à€¤€¤ñð($$$$$$€ € •‘•1½ÝAÐ¹à€ðô¥¹AÐ¹à€¤€˜˜€ ¥¹AÐ¹à€ðô•‘•!¥¡AÐ¹à€¤€¤€¤$%É•ÑÕÉ¸%ÑÉÕ”ì$¼¼¥¹AÐèA½¥¹Ð½¸½¹Ñ½ÕÈ€„($$$$$¼¼½¹Ñ¥¹Õ”ì(($$$%ô(($$%ô(($$%É•ÑÕÉ¸%¥¹Í¥‘”ì(($%ô(($%½¹ÍÐ¥Í±½­]¥Í”€ôM¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í”ì(($%½¹ÍÐÍÕ‰A…Ñ¡Ì€ôÑ¡¥Ì¹ÍÕ‰A…Ñ¡Ìì($%¥˜€ ÍÕ‰A…Ñ¡Ì¹±•¹Ñ €ôôô€À€¤É•ÑÕÉ¸mtì(($%±•ÐÍ½±¥°ÑµÁA…Ñ °ÑµÁM¡…Á”ì($%½¹ÍÐÍ¡…Á•Ì€ômtì(($%¥˜€ ÍÕ‰A…Ñ¡Ì¹±•¹Ñ €ôôô€Ä€¤ì(($$%ÑµÁA…Ñ €ôÍÕ‰A…Ñ¡Íl€Àtì($$%ÑµÁM¡…Á”€ô¹•ÜM¡…Á” ¤ì($$%ÑµÁM¡…Á”¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì($$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì($$%É•ÑÕÉ¸Í¡…Á•Ìì(($%ô(($%±•Ð¡½±•Í¥ÉÍÐ€ô€„¥Í±½­]¥Í” ÍÕ‰A…Ñ¡Íl€Àt¹•ÑA½¥¹ÑÌ ¤€¤ì($%¡½±•Í¥ÉÍÐ€ô¥Í\€ü€„¡½±•Í¥ÉÍÐ€è¡½±•Í¥ÉÍÐì(($$¼¼½¹Í½±”¹±½œ ‰!½±•Ì™¥ÉÍÐˆ°¡½±•Í¥ÉÍÐ¤ì(($%½¹ÍÐ‰•ÑÑ•ÉM¡…Á•!½±•Ì€ômtì($%½¹ÍÐ¹•ÝM¡…Á•Ì€ômtì($%±•Ð¹•ÝM¡…Á•!½±•Ì€ômtì($%±•Ðµ…¥¹%‘à€ô€Àì($%±•ÐÑµÁA½¥¹ÑÌì(($%¹•ÝM¡…Á•Ílµ…¥¹%‘àt€ôÕ¹‘•™¥¹•ì($%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍÕ‰A…Ñ¡Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%ÑµÁA…Ñ €ôÍÕ‰A…Ñ¡Íl¤tì($$%ÑµÁA½¥¹ÑÌ€ôÑµÁA…Ñ ¹•ÑA½¥¹ÑÌ ¤ì($$%Í½±¥€ô¥Í±½­]¥Í” ÑµÁA½¥¹ÑÌ€¤ì($$%Í½±¥€ô¥Í\€ü€„Í½±¥€èÍ½±¥ì(($$%¥˜€ Í½±¥€¤ì(($$$%¥˜€ € €„¡½±•Í¥ÉÍÐ€¤€˜˜€ ¹•ÝM¡…Á•Ílµ…¥¹%‘àt€¤€¤%µ…¥¹%‘à€¬¬ì(($$$%¹•ÝM¡…Á•Ílµ…¥¹%‘àt€ôìÌè¹•ÜM¡…Á” ¤°ÀèÑµÁA½¥¹ÑÌôì($$$%¹•ÝM¡…Á•Ílµ…¥¹%‘àt¹Ì¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì(($$$%¥˜€ ¡½±•Í¥ÉÍÐ€¤%µ…¥¹%‘à€¬¬ì($$$%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt€ômtì(($$$$¼½½¹Í½±”¹±½œ Üœ°¤¤ì(($$%ô•±Í”ì(($$$%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt¹ÁÕÍ  ì èÑµÁA…Ñ °ÀèÑµÁA½¥¹ÑÍl€Àtô€¤ì(($$$$¼½½¹Í½±”¹±½œ Üœ°¤¤ì(($$%ô(($%ô(($$¼¼½¹±ä!½±•Ìü€´øÁÉ½‰…‰±ä…±°M¡…Á•ÌÝ¥Ñ ÝÉ½¹œ½É¥•¹Ñ…Ñ¥½¸($%¥˜€ €„¹•ÝM¡…Á•Íl€Àt€¤%É•ÑÕÉ¸%Ñ½M¡…Á•Í9½!½±•Ì ÍÕ‰A…Ñ¡Ì€¤ì((($%¥˜€ ¹•ÝM¡…Á•Ì¹±•¹Ñ €ø€Ä€¤ì(($$%±•Ð…µ‰¥Õ½ÕÌ€ô™…±Í”ì($$%±•ÐÑ½¡…¹”€ô€Àì(($$%™½È€ ±•ÐÍ%‘à€ô€À°Í1•¸€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ìÍ%‘à€ðÍ1•¸ìÍ%‘à€¬¬€¤ì(($$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÍ%‘àt€ômtì(($$%ô(($$%™½È€ ±•ÐÍ%‘à€ô€À°Í1•¸€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ìÍ%‘à€ðÍ1•¸ìÍ%‘à€¬¬€¤ì(($$$%½¹ÍÐÍ¡¼€ô¹•ÝM¡…Á•!½±•ÍlÍ%‘àtì(($$$%™½È€ ±•Ð¡%‘à€ô€Àì¡%‘à€ðÍ¡¼¹±•¹Ñ ì¡%‘à€¬¬€¤ì(($$$$%½¹ÍÐ¡¼€ôÍ¡½l¡%‘àtì($$$$%±•Ð¡½±•}Õ¹…ÍÍ¥¹•€ôÑÉÕ”ì(($$$$%™½È€ ±•ÐÌÉ%‘à€ô€ÀìÌÉ%‘à€ð¹•ÝM¡…Á•Ì¹±•¹Ñ ìÌÉ%‘à€¬¬€¤ì(($$$$$%¥˜€ ¥ÍA½¥¹Ñ%¹Í¥‘•A½±å½¸ ¡¼¹À°¹•ÝM¡…Á•ÍlÌÉ%‘àt¹À€¤€¤ì(($$$$$$%¥˜€ Í%‘à€„ôôÌÉ%‘à€¤%Ñ½¡…¹”€¬¬ì(($$$$$$%¥˜€ ¡½±•}Õ¹…ÍÍ¥¹•€¤ì(($$$$$$$%¡½±•}Õ¹…ÍÍ¥¹•€ô™…±Í”ì($$$$$$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÌÉ%‘àt¹ÁÕÍ  ¡¼€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$%…µ‰¥Õ½ÕÌ€ôÑÉÕ”ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥˜€ ¡½±•}Õ¹…ÍÍ¥¹•€¤ì(($$$$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÍ%‘àt¹ÁÕÍ  ¡¼€¤ì(($$$$%ô(($$$%ô(($$%ô(($$%¥˜€ Ñ½¡…¹”€ø€À€˜˜…µ‰¥Õ½ÕÌ€ôôô™…±Í”€¤ì(($$$%¹•ÝM¡…Á•!½±•Ì€ô‰•ÑÑ•ÉM¡…Á•!½±•Ìì(($$%ô(($%ô(($%±•ÐÑµÁ!½±•Ìì(($%™½È€ ±•Ð¤€ô€À°¥°€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%ÑµÁM¡…Á”€ô¹•ÝM¡…Á•Íl¤t¹Ìì($$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì($$%ÑµÁ!½±•Ì€ô¹•ÝM¡…Á•!½±•Íl¤tì(($$%™½È€ ±•Ð¨€ô€À°©°€ôÑµÁ!½±•Ì¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$%ÑµÁM¡…Á”¹¡½±•Ì¹ÁÕÍ  ÑµÁ!½±•Íl¨t¹ €¤ì(($$%ô(($%ô(($$¼½½¹Í½±”¹±½œ ‰Í¡…Á”ˆ°Í¡…Á•Ì¤ì(($%É•ÑÕÉ¸Í¡…Á•Ìì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ™½È½¹ÑÉ½±Ì¸(€¨(€¨…‰ÍÑÉ…Ð(€¨…Õµ•¹ÑÌÙ•¹Ñ¥ÍÁ…Ñ¡•È(€¨¼)±…ÍÌ½¹ÑÉ½±Ì•áÑ•¹‘ÌÙ•¹Ñ¥ÍÁ…Ñ¡•Èì(($¼¨¨($€¨½¹ÍÑÉÕÑÌ„¹•Ü½¹ÑÉ½±Ì¥¹ÍÑ…¹”¸($€¨($€¨Á…É…´í=‰©•ÐÍô½‰©•Ð€´Q¡”½‰©•ÐÑ¡…Ð¥Ìµ…¹…•‰äÑ¡”½¹ÑÉ½±Ì¸($€¨Á…É…´ìý!Q51=5±•µ•¹Ñô‘½µ±•µ•¹Ð€´Q¡”!Q50•±•µ•¹ÐÕÍ•™½È•Ù•¹Ð±¥ÍÑ•¹•ÉÌ¸($€¨¼(%½¹ÍÑÉÕÑ½È ½‰©•Ð°‘½µ±•µ•¹Ð€ô¹Õ±°€¤ì(($%ÍÕÁ•È ¤ì(($$¼¨¨($$€¨Q¡”½‰©•ÐÑ¡…Ð¥Ìµ…¹…•‰äÑ¡”½¹ÑÉ½±Ì¸($$€¨($$€¨ÑåÁ”í=‰©•ÐÍô($$€¨¼($%Ñ¡¥Ì¹½‰©•Ð€ô½‰©•Ðì(($$¼¨¨($$€¨Q¡”!Q50•±•µ•¹ÐÕÍ•™½È•Ù•¹Ð±¥ÍÑ•¹•ÉÌ¸($$€¨($$€¨ÑåÁ”ìý!Q51=5±•µ•¹Ñô($$€¨‘•™…Õ±Ð¹Õ±°($$€¨¼($%Ñ¡¥Ì¹‘½µ±•µ•¹Ð€ô‘½µ±•µ•¹Ðì(($$¼¨¨($$€¨]¡•Ñ¡•ÈÑ¡”½¹ÑÉ½±ÌÉ•ÍÁ½¹‘ÌÑ¼ÕÍ•È¥¹ÁÕÐ½È¹½Ð¸($$€¨($$€¨ÑåÁ”í‰½½±•…¹ô($$€¨‘•™…Õ±ÐÑÉÕ”($$€¨¼($%Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì(($$¼¨¨($$€¨Q¡”¥¹Ñ•É¹…°ÍÑ…Ñ”½˜Ñ¡”½¹ÑÉ½±Ì¸($$€¨($$€¨ÑåÁ”í¹Õµ‰•Éô($$€¨‘•™…Õ±Ð€´Ä($$€¨¼($%Ñ¡¥Ì¹ÍÑ…Ñ”€ô€´Äì(($$¼¨¨($$€¨Q¡¥Ì½‰©•Ð‘•™¥¹•ÌÑ¡”­•å‰½…É¥¹ÁÕÐ½˜Ñ¡”½¹ÑÉ½±Ì¸($$€¨($$€¨ÑåÁ”í=‰©•Ñô($$€¨¼($%Ñ¡¥Ì¹­•åÌ€ôíôì(($$¼¨¨($$€¨Q¡¥Ì½‰©•Ð‘•™¥¹•ÌÝ¡…ÐÑåÁ”½˜…Ñ¥½¹Ì…É”…ÍÍ¥¹•Ñ¼Ñ¡”…Ù…¥±…‰±”µ½ÕÍ”‰ÕÑÑ½¹Ì¸($$€¨%Ð‘•Á•¹‘Ì½¸Ñ¡”½¹ÑÉ½°¥µÁ±•µ•¹Ñ…Ñ¥½¸Ý¡…Ð­¥¹½˜µ½ÕÍ”‰ÕÑÑ½¹Ì…¹…Ñ¥½¹Ì…É”ÍÕÁÁ½ÉÑ•¸($$€¨($$€¨ÑåÁ”íí1Pè€ý¹Õµ‰•È°5%1è€ý¹Õµ‰•È°I%!Pè€ý¹Õµ‰•Éõô($$€¨¼($%Ñ¡¥Ì¹µ½ÕÍ•	ÕÑÑ½¹Ì€ôì1Pè¹Õ±°°5%1è¹Õ±°°I%!Pè¹Õ±°ôì(($$¼¨¨($$€¨Q¡¥Ì½‰©•Ð‘•™¥¹•ÌÝ¡…ÐÑåÁ”½˜…Ñ¥½¹Ì…É”…ÍÍ¥¹•Ñ¼Ý¡…Ð­¥¹½˜Ñ½Õ ¥¹Ñ•É…Ñ¥½¸¸($$€¨%Ð‘•Á•¹‘Ì½¸Ñ¡”½¹ÑÉ½°¥µÁ±•µ•¹Ñ…Ñ¥½¸Ý¡…Ð­¥¹½˜Ñ½Õ ¥¹Ñ•É…Ñ¥½¸…¹…Ñ¥½¹Ì…É”ÍÕÁÁ½ÉÑ•¸($$€¨($$€¨ÑåÁ”íí=9è€ý¹Õµ‰•È°Q]<è€ý¹Õµ‰•Éõô($$€¨¼($%Ñ¡¥Ì¹Ñ½Õ¡•Ì€ôì=9è¹Õ±°°Q]<è¹Õ±°ôì((%ô(($¼¨¨($€¨½¹¹•ÑÌÑ¡”½¹ÑÉ½±ÌÑ¼Ñ¡”=4¸Q¡¥Ìµ•Ñ¡½¡…ÌÍ¼…±±•€‰Í¥‘”•™™•ÑÌˆÍ¥¹”($€¨¥Ð…‘‘ÌÑ¡”µ½‘Õ±”Ì•Ù•¹Ð±¥ÍÑ•¹•ÉÌÑ¼Ñ¡”=4¸($€¨($€¨Á…É…´í!Q51=5±•µ•¹Ñô•±•µ•¹Ð€´Q¡”=4•±•µ•¹ÐÑ¼½¹¹•ÐÑ¼¸($€¨¼(%½¹¹•Ð •±•µ•¹Ð€¤ì(($%¥˜€ •±•µ•¹Ð€ôôôÕ¹‘•™¥¹•€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹½¹ÑÉ½±Ìè½¹¹•Ð ¤¹½ÜÉ•ÅÕ¥É•Ì…¸•±•µ•¹Ð¸œ€¤ì€¼¼‘•ÁÉ•…Ñ•°Ñ¡”Ý…É¹¥¹œ…¸‰”É•µ½Ù•Ý¥Ñ ÈÄàÔ($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹‘½µ±•µ•¹Ð€„ôô¹Õ±°€¤Ñ¡¥Ì¹‘¥Í½¹¹•Ð ¤ì(($%Ñ¡¥Ì¹‘½µ±•µ•¹Ð€ô•±•µ•¹Ðì((%ô(($¼¨¨($€¨¥Í½¹¹•ÑÌÑ¡”½¹ÑÉ½±Ì™É½´Ñ¡”=4¸($€¨¼(%‘¥Í½¹¹•Ð ¤íô(($¼¨¨($€¨…±°Ñ¡¥Ìµ•Ñ¡½¥˜å½Ô¹¼±½¹•ÈÝ…¹ÐÕÍ”Ñ¼Ñ¡”½¹ÑÉ½±Ì¸%Ð™É••Ì…±°¥¹Ñ•É¹…°($€¨É•Í½ÕÉ•Ì…¹É•µ½Ù•Ì…±°•Ù•¹Ð±¥ÍÑ•¹•ÉÌ¸($€¨¼(%‘¥ÍÁ½Í” ¤íô(($¼¨¨($€¨½¹ÑÉ½±ÌÍ¡½Õ±¥µÁ±•µ•¹ÐÑ¡¥Ìµ•Ñ¡½¥˜Ñ¡•ä¡…Ù”Ñ¼ÕÁ‘…Ñ”Ñ¡•¥È¥¹Ñ•É¹…°ÍÑ…Ñ”($€¨Á•ÈÍ¥µÕ±…Ñ¥½¸ÍÑ•À¸($€¨($€¨Á…É…´í¹Õµ‰•Éôm‘•±Ñ…t€´Q¡”Ñ¥µ”‘•±Ñ„¥¸Í•½¹‘Ì¸($€¨¼(%ÕÁ‘…Ñ” €¼¨‘•±Ñ„€¨¼€¤íô()ô((¼¨¨(€¨M…±•ÌÑ¡”Ñ•áÑÕÉ”…Ì±…É”…ÌÁ½ÍÍ¥‰±”Ý¥Ñ¡¥¸¥ÑÌÍÕÉ™…”Ý¥Ñ¡½ÕÐÉ½ÁÁ¥¹œ(€¨½ÈÍÑÉ•Ñ¡¥¹œÑ¡”Ñ•áÑÕÉ”¸Q¡”µ•Ñ¡½ÁÉ•Í•ÉÙ•ÌÑ¡”½É¥¥¹…°…ÍÁ•ÐÉ…Ñ¥¼½˜(€¨Ñ¡”Ñ•áÑÕÉ”¸­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè½¹Ñ…¥¹€(€¨(€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸(€¨Á…É…´í¹Õµ‰•Éô…ÍÁ•Ð€´Q¡”Ñ•áÑÕÉ”Ì…ÍÁ•ÐÉ…Ñ¥¼¸(€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸(€¨¼)™Õ¹Ñ¥½¸½¹Ñ…¥¸ Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì((%½¹ÍÐ¥µ…•ÍÁ•Ð€ô€ Ñ•áÑÕÉ”¹¥µ…”€˜˜Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €¤€üÑ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €¼Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€è€Äì((%¥˜€ ¥µ…•ÍÁ•Ð€ø…ÍÁ•Ð€¤ì(($%Ñ•áÑÕÉ”¹É•Á•…Ð¹à€ô€Äì($%Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€ô¥µ…•ÍÁ•Ð€¼…ÍÁ•Ðì(($%Ñ•áÑÕÉ”¹½™™Í•Ð¹à€ô€Àì($%Ñ•áÑÕÉ”¹½™™Í•Ð¹ä€ô€ €Ä€´Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€¤€¼€Èì((%ô•±Í”ì(($%Ñ•áÑÕÉ”¹É•Á•…Ð¹à€ô…ÍÁ•Ð€¼¥µ…•ÍÁ•Ðì($%Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€ô€Äì(($%Ñ•áÑÕÉ”¹½™™Í•Ð¹à€ô€ €Ä€´Ñ•áÑÕÉ”¹É•Á•…Ð¹à€¤€¼€Èì($%Ñ•áÑÕÉ”¹½™™Í•Ð¹ä€ô€Àì((%ô((%É•ÑÕÉ¸Ñ•áÑÕÉ”ì()ô((¼¨¨(€¨M…±•ÌÑ¡”Ñ•áÑÕÉ”Ñ¼Ñ¡”Íµ…±±•ÍÐÁ½ÍÍ¥‰±”Í¥é”Ñ¼™¥±°Ñ¡”ÍÕÉ™…”°±•…Ù¥¹œ(€¨¹¼•µÁÑäÍÁ…”¸Q¡”µ•Ñ¡½ÁÉ•Í•ÉÙ•ÌÑ¡”½É¥¥¹…°…ÍÁ•ÐÉ…Ñ¥¼½˜Ñ¡”Ñ•áÑÕÉ”¸(€¨­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè½Ù•É€¸(€¨(€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸(€¨Á…É…´í¹Õµ‰•Éô…ÍÁ•Ð€´Q¡”Ñ•áÑÕÉ”Ì…ÍÁ•ÐÉ…Ñ¥¼¸(€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸(€¨¼)™Õ¹Ñ¥½¸½Ù•È Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì((%½¹ÍÐ¥µ…•ÍÁ•Ð€ô€ Ñ•áÑÕÉ”¹¥µ…”€˜˜Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €¤€üÑ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €¼Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€è€Äì((%¥˜€ ¥µ…•ÍÁ•Ð€ø…ÍÁ•Ð€¤ì(($%Ñ•áÑÕÉ”¹É•Á•…Ð¹à€ô…ÍÁ•Ð€¼¥µ…•ÍÁ•Ðì($%Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€ô€Äì(($%Ñ•áÑÕÉ”¹½™™Í•Ð¹à€ô€ €Ä€´Ñ•áÑÕÉ”¹É•Á•…Ð¹à€¤€¼€Èì($%Ñ•áÑÕÉ”¹½™™Í•Ð¹ä€ô€Àì((%ô•±Í”ì(($%Ñ•áÑÕÉ”¹É•Á•…Ð¹à€ô€Äì($%Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€ô¥µ…•ÍÁ•Ð€¼…ÍÁ•Ðì(($%Ñ•áÑÕÉ”¹½™™Í•Ð¹à€ô€Àì($%Ñ•áÑÕÉ”¹½™™Í•Ð¹ä€ô€ €Ä€´Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€¤€¼€Èì((%ô((%É•ÑÕÉ¸Ñ•áÑÕÉ”ì()ô((¼¨¨(€¨½¹™¥ÕÉ•ÌÑ¡”Ñ•áÑÕÉ”Ñ¼Ñ¡”‘•™…Õ±ÐÑÉ…¹Í™½Éµ…Ñ¥½¸¸­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè™¥±±€¸(€¨(€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸(€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸(€¨¼)™Õ¹Ñ¥½¸™¥±° Ñ•áÑÕÉ”€¤ì((%Ñ•áÑÕÉ”¹É•Á•…Ð¹à€ô€Äì(%Ñ•áÑÕÉ”¹É•Á•…Ð¹ä€ô€Äì((%Ñ•áÑÕÉ”¹½™™Í•Ð¹à€ô€Àì(%Ñ•áÑÕÉ”¹½™™Í•Ð¹ä€ô€Àì((%É•ÑÕÉ¸Ñ•áÑÕÉ”ì()ô((¼¨¨(€¨•Ñ•Éµ¥¹•Ì¡½Üµ…¹ä‰åÑ•ÌµÕÍÐ‰”ÕÍ•Ñ¼É•ÁÉ•Í•¹ÐÑ¡”Ñ•áÑÕÉ”¸(€¨(€¨Á…É…´í¹Õµ‰•ÉôÝ¥‘Ñ €´Q¡”Ý¥‘Ñ ½˜Ñ¡”Ñ•áÑÕÉ”¸(€¨Á…É…´í¹Õµ‰•Éô¡•¥¡Ð€´Q¡”¡•¥¡Ð½˜Ñ¡”Ñ•áÑÕÉ”¸(€¨Á…É…´í¹Õµ‰•Éô™½Éµ…Ð€´Q¡”Ñ•áÑÕÉ”Ì™½Éµ…Ð¸(€¨Á…É…´í¹Õµ‰•ÉôÑåÁ”€´Q¡”Ñ•áÑÕÉ”ÌÑåÁ”¸(€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”‰åÑ”±•¹Ñ ¸(€¨¼)™Õ¹Ñ¥½¸•Ñ	åÑ•1•¹Ñ  Ý¥‘Ñ °¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”€¤ì((%½¹ÍÐÑåÁ•	åÑ•1•¹Ñ €ô•ÑQ•áÑÕÉ•QåÁ•	åÑ•1•¹Ñ  ÑåÁ”€¤ì((%ÍÝ¥Ñ € ™½Éµ…Ð€¤ì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½=Á•¹0µI•™Á…•Ì½•ÌÌ¸À½¡Ñµ°½±Q•á%µ…”É¹á¡Ñµ°($%…Í”±Á¡…½Éµ…Ðè($$%É•ÑÕÉ¸Ý¥‘Ñ €¨¡•¥¡Ðì($%…Í”I•‘½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I•‘%¹Ñ••É½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¨€È€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I%¹Ñ••É½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¨€È€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I	½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¨€Ì€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I	½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¨€Ð€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì($%…Í”I	%¹Ñ••É½Éµ…Ðè($$%É•ÑÕÉ¸€ € Ý¥‘Ñ €¨¡•¥¡Ð€¨€Ð€¤€¼ÑåÁ•	åÑ•1•¹Ñ ¹½µÁ½¹•¹ÑÌ€¤€¨ÑåÁ•	åÑ•1•¹Ñ ¹‰åÑ•1•¹Ñ ì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½]	1}½µÁÉ•ÍÍ•‘}Ñ•áÑÕÉ•}ÌÍÑ}ÍÉˆ¼($%…Í”I	}LÍQ}aPÅ}½Éµ…Ðè($%…Í”I	}LÍQ}aPÅ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ì€¤€¼€Ð€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€àì($%…Í”I	}LÍQ}aPÍ}½Éµ…Ðè($%…Í”I	}LÍQ}aPÕ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ì€¤€¼€Ð€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€ÄØì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½]	1}½µÁÉ•ÍÍ•‘}Ñ•áÑÕÉ•}ÁÙÉÑŒ¼($%…Í”I	}AYIQ|É	AAXÅ}½Éµ…Ðè($%…Í”I	}AYIQ|É	AAXÅ}½Éµ…Ðè($$%É•ÑÕÉ¸€ 5…Ñ ¹µ…à Ý¥‘Ñ °€ÄØ€¤€¨5…Ñ ¹µ…à ¡•¥¡Ð°€à€¤€¤€¼€Ðì($%…Í”I	}AYIQ|Ñ	AAXÅ}½Éµ…Ðè($%…Í”I	}AYIQ|Ñ	AAXÅ}½Éµ…Ðè($$%É•ÑÕÉ¸€ 5…Ñ ¹µ…à Ý¥‘Ñ °€à€¤€¨5…Ñ ¹µ…à ¡•¥¡Ð°€à€¤€¤€¼€Èì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½]	1}½µÁÉ•ÍÍ•‘}Ñ•áÑÕÉ•}•ÑŒ¼($%…Í”I	}QÅ}½Éµ…Ðè($%…Í”I	}QÉ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ì€¤€¼€Ð€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€àì($%…Í”I	}QÉ}}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ì€¤€¼€Ð€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€ÄØì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½]	1}½µÁÉ•ÍÍ•‘}Ñ•áÑÕÉ•}…ÍÑŒ¼($%…Í”I	}MQ|ÑàÑ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ì€¤€¼€Ð€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€ÄØì($%…Í”I	}MQ|ÕàÑ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ð€¤€¼€Ô€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ì€¤€¼€Ð€¤€¨€ÄØì($%…Í”I	}MQ|ÕàÕ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ð€¤€¼€Ô€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ð€¤€¼€Ô€¤€¨€ÄØì($%…Í”I	}MQ|ÙàÕ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ô€¤€¼€Ø€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ð€¤€¼€Ô€¤€¨€ÄØì($%…Í”I	}MQ|ÙàÙ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ô€¤€¼€Ø€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ô€¤€¼€Ø€¤€¨€ÄØì($%…Í”I	}MQ|áàÕ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ü€¤€¼€à€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ð€¤€¼€Ô€¤€¨€ÄØì($%…Í”I	}MQ|áàÙ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ü€¤€¼€à€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ô€¤€¼€Ø€¤€¨€ÄØì($%…Í”I	}MQ|áàá}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€Ü€¤€¼€à€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ü€¤€¼€à€¤€¨€ÄØì($%…Í”I	}MQ|ÄÁàÕ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ä€¤€¼€ÄÀ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ð€¤€¼€Ô€¤€¨€ÄØì($%…Í”I	}MQ|ÄÁàÙ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ä€¤€¼€ÄÀ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ô€¤€¼€Ø€¤€¨€ÄØì($%…Í”I	}MQ|ÄÁàá}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ä€¤€¼€ÄÀ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€Ü€¤€¼€à€¤€¨€ÄØì($%…Í”I	}MQ|ÄÁàÄÁ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ä€¤€¼€ÄÀ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€ä€¤€¼€ÄÀ€¤€¨€ÄØì($%…Í”I	}MQ|ÄÉàÄÁ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ÄÄ€¤€¼€ÄÈ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€ä€¤€¼€ÄÀ€¤€¨€ÄØì($%…Í”I	}MQ|ÄÉàÄÉ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹™±½½È € Ý¥‘Ñ €¬€ÄÄ€¤€¼€ÄÈ€¤€¨5…Ñ ¹™±½½È € ¡•¥¡Ð€¬€ÄÄ€¤€¼€ÄÈ€¤€¨€ÄØì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½aQ}Ñ•áÑÕÉ•}½µÁÉ•ÍÍ¥½¹}‰ÁÑŒ¼($%…Í”I	}	AQ}½Éµ…Ðè($%…Í”I	}	AQ}M%9}½Éµ…Ðè($%…Í”I	}	AQ}U9M%9}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹•¥° Ý¥‘Ñ €¼€Ð€¤€¨5…Ñ ¹•¥° ¡•¥¡Ð€¼€Ð€¤€¨€ÄØì(($$¼¼¡ÑÑÁÌè¼½É•¥ÍÑÉä¹­¡É½¹½Ì¹½Éœ½Ý•‰°½•áÑ•¹Í¥½¹Ì½aQ}Ñ•áÑÕÉ•}½µÁÉ•ÍÍ¥½¹}ÉÑŒ¼($%…Í”I}IQÅ}½Éµ…Ðè($%…Í”M%9}I}IQÅ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹•¥° Ý¥‘Ñ €¼€Ð€¤€¨5…Ñ ¹•¥° ¡•¥¡Ð€¼€Ð€¤€¨€àì($%…Í”I}I9}IQÉ}½Éµ…Ðè($%…Í”M%9}I}I9}IQÉ}½Éµ…Ðè($$%É•ÑÕÉ¸5…Ñ ¹•¥° Ý¥‘Ñ €¼€Ð€¤€¨5…Ñ ¹•¥° ¡•¥¡Ð€¼€Ð€¤€¨€ÄØì((%ô((%Ñ¡É½Ü¹•ÜÉÉ½È ($%U¹…‰±”Ñ¼‘•Ñ•Éµ¥¹”Ñ•áÑÕÉ”‰åÑ”±•¹Ñ ™½È€‘í™½Éµ…Ñô™½Éµ…Ð¹€°($¤ì()ô()™Õ¹Ñ¥½¸•ÑQ•áÑÕÉ•QåÁ•	åÑ•1•¹Ñ  ÑåÁ”€¤ì((%ÍÝ¥Ñ € ÑåÁ”€¤ì(($%…Í”U¹Í¥¹•‘	åÑ•QåÁ”è($%…Í”	åÑ•QåÁ”è($$%É•ÑÕÉ¸ì‰åÑ•1•¹Ñ è€Ä°½µÁ½¹•¹ÑÌè€Äôì($%…Í”U¹Í¥¹•‘M¡½ÉÑQåÁ”è($%…Í”M¡½ÉÑQåÁ”è($%…Í”!…±™±½…ÑQåÁ”è($$%É•ÑÕÉ¸ì‰åÑ•1•¹Ñ è€È°½µÁ½¹•¹ÑÌè€Äôì($%…Í”U¹Í¥¹•‘M¡½ÉÐÐÐÐÑQåÁ”è($%…Í”U¹Í¥¹•‘M¡½ÉÐÔÔÔÅQåÁ”è($$%É•ÑÕÉ¸ì‰åÑ•1•¹Ñ è€È°½µÁ½¹•¹ÑÌè€Ðôì($%…Í”U¹Í¥¹•‘%¹ÑQåÁ”è($%…Í”%¹ÑQåÁ”è($%…Í”±½…ÑQåÁ”è($$%É•ÑÕÉ¸ì‰åÑ•1•¹Ñ è€Ð°½µÁ½¹•¹ÑÌè€Äôì($%…Í”U¹Í¥¹•‘%¹ÐÔääåQåÁ”è($%…Í”U¹Í¥¹•‘%¹ÐÄÀÄÄÄÅQåÁ”è($$%É•ÑÕÉ¸ì‰åÑ•1•¹Ñ è€Ð°½µÁ½¹•¹ÑÌè€Ìôì((%ô((%Ñ¡É½Ü¹•ÜÉÉ½È U¹­¹½Ý¸Ñ•áÑÕÉ”ÑåÁ”€‘íÑåÁ•ô¹€€¤ì()ô((¼¨¨(€¨±…ÍÌ½¹Ñ…¥¹¥¹œÕÑ¥±¥Ñä™Õ¹Ñ¥½¹Ì™½ÈÑ•áÑÕÉ•Ì¸(€¨(€¨¡¥‘•½¹ÍÑÉÕÑ½È(€¨¼)±…ÍÌQ•áÑÕÉ•UÑ¥±Ìì(($¼¨¨($€¨M…±•ÌÑ¡”Ñ•áÑÕÉ”…Ì±…É”…ÌÁ½ÍÍ¥‰±”Ý¥Ñ¡¥¸¥ÑÌÍÕÉ™…”Ý¥Ñ¡½ÕÐÉ½ÁÁ¥¹œ($€¨½ÈÍÑÉ•Ñ¡¥¹œÑ¡”Ñ•áÑÕÉ”¸Q¡”µ•Ñ¡½ÁÉ•Í•ÉÙ•ÌÑ¡”½É¥¥¹…°…ÍÁ•ÐÉ…Ñ¥¼½˜($€¨Ñ¡”Ñ•áÑÕÉ”¸­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè½¹Ñ…¥¹€($€¨($€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸($€¨Á…É…´í¹Õµ‰•Éô…ÍÁ•Ð€´Q¡”Ñ•áÑÕÉ”Ì…ÍÁ•ÐÉ…Ñ¥¼¸($€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸($€¨¼(%ÍÑ…Ñ¥Œ½¹Ñ…¥¸ Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì(($%É•ÑÕÉ¸½¹Ñ…¥¸ Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì((%ô(($¼¨¨($€¨M…±•ÌÑ¡”Ñ•áÑÕÉ”Ñ¼Ñ¡”Íµ…±±•ÍÐÁ½ÍÍ¥‰±”Í¥é”Ñ¼™¥±°Ñ¡”ÍÕÉ™…”°±•…Ù¥¹œ($€¨¹¼•µÁÑäÍÁ…”¸Q¡”µ•Ñ¡½ÁÉ•Í•ÉÙ•ÌÑ¡”½É¥¥¹…°…ÍÁ•ÐÉ…Ñ¥¼½˜Ñ¡”Ñ•áÑÕÉ”¸($€¨­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè½Ù•É€¸($€¨($€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸($€¨Á…É…´í¹Õµ‰•Éô…ÍÁ•Ð€´Q¡”Ñ•áÑÕÉ”Ì…ÍÁ•ÐÉ…Ñ¥¼¸($€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸($€¨¼(%ÍÑ…Ñ¥Œ½Ù•È Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì(($%É•ÑÕÉ¸½Ù•È Ñ•áÑÕÉ”°…ÍÁ•Ð€¤ì((%ô(($¼¨¨($€¨½¹™¥ÕÉ•ÌÑ¡”Ñ•áÑÕÉ”Ñ¼Ñ¡”‘•™…Õ±ÐÑÉ…¹Í™½Éµ…Ñ¥½¸¸­¥¸Ñ¼ML½‰©•Ðµ™¥Ðè™¥±±€¸($€¨($€¨Á…É…´íQ•áÑÕÉ•ôÑ•áÑÕÉ”€´Q¡”Ñ•áÑÕÉ”¸($€¨É•ÑÕÉ¸íQ•áÑÕÉ•ôQ¡”ÕÁ‘…Ñ•Ñ•áÑÕÉ”¸($€¨¼(%ÍÑ…Ñ¥Œ™¥±° Ñ•áÑÕÉ”€¤ì(($%É•ÑÕÉ¸™¥±° Ñ•áÑÕÉ”€¤ì((%ô(($¼¨¨($€¨•Ñ•Éµ¥¹•Ì¡½Üµ…¹ä‰åÑ•ÌµÕÍÐ‰”ÕÍ•Ñ¼É•ÁÉ•Í•¹ÐÑ¡”Ñ•áÑÕÉ”¸($€¨($€¨Á…É…´í¹Õµ‰•ÉôÝ¥‘Ñ €´Q¡”Ý¥‘Ñ ½˜Ñ¡”Ñ•áÑÕÉ”¸($€¨Á…É…´í¹Õµ‰•Éô¡•¥¡Ð€´Q¡”¡•¥¡Ð½˜Ñ¡”Ñ•áÑÕÉ”¸($€¨Á…É…´í¹Õµ‰•Éô™½Éµ…Ð€´Q¡”Ñ•áÑÕÉ”Ì™½Éµ…Ð¸($€¨Á…É…´í¹Õµ‰•ÉôÑåÁ”€´Q¡”Ñ•áÑÕÉ”ÌÑåÁ”¸($€¨É•ÑÕÉ¸í¹Õµ‰•ÉôQ¡”‰åÑ”±•¹Ñ ¸($€¨¼(%ÍÑ…Ñ¥Œ•Ñ	åÑ•1•¹Ñ  Ý¥‘Ñ °¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”€¤ì(($%É•ÑÕÉ¸•Ñ	åÑ•1•¹Ñ  Ý¥‘Ñ °¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”€¤ì((%ô()ô()¥˜€ ÑåÁ•½˜}}Q!I}YQ==1M}|€„ôô€Õ¹‘•™¥¹•œ€¤ì((%}}Q!I}YQ==1M}|¹‘¥ÍÁ…Ñ¡Ù•¹Ð ¹•ÜÕÍÑ½µÙ•¹Ð €É•¥ÍÑ•Èœ°ì‘•Ñ…¥°èì($%É•Ù¥Í¥½¸èIY%M%=8°(%ôô€¤€¤ì()ô()¥˜€ ÑåÁ•½˜Ý¥¹‘½Ü€„ôô€Õ¹‘•™¥¹•œ€¤ì((%¥˜€ Ý¥¹‘½Ü¹}}Q!I}|€¤ì(($%½¹Í½±”¹Ý…É¸ €]I9%9è5Õ±Ñ¥Á±”¥¹ÍÑ…¹•Ì½˜Q¡É•”¹©Ì‰•¥¹œ¥µÁ½ÉÑ•¸œ€¤ì((%ô•±Í”ì(($%Ý¥¹‘½Ü¹}}Q!I}|€ôIY%M%=8ì((%ô()ô()•áÁ½ÉÐìM¥±µ¥Q½¹•5…ÁÁ¥¹œ°‘‘ÅÕ…Ñ¥½¸°‘‘=Á•É…Ñ¥½¸°‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”°‘‘¥Ñ¥Ù•	±•¹‘¥¹œ°aQ½¹•5…ÁÁ¥¹œ°±Á¡…½Éµ…Ð°±Ý…åÍ½µÁ…É”°±Ý…åÍ•ÁÑ °±Ý…åÍMÑ•¹¥±Õ¹Œ°µ‰¥•¹Ñ1¥¡Ð°¹¥µ…Ñ¥½¹Ñ¥½¸°¹¥µ…Ñ¥½¹±¥À°¹¥µ…Ñ¥½¹1½…‘•È°¹¥µ…Ñ¥½¹5¥á•È°¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ°¹¥µ…Ñ¥½¹UÑ¥±Ì°ÉÕÉÙ”°ÉÉ…å…µ•É„°ÉÉ½Ý!•±Á•È°ÑÑ…¡•‘	¥¹‘5½‘”°Õ‘¥¼°Õ‘¥½¹…±åÍ•È°Õ‘¥½½¹Ñ•áÐ°Õ‘¥½1¥ÍÑ•¹•È°Õ‘¥½1½…‘•È°á•Í!•±Á•È°	…­M¥‘”°	…Í¥•ÁÑ¡A…­¥¹œ°	…Í¥M¡…‘½Ý5…À°	…Ñ¡•‘5•Í °	½¹”°	½½±•…¹-•å™É…µ•QÉ…¬°	½àÈ°	½àÌ°	½àÍ!•±Á•È°	½á•½µ•ÑÉä°	½á!•±Á•È°	Õ™™•ÉÑÑÉ¥‰ÕÑ”°	Õ™™•É•½µ•ÑÉä°	Õ™™•É•½µ•ÑÉå1½…‘•È°	åÑ•QåÁ”°…¡”°…µ•É„°…µ•É…!•±Á•È°…¹Ù…ÍQ•áÑÕÉ”°…ÁÍÕ±••½µ•ÑÉä°…ÑµÕ±±I½µÕÉÙ”Ì°¥¹•½¹Q½¹•5…ÁÁ¥¹œ°¥É±••½µ•ÑÉä°±…µÁQ½‘•]É…ÁÁ¥¹œ°±½¬°½±½È°½±½É-•å™É…µ•QÉ…¬°½±½É5…¹…•µ•¹Ð°½µÁÉ•ÍÍ•‘ÉÉ…åQ•áÑÕÉ”°½µÁÉ•ÍÍ•‘Õ‰•Q•áÑÕÉ”°½µÁÉ•ÍÍ•‘Q•áÑÕÉ”°½µÁÉ•ÍÍ•‘Q•áÑÕÉ•1½…‘•È°½¹••½µ•ÑÉä°½¹ÍÑ…¹Ñ±Á¡……Ñ½È°½¹ÍÑ…¹Ñ½±½É…Ñ½È°½¹ÑÉ½±Ì°Õ‰•…µ•É„°Õ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œ°Õ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œ°Õ‰•Q•áÑÕÉ”°Õ‰•Q•áÑÕÉ•1½…‘•È°Õ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œ°Õ‰¥	•é¥•ÉÕÉÙ”°Õ‰¥	•é¥•ÉÕÉÙ”Ì°Õ‰¥%¹Ñ•ÉÁ½±…¹Ð°Õ±±…•	…¬°Õ±±…•É½¹Ð°Õ±±…•É½¹Ñ	…¬°Õ±±…•9½¹”°ÕÉÙ”°ÕÉÙ•A…Ñ °ÕÍÑ½µ	±•¹‘¥¹œ°ÕÍÑ½µQ½¹•5…ÁÁ¥¹œ°å±¥¹‘•É•½µ•ÑÉä°å±¥¹‘É¥…°°…Ñ„ÍQ•áÑÕÉ”°…Ñ…ÉÉ…åQ•áÑÕÉ”°…Ñ…Q•áÑÕÉ”°…Ñ…Q•áÑÕÉ•1½…‘•È°…Ñ…UÑ¥±Ì°•É•µ•¹ÑMÑ•¹¥±=À°•É•µ•¹Ñ]É…ÁMÑ•¹¥±=À°•™…Õ±Ñ1½…‘¥¹5…¹…•È°•ÁÑ¡½Éµ…Ð°•ÁÑ¡MÑ•¹¥±½Éµ…Ð°•ÁÑ¡Q•áÑÕÉ”°•Ñ…¡•‘	¥¹‘5½‘”°¥É•Ñ¥½¹…±1¥¡Ð°¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•È°¥ÍÉ•Ñ•%¹Ñ•ÉÁ½±…¹Ð°½‘•…¡•‘É½¹•½µ•ÑÉä°½Õ‰±•M¥‘”°ÍÑ±Á¡……Ñ½È°ÍÑ½±½É…Ñ½È°å¹…µ¥½ÁåUÍ…”°å¹…µ¥É…ÝUÍ…”°å¹…µ¥I•…‘UÍ…”°‘•Í•½µ•ÑÉä°±±¥ÁÍ•ÕÉÙ”°ÅÕ…±½µÁ…É”°ÅÕ…±•ÁÑ °ÅÕ…±MÑ•¹¥±Õ¹Œ°ÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œ°ÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œ°Õ±•È°Ù•¹Ñ¥ÍÁ…Ñ¡•È°áÑ•É¹…±Q•áÑÕÉ”°áÑÉÕ‘••½µ•ÑÉä°¥±•1½…‘•È°±½…ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°±½…ÑQåÁ”°½œ°½áÀÈ°É…µ•‰Õ™™•ÉQ•áÑÕÉ”°É½¹ÑM¥‘”°ÉÕÍÑÕ´°ÉÕÍÑÕµÉÉ…ä°1	Õ™™•ÉÑÑÉ¥‰ÕÑ”°1M0Ä°1M0Ì°É•…Ñ•É½µÁ…É”°É•…Ñ•É•ÁÑ °É•…Ñ•ÉÅÕ…±½µÁ…É”°É•…Ñ•ÉÅÕ…±•ÁÑ °É•…Ñ•ÉÅÕ…±MÑ•¹¥±Õ¹Œ°É•…Ñ•ÉMÑ•¹¥±Õ¹Œ°É¥‘!•±Á•È°É½ÕÀ°!…±™±½…ÑQåÁ”°!•µ¥ÍÁ¡•É•1¥¡Ð°!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•È°%½Í…¡•‘É½¹•½µ•ÑÉä°%µ…•	¥Ñµ…Á1½…‘•È°%µ…•1½…‘•È°%µ…•UÑ¥±Ì°%¹É•µ•¹ÑMÑ•¹¥±=À°%¹É•µ•¹Ñ]É…ÁMÑ•¹¥±=À°%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä°%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È°%¹ÍÑ…¹•‘5•Í °%¹ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹Ðá	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÑQåÁ”°%¹Ñ•É±•…Ù•‘	Õ™™•È°%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹Ñ•ÉÁ½±…¹Ð°%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”°%¹Ñ•ÉÁ½±…Ñ•1¥¹•…È°%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ °%¹Ñ•ÉÁ½±…Ñ¥½¹M…µÁ±¥¹5½‘”°%¹Ñ•ÉÁ½±…Ñ¥½¹M…µÁ±¥¹QåÁ”°%¹Ù•ÉÑMÑ•¹¥±=À°-••ÁMÑ•¹¥±=À°-•å™É…µ•QÉ…¬°1=°1…Ñ¡••½µ•ÑÉä°1…å•ÉÌ°1•ÍÍ½µÁ…É”°1•ÍÍ•ÁÑ °1•ÍÍÅÕ…±½µÁ…É”°1•ÍÍÅÕ…±•ÁÑ °1•ÍÍÅÕ…±MÑ•¹¥±Õ¹Œ°1•ÍÍMÑ•¹¥±Õ¹Œ°1¥¡Ð°1¥¡ÑAÉ½‰”°1¥¹”°1¥¹”Ì°1¥¹•	…Í¥5…Ñ•É¥…°°1¥¹•ÕÉÙ”°1¥¹•ÕÉÙ”Ì°1¥¹•…Í¡•‘5…Ñ•É¥…°°1¥¹•1½½À°1¥¹•M•µ•¹ÑÌ°1¥¹•…É¥±Ñ•È°1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð°1¥¹•…É5¥Á5…Á1¥¹•…É¥±Ñ•È°1¥¹•…É5¥Á5…Á9•…É•ÍÑ¥±Ñ•È°1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•È°1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°1¥¹•…ÉMI	½±½ÉMÁ…”°1¥¹•…ÉQ½¹•5…ÁÁ¥¹œ°1¥¹•…ÉQÉ…¹Í™•È°1½…‘•È°1½…‘•ÉUÑ¥±Ì°1½…‘¥¹5…¹…•È°1½½Á=¹”°1½½ÁA¥¹A½¹œ°1½½ÁI•Á•…Ð°5=UM°5…Ñ•É¥…°°5…Ñ•É¥…±1½…‘•È°5…Ñ¡UÑ¥±Ì°5…ÑÉ¥àÈ°5…ÑÉ¥àÌ°5…ÑÉ¥àÐ°5…áÅÕ…Ñ¥½¸°5•Í °5•Í¡	…Í¥5…Ñ•É¥…°°5•Í¡•ÁÑ¡5…Ñ•É¥…°°5•Í¡¥ÍÑ…¹•5…Ñ•É¥…°°5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°°5•Í¡5…Ñ…Á5…Ñ•É¥…°°5•Í¡9½Éµ…±5…Ñ•É¥…°°5•Í¡A¡½¹5…Ñ•É¥…°°5•Í¡A¡åÍ¥…±5…Ñ•É¥…°°5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°°5•Í¡Q½½¹5…Ñ•É¥…°°5¥¹ÅÕ…Ñ¥½¸°5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œ°5¥á=Á•É…Ñ¥½¸°5Õ±Ñ¥Á±å	±•¹‘¥¹œ°5Õ±Ñ¥Á±å=Á•É…Ñ¥½¸°9•…É•ÍÑ¥±Ñ•È°9•…É•ÍÑ5¥Á5…Á1¥¹•…É¥±Ñ•È°9•…É•ÍÑ5¥Á5…Á9•…É•ÍÑ¥±Ñ•È°9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•È°9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°9•ÕÑÉ…±Q½¹•5…ÁÁ¥¹œ°9•Ù•É½µÁ…É”°9•Ù•É•ÁÑ °9•Ù•ÉMÑ•¹¥±Õ¹Œ°9½	±•¹‘¥¹œ°9½½±½ÉMÁ…”°9½Q½¹•5…ÁÁ¥¹œ°9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”°9½Éµ…±	±•¹‘¥¹œ°9½ÑÅÕ…±½µÁ…É”°9½ÑÅÕ…±•ÁÑ °9½ÑÅÕ…±MÑ•¹¥±Õ¹Œ°9Õµ‰•É-•å™É…µ•QÉ…¬°=‰©•ÐÍ°=‰©•Ñ1½…‘•È°=‰©•ÑMÁ…•9½Éµ…±5…À°=Ñ…¡•‘É½¹•½µ•ÑÉä°=¹•…Ñ½È°=¹•5¥¹ÕÍ½¹ÍÑ…¹Ñ±Á¡……Ñ½È°=¹•5¥¹ÕÍ½¹ÍÑ…¹Ñ½±½É…Ñ½È°=¹•5¥¹ÕÍÍÑ±Á¡……Ñ½È°=¹•5¥¹ÕÍÍÑ½±½É…Ñ½È°=¹•5¥¹ÕÍMÉ±Á¡……Ñ½È°=¹•5¥¹ÕÍMÉ½±½É…Ñ½È°=ÉÑ¡½É…Á¡¥…µ•É„°AM¡…‘½Ý5…À°AM½™ÑM¡…‘½Ý5…À°A…Ñ °A•ÉÍÁ•Ñ¥Ù•…µ•É„°A±…¹”°A±…¹••½µ•ÑÉä°A±…¹•!•±Á•È°A½¥¹Ñ1¥¡Ð°A½¥¹Ñ1¥¡Ñ!•±Á•È°A½¥¹ÑÌ°A½¥¹ÑÍ5…Ñ•É¥…°°A½±…ÉÉ¥‘!•±Á•È°A½±å¡•‘É½¹•½µ•ÑÉä°A½Í¥Ñ¥½¹…±Õ‘¥¼°AÉ½Á•ÉÑå	¥¹‘¥¹œ°AÉ½Á•ÉÑå5¥á•È°EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”°EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì°EÕ…Ñ•É¹¥½¸°EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬°EÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð°IÉ°I}I9}IQÉ}½Éµ…Ð°I}IQÅ}½Éµ…Ð°IY%M%=8°I	•ÁÑ¡A…­¥¹œ°I	½Éµ…Ð°I	%¹Ñ••É½Éµ…Ð°I	}MQ|ÄÁàÄÁ}½Éµ…Ð°I	}MQ|ÄÁàÕ}½Éµ…Ð°I	}MQ|ÄÁàÙ}½Éµ…Ð°I	}MQ|ÄÁàá}½Éµ…Ð°I	}MQ|ÄÉàÄÁ}½Éµ…Ð°I	}MQ|ÄÉàÄÉ}½Éµ…Ð°I	}MQ|ÑàÑ}½Éµ…Ð°I	}MQ|ÕàÑ}½Éµ…Ð°I	}MQ|ÕàÕ}½Éµ…Ð°I	}MQ|ÙàÕ}½Éµ…Ð°I	}MQ|ÙàÙ}½Éµ…Ð°I	}MQ|áàÕ}½Éµ…Ð°I	}MQ|áàÙ}½Éµ…Ð°I	}MQ|áàá}½Éµ…Ð°I	}	AQ}½Éµ…Ð°I	}QÉ}}½Éµ…Ð°I	}AYIQ|É	AAXÅ}½Éµ…Ð°I	}AYIQ|Ñ	AAXÅ}½Éµ…Ð°I	}LÍQ}aPÅ}½Éµ…Ð°I	}LÍQ}aPÍ}½Éµ…Ð°I	}LÍQ}aPÕ}½Éµ…Ð°I	•ÁÑ¡A…­¥¹œ°I	½Éµ…Ð°I	%¹Ñ••É½Éµ…Ð°I	}	AQ}M%9}½Éµ…Ð°I	}	AQ}U9M%9}½Éµ…Ð°I	}QÅ}½Éµ…Ð°I	}QÉ}½Éµ…Ð°I	}AYIQ|É	AAXÅ}½Éµ…Ð°I	}AYIQ|Ñ	AAXÅ}½Éµ…Ð°I	}LÍQ}aPÅ}½Éµ…Ð°I•ÁÑ¡A…­¥¹œ°I½Éµ…Ð°I%¹Ñ••É½Éµ…Ð°I…ÝM¡…‘•É5…Ñ•É¥…°°I…ä°I…å…ÍÑ•È°I•ÑÉ•…1¥¡Ð°I•‘½Éµ…Ð°I•‘%¹Ñ••É½Éµ…Ð°I•¥¹¡…É‘Q½¹•5…ÁÁ¥¹œ°I•¹‘•ÉQ…É•Ð°I•¹‘•ÉQ…É•ÐÍ°I•Á•…Ñ]É…ÁÁ¥¹œ°I•Á±…•MÑ•¹¥±=À°I•Ù•ÉÍ•MÕ‰ÑÉ…ÑÅÕ…Ñ¥½¸°I¥¹•½µ•ÑÉä°M%9}I}I9}IQÉ}½Éµ…Ð°M%9}I}IQÅ}½Éµ…Ð°MI	½±½ÉMÁ…”°MI	QÉ…¹Í™•È°M•¹”°M¡…‘•É5…Ñ•É¥…°°M¡…‘½Ý5…Ñ•É¥…°°M¡…Á”°M¡…Á••½µ•ÑÉä°M¡…Á•A…Ñ °M¡…Á•UÑ¥±Ì°M¡½ÉÑQåÁ”°M­•±•Ñ½¸°M­•±•Ñ½¹!•±Á•È°M­¥¹¹•‘5•Í °M½ÕÉ”°MÁ¡•É”°MÁ¡•É••½µ•ÑÉä°MÁ¡•É¥…°°MÁ¡•É¥…±!…Éµ½¹¥ÌÌ°MÁ±¥¹•ÕÉÙ”°MÁ½Ñ1¥¡Ð°MÁ½Ñ1¥¡Ñ!•±Á•È°MÁÉ¥Ñ”°MÁÉ¥Ñ•5…Ñ•É¥…°°MÉ±Á¡……Ñ½È°MÉ±Á¡…M…ÑÕÉ…Ñ•…Ñ½È°MÉ½±½É…Ñ½È°MÑ…Ñ¥½ÁåUÍ…”°MÑ…Ñ¥É…ÝUÍ…”°MÑ…Ñ¥I•…‘UÍ…”°MÑ•É•½…µ•É„°MÑÉ•…µ½ÁåUÍ…”°MÑÉ•…µÉ…ÝUÍ…”°MÑÉ•…µI•…‘UÍ…”°MÑÉ¥¹-•å™É…µ•QÉ…¬°MÕ‰ÑÉ…ÑÅÕ…Ñ¥½¸°MÕ‰ÑÉ…Ñ¥Ù•	±•¹‘¥¹œ°Q=U °Q…¹•¹ÑMÁ…•9½Éµ…±5…À°Q•ÑÉ…¡•‘É½¹•½µ•ÑÉä°Q•áÑÕÉ”°Q•áÑÕÉ•1½…‘•È°Q•áÑÕÉ•UÑ¥±Ì°Q¥µ•È°Q¥µ•ÍÑ…µÁEÕ•Éä°Q½ÉÕÍ•½µ•ÑÉä°Q½ÉÕÍ-¹½Ñ•½µ•ÑÉä°QÉ¥…¹±”°QÉ¥…¹±•…¹É…Ý5½‘”°QÉ¥…¹±•MÑÉ¥ÁÉ…Ý5½‘”°QÉ¥…¹±•ÍÉ…Ý5½‘”°QÕ‰••½µ•ÑÉä°UY5…ÁÁ¥¹œ°U¥¹ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹Ðá	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹Ðá±…µÁ•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¹¥™½É´°U¹¥™½ÉµÍÉ½ÕÀ°U¹¥™½ÉµÍUÑ¥±Ì°U¹Í¥¹•‘	åÑ•QåÁ”°U¹Í¥¹•‘%¹ÐÄÀÄÄÄÅQåÁ”°U¹Í¥¹•‘%¹ÐÈÐáQåÁ”°U¹Í¥¹•‘%¹ÐÔääåQåÁ”°U¹Í¥¹•‘%¹ÑQåÁ”°U¹Í¥¹•‘M¡½ÉÐÐÐÐÑQåÁ”°U¹Í¥¹•‘M¡½ÉÐÔÔÔÅQåÁ”°U¹Í¥¹•‘M¡½ÉÑQåÁ”°YM5M¡…‘½Ý5…À°Y•Ñ½ÈÈ°Y•Ñ½ÈÌ°Y•Ñ½ÈÐ°Y•Ñ½É-•å™É…µ•QÉ…¬°Y¥‘•½É…µ•Q•áÑÕÉ”°Y¥‘•½Q•áÑÕÉ”°]•‰0ÍI•¹‘•ÉQ…É•Ð°]•‰1ÉÉ…åI•¹‘•ÉQ…É•Ð°]•‰1½½É‘¥¹…Ñ•MåÍÑ•´°]•‰1Õ‰•I•¹‘•ÉQ…É•Ð°]•‰1I•¹‘•ÉQ…É•Ð°]•‰AU½½É‘¥¹…Ñ•MåÍÑ•´°]•‰aI½¹ÑÉ½±±•È°]¥É•™É…µ••½µ•ÑÉä°]É…ÁÉ½Õ¹‘¹‘¥¹œ°i•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ°i•É½…Ñ½È°i•É½M±½Á•¹‘¥¹œ°i•É½MÑ•¹¥±=À°…ÉÉ…å9••‘ÍU¥¹ÐÌÈ°±½¹•U¹¥™½ÉµÌ°É•…Ñ•…¹Ù…Í±•µ•¹Ð°É•…Ñ•±•µ•¹Ñ9L°•Ñ	åÑ•1•¹Ñ °•ÑU¹±¥ÑU¹¥™½Éµ½±½ÉMÁ…”°µ•É•U¹¥™½ÉµÌ°ÁÉ½‰•Íå¹Œ°Ý…É¹=¹”ôì(