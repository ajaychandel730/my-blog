import { Command, renderItems } from "novel/extensions";
import { suggestionItems } from "./suggestionsItems";

export const slashCommand = Command.configure({
  suggestion: {
    items: () => suggestionItems,
    render: renderItems,
  },
});
