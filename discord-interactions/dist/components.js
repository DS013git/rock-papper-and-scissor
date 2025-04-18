"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyleTypes = exports.ChannelTypes = exports.ButtonStyleTypes = exports.MessageComponentTypes = void 0;
/**
 * The type of component
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
var MessageComponentTypes;
(function (MessageComponentTypes) {
    MessageComponentTypes[MessageComponentTypes["ACTION_ROW"] = 1] = "ACTION_ROW";
    MessageComponentTypes[MessageComponentTypes["BUTTON"] = 2] = "BUTTON";
    MessageComponentTypes[MessageComponentTypes["STRING_SELECT"] = 3] = "STRING_SELECT";
    MessageComponentTypes[MessageComponentTypes["INPUT_TEXT"] = 4] = "INPUT_TEXT";
    MessageComponentTypes[MessageComponentTypes["USER_SELECT"] = 5] = "USER_SELECT";
    MessageComponentTypes[MessageComponentTypes["ROLE_SELECT"] = 6] = "ROLE_SELECT";
    MessageComponentTypes[MessageComponentTypes["MENTIONABLE_SELECT"] = 7] = "MENTIONABLE_SELECT";
    MessageComponentTypes[MessageComponentTypes["CHANNEL_SELECT"] = 8] = "CHANNEL_SELECT";
})(MessageComponentTypes || (exports.MessageComponentTypes = MessageComponentTypes = {}));
var ButtonStyleTypes;
(function (ButtonStyleTypes) {
    ButtonStyleTypes[ButtonStyleTypes["PRIMARY"] = 1] = "PRIMARY";
    ButtonStyleTypes[ButtonStyleTypes["SECONDARY"] = 2] = "SECONDARY";
    ButtonStyleTypes[ButtonStyleTypes["SUCCESS"] = 3] = "SUCCESS";
    ButtonStyleTypes[ButtonStyleTypes["DANGER"] = 4] = "DANGER";
    ButtonStyleTypes[ButtonStyleTypes["LINK"] = 5] = "LINK";
    ButtonStyleTypes[ButtonStyleTypes["PREMIUM"] = 6] = "PREMIUM";
})(ButtonStyleTypes || (exports.ButtonStyleTypes = ButtonStyleTypes = {}));
var ChannelTypes;
(function (ChannelTypes) {
    ChannelTypes[ChannelTypes["DM"] = 1] = "DM";
    ChannelTypes[ChannelTypes["GROUP_DM"] = 3] = "GROUP_DM";
    ChannelTypes[ChannelTypes["GUILD_TEXT"] = 0] = "GUILD_TEXT";
    ChannelTypes[ChannelTypes["GUILD_VOICE"] = 2] = "GUILD_VOICE";
    ChannelTypes[ChannelTypes["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
    ChannelTypes[ChannelTypes["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
    ChannelTypes[ChannelTypes["GUILD_STORE"] = 6] = "GUILD_STORE";
})(ChannelTypes || (exports.ChannelTypes = ChannelTypes = {}));
var TextStyleTypes;
(function (TextStyleTypes) {
    TextStyleTypes[TextStyleTypes["SHORT"] = 1] = "SHORT";
    TextStyleTypes[TextStyleTypes["PARAGRAPH"] = 2] = "PARAGRAPH";
})(TextStyleTypes || (exports.TextStyleTypes = TextStyleTypes = {}));
//# sourceMappingURL=components.js.map