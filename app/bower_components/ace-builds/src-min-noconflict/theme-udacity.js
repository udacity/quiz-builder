ace.define("ace/theme/udacity",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-udacity";
exports.cssText = ".ace-udacity .ace_gutter {\
background: #1D1F21;\
color: #7D97AD\
}\
.ace-udacity .ace_print-margin {\
width: 1px;\
background: #6B849D\
}\
.ace-udacity {\
background-color: #2E3D49;\
color: #FFFFFF\
}\
.ace-udacity .ace_cursor {\
color: #F8F8F0\
}\
.ace-udacity .ace_marker-layer .ace_selection {\
background: #6B695B\
}\
.ace-udacity.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-udacity .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-udacity .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #6B695B\
}\
.ace-udacity .ace_marker-layer .ace_active-line {\
background: #1D1F21\
}\
.ace-udacity .ace_gutter-active-line {\
background-color: #6B695B\
}\
.ace-udacity .ace_marker-layer .ace_selected-word {\
border: 1px solid #6B695B\
}\
.ace-udacity .ace_invisible {\
color: #52524d\
}\
.ace-udacity .ace_entity.ace_name.ace_tag,\
.ace-udacity .ace_keyword,\
.ace-udacity .ace_meta.ace_tag,\
.ace-udacity .ace_storage {\
color: #1FBA58\
}\
.ace-udacity .ace_punctuation,\
.ace-udacity .ace_punctuation.ace_tag {\
color: #6B849D\
}\
.ace-udacity .ace_constant.ace_character,\
.ace-udacity .ace_constant.ace_language,\
.ace-udacity .ace_constant.ace_numeric,\
.ace-udacity .ace_constant.ace_other {\
color: #F4442F\
}\
.ace-udacity .ace_invalid {\
color: #15A3DD;\
background-color: #1AC3AC\
}\
.ace-udacity .ace_invalid.ace_deprecated {\
color: #15A3DD;\
background-color: #F4442F\
}\
.ace-udacity .ace_support.ace_constant,\
.ace-udacity .ace_support.ace_function {\
color: #F4442F\
}\
.ace-udacity .ace_fold {\
background-color: #1FBA58;\
border-color: #F8F8F2\
}\
.ace-udacity .ace_storage.ace_type,\
.ace-udacity .ace_support.ace_class,\
.ace-udacity .ace_support.ace_type {\
font-style: italic;\
color: #1AC3AC\
}\
.ace-udacity .ace_entity.ace_name.ace_function,\
.ace-udacity .ace_entity.ace_other,\
.ace-udacity .ace_entity.ace_other.ace_attribute-name,\
.ace-udacity .ace_variable {\
color: #15A3DD\
}\
.ace-udacity .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD9F0E\
}\
.ace-udacity .ace_string {\
color: #FD9F0E\
}\
.ace-udacity .ace_comment {\
color: #6B849D\
}\
.ace-udacity .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});