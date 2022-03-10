export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  if(tooltips) {
    tooltips.forEach(tooltip => tooltip.addEventListener('mouseover', handleMouseOver));

    function handleMouseOver() {
      const tooltip = criarTooltipBox(this);

      onMouseMove.tooltip = tooltip;
      this.addEventListener('mousemove', onMouseMove);

      onMouseOut.tooltip = tooltip;
      this.addEventListener('mouseout', onMouseOut);
    }

    function criarTooltipBox(element) {
      const toolTipBox = document.createElement('div');
      const texto = element.getAttribute('aria-label');
      toolTipBox.innerText = texto;
      toolTipBox.classList.add('tooltip');
      document.body.appendChild(toolTipBox);
      return toolTipBox;
    }

    const onMouseOut = {
      handleEvent(event) {
        this.tooltip.remove();
        event.currentTarget.removeEventListener('mouseout', onMouseOut);
        event.currentTarget.removeEventListener('mousemove', onMouseMove);
      }
    }

    const onMouseMove = {
      handleEvent(event) {
        this.tooltip.style.top = event.pageY + 20 + 'px';
        this.tooltip.style.left = event.pageX + 20 + 'px';
      }
    }
  }
}