import { HorizontalRule as TiptapHorizontalRule } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import { t } from '@/i18n/index';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class HorizontalRule extends TiptapHorizontalRule implements MenuBtnView {
  menuBtnView ({ commands }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.horizontal_rule,
        icon: 'minus',
        tooltip: t('editor.extensions.HorizontalRule.tooltip'),
      },
    };
  }
}
