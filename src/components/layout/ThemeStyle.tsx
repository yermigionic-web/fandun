import { buildThemeCss } from "@/lib/theme";

export function ThemeStyle() {
  return <style dangerouslySetInnerHTML={{ __html: buildThemeCss() }} />;
}
