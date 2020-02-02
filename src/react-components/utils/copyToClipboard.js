
export default function CopyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return window.clipboardData.setData('Text', text)
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    const ta = document.createElement('textarea')
    ta.textContent = text
    ta.style.position = 'fixed'
    document.body.appendChild(ta)
    ta.select()
    try {
      return document.execCommand('copy')
    } catch (ex) {
      return false
    } finally {
      document.body.removeChild(ta)
    }
  }
}
