<template>
  <div>
    <command-button
      :command="openInsertMusicControl"
      :tooltip="t('editor.extensions.Music.tooltip')"
      icon="music"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { MessageBox } from 'element-ui';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class InsertMusicCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  openInsertMusicControl ():void{
    MessageBox.prompt('', this.t('editor.extensions.Music.control.title'), {
      confirmButtonText: this.t('editor.extensions.Music.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Music.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Music.control.placeholder'),
      roundButton: true,
      // @ts-ignore
    }).then(({ value: href }) => {
      console.log(this.editorContext.commands);
      this.editorContext.commands.music({ src: href });
    }).catch(() => {

    });
  }
}
</script>
