/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */
const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'WelcomeItem';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {}
 & { 'item'?: boolean }
 & { 'details'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
;
({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).i;({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).h3;({} as __VLS_IntrinsicElements).h3;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ }, class: ("item"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_6 = __VLS_5({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
let __VLS_8!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : typeof __VLS_resolvedLocalAndGlobalComponents['slot'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({...{ }, }));
const __VLS_10 = __VLS_9({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_11 = {
};
}
}
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{ }, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_18 = __VLS_17({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
{
let __VLS_20!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : typeof __VLS_resolvedLocalAndGlobalComponents['slot'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({...{ }, }));
const __VLS_22 = __VLS_21({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_23 = {
};
}
}
{
let __VLS_24!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : typeof __VLS_resolvedLocalAndGlobalComponents['slot'];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({...{ }, }));
const __VLS_26 = __VLS_25({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
var __VLS_27 = {
};
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["item"];
__VLS_styleScopedClasses["details"];
}
var __VLS_slots!:{
icon?(_: typeof __VLS_11): any,
heading?(_: typeof __VLS_23): any,
default?(_: typeof __VLS_27): any,
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});
export default {} as __VLS_WithTemplateSlots<typeof __VLS_publicComponent, ReturnType<typeof __VLS_template>>;

type __VLS_WithTemplateSlots<T, S> = T & { new(): {
$slots: S;
} };
