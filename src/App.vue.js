/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */

import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
;
({} as __VLS_IntrinsicElements).nav;({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).ul;({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;({} as __VLS_IntrinsicElements).li;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["nav"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).nav;
const __VLS_2 = __VLS_1({ ...{ }, class: ("bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{ }, class: ("container flex flex-wrap items-center justify-between mx-auto my-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_10 = __VLS_9({ ...{ }, href: ("index.html"), class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).img;
const __VLS_14 = __VLS_13({ ...{ }, src: ("img/logo.svg"), class: ("h-8 ml-3 sm:ml-0 sm:h-8"), alt: ("Flowbite Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
}
}
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_18 = __VLS_17({ ...{ }, class: ("md:order-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_22 = __VLS_21({ ...{ }, href: ("login.html"), class: ("px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
}
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_26 = __VLS_25({ ...{ }, href: ("register.html"), class: ("px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
}
}
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_30 = __VLS_29({ ...{ }, class: ("items-center justify-between hidden w-full md:flex md:w-auto md:order-1"), id: ("mobile-menu-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
{
const __VLS_32 = ({} as __VLS_IntrinsicElements)["ul"];
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, {});
({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).ul;
const __VLS_34 = __VLS_33({ ...{ }, class: ("flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, {});
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_38 = __VLS_37({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_42 = __VLS_41({ ...{ }, href: ("#"), class: ("block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white"), "aria-current": ("page"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
}
}
{
const __VLS_44 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, {});
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_46 = __VLS_45({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_50 = __VLS_49({ ...{ }, href: ("#"), class: ("block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
}
}
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, {});
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_54 = __VLS_53({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
{
const __VLS_56 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_58 = __VLS_57({ ...{ }, href: ("#"), class: ("block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
}
}
{
const __VLS_60 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, {});
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_62 = __VLS_61({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
{
const __VLS_64 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_66 = __VLS_65({ ...{ }, href: ("#"), class: ("block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});
export default {} as typeof __VLS_publicComponent;

