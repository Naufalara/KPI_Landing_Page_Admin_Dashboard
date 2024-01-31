import attributes from "./attributes.json";
import { StoryWrapper } from "../StoryWrapper/StoryWrapper";
import { FooterLinks } from "./FooterLinks";

export default { title: "FooterLinks" };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={FooterLinks} />;
}
