$ORIGIN velo.inc.
$TTL 3600

; ---------------------------------------------------------------------------
; If your public IP changes, update every 84.1.20.159 below AND bump the
; serial, then: docker compose restart dns
; (You must also update the glue records at your registrar — those are slow.)
; ---------------------------------------------------------------------------

@   IN  SOA ns1.velo.inc. hostmaster.velo.inc. (
        2026052901 ; serial — bump on every edit (format YYYYMMDDnn)
        7200       ; refresh
        3600       ; retry
        1209600    ; expire
        3600 )     ; minimum TTL

; Nameservers — this single box answers as both (not true redundancy)
@       IN  NS  ns1.velo.inc.
@       IN  NS  ns2.velo.inc.

; Glue: the nameserver hostnames must resolve to your public IP
ns1     IN  A   84.1.20.159
ns2     IN  A   84.1.20.159

; The site
@       IN  A   84.1.20.159
www     IN  A   84.1.20.159

; Authorize Let's Encrypt to issue certificates for this domain
@       IN  CAA 0 issue "letsencrypt.org"
