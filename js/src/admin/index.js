import app from 'flarum/app';

app.initializers.add('serakoi/flarumdiscordtheme', () => {
  app.extensionData.for('serakoi-flarumdiscordtheme').registerSetting({
    setting: 'serakoi-flarumdiscordtheme.coordinates',
    name: 'Mynamesettings',
    type: 'text',
    label: app.translator.trans('serakoi-flarumdiscordtheme.admin.settings.authorBadge.label'),
    help: app.translator.trans('serakoi-flarumdiscordtheme.admin.settings.authorBadge.help'),
  });
});
