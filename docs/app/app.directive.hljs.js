import hljs from 'hljs';

export default angular.module('rondaDocs.directives.hljs', [])
  .directive('highlight', ($compile, $timeout) => {
    'ngInject';

    return {
      restrict: 'EA',
      scope: '=',
      link: function(scope, element, attrs) {
          scope.bindToController = true;
          $timeout(() => {
          const language = attrs.highlight || attrs.language;
          const trimEmptyLines = attrs.trimEmptyLines;
          let code;

          element.addClass('hljs');

          code = element.text();

          if (!code) {
            return;
          }

          if (trimEmptyLines) {
            code = code.replace(/^\s*\n/gm, '\n');
          }

          const highlight = hljs.highlight(language, code);
          const html = highlight.value;
          element.html(`<pre><code class="${language}" data-lang="${language}">${html}</code></pre>`);
          $compile(element.contents())(scope);
        });
      }
    };
  })
  .name;
